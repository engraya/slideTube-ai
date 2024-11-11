import React from 'react'
import PagesWrapper from '@/app/components/PagesWrapper'

function AboutPage() {
  return (
    <PagesWrapper>
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
      <h1 className="mb-4 text-xl font-extrabold leading-none tracking-normal text-gray-900 md:text-4xl md:tracking-tight">
        <span className="block w-full text-transparent text-center bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
        About SlideTube-AI
        </span>
      </h1>
    </div>
    <blockquote className="flex flex-col items-center p-4">
  <p className="max-w-4xl text-lg font-medium text-slate-200 text-center md:text-xl lg:text-2xl">At SlideTube-AI, we believe in the power of technology to simplify complex tasks. We’ve built an intuitive AI-driven platform that makes turning YouTube videos into impactful presentations easy and fast. Whether you're a student looking to summarize a lecture, a professional preparing a report, or a marketer curating video content for a campaign, SlideTube-AI helps you extract key insights and present them effectively.

Our mission is to enhance productivity by offering a tool that automates the presentation creation process, saving you time and effort without compromising quality.
  </p>
</blockquote>
    </PagesWrapper>
  )
}

export default AboutPage
