import dynamic from 'next/dynamic'

import Features from './components/features'
import Hero from './components/hero'
import OpenSource from './components/open-source'
import CTASections from './components/cta'
import Benefits from './components/benefits'
import Banner from './components/banner'
import Pricing from './components/pricing'

const FrequentlyAskQuestions = dynamic(() => import('./components/faq'))
const Testimonials = dynamic(() => import('./components/testimonials'))

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <Banner />
      <Pricing />
      <FrequentlyAskQuestions />
      <CTASections />
      <OpenSource />
    </>
  )
}
