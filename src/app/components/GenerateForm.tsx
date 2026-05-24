'use client'

import 'react-toastify/dist/ReactToastify.css'

import { Download, Loader2, RefreshCw, VideoIcon } from 'lucide-react'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

import MaxWidthWrapper from '@/components/common/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { useGenerate } from '@/hooks/use-generate'

import ErrorContainer from './ErrorContainer'

export default function GenerateForm() {
  const { toast } = useToast()
  const { state, handleUrlChange, handleGenerate, handleReset } = useGenerate()

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: 'Presentation created!',
        description: `"${state.title}" is ready. Visit your Dashboard to view all presentations.`,
      })
    }
    if (state.status === 'error') {
      toast({
        title: 'Something went wrong',
        description: state.error ?? 'Please try again.',
        variant: 'destructive',
      })
    }
  }, [state.status, state.error, state.title, toast])

  const isLoading = state.status === 'loading'

  return (
    <div className="min-h-screen py-12">
      <MaxWidthWrapper>
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 bg-gradient-to-br from-gray-700 via-gray-200 to-gray-600 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent drop-shadow-sm">
            Create Beautiful Presentations
            <span className="mt-2 block text-lg font-normal text-gray-500">
              Transform any YouTube video into a professional PowerPoint
            </span>
          </h1>

          {/* Screen-reader live region for async status announcements */}
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            {isLoading && 'Generating your presentation, please wait...'}
            {state.status === 'success' &&
              `Presentation "${state.title}" is ready for download.`}
            {state.status === 'error' && state.error}
          </div>

          <Card className="border-0 bg-white/80 p-8 shadow-xl backdrop-blur-sm">
            {state.isValid && state.videoId ? (
              <div className="mb-8 aspect-video overflow-hidden rounded-xl shadow-lg">
                <iframe
                  className="size-full"
                  src={`https://www.youtube.com/embed/${state.videoId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video preview"
                />
              </div>
            ) : (
              <div className="mb-8 flex aspect-video flex-col items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 text-slate-500 shadow-inner">
                <VideoIcon
                  className="mb-4 size-16 text-slate-400"
                  aria-hidden="true"
                />
                <p className="text-sm">Enter a YouTube URL to preview</p>
              </div>
            )}

            {state.status === 'success' && state.downloadUrl ? (
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={state.downloadUrl}
                  download
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-6 text-white shadow-md transition-colors hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  <Download className="size-4" aria-hidden="true" />
                  Download Presentation
                </a>
                <Button variant="outline" className="h-12 gap-2" onClick={handleReset}>
                  <RefreshCw className="size-4" aria-hidden="true" />
                  Create Another
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="youtube-url" className="sr-only">
                  YouTube URL
                </label>
                <Input
                  id="youtube-url"
                  type="url"
                  placeholder="Paste YouTube URL (e.g. https://youtube.com/watch?v=...)"
                  value={state.url}
                  onChange={(e) => handleUrlChange(e.target.value)}
                  className="h-12 flex-1 rounded-xl border-slate-200 px-4 focus:border-violet-500 focus:ring-violet-500"
                  disabled={isLoading}
                  aria-invalid={state.status === 'error'}
                  aria-describedby={state.error ? 'generate-error' : undefined}
                />
                <Button
                  disabled={!state.isValid || isLoading}
                  className="h-12 px-6"
                  onClick={handleGenerate}
                  aria-busy={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2
                        className="mr-2 size-5 animate-spin"
                        aria-hidden="true"
                      />
                      Generating...
                    </>
                  ) : (
                    'Create'
                  )}
                </Button>
              </div>
            )}

            <p className="mt-4 text-center text-sm text-slate-500">
              Supports YouTube videos up to 15 minutes with English captions
            </p>

            {state.error && (
              <div id="generate-error">
                <ErrorContainer error={state.error} />
                <p className="mt-2 text-center text-sm italic text-slate-500">
                  If the issue persists, try refreshing the page.
                </p>
              </div>
            )}
          </Card>
        </div>
      </MaxWidthWrapper>
      <ToastContainer />
    </div>
  )
}
