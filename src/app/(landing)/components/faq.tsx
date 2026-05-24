'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

const FAQ_ITEMS = [
  {
    question: 'How does SlideTube AI work?',
    answer:
      'SlideTube AI extracts the subtitle transcript from a YouTube video, feeds it to Gemini AI, and automatically organises the key points into a polished PowerPoint file — all in under 60 seconds.',
  },
  {
    question: 'What types of videos can I use?',
    answer:
      'Any publicly available YouTube video with English captions (auto-generated or manual). Paste the URL and SlideTube AI handles the rest.',
  },
  {
    question: 'Is there a video length limit?',
    answer:
      'Yes — videos must be 15 minutes or under. This keeps generation fast and focused on content-dense videos rather than lengthy recordings.',
  },
  {
    question: 'Can I edit the presentation after it is generated?',
    answer:
      'Absolutely. You receive a standard .pptx file which opens in PowerPoint, Google Slides, or Keynote. Every slide, text block, and bullet point is fully editable.',
  },
  {
    question: 'Can I export to Google Slides or PDF?',
    answer:
      'You get a .pptx file which you can import directly into Google Slides (File → Import Slides) or export as PDF from any presentation app.',
  },
  {
    question: 'Is SlideTube AI free to use?',
    answer:
      'The Free plan gives you 5 presentations per month with no credit card required. Unlimited presentations and premium features are available on the Pro plan.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border last:border-0">
      <button
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-foreground">{question}</span>
        <span
          className={cn(
            'flex size-6 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground transition-all duration-200',
            isOpen && 'border-primary bg-primary text-primary-foreground',
          )}
        >
          {isOpen ? (
            <Minus className="size-3.5" aria-hidden="true" />
          ) : (
            <Plus className="size-3.5" aria-hidden="true" />
          )}
        </span>
      </button>
      <div
        className={cn(
          'overflow-hidden text-sm leading-relaxed text-muted-foreground transition-all duration-300',
          isOpen ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        {answer}
      </div>
    </div>
  )
}

function FrequentlyAskQuestions() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="container mx-auto max-w-6xl px-4 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Frequently asked{' '}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Everything you need to know before you start generating.
          </p>
        </div>

        {/* Accordion */}
        <div className="rounded-2xl border border-border bg-card px-6">
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.question} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FrequentlyAskQuestions
