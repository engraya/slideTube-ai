'use client'

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

import { useOnScroll } from '@/hooks'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import ThemeSwitch from '../theme-switch'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = useOnScroll()

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-16 w-full transition-all duration-200',
        isScrolled
          ? 'border-b border-border bg-background/80 shadow-sm backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <div className="container mx-auto flex h-full max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
            <Zap className="size-4" aria-hidden="true" />
          </div>
          <span className="text-base font-bold tracking-tight text-foreground">
            SlideTube<span className="text-primary">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <SignedIn>
            <Link
              href="/dashboard"
              className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="/generate"
              className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Generate
            </Link>
          </SignedIn>
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeSwitch />
          <SignedOut>
            <SignInButton>
              <button
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'text-sm font-medium',
                )}
              >
                Sign in
              </button>
            </SignInButton>
            <Link
              href="/sign-up"
              className={cn(
                buttonVariants(),
                'h-9 px-4 text-sm',
              )}
            >
              Get started free
            </Link>
          </SignedOut>
          <SignedIn>
            <Link
              href="/generate"
              className={cn(buttonVariants(), 'h-9 px-4 text-sm')}
            >
              <Zap className="mr-1.5 size-3.5" aria-hidden="true" />
              New presentation
            </Link>
            <UserButton />
          </SignedIn>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeSwitch />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <button
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="container flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <SignedIn>
              <Link
                href="/dashboard"
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/generate"
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Generate
              </Link>
            </SignedIn>
            <SignedOut>
              <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
                <SignInButton>
                  <button className={cn(buttonVariants({ variant: 'outline' }), 'w-full justify-center text-sm')}>
                    Sign in
                  </button>
                </SignInButton>
                <Link
                  href="/sign-up"
                  className={cn(buttonVariants(), 'w-full justify-center text-sm')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get started free
                </Link>
              </div>
            </SignedOut>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
