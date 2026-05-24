import React from 'react'
import { GeneratedPowerpoints } from '@prisma/client'
import { formatDistanceToNow } from 'date-fns'
import Link from 'next/link'
import { ExternalLink, Presentation, Zap, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function PresentationCard({ presentation }: { presentation: GeneratedPowerpoints }) {
  return (
    <div className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      {/* Slide thumbnail placeholder */}
      <div className="mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 via-primary/5 to-muted">
        <div className="flex flex-col items-center gap-2 opacity-50 group-hover:opacity-70 transition-opacity">
          <Presentation className="size-8 text-primary" aria-hidden="true" />
          <div className="space-y-1.5 w-16">
            <div className="h-1.5 rounded-full bg-primary/40" />
            <div className="h-1 rounded-full bg-muted-foreground/30" style={{ width: '80%' }} />
            <div className="h-1 rounded-full bg-muted-foreground/30" style={{ width: '60%' }} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <h3 className="line-clamp-1 font-semibold text-foreground group-hover:text-primary transition-colors">
          {presentation.title || 'Untitled Presentation'}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {presentation.description || 'No description available.'}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="size-3" aria-hidden="true" />
            {formatDistanceToNow(new Date(presentation.createdAt), { addSuffix: true })}
          </span>
          <a
            href={presentation.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/5 px-2.5 py-1.5 text-xs font-medium text-primary',
              'transition-colors hover:bg-primary hover:text-primary-foreground',
            )}
          >
            <ExternalLink className="size-3" aria-hidden="true" />
            Download
          </a>
        </div>
      </div>
    </div>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/20 py-20 text-center">
      <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
        <Presentation className="size-7 text-primary" aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-foreground">
        No presentations yet
      </h3>
      <p className="mt-1.5 max-w-xs text-sm text-muted-foreground">
        Generate your first presentation from a YouTube video. It takes under
        60 seconds.
      </p>
      <Link href="/generate" className="mt-6">
        <Button className="gap-2">
          <Zap className="size-4" aria-hidden="true" />
          Create your first presentation
        </Button>
      </Link>
    </div>
  )
}

const DashboardPresentations = ({
  presentations,
}: {
  presentations: GeneratedPowerpoints[]
}) => {
  if (!presentations || presentations.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {presentations.map((presentation) => (
        <PresentationCard key={presentation.id} presentation={presentation} />
      ))}
    </div>
  )
}

export default DashboardPresentations
