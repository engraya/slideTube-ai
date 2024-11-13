'use client'

import Link from 'next/link'
import { useOnScroll } from '@/hooks'
import { cn } from '@/lib/utils'
import ThemeSwitch from '../theme-switch'
import { useState } from 'react'
import {SignInButton, SignedIn,SignedOut, UserButton } from '@clerk/nextjs'
const Header = () => {
  // State to track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isScrolled = useOnScroll();

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-16 w-full bg-transparent',
        isScrolled
          ? 'shadow-sm backdrop-blur-[10px] duration-300 ease-in-out'
          : ''
      )}
    >
      <div className={cn('container h-full')}>
        <div className={cn('flex h-full items-center justify-between')}>
          {/* Logo */}
          <Link href="/" className={cn('text-2xl font-bold')}>
          <h1 className='bg-gradient-to-br from-gray-700 via-gray-200 to-gray-600 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent drop-shadow-sm'>
          SlideTube-AI
          </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex md:flex-grow justify-center">
            <ul className="flex justify-center space-x-4 hover:text-sky-300">
              <li><Link href="/" className="hover:text-secondary font-bold">Home</Link></li>
              <li><Link href="/about" className="hover:text-secondary font-bold">About</Link></li>
            </ul>
          </nav>

          {/* Hamburger menu (for mobile) */}
          <div className="flex md:hidden space-x-3 gap-4">
            <button
              id="hamburger"
              className="dark:text-slate-900 focus:outline-none"
              onClick={toggleMenu} // Toggle the menu on click
            >
              <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <div className="flex mr-4">
          <ThemeSwitch />
          </div>

  
          {/* Right section: Buttons (for desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <SignedOut>
              <button  className="relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gradient-to-r from-green-400 to-blue-500 text-white group">
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full" />
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
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
          <nav className="absolute top-16 left-0 w-full bg-slate-600  text-white hover:text-sky-300 md:hidden">
            <ul className="flex flex-col items-center cursor-pointer border-b space-y-4 p-4">
              <li>
                <Link href="/" className="hover:text-sky-300 cursor-pointer font-bold" onClick={() => setIsMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky-300 cursor-pointer font-bold" onClick={() => setIsMenuOpen(false)}>About</Link>
              </li>
            </ul>
            <SignedOut>
                    <button  className="relative inline-flex items-center justify-center mx-auto py-2 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gradient-to-r from-green-400 to-blue-500 text-white group">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full" />
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </span>
                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </span>
                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                        </span>
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

export default Header;
