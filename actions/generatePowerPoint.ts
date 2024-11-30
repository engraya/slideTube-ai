'use server'

import { currentUser } from '@clerk/nextjs/server'
import axios from 'axios'
import fs from 'fs'
import os from 'os'
import path from 'path'
import pptxgen from 'pptxgenjs'
import { UTApi } from 'uploadthing/server'
import type { UploadFileResult } from 'uploadthing/types'
import { DOMParser } from 'xmldom'
import { z } from 'zod'

const { GoogleGenerativeAI } = require('@google/generative-ai')

const DEFAULT_SLIDE_COUNT = 10

const utapi = new UTApi({
  token: process.env.UPLOADTHING_TOKEN!,
})

type SlideContent = {
  title: string
  content: string[]
}

type VideoMetaData = {
  length: number | null
  subtitlesURL: string | null
  videoName: string
}

type SubtitleItem = {
  text: string
}

const TitleAndDescriptionSchema = z.object({
  title: z.string(),
  description: z.string(),
})

// const arrayOfObjectsSchema = z.object({
//   arrayOfObjects: z.array(
//     z.object({
//       title: z.string(),
//       content: z.array(z.string()),
//     })
//   ),
// });

type TitleDescription = z.infer<typeof TitleAndDescriptionSchema>

export async function CreatePowerpoint(videoId: string) {
  try {
    const user = await currentUser();

    if (!user || !user?.id) {
      return { success: false };
    }

    const { length, subtitlesURL, videoName } = await GetVideoLengthAndSubtitles(videoId);

    if (length && length > 900) {
      throw new Error('Video needs to be less than 10 minutes');
    }

    if (!subtitlesURL) {
      throw new Error('No subtitles found');
    }

    const parsedSubtitles = await parseXMLContent(subtitlesURL);
    if (!parsedSubtitles) {
      throw new Error('Failed to parse subtitles');
    }

    const fullText = parsedSubtitles.map((item) => item.text).join(' ');
    console.log('Full Video Text', fullText);

    const [titleAndDescription, slideObjects] = await Promise.all([
      CreateTitleAndDescription(fullText),
      ConvertToObjects(fullText),
    ]);

    if (!slideObjects) {
      throw new Error('Failed to convert to objects');
    }

    const { fileBuffer, fileName } = await CreatePowerpointFromArrayOfObjects(
      titleAndDescription,
      slideObjects,
      videoName,
      user?.id
    );
    // @ts-ignore
    const uploadResult = await UploadPowerpointToUploadThing(fileBuffer, fileName);
    console.log('Upload Result:', uploadResult);

    if (!uploadResult[0].data?.url) {
      throw new Error('Upload failed - No URL returned');
    }

    return {
      success: true,
      downloadUrl: uploadResult[0].data.url, // Return the download URL
    };
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create PowerPoint');
  }
}


export async function GetVideoLengthAndSubtitles(
  videoId: string,
): Promise<VideoMetaData> {
  try {
    const options = {
      method: 'GET',
      url: 'https://yt-api.p.rapidapi.com/video/info',
      params: {
        id: videoId,
      },
      headers: {
        'x-rapidapi-key': process.env.RAPID_API_KEY,
        'x-rapidapi-host': 'yt-api.p.rapidapi.com',
      },
    } as const

    const response = await axios.request(options)
    // console.log(response?.data)
    return {
      length: response?.data?.lengthSeconds,
      videoName: response?.data?.title,
      subtitlesURL:
        response.data?.subtitles?.subtitles?.find(
          (subtitle: { languageCode: string }) =>
            subtitle?.languageCode === 'en',
        )?.url || null,
    }
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch video metadata')
  }
}

export async function parseXMLContent(
  url: string,
): Promise<SubtitleItem[] | null> {
  try {
    const response = await axios.get(url)
    const parser = new DOMParser()
    const doc = parser.parseFromString(response.data, 'application/xml')
    const textElements = doc.getElementsByTagName('text')

    return Array.from(textElements).map((element) => ({
      text: element.textContent || '',
    }))
  } catch (error) {
    console.error(error)
    throw new Error('Something went wrong')
  }
}

export async function CreateTitleAndDescription(
  transcript: string,
): Promise<TitleDescription> {
  const promptTemplate = `Generate a title and description for this PowerPoint presentation based on the following transcript.
    Requirements: 
    - Title should be fewer than 10 words 
    - Split all the transacript into descriptions, should be 4 lines each 
    - Focus on content rather than speaker
    - Split the title and description in an object
    - Make sure the output is in English 
    - Take the transcript and split it into an array of descriptions with 3 lines each giving me array fo descriptions
    
    Transcript: ${transcript}
    `

  try {
    // Initialize Gemini API client
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

    const response = await model.generateContent(promptTemplate)
    console.log('Response from Api', response.response?.text())

    const rawResponse = response.response?.text()

    // Use a regex to extract the JSON block between ```json and ```
    const match = rawResponse.match(/```json\s*([\s\S]*?)\s*```/)

    if (!match || match.length < 2) {
      throw new Error('Failed to extract JSON block from response')
    }

    const jsonString = match[1].trim() // Extract the JSON string
    const parsedObject = JSON.parse(jsonString) // Parse it into a JavaScript object

    // Use the parsed object
    const { title, description } = parsedObject
    console.log('Title:', title)
    console.log('Descriptions:', description)

    if (!response || !response.response) {
      throw new Error('Failed to generate title and description')
    }

    // Assuming the response contains a single choice with `text`
    const output = response.response.candidates[0].content.parts

    if (!output) {
      throw new Error('Invalid response format from Gemini API')
    }

    return output
  } catch (error) {
    console.error('Error while generating title and description:', error)
    throw new Error('Failed to generate title and description')
  }
}

