import { GoogleGenerativeAI } from '@google/generative-ai'

import { AIError } from '@/lib/errors'
import {
  PresentationSchema,
  TitleDescriptionSchema,
  type Slide,
  type TitleDescription,
} from '@/lib/schemas'

const AI_TIMEOUT_MS = 30000
const DEFAULT_SLIDE_COUNT = 10

function sanitizeTranscript(text: string): string {
  return text
    .replace(/```/g, '')
    .replace(/\[INST\]|\[\/INST\]/gi, '')
    .slice(0, 12000)
    .trim()
}

function extractJSON(raw: string): unknown {
  const fenceMatch = raw.match(/```(?:json|javascript)?\s*([\s\S]*?)\s*```/i)
  if (fenceMatch) return JSON.parse(fenceMatch[1].trim())

  const trimmed = raw.trim()
  if (trimmed.startsWith('{') || trimmed.startsWith('[')) return JSON.parse(trimmed)

  throw new AIError('Could not extract JSON from AI response.')
}

function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(
      () => reject(new AIError(`${label} timed out. Please try again.`)),
      ms,
    ),
  )
  return Promise.race([promise, timeout])
}

function getModel() {
  const key = process.env.GEMINI_API_KEY
  if (!key) throw new AIError('AI service is not configured.')
  const genAI = new GoogleGenerativeAI(key)
  return genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
}

export async function generateTitleAndDescription(
  transcript: string,
): Promise<TitleDescription> {
  const safe = sanitizeTranscript(transcript)
  const prompt = `Generate a title and description for a PowerPoint presentation based on the following transcript.
Return ONLY a JSON object with this exact structure (no markdown, no extra text):
{"title": "...", "description": "..."}

Requirements:
- title: concise, fewer than 10 words, focus on the core topic
- description: 2-3 sentences summarizing the key content
- Output in English only

Transcript: ${safe}`

  const model = getModel()
  const response = await withTimeout(
    model.generateContent(prompt),
    AI_TIMEOUT_MS,
    'Title generation',
  )
  const raw = response.response.text()

  let parsed: unknown
  try {
    parsed = extractJSON(raw)
  } catch {
    throw new AIError('Failed to generate presentation title. Please try again.')
  }

  const result = TitleDescriptionSchema.safeParse(parsed)
  if (!result.success) {
    throw new AIError('AI returned an invalid title format. Please try again.')
  }

  return result.data
}

export async function generateSlides(
  transcript: string,
  slideCount = DEFAULT_SLIDE_COUNT,
): Promise<Slide[]> {
  const safe = sanitizeTranscript(transcript)
  const prompt = `Convert this transcript into exactly ${slideCount} presentation slides.
Return ONLY a JSON array with this exact structure (no markdown, no extra text):
[{"title": "...", "content": ["bullet 1", "bullet 2", "bullet 3"]}, ...]

Requirements:
- Exactly ${slideCount} slide objects in the array
- Each slide title: concise, 5-80 characters
- Each content array: 3-4 bullet strings, each 50-170 characters
- Bullets should be informative, not filler
- Output in English only

Transcript: ${safe}`

  const model = getModel()
  const response = await withTimeout(
    model.generateContent(prompt),
    AI_TIMEOUT_MS,
    'Slide generation',
  )
  const raw = response.response.text()

  let parsed: unknown
  try {
    parsed = extractJSON(raw)
  } catch {
    throw new AIError('Failed to generate slide content. Please try again.')
  }

  const result = PresentationSchema.safeParse(parsed)
  if (!result.success) {
    throw new AIError(
      'AI returned malformed slide data. Please try again.',
    )
  }

  return result.data
}
