import '../global.css'

import type { Metadata } from 'next'
import { Plus_Jakarta_Sans as PlusJakartaSans } from 'next/font/google'
import Analytics from '@/components/analytics'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/providers'
import { cn } from '@/lib/utils'
import {
  ClerkProvider,
} from '@clerk/nextjs'


const fontSans = PlusJakartaSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <ClerkProvider>
    <html lang="en" suppressHydrationWarning className={fontSans.variable}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Skip to main content for keyboard/screen-reader users */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to main content
          </a>
          <div className="fixed inset-0 -z-10 bg-background" />
          <Header />
          <main id="main-content" className={cn('relative z-10 min-h-screen')}>
            {children}
          </main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
   </ClerkProvider>
  )
}
