'use client'

import { useCallback, useReducer } from 'react'

import { CreatePowerpoint } from '../../actions/generatePowerPoint'

type State = {
  url: string
  videoId: string | null
  isValid: boolean
  status: 'idle' | 'loading' | 'success' | 'error'
  error: string | null
  downloadUrl: string | null
  title: string | null
}

type Action =
  | { type: 'SET_URL'; url: string; videoId: string | null; isValid: boolean }
  | { type: 'SUBMIT' }
  | { type: 'SUCCESS'; downloadUrl: string; title: string }
  | { type: 'ERROR'; error: string }
  | { type: 'RESET' }

const initialState: State = {
  url: '',
  videoId: null,
  isValid: false,
  status: 'idle',
  error: null,
  downloadUrl: null,
  title: null,
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_URL':
      return {
        ...state,
        url: action.url,
        videoId: action.videoId,
        isValid: action.isValid,
        error: null,
      }
    case 'SUBMIT':
      return { ...state, status: 'loading', error: null }
    case 'SUCCESS':
      return {
        ...state,
        status: 'success',
        downloadUrl: action.downloadUrl,
        title: action.title,
      }
    case 'ERROR':
      return { ...state, status: 'error', error: action.error }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

const VIDEO_ID_RE = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
const YOUTUBE_URL_RE =
  /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/

export function useGenerate() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleUrlChange = useCallback((raw: string) => {
    const url = raw.trim()
    if (!url) {
      dispatch({ type: 'SET_URL', url: '', videoId: null, isValid: false })
      return
    }
    const videoId = url.match(VIDEO_ID_RE)?.[1] ?? null
    const isValid = YOUTUBE_URL_RE.test(url) && videoId !== null
    dispatch({ type: 'SET_URL', url, videoId, isValid })
  }, [])

  const handleGenerate = useCallback(async () => {
    if (!state.isValid || !state.videoId) return
    dispatch({ type: 'SUBMIT' })
    try {
      const result = await CreatePowerpoint(state.videoId)
      if (!result.success) {
        dispatch({
          type: 'ERROR',
          error: result.error ?? 'Failed to create presentation.',
        })
      } else {
        dispatch({
          type: 'SUCCESS',
          downloadUrl: result.downloadUrl!,
          title: result.title ?? 'Your Presentation',
        })
      }
    } catch {
      dispatch({
        type: 'ERROR',
        error: 'An unexpected error occurred. Please try again.',
      })
    }
  }, [state.isValid, state.videoId])

  const handleReset = useCallback(() => dispatch({ type: 'RESET' }), [])

  return { state, handleUrlChange, handleGenerate, handleReset }
}
