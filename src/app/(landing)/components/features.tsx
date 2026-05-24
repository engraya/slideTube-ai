import { Brain, Layout, Globe, Share2, Clock, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
  {
    title: 'AI-Powered Slide Generation',
    description:
      'Gemini AI reads the video transcript, identifies key ideas, and structures them into clear, concise slides — no manual editing needed.',
    icon: Brain,
    accent: 'bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400',
  },
  {
    title: 'Instant PowerPoint Download',
    description:
      'Get a ready-to-use .pptx file you can open in PowerPoint, Google Slides, or Keynote. Fully editable — make it your own.',
    icon: Layout,
    accent: 'bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400',
  },
  {
    title: 'Intelligent Summarization',
    description:
      'The AI doesn\'t just copy — it condenses long transcripts into punchy bullet points that capture the essence without the fluff.',
    icon: Sparkles,
    accent: 'bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400',
  },
  {
    title: 'Works in 60 Seconds',
    description:
      'Paste a URL, hit generate, and download. No account setup, no credit card, no waiting. The fastest path from video to presentation.',
    icon: Clock,
    accent: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400',
  },
  {
    title: 'Multilingual Videos',
    description:
      'As long as the video has English captions — auto-generated or manual — SlideTube AI handles the rest, regardless of the speaker\'s language.',
    icon: Globe,
    accent: 'bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400',
  },
  {
    title: 'One-Click Sharing',
    description:
      'Every presentation is hosted on a secure CDN link. Share it directly or download and distribute however you like.',
    icon: Share2,
    accent: 'bg-pink-100 text-pink-600 dark:bg-pink-950 dark:text-pink-400',
  },
]

const Features = () => {
  return (
    <section
      id="features"
      className="container mx-auto max-w-6xl px-4 py-20 lg:py-28"
    >
      {/* Section header */}
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          Features
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Everything you need to go from{' '}
          <span className="gradient-text">video to slides</span>
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Built for professionals, educators, and creators who value their time.
          No design experience required.
        </p>
      </div>

      {/* Feature grid */}
      <div className={cn('grid gap-4', 'sm:grid-cols-2', 'lg:grid-cols-3')}>
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div
                className={cn(
                  'mb-4 inline-flex size-10 items-center justify-center rounded-lg',
                  feature.accent,
                )}
              >
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Features
