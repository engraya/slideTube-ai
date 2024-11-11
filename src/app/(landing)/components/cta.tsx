import React from 'react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
function CTASections() {
  return (
    <section
    id="cta"
    className={cn(
      'container space-y-6 rounded-md bg-secondary py-8',
      'md:py-12',
      'lg:py-24',
    )}
  >
      <div className="text-white py-20">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col gap-8 lg:flex-row items-center">
      <div className="lg:w-1/2">
        <h1 className="text-4xl font-bold leading-tight mb-4">Ready to Create Stunning Presentations?</h1>
        <p className="text-xl mb-8">Transform your YouTube videos into impactful presentations today with SlideTube-AI.</p>
        <Link href="#"
         className={cn(buttonVariants({ variant: 'outline' }), 'gap-x-2 py-3 px-6 rounded-lg')}
         >
            Get
        Start Your Free Trial Now!.
        </Link>
      </div>
      <div className="lg:w-1/2 lg:ml-12">
        <img src="https://cdn.pixabay.com/photo/2016/09/21/11/31/youtube-1684601_960_720.png" alt="Tailwind CSS" className="rounded-lg shadow-lg hover:shadow-xl transition duration-200" />
      </div>
    </div>
  </div>
</div>

    </section>
  )
}

export default CTASections
