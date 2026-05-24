import Link from 'next/link'
import { Zap, Github } from 'lucide-react'
import { cn } from '@/lib/utils'

const PRODUCT_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Generate', href: '/generate' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
]

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Brand column */}
          <div className="col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Zap className="size-3.5" aria-hidden="true" />
              </div>
              <span className="text-sm font-bold text-foreground">
                SlideTube<span className="text-primary">AI</span>
              </span>
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
              Transform any YouTube video into a polished PowerPoint presentation
              in under 60 seconds. Powered by Gemini AI.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://github.com/engraya/slideTube-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-8 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                aria-label="GitHub repository"
              >
                <Github className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Product
            </h3>
            <ul className="flex flex-col gap-2.5">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Legal
            </h3>
            <ul className="flex flex-col gap-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Built by
              </h3>
              <a
                href="https://github.com/engraya"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
                )}
              >
                @engraya
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SlideTube AI. All rights reserved.
          </p>
          <a
            href="https://github.com/engraya/slideTube-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground hover:underline underline-offset-4"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
