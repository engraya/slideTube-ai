import Features from './components/features'
import Hero from './components/hero'
import OpenSource from './components/open-source'
import CTASections from './components/cta'
import Benefits from './components/beneftits'
import FrequentlyAskQuestions from './components/faq'
import Testmonials from './components/testmonials'
import Banner from './components/banner'
import Pricing from './components/pricing'
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <Testmonials/>
      <Banner/>
      <Pricing/>
      <FrequentlyAskQuestions/>
      <CTASections/>
      <OpenSource />
    </>
  )
}
