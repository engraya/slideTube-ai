import { Clock, TrendingUp, Award, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

const stats = [
  {
    value: '60s',
    label: 'Average generation time',
    description: 'From URL paste to downloadable .pptx file.',
    icon: Clock,
    accent: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
  },
  {
    value: '10×',
    label: 'Faster than manual slides',
    description: 'Stop spending hours on formatting. Focus on what matters.',
    icon: TrendingUp,
    accent: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
  },
  {
    value: '100%',
    label: 'Editable output',
    description: 'Every slide is fully editable in PowerPoint, Keynote, or Google Slides.',
    icon: Award,
    accent: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
  },
  {
    value: 'Zero',
    label: 'Design skills required',
    description: 'AI handles structure and layout so you don\'t have to.',
    icon: Users,
    accent: 'text-orange-600 dark:text-orange-400',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
  },
]

function Benefits() {
  return (
    <section
      id="benefits"
      className="border-y border-border bg-muted/30 py-20 lg:py-28"
    >
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Why SlideTube AI
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Built for speed,{' '}
            <span className="gradient-text">polished by AI</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Every number here reflects a real user workflow improvement.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className={cn(
                  'group rounded-xl border border-border p-6 transition-all duration-200 hover:shadow-md',
                  stat.bg,
                )}
              >
                <div
                  className={cn(
                    'mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-background',
                    stat.accent,
                  )}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <p
                  className={cn(
                    'mb-1 text-3xl font-bold tracking-tight',
                    stat.accent,
                  )}
                >
                  {stat.value}
                </p>
                <p className="mb-2 text-sm font-semibold text-foreground">
                  {stat.label}
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits
