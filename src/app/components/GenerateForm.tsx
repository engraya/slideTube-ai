'use client'

import 'react-toastify/dist/ReactToastify.css'

import { Loader2, VideoIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'

import MaxWidthWrapper from '@/components/common/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'

import { CreatePowerpoint } from '../../../actions/generatePowerPoint'
import ErrorContainer from './ErrorContainer'
export default function GenerateForm() {
  const { toast } = useToast()
  const router = useRouter()
  const [url, setUrl] = useState<string | null>('')
  const [isValid, setIsValid] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [createError, setCreateError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  // @ts-ignore
  // const onSuccessPresentationCreation = () => toast("Congratulations! Presentation created successfully....!!!");

  const validateYouTubeUrl = (url: string) => {
    const pattern =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    return pattern.test(url)
  }

  const getVideoId = (url: string) => {
    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    )
    return match ? match[1] : null
  }

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value.trim()

    if (!newUrl) {
      setError(null)
      setIsValid(false)
      return
    }

    setUrl(newUrl)

    const videoId = getVideoId(newUrl)
    if (validateYouTubeUrl(newUrl) && videoId) {
      setError(null)
      setIsValid(true)
    } else {
      setError('Invalid YouTube URL')
      setIsValid(false)
    }
  }

  const handleGenerate = async () => {
    if (!url) {
      setError('Please enter a valid YouTube URL')
      return
    }

    if (!isValid) {
      setError('Invalid YouTube URL')
      return
    }

    setError(null)

    const videoId = getVideoId(url || '')
    if (!videoId) {
      setError('Invalid YouTube URL')
      return
    }

    setIsLoading(true)

    try {
      const result = await CreatePowerpoint(videoId)
      if (!result.success) {
        toast({
          title: 'Something went wrong',
          description: 'Please try again later',
          variant: 'destructive',
        })
      } else {
        toast({
          title: 'Presentation created successfully....',
          description: 'Pls check your file system and Dashaord',
          variant: 'default',
        })
      }
      // console.log("Result", result);
      // onSuccessPresentationCreation();
      router.push(`/success`)
      setError(null)
    } catch (error) {
      setIsLoading(false)
      setError('Please try again later to create a presentation')
      setCreateError('Consider refreshing your browser to try again.!')
      console.error(error)
      toast({
        title: 'Something went wrong',
        description: 'Please try again later',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="min-h-screen py-12">
      <MaxWidthWrapper>
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 bg-gradient-to-br from-gray-700 via-gray-200 to-gray-600 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent drop-shadow-sm">
            Create Beautiful Presentations{' '}
            <span className="mt-2 block text-lg font-normal text-gray-500">
              Transform any YouTube video into a professional PowerPoint
            </span>
          </h1>
          <Card className="border-0 bg-white/80 p-8 shadow-xl backdrop-blur-sm">
            {isValid ? (
              <div className="mb-8 aspect-video overflow-hidden rounded-xl shadow-lg">
                <iframe
                  className="size-full"
                  src={`https://www.youtube.com/embed/${getVideoId(url || '')}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video player"
                />
              </div>
            ) : (
              <div className="mb-8 flex aspect-video flex-col items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 text-slate-500 shadow-inner">
                <VideoIcon className="mb-4 size-16 text-slate-500" />
                <p>Enter a YouTube URL to get started.</p>
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="url"
                placeholder="paste YouTube URL here"
                value={url || ''}
                onChange={handleUrlChange}
                className="h-12 flex-1 rounded-xl border-slate-200 px-4 focus:border-violet-500 focus:ring-violet-500"
                disabled={isLoading}
                aria-label="YouTube URL"
              />
              <Button
                disabled={!isValid || isLoading}
                className="h-12 px-6"
                onClick={handleGenerate}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 size-5 animate-spin" />
                    Creating a presentation
                  </>
                ) : (
                  'Create'
                )}
              </Button>
            </div>
            <p className="mt-4 text-center text-sm text-slate-500">
              Supported formats: YouTube video URLs (e.g,
              https://youtube.com/watch?v=...)
            </p>
            {error && createError && (
              <>
                <ErrorContainer error={error} />
                <p className="mx-auto flex items-center justify-center italic text-red-800 dark:text-red-400">
                  {createError}
                </p>
              </>
            )}
          </Card>
        </div>
      </MaxWidthWrapper>
      <ToastContainer />
    </div>
  )
}
