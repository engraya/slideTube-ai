'use client'

import { Download, Loader2, RefreshCw, VideoIcon, Zap, CheckCircle2, Link2 } from 'lucide-react'
import { useEffect } from 'react'

import MaxWidthWrapper from '@/components/common/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { useGenerate } from '@/hooks/use-generate'
import { cn } from '@/lib/utils'

import ErrorContainer from './ErrorContainer'

const STEPS = [
  { id: 1, label: 'Fetch transcript' },
  { id: 2, label: 'Analyse with AI' },
  { id: 3, label: 'Build slides' },
  { id: 4, label: 'Upload & package' },
]

export default function GenerateForm() {
  const { toast } = useToast()
  const { state, handleUrlChange, handleGenerate, handleReset } = useGenerate()

  const isLoading = state.status === 'loading'
  const isSuccess = state.status === 'success'

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: 'Presentation ready!',
        description: `"${state.title}" is ready to download.`,
      })
    }
    if (state.status === 'error') {
      toast({
        title: 'Generation failed',
        description: state.error ?? 'Please try again.',
        variant: 'destructive',
      })
    }
  }, [state.status, state.error, state.title, toast])

  return (
    <div className="min-h-screen py-12 lg:py-20">
      <MaxWidthWrapper>
        <div className="mx-auto max-w-2xl">

          {/* Page header */}
          <div className="mb-10 text-center">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Zap className="size-3" aria-hidden="true" />
              AI-Powered
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Create your presentation
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Paste a YouTube URL and get a polished PowerPoint in under 60 seconds.
            </p>
          </div>

          {/* Screen-reader live region */}
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            {isLoading && 'Generating your presentation, please wait...'}
            {isSuccess && `Presentation "${state.title}" is ready for download.`}
            {state.status === 'error' && state.error}
          </div>

          {/* Main card */}
          <div className="rounded-2xl border border-border bg-card shadow-xl shadow-primary/5">

            {/* Video preview */}
            <div className="p-6 pb-0">
              {state.isValid && state.videoId ? (
                <div className="aspect-video overflow-hidden rounded-xl border border-border bg-black shadow-inner">
                  <iframe
                    className="size-full"
                    src={`https://www.youtube.com/embed/${state.videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube video preview"
                  />
                </div>
              ) : (
                <div className="flex aspect-video flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 text-muted-foreground">
                  <div className="mb-3 flex size-14 items-center justify-center rounded-full bg-muted">
                    <VideoIcon className="size-6 text-muted-foreground" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-medium">Video preview will appear here</p>
                  <p className="mt-1 text-xs text-muted-foreground/70">
                    Paste a YouTube URL below to get started
                  </p>
                </div>
              )}
            </div>

            {/* Input / Success area */}
            <div className="p-6">
              {isSuccess && state.downloadUrl ? (
                <div className="space-y-4">
                  {/* Success message */}
                  <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-900/30 dark:bg-green-950/20">
                    <CheckCircle2
                      className="mt-0.5 size-5 shrink-0 text-green-600 dark:text-green-400"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-green-800 dark:text-green-300">
                        {state.title ?? 'Presentation ready'}
                      </p>
                      <p className="mt-0.5 text-xs text-green-700/70 dark:text-green-400/70">
                        10 slides generated successfully. Click below to download.
                      </p>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col gap-2.5 sm:flex-row">
                    <a
                      href={state.downloadUrl}
                      download
                      className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <Download className="size-4" aria-hidden="true" />
                      Download presentation
                    </a>
                    <Button
                      variant="outline"
                      className="h-11 gap-2 rounded-xl text-sm"
                      onClick={handleReset}
                    >
                      <RefreshCw className="size-4" aria-hidden="true" />
                      Create another
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* URL input */}
                  <div className="flex flex-col gap-2.5 sm:flex-row">
                    <div className="relative flex-1">
                      <Link2
                        className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                        aria-hidden="true"
                      />
                      <label htmlFor="youtube-url" className="sr-only">
                        YouTube URL
                      </label>
                      <Input
                        id="youtube-url"
                        type="url"
                        placeholder="https://youtube.com/watch?v=..."
                        value={state.url}
                        onChange={(e) => handleUrlChange(e.target.value)}
                        className={cn(
                          'h-11 rounded-xl pl-9',
                          'border-border focus-visible:ring-primary',
                          state.status === 'error' && 'border-destructive focus-visible:ring-destructive',
                        )}
                        disabled={isLoading}
                        aria-invalid={state.status === 'error'}
                        aria-describedby={state.error ? 'generate-error' : undefined}
                      />
                    </div>
                    <Button
                      disabled={!state.isValid || isLoading}
                      className="h-11 gap-2 rounded-xl px-6 text-sm font-semibold"
                      onClick={handleGenerate}
                      aria-busy={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Zap className="size-4" aria-hidden="true" />
                          Generate
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Loading steps */}
                  {isLoading && (
                    <div className="rounded-xl border border-border bg-muted/30 p-4">
                      <p className="mb-3 text-xs font-medium text-muted-foreground">
                        Processing your video...
                      </p>
                      <div className="flex gap-2">
                        {STEPS.map((step, i) => (
                          <div key={step.id} className="flex flex-1 flex-col items-center gap-1.5">
                            <div
                              className={cn(
                                'flex size-6 items-center justify-center rounded-full text-xs font-semibold transition-all',
                                i === 0
                                  ? 'bg-primary text-primary-foreground animate-pulse'
                                  : 'bg-muted text-muted-foreground',
                              )}
                            >
                              {i === 0 ? (
                                <Loader2 className="size-3 animate-spin" aria-hidden="true" />
                              ) : (
                                step.id
                              )}
                            </div>
                            <span className="text-center text-[10px] leading-tight text-muted-foreground">
                              {step.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Hint text */}
                  {!isLoading && (
                    <p className="text-center text-xs text-muted-foreground">
                      Supports YouTube videos up to 15 minutes with English captions.
                    </p>
                  )}

                  {/* Error */}
                  {state.error && !isLoading && (
                    <div id="generate-error">
                      <ErrorContainer error={state.error} />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
