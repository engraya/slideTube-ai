'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import MaxWidthWrapper from '@/components/common/MaxWidthWrapper'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error('[ErrorBoundary]', {
      message: error.message,
      digest: error.digest,
      stack: error.stack,
    })
  }, [error])

  return (
    <MaxWidthWrapper>
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-destructive/10">
          <AlertTriangle className="size-8 text-destructive" aria-hidden="true" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            Something went wrong
          </h2>
          <p className="max-w-md text-muted-foreground">
            {error.message || 'An unexpected error occurred. Our team has been notified.'}
          </p>
        </div>
        <Button onClick={reset} className="gap-2">
          <RefreshCw className="size-4" aria-hidden="true" />
          Try again
        </Button>
      </div>
    </MaxWidthWrapper>
  )
}
