import React from 'react'
import { HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const FAQ_ITEMS = [
  {
    question: 'How does SlideTube-AI work?',
    answer:
      'SlideTube-AI extracts subtitles from a YouTube video, feeds the transcript to Gemini AI, and automatically organises the key points into polished PowerPoint slides — all in under a minute.',
  },
  {
    question: 'What types of videos can I use?',
    answer:
      'Any publicly available YouTube video with English captions. Just paste the URL and SlideTube-AI handles the rest.',
  },
  {
    question: 'Is there a limit on how many presentations I can create?',
    answer:
      'The free plan lets you explore the core features. For unlimited presentations and premium features, upgrade to a paid plan.',
  },
  {
    question: 'Can I edit the presentations after they are generated?',
    answer:
      'Absolutely. Download the .pptx file and open it in PowerPoint, Google Slides, or Keynote to customise it however you like.',
  },
  {
    question: 'Can I export to Google Slides or PDF?',
    answer:
      'You receive a standard .pptx file which you can import directly into Google Slides or export as PDF from any presentation app.',
  },
  {
    question: 'Is SlideTube-AI free to use?',
    answer:
      'We offer a free trial covering the core features. Unlimited presentations and advanced options are available on paid plans.',
  },
]

function FAQItem({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  return (
    <li className="mb-10 text-left">
      <div className="mb-4 flex flex-row items-start">
        <div className="mr-3 hidden shrink-0 items-center justify-center rounded-full border-4 border-white bg-indigo-500 p-3 sm:flex">
          <HelpCircle className="size-6 text-white" aria-hidden="true" />
        </div>
        <div className="flex w-full items-center bg-gray-100 p-5 px-8">
          <h3 className="text-sm font-medium leading-6 text-gray-900 md:text-base">
            {question}
          </h3>
        </div>
      </div>
      <div className="flex w-full items-center bg-indigo-100 p-5 px-8">
        <p className="text-sm text-gray-700">{answer}</p>
      </div>
    </li>
  )
}

function FrequentlyAskQuestions() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={cn(
        'container space-y-6 rounded-md bg-secondary py-8',
        'md:py-12',
        'lg:py-24',
      )}
    >
      <div className="mx-auto flex max-w-screen-md flex-col justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="faq-heading"
            className={cn(
              'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent drop-shadow-sm',
              'dark:from-gray-100 dark:to-gray-800',
              'md:text-6xl md:leading-tight',
            )}
          >
            Frequently Asked Questions
          </h2>
        </div>
        <ul className="mt-16">
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.question} {...item} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FrequentlyAskQuestions
