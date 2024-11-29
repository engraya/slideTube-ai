"use server";



import { db } from "../db";
import { currentUser } from '@clerk/nextjs/server'
import axios from "axios";
import os from "os";
import { DOMParser } from "xmldom";
import { z } from "zod";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import pptxgen from "pptxgenjs";
import { randomUUID } from "crypto";
import path from "path";
import type { UploadFileResult } from "uploadthing/types";
import { UTApi } from "uploadthing/server";
import fs from "fs";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const DEFAULT_SLIDE_COUNT = 10;

const utapi = new UTApi({
  token: process.env.UPLOADTHING_TOKEN!,
});


type SlideContent = {
  title: string;
  content: string[];
};

type VideoMetaData = {
  length: number | null;
  subtitlesURL: string | null;
};

type SubtitleItem = {
  text: string;
};

const TitleAndDescriptionSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const arrayOfObjectsSchema = z.object({
  arrayOfObjects: z.array(
    z.object({
      title: z.string(),
      content: z.array(z.string()),
    })
  ),
});

type TitleDescription = z.infer<typeof TitleAndDescriptionSchema>;

export async function CreatePowerpoint(videoId: string) {
  try {
    
    const user = await currentUser();
  
    if (!user || !user.id) {
      return {
        success: false,
      };
    }
    // const dbUser = await db.user.findFirst({
    //   where: {
    //     id: user.id,
    //   },
    // });

    // if (!dbUser) {
    //   return {
    //     success: false,
    //   };
    // }

    const { length, subtitlesURL } = await GetVideoLengthAndSubtitles(videoId);
    console.log(length, subtitlesURL);

    if (length && length > 600) {
      throw new Error("Video needs to be less than 10 minutes");
    }

    if (!subtitlesURL) {
      throw new Error("No subtitles found");
    }

    const parsedSubtitles = await parseXMLContent(subtitlesURL);
    if (!parsedSubtitles) {
      throw new Error("Failed to parse subtitles");
    }

    const fullText = parsedSubtitles?.map((item) => item.text).join(" ");
    console.log("Full Video Text", fullText);


    const [titleAndDescription, slideObjects] = await Promise.all([
      CreateTitleAndDescription(fullText),
      ConvertToObjects(fullText),
    ]);

    // console.log("Title and Description", titleAndDescription);
    // console.log("slideObjects", slideObjects)

    
    if (!slideObjects) {
      throw new Error("Failed to convert to objects");
    }

    const { fileName, filePath } = await CreatePowerpointFromArrayOfObjects(
      titleAndDescription,
      slideObjects,
      user?.id
    );
 


    return {
      success: true,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create powerpoint");
  }
}

export async function GetVideoLengthAndSubtitles(
  videoId: string
): Promise<VideoMetaData> {
  try {
    const options = {
      method: "GET",
      url: "https://yt-api.p.rapidapi.com/video/info",
      params: {
        id: videoId,
      },
      headers: {
        "x-rapidapi-key": process.env.RAPID_API_KEY,
        "x-rapidapi-host": "yt-api.p.rapidapi.com",
      },
    } as const;

    const response = await axios.request(options);
    return {
      length: response.data.lengthSeconds,
      subtitlesURL:
        response.data.subtitles.subtitles.find(
          (subtitle: { languageCode: string }) => subtitle.languageCode === "en"
        )?.url || null,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch video metadata");
  }
}

export async function parseXMLContent(
  url: string
): Promise<SubtitleItem[] | null> {
  try {
    const response = await axios.get(url);
    const parser = new DOMParser();
    const doc = parser.parseFromString(response.data, "application/xml");
    const textElements = doc.getElementsByTagName("text");

    return Array.from(textElements).map((element) => ({
      text: element.textContent || "",
    }));
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
}




export async function CreateTitleAndDescription(
  transcript: string
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
    `;

  try {
    // Initialize Gemini API client
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const response = await model.generateContent(promptTemplate);
    console.log("Response from Api",response.response?.text());

    const rawResponse = response.response?.text();

        // Use a regex to extract the JSON block between ```json and ```
    const match = rawResponse.match(/```json\s*([\s\S]*?)\s*```/);

    if (!match || match.length < 2) {
      throw new Error("Failed to extract JSON block from response");
    }

    const jsonString = match[1].trim(); // Extract the JSON string
    const parsedObject = JSON.parse(jsonString); // Parse it into a JavaScript object

    console.log("Parsed Object:", parsedObject);

    // Use the parsed object
    const { title, description } = parsedObject;
    console.log("Title:", title);
    console.log("Descriptions:", description);



    if (!response || !response.response) {
      throw new Error("Failed to generate title and description");
    }

    // Assuming the response contains a single choice with `text`
    const output = response.response.candidates[0].content.parts;
 

    if (!output) {
      throw new Error("Invalid response format from Gemini API");
    }

    return output;
  } catch (error) {
    console.error("Error while generating title and description:", error);
    throw new Error("Failed to generate title and description");
  }
}


export async function ConvertToObjects(
  text: string,
  slideCount = DEFAULT_SLIDE_COUNT
): Promise<SlideContent[] | null> {
  const promptTemplate = `Condense and tidy up the following text to make it suitable for a Powerpoint presentation. Transform it 
        into an array of objects. I have provided the schema for the output. Make sure that the content array has between 3 and 4 items, 
        and each content string should be between 50 and 170 characters. You can add to the content based on the transcript.. 
        The length of the array should be ${slideCount}.
        The text to process is as follows: ${text}
    `;

  try {
    // Initialize Gemini API client
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const completion = await model.generateContent(promptTemplate);


    const rawResult = completion.response.text();
    console.log("Raw Result:", rawResult);
  
    if (!rawResult) {
      throw new Error("Failed to retrieve response");
    }
  
    // Attempt to extract JSON block using an updated regex for multiple marker types
    const match = rawResult.match(/```(?:json|javascript)\s*([\s\S]*?)\s*```/i);
  
    let jsonString;
    if (match && match.length >= 2) {
      jsonString = match[1].trim();
    } else if (rawResult.trim().startsWith("{") || rawResult.trim().startsWith("[")) {
      // If no markers, but valid JSON structure exists, use it directly
      jsonString = rawResult.trim();
    } else {
      console.error("Failed to extract JSON block. Raw response:", rawResult);
      throw new Error("Failed to extract JSON block from response");
    }
  
    console.log("Extracted JSON String:", jsonString);
  
    // Parse the JSON string into a JavaScript object
    const parsedObject = JSON.parse(jsonString);
  
    if (!Array.isArray(parsedObject)) {
      throw new Error("Invalid JSON format: Expected an array of objects");
    }
  
    console.log("Parsed Object:", parsedObject);
  
    return parsedObject; // Return the array of objects
  } catch (error) {
    console.error(error);
    throw new Error("Failed to convert to objects");
  }
}

export async function CreatePowerpointFromArrayOfObjects(
  titleAndDescription: TitleDescription,
  slides: SlideContent[],
  userId: string
) {
  const pptx = new pptxgen();

  const titleSlide = pptx.addSlide();
  titleSlide.background = { color: "#FFFFFF" };

  titleSlide.addText(titleAndDescription.title, {
    x: 0,
    y: "40%",
    w: "100%",
    h: 1,
    fontSize: 33,
    bold: true,
    color: "003366",
    align: "center",
    fontFace: "Helvetica",
  });

  titleSlide.addText(titleAndDescription.description, {
    x: 0,
    y: "58%",
    w: "100%",
    h: 0.75,
    fontSize: 18,
    color: "888888",
    align: "center",
    fontFace: "Helvetica",
  });

  slides?.forEach(({ title, content }: SlideContent) => {
    const slide = pptx.addSlide();
  
    // Add slide title
    slide.addText(title, {
      x: 0.5,
      y: 0.5,
      w: 8.5,
      h: 1,
      fontSize: 32,
      bold: true,
      color: "003366",
      align: "center",
      fontFace: "Arial",
    });
  
    let bulletPoints: string[] = [];
  
    // Handle content as either string or array
    if (typeof content === "string") {
      bulletPoints = content.split(". ").map((sentence) => sentence.trim());
    } else if (Array.isArray(content)) {
      bulletPoints = content.map((sentence) => sentence.trim());
    }
  
    // Log a warning if content is neither a string nor an array
    if (!bulletPoints.length) {
      console.warn(`Content for slide "${title}" is not a string or an array. Skipping.`);
      return;
    }
  
    // Add bullet points to the slide
    bulletPoints.forEach((bullet: string, index: number) => {
      slide.addText(bullet, {
        x: 1,
        y: 1.8 + index * 0.5, // Adjust vertical position per bullet
        w: 8,
        h: 0.5,
        fontSize: 15,
        color: "333333",
        align: "left",
        fontFace: "Arial",
        bullet: true,
      });
    });
  });
  
  
  

  try {
   // Resolve the user's downloads directory
   const downloadsDir = path.join(os.homedir(), "Downloads");

   // Ensure the directory exists
   if (!fs.existsSync(downloadsDir)) {
     fs.mkdirSync(downloadsDir, { recursive: true });
   }
 
   // Generate the file name and path
   const fileName = `presentation-${randomUUID()}-userId=${userId}.pptx`;
   const filePath = path.join(downloadsDir, fileName);
 
   // Write the PowerPoint file
   await pptx.writeFile({ fileName: filePath });
 
   return {
     fileName,
     filePath,
   };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create powerpoint");
  }
}
