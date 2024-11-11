import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { cn } from '@/lib/utils'

const Footer = () => {
  return (
    <footer className={cn('relative z-10 w-full py-2', 'md:py-0')}>
      <div
        className={cn(
          'container flex flex-col items-center justify-between gap-2',
          'md:h-20',
          'md:flex-row',
        )}
      >
        <div className={cn('flex flex-col gap-2')}>
          <p
            className={cn(
              'text-center text-sm leading-loose text-muted-foreground',
              'md:text-left',
            )}
          >
            Developed by{' '}
            <Link
              href={"#"}
              target="_blank"
              rel="noreferrer"
              className={cn('font-medium underline underline-offset-4')}
            >
              ENGRAYA
            </Link>
          </p>
          <Link
            href="https://github.com/bonabrian/snxtw"
            target="_blank"
            rel="noreferrer"
            className={cn(
              'text-center text-xs leading-loose text-muted-foreground',
              'md:text-left',
              'hover:underline hover:underline-offset-4',
            )}
          >
            See recent updates on GitHub
          </Link>
        </div>
        <div className='space-x-4 text-center text-sm leading-loose text-muted-foreground'>
        © 2024 SlideTube-AI. All rights reserved.
        </div>
        <div
          className={cn(
            'space-x-4 text-center text-sm leading-loose text-muted-foreground',
            'md:text-left',
          )}
        >
          <Link
            href="https://github.com/engraya/slideTube-ai"
            target='_blank'
            className={cn(
              'font-semibold',
              'hover:underline hover:underline-offset-4',
            )}
          >
            <FaGithub size={"1.5rem"}/>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
