'use client'

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { useState } from 'react'

import { useOnScroll } from '@/hooks'
import { cn } from '@/lib/utils'

import ThemeSwitch from '../theme-switch'
const Header = () => {
  // State to track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isScrolled = useOnScroll()

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-16 w-full bg-transparent',
        isScrolled
          ? 'shadow-sm backdrop-blur-[10px] duration-300 ease-in-out'
          : '',
      )}
    >
      <div className={cn('container h-full')}>
        <div className={cn('flex h-full items-center justify-between')}>
          {/* Logo */}
          <Link href="/" className={cn('text-2xl font-bold')}>
            <h1 className="bg-gradient-to-br from-gray-700 via-gray-200 to-gray-600 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent drop-shadow-sm">
              SlideTube-AI
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden justify-center md:flex md:grow">
            <ul className="flex justify-center space-x-4 hover:text-sky-300">
              <li>
                <Link href="/" className="font-bold hover:text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-bold hover:text-secondary">
                  About
                </Link>
              </li>
              <SignedIn>
                {/* <li><Link href="/dashboard" className="hover:text-secondary font-bold">Dashboard</Link></li> */}
                <li>
                  <Link
                    href="/generate"
                    className="font-bold hover:text-secondary"
                  >
                    Generate
                  </Link>
                </li>
              </SignedIn>
            </ul>
          </nav>

          {/* Hamburger menu (for mobile) */}
          <div className="flex gap-4 space-x-3 md:hidden">
            <button
              id="hamburger"
              className="focus:outline-none dark:text-slate-900"
              onClick={toggleMenu} // Toggle the menu on click
            >
              <svg
                className="size-5 text-slate-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div className="mr-4 flex">
            <ThemeSwitch />
          </div>

          {/* Right section: Buttons (for desktop) */}
          <div className="hidden items-center space-x-4 lg:flex">
            <SignedOut>
              <button className="group relative inline-flex items-center justify-start overflow-hidden rounded bg-gradient-to-r from-green-400 to-blue-500 py-2 pl-4 pr-12 font-semibold text-white transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6">
                <span className="absolute bottom-0 left-0 h-1 w-full bg-indigo-600 transition-all duration-150 ease-in-out group-hover:h-full" />
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="size-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <span className="absolute left-0 -translate-x-12 pl-2.5 duration-200 ease-out group-hover:translate-x-0">
                  <svg
                    className="size-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  <SignInButton />
                </span>
              </button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            <nav className="absolute left-0 top-16 w-full bg-slate-600  text-white hover:text-sky-300 md:hidden">
              <ul className="flex cursor-pointer flex-col items-center space-y-4 border-b p-4">
                <li>
                  <Link
                    href="/"
                    className="cursor-pointer font-bold hover:text-sky-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="cursor-pointer font-bold hover:text-sky-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <SignedIn>
                  {/* <li>
                <Link href="/dashboard" className="hover:text-sky-300 cursor-pointer font-bold" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
              </li> */}
                  <li>
                    <Link
                      href="/generate"
                      className="cursor-pointer font-bold hover:text-sky-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Generate
                    </Link>
                  </li>
                </SignedIn>
              </ul>
              <SignedOut>
                <button className="group relative mx-auto inline-flex items-center justify-center overflow-hidden rounded bg-gradient-to-r from-green-400 to-blue-500 py-2 pl-4 pr-12 font-semibold text-white transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6">
                  <span className="absolute bottom-0 left-0 h-1 w-full bg-indigo-600 transition-all duration-150 ease-in-out group-hover:h-full" />
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      className="size-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                  <span className="absolute left-0 -translate-x-12 pl-2.5 duration-200 ease-out group-hover:translate-x-0">
                    <svg
                      className="size-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white"></span>
                </button>
                <SignInButton />
              </SignedOut>
            </nav>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
