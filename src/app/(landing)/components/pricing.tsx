import Link from 'next/link'
import { Check, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

type PricingTier = {
  id: string
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

const TIERS: PricingTier[] = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for trying out SlideTube AI and occasional use.',
    features: [
      '5 presentations per month',
      'Standard AI quality',
      'Download as .pptx',
      'Community support',
    ],
    cta: 'Get started free',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$20',
    period: 'per month',
    description: 'For professionals who create presentations regularly.',
    features: [
      'Unlimited presentations',
      'Priority AI processing',
      'Premium slide templates',
      'Export to PDF & PPT',
      'Priority email support',
    ],
    cta: 'Start Pro',
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    description: 'For teams and organisations with high-volume needs.',
    features: [
      'Unlimited conversions',
      'Team collaboration',
      'Custom branding',
      'SSO & admin controls',
      'Dedicated account manager',
    ],
    cta: 'Contact sales',
  },
]

function PricingCard({
  id,
  name,
  price,
  period,
  description,
  features,
  cta,
  highlighted,
}: PricingTier) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border p-8',
        highlighted
          ? 'border-primary bg-primary text-primary-foreground shadow-2xl shadow-primary/20'
          : 'border-border bg-card text-card-foreground hover:border-primary/40 hover:shadow-lg transition-all duration-200',
      )}
    >
      {highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 rounded-full bg-background px-3 py-1 text-xs font-semibold text-primary shadow">
            <Zap className="size-3" aria-hidden="true" />
            Most popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3
          id={id}
          className={cn(
            'text-sm font-semibold uppercase tracking-wider',
            highlighted ? 'text-primary-foreground/70' : 'text-muted-foreground',
          )}
        >
          {name}
        </h3>
        <div className="mt-3 flex items-end gap-1">
          <span className="text-4xl font-bold tracking-tight">{price}</span>
          {period && (
            <span
              className={cn(
                'mb-1 text-sm',
                highlighted ? 'text-primary-foreground/60' : 'text-muted-foreground',
              )}
            >
              / {period}
            </span>
          )}
        </div>
        <p
          className={cn(
            'mt-3 text-sm leading-relaxed',
            highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      </div>

      <Link
        href={id === 'enterprise' ? 'mailto:claude@myt40.com' : '/generate'}
        aria-describedby={id}
        className={cn(
          'mb-8 block w-full rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition-all',
          highlighted
            ? 'bg-background text-primary hover:bg-background/90'
            : buttonVariants(),
        )}
      >
        {cta}
      </Link>

      <ul className="flex flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check
              className={cn(
                'mt-0.5 size-4 shrink-0',
                highlighted ? 'text-primary-foreground/80' : 'text-primary',
              )}
              aria-hidden="true"
            />
            <span
              className={highlighted ? 'text-primary-foreground/90' : 'text-muted-foreground'}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="container mx-auto max-w-6xl px-4 py-20 lg:py-28">
      {/* Header */}
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          Pricing
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Simple, transparent{' '}
          <span className="gradient-text">pricing</span>
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Start free. Upgrade when you need more. No hidden fees.
        </p>
      </div>

      <div className="grid items-center gap-6 lg:grid-cols-3">
        {TIERS.map((tier) => (
          <PricingCard key={tier.id} {...tier} />
        ))}
      </div>
    </section>
  )
}

export default Pricing
