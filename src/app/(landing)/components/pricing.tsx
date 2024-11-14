import React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'


function Pricing() {
  return (
<div className="pt-5" id="pricing">
  <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-4xl text-center">
    <h2
          className={cn(
            'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent drop-shadow-sm',
            'dark:from-gray-100 dark:to-gray-800',
            'md:text-6xl md:leading-tight',
          )}
        >
          SlideTube-AI Pricing
        </h2>
      <p className="mt-2 text-xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-3xl">Whether it's just you, or your entire
        team - we've got you covered.</p>
    </div>
    <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 dark:text-white text-gray-800">Choose the plan that works best</p>
    <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {/* First Product */}
      <div className="ring-1  ring-indigo-500 rounded-3xl p-8 xl:p-10">
        <div className="flex items-center justify-between gap-x-4">
          <h2 id="product1" className="text-lg font-semibold leading-8 dark:text-white text-gray-800">Free Plan</h2>
          <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">Most popular</p>
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-500">Ideal for individuals or casual users looking to explore the power of SlideTube-AI.</p>
        <p className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight dark:text-white text-gray-800">$ 10 / month</span><span className="text-sm font-semibold leading-6 text-gray-300" />
        </p>
        <Link href="/generate" aria-describedby="product1" className="bg-gray-700 text-white hover:bg-emerald-400 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Get started</Link>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-200 xl:mt-10">
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>Convert up to 5 YouTube videos per month</li>
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>Basic slide customization options</li>
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>Access to community support</li>
            <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>Export presentations in PDF & PPT format</li>
        </ul>
      </div>
      {/* Second Product */}
      <div className="bg-white/5 ring-2 rounded-3xl p-8 xl:p-10">
        <div className="flex items-baseline justify-between gap-x-4">
          <h2 id="product2" className="text-lg font-semibold leading-8 dark:text-white text-gray-800">Pro Plan</h2>
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-500">Perfect for professionals who need more control and advanced features.</p>
        <p className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight dark:text-white text-gray-800">$ 20 / month</span><span className="text-sm font-semibold leading-6 text-gray-300" />
        </p>
        <Link href="/generate" aria-describedby="product2" className="bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Get started</Link>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-200 xl:mt-10">
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>Unlimited YouTube video conversions</li>
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>Advanced slide design options</li>
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>Access to premium templates and styles</li>
            <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>Export presentations in multiple formats (PDF, PPT, etc.)</li>
        </ul>
      </div>
      {/* Third Product */}
      <div className="ring-1 ring-indigo-500 rounded-3xl p-8 xl:p-10">
        <div className="flex items-center justify-between gap-x-4">
          <h2 id="product3" className="text-lg font-semibold leading-8 dark:text-white text-gray-800">Enterprise Plan</h2>
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-500">Tailored for businesses or teams with high-volume needs.</p>
        <p className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight dark:text-white text-gray-800">Custom Pricing</span><span className="text-sm font-semibold leading-6 text-gray-300" />
        </p>
        <Link href="/generate" aria-describedby="product3" className="bg-gray-700 text-white hover:bg-emerald-400 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Get started</Link>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-200 xl:mt-10">
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>Unlimited conversions and premium features</li>
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>Team collaboration tools</li>
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>Custom branding and templates</li>
            <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>Dedicated account manager and 24/7 support</li>
        </ul>
      </div>
    </div>
  </div>
</div>

  )
}

export default Pricing
