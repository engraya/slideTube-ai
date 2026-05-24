import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

type PricingTier = {
  id: string
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

const TIERS: PricingTier[] = [
  {
    id: 'free',
    name: 'Free Plan',
    price: '$0 / month',
    description:
      'Ideal for individuals or casual users looking to explore the power of SlideTube-AI.',
    features: [
      'Convert up to 5 YouTube videos per month',
      'Basic slide customization options',
      'Access to community support',
      'Export presentations in PDF & PPT format',
    ],
    cta: 'Get started',
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    price: '$20 / month',
    description:
      'Perfect for professionals who need more control and advanced features.',
    features: [
      'Unlimited YouTube video conversions',
      'Advanced slide design options',
      'Access to premium templates and styles',
      'Export presentations in multiple formats',
    ],
    cta: 'Get started',
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    price: 'Custom Pricing',
    description: 'Tailored for businesses or teams with high-volume needs.',
    features: [
      'Unlimited conversions and premium features',
      'Team collaboration tools',
      'Custom branding and templates',
      'Dedicated account manager and 24/7 support',
    ],
    cta: 'Contact us',
  },
]

function PricingCard({ id, name, price, description, features, cta, highlighted }: PricingTier) {
  return (
    <div
      className={cn(
        'rounded-3xl p-8 xl:p-10',
        highlighted ? 'bg-white/5 ring-2 ring-indigo-500' : 'ring-1 ring-indigo-500',
      )}
    >
      <div className="flex items-center justify-between gap-x-4">
        <h2
          id={id}
          className="text-lg font-semibold leading-8 text-gray-800 dark:text-white"
        >
          {name}
        </h2>
        {highlighted && (
          <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
            Most popular
          </p>
        )}
      </div>
      <p className="mt-4 text-sm leading-6 text-gray-500">{description}</p>
      <p className="mt-6 text-4xl font-bold tracking-tight text-gray-800 dark:text-white">
        {price}
      </p>
      <Link
        href="/generate"
        aria-describedby={id}
        className={cn(
          'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
          highlighted
            ? 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500'
            : 'bg-gray-700 text-white hover:bg-emerald-400 focus-visible:outline-white',
        )}
      >
        {cta}
      </Link>
      <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-200 xl:mt-10">
        {features.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <CheckCircle
              className="h-6 w-5 shrink-0 text-white"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Pricing() {
  return (
    <div className="pt-5" id="pricing">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-4 lg:px-8">
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
          <p className="mt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Whether it&apos;s just you, or your entire team — we&apos;ve got you covered.
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-800 dark:text-white">
          Choose the plan that works best for you.
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {TIERS.map((tier) => (
            <PricingCard key={tier.id} {...tier} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing
