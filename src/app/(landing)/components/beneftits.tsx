import React from 'react'

import { cn } from '@/lib/utils'
function Benefits() {
  return (
    <section
      id="benefits"
      className={cn(
        'container space-y-6 rounded-md bg-secondary py-8',
        'md:py-12',
        'lg:py-24',
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <h2
          className={cn(
            'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent drop-shadow-sm',
            'dark:from-gray-100 dark:to-gray-800',
            'md:text-6xl md:leading-tight',
          )}
        >
          Why Choose SlideTube-AI?
        </h2>
        <div className="mt-16 grid gap-16 sm:mt-24 sm:grid-cols-4 sm:gap-8">
          <div className="text-center">
            <div className="relative left-2 mx-auto size-20 sm:size-28 lg:size-32">
              <div className="relative z-10 flex size-full items-center justify-center rounded-full border border-gray-300 bg-white shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="0.5"
                  stroke="currentColor"
                  className="size-1/2 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  ></path>
                </svg>
              </div>
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 rounded-full bg-gradient-to-br from-gray-800 via-gray-100 to-gray-900" />
            </div>
            <h3 className="font-headline mt-6 text-xl sm:mt-10 sm:text-2xl">
              Save Time
            </h3>
            <p className="mt-4 leading-relaxed">
              Automatically generate presentations from YouTube videos without
              spending hours on manual slide creation.
            </p>
          </div>
          <div className="text-center">
            <div className="relative left-2 mx-auto size-20 sm:size-28 lg:size-32">
              <div className="relative z-10 flex size-full items-center justify-center rounded-full border border-gray-300 bg-white shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="0.5"
                  stroke="currentColor"
                  className="size-1/2 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 rounded-full bg-gradient-to-br from-gray-800 via-gray-100 to-gray-900" />
            </div>
            <h3 className="font-headline mt-6 text-xl sm:mt-10 sm:text-2xl">
              Increase Productivity
            </h3>
            <p className="mt-4 leading-relaxed">
              Focus on the content and insights, not on formatting. Let AI
              handle the structure.
            </p>
          </div>
          <div className="text-center">
            <div className="relative left-2 mx-auto size-20 sm:size-28 lg:size-32">
              <div className="relative z-10 flex size-full items-center justify-center rounded-full border border-gray-300 bg-white shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth=".5"
                  stroke="currentColor"
                  className="size-1/2 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  ></path>
                </svg>
              </div>
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 rounded-full bg-gradient-to-br from-gray-800 via-gray-100 to-gray-900" />
            </div>
            <h3 className="font-headline mt-6 text-xl sm:mt-10 sm:text-2xl">
              Create Stunning Presentations
            </h3>
            <p className="mt-4 leading-relaxed">
              No design experience required &lsquo; SlideTube-AI makes it easy to
              create beautiful, professional presentations every time.
            </p>
          </div>
          <div className="text-center">
            <div className="relative left-2 mx-auto size-20 sm:size-28 lg:size-32">
              <div className="relative z-10 flex size-full items-center justify-center rounded-full border border-gray-300 bg-white shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="0.5"
                  stroke="currentColor"
                  className="size-1/2 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 rounded-full bg-gradient-to-br from-gray-800 via-gray-100 to-gray-900" />
            </div>
            <h3 className="font-headline mt-6 text-xl sm:mt-10 sm:text-2xl">
              Perfect for Everyone
            </h3>
            <p className="mt-4 leading-relaxed">
              Whether you&lsquo;re preparing lessons, client pitches, or marketing
              presentations, SlideTube-AI helps you in many ways
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
