import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Icons from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const stack = [
  {
    title: 'Next.js',
    link: 'https://nextjs.org/',
    icon: Icons.nextJs,
    className: 'hover:text-[#3178C6]',
  },
  {
    title: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    icon: Icons.typeScript,
    className: 'hover:text-[#3178C6]',
  },
  {
    title: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
    icon: Icons.tailwindCss,
    className: 'hover:text-[#06B6D4]',
  },
  {
    title: 'Prisma',
    link: 'https://vercel.com/',
    icon: Icons.prisma,
    className: 'hover:text-[#3178C6]',
  },
  {
    title: 'Shadcn',
    link: 'https://vercel.com/',
    icon: Icons.shadcn,
    className: 'hover:text-[#3178C6]',
  },
  {
    title: 'Vercel',
    link: 'https://vercel.com/',
    icon: Icons.vercel,
    className: 'hover:text-[#3178C6]',
  },
]

const Hero = async () => {
  return (
    <div className={cn('container')}>
      <div
        className={cn(
          'flex h-full min-h-[calc(100vh-64px)] w-full flex-col items-center justify-center space-y-16 py-16',
          'lg:py-24',
        )}
      >
        <div className={cn('mx-auto w-full max-w-2xl')}>
          <h1
            className={cn(
              'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent drop-shadow-sm',
              'dark:from-gray-100 dark:to-gray-800',
              'md:text-6xl md:leading-tight',
            )}
          >
            <Balancer>
              Turn YouTube Videos into Stunning Presentations in Seconds with AI
            </Balancer>
          </h1>
          <p
            className={cn(
              'mt-4 text-center text-muted-foreground',
              'md:text-xl',
            )}
          >
            <Balancer>
              SlideTube-AI transforms any YouTube video into a professional,
              editable presentation. Save time, increase productivity, and
              create captivating slides with just a link
            </Balancer>
          </p>
          <div
            className={cn(
              'mx-auto mt-6 flex items-center justify-center space-x-4',
            )}
          >
            <SignedIn>
            <Link
              href="/generate"
              className={cn(buttonVariants(), 'gap-x-2')}
              rel="noopener noreferrer"
            >
              Try It Now – Free Trial
            </Link>
            </SignedIn>
            <Link
              href="https://github.com/engraya/slideTube-ai"
              className={cn(buttonVariants({ variant: 'outline' }), 'gap-x-2')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.star className={cn('h-4 w-4')} />
              <span>on</span>
              <Icons.gitHub className={cn('h-4 w-4')} />
            </Link>
          </div>
        </div>
        <div className={cn('flex flex-col')}>
          <h2 className="mb-4 text-center text-2xl font-semibold tracking-tight">
            Built with
          </h2>
          <div
            className={cn('flex flex-wrap items-center justify-center gap-6')}
          >
            {stack.map((item, index) => (
              <Link
                key={`${index}.${item.title}`}
                href={item.link}
                className={cn('transition-colors', item.className)}
                title={item.title}
              >
                <item.icon className={cn('h-10 w-10')} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
