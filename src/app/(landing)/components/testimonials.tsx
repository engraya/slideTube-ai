import Image from 'next/image'
import { cn } from '@/lib/utils'

type Testimonial = {
  name: string
  role: string
  avatar: string
  quote: string
}

const TESTIMONIALS: Testimonial[][] = [
  [
    {
      name: 'Jessica M.',
      role: 'Educator',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
      quote:
        'SlideTube-AI saved me hours of work! I turned a 45-minute lecture video into a fully customized presentation in minutes. This tool is a game-changer.',
    },
    {
      name: 'Michael B.',
      role: 'Marketing Professional',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote:
        "I use SlideTube-AI for client presentations. It's quick, easy, and the results look polished every time. I'm never going back to manual slide creation!",
    },
    {
      name: 'Sarah L.',
      role: 'College Student',
      avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
      quote:
        'As a student, SlideTube-AI is a lifesaver. It makes summarizing lecture videos into a well-organized presentation effortless.',
    },
  ],
  [
    {
      name: 'Clara T.',
      role: 'HR Manager',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote:
        "SlideTube-AI has transformed how our team prepares internal presentations. Whether it's a YouTube briefing or a webinar, we create on-brand slides in just a few clicks.",
    },
    {
      name: 'David R.',
      role: 'Content Creator',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      quote:
        "I create a lot of YouTube videos and SlideTube-AI helped me quickly turn my own content into a shareable presentation for my audience. Fantastic for repurposing material.",
    },
    {
      name: 'Alice K.',
      role: 'High School Teacher',
      avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
      quote:
        'SlideTube-AI has revolutionized how I prepare lesson slides. I can quickly convert YouTube tutorials into interactive presentations, saving hours each week.',
    },
  ],
  [
    {
      name: 'Jane Doe',
      role: 'Startup CEO',
      avatar: 'https://randomuser.me/api/portraits/women/19.jpg',
      quote:
        "I don't have a design background, but with SlideTube-AI I generate beautiful presentations from online videos in minutes. Perfect for pitching to investors.",
    },
    {
      name: 'Lara M.',
      role: 'Marketing Director',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      quote:
        "Creating pitch decks from YouTube content has never been easier. SlideTube-AI helped me quickly turn competitor content into clear, professional slides. Fast and intuitive!",
    },
    {
      name: 'Mark K.',
      role: 'Project Manager',
      avatar: 'https://randomuser.me/api/portraits/men/18.jpg',
      quote:
        'As a busy project manager, I rely on SlideTube-AI to streamline presentation creation. With just a YouTube link I can instantly generate polished slides.',
    },
  ],
]

function TestimonialCard({ name, role, avatar, quote }: Testimonial) {
  return (
    <li className="text-sm leading-6">
      <div className="relative group">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur transition duration-400 group-hover:opacity-100 group-hover:duration-200" />
        <div className="relative space-y-6 rounded-lg bg-slate-800 p-6 leading-none ring-1 ring-gray-900/5">
          <div className="flex items-center space-x-4">
            <Image
              src={avatar}
              width={48}
              height={48}
              className="size-12 rounded-full border bg-center bg-cover"
              alt={`Portrait of ${name}`}
            />
            <div>
              <h3 className="text-lg font-semibold text-white">{name}</h3>
              <p className="text-gray-500">{role}</p>
            </div>
          </div>
          <p className="leading-normal text-gray-300">{quote}</p>
        </div>
      </div>
    </li>
  )
}

function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className={cn(
        'container space-y-6 rounded-md bg-secondary py-8',
        'md:py-12',
        'lg:py-24',
      )}
    >
      <div className="mx-8 max-w-6xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="mb-12 space-y-5 md:mb-16 md:text-center">
          <div className="inline-block rounded-lg bg-[#202c47] bg-opacity-60 px-3 py-1 text-sm font-semibold text-indigo-100 hover:bg-opacity-40 md:text-center">
            Words from Others
          </div>
          <h2
            id="testimonials-heading"
            className={cn(
              'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent drop-shadow-sm',
              'dark:from-gray-100 dark:to-gray-800',
              'md:text-6xl md:leading-tight',
            )}
          >
            Don&apos;t Just Take Our Word for It
          </h2>
          <p className="text-xl text-gray-100 md:text-center md:text-2xl">
            Here&apos;s what others have to say about us.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {TESTIMONIALS.map((column, colIdx) => (
            <ul
              key={colIdx}
              className={cn(
                'space-y-8',
                colIdx === 1 && 'hidden sm:block',
                colIdx === 2 && 'hidden lg:block',
              )}
            >
              {column.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
