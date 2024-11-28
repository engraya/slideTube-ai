"use server";



import { db } from "../db";
import { currentUser } from '@clerk/nextjs/server'
import axios from "axios";
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
  
    // if (!user || !user.id) {
    //   return {
    //     success: false,
    //   };
    // }
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
 

    const textDescription = await CreateTitleAndDescription(fullText);

    console.log("Text Description", textDescription);

    const [titleAndDescription, slideObjects] = await Promise.all([
      CreateTitleAndDescription(fullText),
      ConvertToObjects(fullText),
    ]);

    console.log("Title and Description", titleAndDescription);
    console.log("slideObjects", slideObjects)
 


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
    console.log("Response from Api",response);
    console.log("Response from Api",response.response?.text());
    console.log("Candidates",response.response.candidates[0].content.parts);

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
    console.log("Object Completion",completion);


    const result = completion.choices[0].message.parsed;

    if (!result) {
      throw new Error("Failed to convert to objects");
    }

    return result.arrayOfObjects;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to convert to objects");
  }
}

