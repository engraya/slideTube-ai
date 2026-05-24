import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { ArrowRight, Zap, Star } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const SOCIAL_PROOF = [
  'No design skills needed',
  'Download as .pptx',
  'Powered by Gemini AI',
]

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Dot grid background */}
      <div className="dot-grid absolute inset-0 opacity-60" aria-hidden="true" />
      {/* Radial fade overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
        aria-hidden="true"
      />

      <div className="container relative mx-auto max-w-6xl px-4 py-24 lg:py-32">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Zap className="size-3" aria-hidden="true" />
            AI-Powered Presentation Generator
          </span>
        </div>

        {/* Headline */}
        <h1
          className={cn(
            'mx-auto max-w-3xl text-center text-4xl font-bold tracking-tight text-foreground',
            'md:text-6xl md:leading-[1.15]',
          )}
        >
          <Balancer>
            Turn any YouTube video into a{' '}
            <span className="gradient-text">stunning presentation</span>
          </Balancer>
        </h1>

        {/* Subheading */}
        <p
          className={cn(
            'mx-auto mt-5 max-w-xl text-center text-base text-muted-foreground',
            'md:text-lg',
          )}
        >
          <Balancer>
            Paste a link. Our AI reads the transcript, extracts key ideas, and
            builds a polished PowerPoint — ready to download in under 60 seconds.
          </Balancer>
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <SignedIn>
            <Link
              href="/generate"
              className={cn(buttonVariants({ size: 'lg' }), 'gap-2 px-6')}
            >
              <Zap className="size-4" aria-hidden="true" />
              Create a presentation
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/dashboard"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'px-6')}
            >
              View my dashboard
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className={cn(buttonVariants({ size: 'lg' }), 'gap-2 px-6')}>
                <Zap className="size-4" aria-hidden="true" />
                Get started — it&apos;s free
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </SignInButton>
            <Link
              href="/#features"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'px-6')}
            >
              See how it works
            </Link>
          </SignedOut>
        </div>

        {/* Trust badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          {SOCIAL_PROOF.map((item) => (
            <span
              key={item}
              className="flex items-center gap-1.5 text-xs text-muted-foreground"
            >
              <Star className="size-3 fill-primary text-primary" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>

        {/* Demo Card */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/5">
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 border-b border-border bg-muted/50 px-4 py-3">
              <div className="size-2.5 rounded-full bg-red-400" />
              <div className="size-2.5 rounded-full bg-yellow-400" />
              <div className="size-2.5 rounded-full bg-green-400" />
              <div className="ml-3 flex-1 rounded-md bg-background/80 px-3 py-1 text-xs text-muted-foreground">
                slidetube-ai.vercel.app/generate
              </div>
            </div>
            {/* App preview */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex h-12 flex-1 items-center gap-3 rounded-xl border border-border bg-muted/40 px-4">
                  <div className="size-2 rounded-full bg-red-500" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">
                    https://youtube.com/watch?v=dQw4w9WgXcQ
                  </span>
                </div>
                <div className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground">
                  <Zap className="size-4" aria-hidden="true" />
                  Generate
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { title: 'Introduction', bullets: 3 },
                  { title: 'Key Concepts', bullets: 4 },
                  { title: 'Conclusion', bullets: 3 },
                ].map((slide) => (
                  <div
                    key={slide.title}
                    className="rounded-xl border border-border bg-muted/30 p-4"
                  >
                    <div className="mb-2 h-2 w-2/3 rounded-full bg-primary/40" />
                    {Array.from({ length: slide.bullets }).map((_, i) => (
                      <div
                        key={i}
                        className="mt-1.5 h-1.5 rounded-full bg-muted-foreground/20"
                        style={{ width: `${65 + (i % 3) * 12}%` }}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 dark:border-green-900/30 dark:bg-green-950/20">
                <div className="size-2 animate-pulse rounded-full bg-green-500" aria-hidden="true" />
                <span className="text-xs font-medium text-green-700 dark:text-green-400">
                  Presentation ready — 10 slides generated in 42 seconds
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
