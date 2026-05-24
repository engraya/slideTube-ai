import axios from 'axios'

import { VideoError } from '@/lib/errors'
import { getSubtitleText, getVideoMetadata } from '../video.service'

jest.mock('axios')
const mockAxios = axios as jest.Mocked<typeof axios>

describe('getVideoMetadata', () => {
  beforeEach(() => jest.clearAllMocks())

  it('returns metadata for a valid short video', async () => {
    mockAxios.request = jest.fn().mockResolvedValueOnce({
      data: {
        lengthSeconds: '300',
        title: 'Test Video',
        subtitles: {
          subtitles: [{ languageCode: 'en', url: 'https://example.com/subs.xml' }],
        },
      },
    })

    const result = await getVideoMetadata('dQw4w9WgXcQ')

    expect(result.videoName).toBe('Test Video')
    expect(result.subtitleUrl).toBe('https://example.com/subs.xml')
    expect(result.length).toBe(300)
  })

  it('throws VideoError when video exceeds 15 minutes', async () => {
    mockAxios.request = jest.fn().mockResolvedValueOnce({
      data: {
        lengthSeconds: '1200',
        title: 'Long Video',
        subtitles: { subtitles: [{ languageCode: 'en', url: 'https://example.com/subs.xml' }] },
      },
    })

    await expect(getVideoMetadata('dQw4w9WgXcQ')).rejects.toThrow(VideoError)
  })

  it('throws VideoError when no English subtitles are available', async () => {
    mockAxios.request = jest.fn().mockResolvedValueOnce({
      data: {
        lengthSeconds: '300',
        title: 'French Video',
        subtitles: { subtitles: [{ languageCode: 'fr', url: 'https://example.com/subs.xml' }] },
      },
    })

    await expect(getVideoMetadata('dQw4w9WgXcQ')).rejects.toThrow(VideoError)
  })

  it('throws VideoError when the API call fails', async () => {
    mockAxios.request = jest.fn().mockRejectedValueOnce(new Error('Network error'))

    await expect(getVideoMetadata('dQw4w9WgXcQ')).rejects.toThrow(VideoError)
  })
})

describe('getSubtitleText', () => {
  beforeEach(() => jest.clearAllMocks())

  it('throws VideoError when response data is not a string', async () => {
    mockAxios.get = jest.fn().mockResolvedValueOnce({ data: { xml: 'object' } })

    await expect(getSubtitleText('https://example.com/subs.xml')).rejects.toThrow(VideoError)
  })

  it('throws VideoError when the network request fails', async () => {
    mockAxios.get = jest.fn().mockRejectedValueOnce(new Error('Network error'))

    await expect(getSubtitleText('https://example.com/subs.xml')).rejects.toThrow(VideoError)
  })
})