export async function ConvertToObjects(
  text: string,
  slideCount = DEFAULT_SLIDE_COUNT,
): Promise<SlideContent[] | null> {
  const promptTemplate = `Condense and tidy up the following text to make it suitable for a PowerPoint presentation. Transform it 
        into an array of objects. I have provided the schema for the output. Make sure that the content array has between 3 and 4 items, 
        and each content string should be between 50 and 170 characters. You can add to the content based on the transcript. 
        The length of the array should be ${slideCount}.
        The text to process is as follows: ${text}
    `;

  try {
    // Initialize Gemini API client
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const completion = await model.generateContent(promptTemplate);

    const rawResult = completion.response.text();

    if (!rawResult) {
      throw new Error('No response received from the AI model.');
    }

    // Log raw response for debugging
    console.log('Raw AI Response:', rawResult);

    // Attempt to extract JSON block using a regex
    const match = rawResult.match(/```(?:json|javascript)\s*([\s\S]*?)\s*```/i);

    let jsonString;
    if (match && match.length >= 2) {
      jsonString = match[1].trim();
    } else if (
      rawResult.trim().startsWith('{') ||
      rawResult.trim().startsWith('[')
    ) {
      // Handle cases where JSON is directly provided without markers
      jsonString = rawResult.trim();
    } else {
      // Log the issue and throw an error
      console.error('Failed to extract JSON block. Raw response:', rawResult);
      throw new Error('Failed to extract JSON block from response');
    }

    console.log('Extracted JSON String:', jsonString);

    // Parse the JSON string
    let parsedObject: SlideContent[] | null = null;
    try {
      parsedObject = JSON.parse(jsonString);

      if (!Array.isArray(parsedObject)) {
        throw new Error('Parsed JSON is not an array of objects');
      }
    } catch (jsonError) {
      console.error('JSON parsing error:', jsonError);
      throw new Error('Failed to parse the JSON string into an object');
    }

    console.log('Parsed Object:', parsedObject);

    // Return the parsed object
    return parsedObject;
  } catch (error) {
    console.error('Error during AI processing or JSON conversion:', error);

    // Fallback: Return a default object if parsing fails
    const fallbackSlides: SlideContent[] = Array.from({ length: slideCount }, (_, index) => ({
      title: `Slide ${index + 1}`,
      content: [
        'This is a fallback slide content due to an error during processing.',
        'Please review the input or retry generating the presentation.',
      ],
    }));

    console.log('Returning fallback object:', fallbackSlides);

    return fallbackSlides; // Return the fallback object
  }
}


export async function CreatePowerpointFromArrayOfObjects(
  _titleAndDescription: TitleDescription,
  slides: SlideContent[],
  videoName: string,
  _userId: string
) {
  const pptx = new pptxgen();

  // Add slides
  const titleSlide = pptx.addSlide();
  titleSlide.background = { color: '#FFFFFF' };

  titleSlide.addText(`Presentation: ${videoName}`, {
    x: 0,
    y: '55%',
    w: '100%',
    h: 0.75,
    fontSize: 40,
    bold: true,
    color: '555555',
    align: 'center',
    fontFace: 'Helvetica',
  });

  slides.forEach(({ title, content }) => {
    const slide = pptx.addSlide();

    slide.addText(title, {
      x: 0.5,
      y: 0.5,
      w: 8.5,
      h: 1,
      fontSize: 32,
      bold: true,
      color: '003366',
      align: 'center',
      fontFace: 'Arial',
    });

    let bulletPoints: string[] = [];
    if (typeof content === 'string') {
         // @ts-ignore
      bulletPoints = content.split('. ').map((sentence : any) => sentence.trim());
    } else if (Array.isArray(content)) {
      bulletPoints = content.map((sentence) => sentence.trim());
    }

    bulletPoints.forEach((bullet, index) => {
      slide.addText(bullet, {
        x: 1,
        y: 1.8 + index * 0.5,
        w: 8,
        h: 0.5,
        fontSize: 15,
        color: '333333',
        align: 'left',
        fontFace: 'Arial',
        bullet: true,
      });
    });
  });

  try {
       // @ts-ignore
    const fileBuffer = await pptx.write('nodebuffer'); // Generate in-memory buffer
    const sanitizedVideoName = videoName.replace(/[^a-zA-Z0-9-_]/g, '_');
    const fileName = `Presentation-${sanitizedVideoName}.pptx`;

    return { fileBuffer, fileName };
  } catch (error) {
    console.error('Error generating PowerPoint:', error);
    throw new Error('Failed to create PowerPoint');
  }
}


export async function UploadPowerpointToUploadThing(
  fileBuffer: Buffer,
  fileName: string
): Promise<UploadFileResult[]> {
  try {
    const file = new File([fileBuffer], fileName, {
      type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    });

    const response = await utapi.uploadFiles([file]);

    if (!response?.[0].data?.url) {
      throw new Error('Upload failed - No URL returned');
    }

    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to upload PowerPoint to UploadThing');
  }
}

