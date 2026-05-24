import axios from 'axios'
import { DOMParser } from 'xmldom'

import { VideoError } from '@/lib/errors'

const MAX_VIDEO_SECONDS = 900

export async function getVideoMetadata(videoId: string) {
  const options = {
    method: 'GET',
    url: 'https://yt-api.p.rapidapi.com/video/info',
    params: { id: videoId },
    headers: {
      'x-rapidapi-key': process.env.RAPID_API_KEY,
      'x-rapidapi-host': 'yt-api.p.rapidapi.com',
    },
    timeout: 10000,
  } as const

  let response
  try {
    response = await axios.request(options)
  } catch {
    throw new VideoError(
      'Failed to fetch video information. Please check the URL and try again.',
    )
  }

  const length = Number(response?.data?.lengthSeconds ?? 0)
  const videoName = (response?.data?.title as string | undefined) || 'Untitled Video'

  if (length > MAX_VIDEO_SECONDS) {
    throw new VideoError(
      `Video must be under 15 minutes. This video is ${Math.round(length / 60)} minutes long.`,
    )
  }

  const subtitleUrl = (
    response.data?.subtitles?.subtitles?.find(
      (s: { languageCode: string }) => s.languageCode === 'en',
    ) as { url?: string } | undefined
  )?.url

  if (!subtitleUrl) {
    throw new VideoError(
      'No English subtitles found. Please try a video with English captions enabled.',
    )
  }

  return { length, videoName, subtitleUrl }
}

export async function getSubtitleText(url: string): Promise<string> {
  let response
  try {
    response = await axios.get(url, { timeout: 15000 })
  } catch {
    throw new VideoError('Failed to fetch video subtitles.')
  }

  if (typeof response.data !== 'string') {
    throw new VideoError('Received an invalid subtitle format.')
  }

  const parser = new DOMParser()
  let doc: ReturnType<DOMParser['parseFromString']>
  try {
    doc = parser.parseFromString(response.data, 'application/xml')
  } catch {
    throw new VideoError('Failed to parse subtitle content.')
  }

  const textElements = doc.getElementsByTagName('text')
  const fullText = Array.from(textElements)
    .map((el) => el.textContent || '')
    .join(' ')
    .trim()

  if (!fullText) {
    throw new VideoError('No subtitle text found in this video.')
  }

  return fullText
}
