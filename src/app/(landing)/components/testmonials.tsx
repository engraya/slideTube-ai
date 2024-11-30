import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
function Testmonials() {
  return (
    <section
    id="features"
    className={cn(
      'container space-y-6 rounded-md bg-secondary py-8',
      'md:py-12',
      'lg:py-24',
    )}
  >
  <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
    <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
      <div className="mb-12 space-y-5 md:mb-16 md:text-center">
        <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
          Words from Others
        </div>
        <h2
          className={cn(
            'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent drop-shadow-sm',
            'dark:from-gray-100 dark:to-gray-800',
            'md:text-6xl md:leading-tight',
          )}
        >
            Don&lsquo;t Just Take Our Word for It
        </h2>
        <p className="text-xl text-gray-100 md:text-center md:text-2xl">
          Here&lsquo;s what others have to say about us.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      <ul className="space-y-8">
        <li className="text-sm leading-6">
          <div className="relative group">
            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
            </div><a href="https://twitter.com/kanyewest" className="cursor-pointer">
              <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                <div className="flex items-center space-x-4"><Image src="https://randomuser.me/api/portraits/women/12.jpg" className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Jessica M.</h3>
                    <p className="text-gray-500 text-md">Educator</p>
                  </div>
                </div>
                <p className="leading-normal text-gray-300 text-md">SlideTube-AI saved me hours of work! I turned a 45-minute lecture video into a fully customized presentation in minutes. This tool is a game-changer.</p>
              </div>
            </a>
          </div>
        </li>
        <li className="text-sm leading-6">
          <div className="relative group">
            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
            </div><a href="https://twitter.com/tim_cook" className="cursor-pointer">
              <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                <div className="flex items-center space-x-4"><Image src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg" className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Michael B.</h3>
                    <p className="text-gray-500 text-md">Marketing Professional</p>
                  </div>
                </div>
                <p className="leading-normal text-gray-300 text-md">I use SlideTube-AI for client presentations. It’s quick, easy, and the results look polished every time. I’m never going back to manual slide creation!.</p>
              </div>
            </a>
          </div>
        </li>
        <li className="text-sm leading-6">
          <div className="relative group">
            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
            </div><a href="https://twitter.com/kanyewest" className="cursor-pointer">
              <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                <div className="flex items-center space-x-4"><Image src="https://randomuser.me/api/portraits/women/14.jpg" className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Sarah L.</h3>
                    <p className="text-gray-500 text-md">College Student</p>
                  </div>
                </div>
                <p className="leading-normal text-gray-300 text-md">As a student, SlideTube-AI is a lifesaver. It makes summarizing lecture videos into a well-organized presentation effortless.</p>
              </div>
            </a>
          </div>
        </li>
      </ul>
      <ul className="hidden space-y-8 sm:block">
        <li className="text-sm leading-6">
          <div className="relative group">
            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
            </div><a href="https://twitter.com/paraga" className="cursor-pointer">
              <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                <div className="flex items-center space-x-4"><Image src="https://randomuser.me/api/portraits/women/12.jpg" className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Clara T.</h3>
                    <p className="text-gray-500 text-md">HR Manager</p>
                  </div>
                </div>
                <p className="leading-normal text-gray-300 text-md">SlideTube-AI has transformed how our team prepares internal presentations. Whether it&lsquo;s a YouTube video briefing or a webinar, we now create visually appealing, on-brand slides in just a few clicks.</p>
              </div>
            </a>
          </div>
        </li>
        <li className="text-sm leading-6">
          <div className="relative group">
            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
            </div><a href="https://twitter.com/paraga" className="cursor-pointer">
              <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                <div className="flex items-center space-x-4"><Image src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg" className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Parag Agrawal</h3>
                    <p className="text-gray-500 text-md">Content Creator</p>
                  </div>
                </div>
                <p className="leading-normal text-gray-300 text-md">I create a lot of YouTube videos, and SlideTube-AI helped me quickly turn my own content into a shareable presentation for my audience. It’s a fantastic tool for anyone in content creation looking to repurpose their material.</p>
              </div>
            </a>
          </div>
        </li>
        <li className="text-sm leading-6">
          <div className="relative group">
            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
            </div><a href="https://twitter.com/dan_schulman" className="cursor-pointer">
              <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                <div className="flex items-center space-x-4"><Image src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg" className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Dan Schulman</h3>
                    <p className="text-gray-500 text-md">High School Teacher</p>
                  </div>
                </div>
                <p className="leading-normal text-gray-300 text-md">SlideTube-AI has revolutionized how I prepare lesson slides. I can quickly convert YouTube tutorials and lectures into interactive presentations, saving me hours of work each week. My students appreciate the visually engaging content too!</p>
              </div>
            </a>
          </div>
        </li>
      </ul>
      <ul className="hidden space-y-8 lg:block">
        <li className="text-sm leading-6">
          <div className="relative group">
            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
            </div><a href="https://twitter.com/satyanadella" className="cursor-pointer">
              <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                <div className="flex items-center space-x-4"><Image src="https://randomuser.me/api/portraits/women/14.jpg" className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Satya Nadella" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Jane Doe</h3>
                    <p className="text-gray-500 text-md">CEO of Albinx.Inc</p>
                  </div>
                </div>
                <p className="leading-normal text-gray-300 text-md">I don&lsquo;t have a background in design, but with SlideTube-AI, I can generate beautiful presentations from online videos in minutes. It’s perfect for pitching to investors or presenting business ideas to my team.</p>
              </div>
            </a>
          </div>
        </li>
        <li className="text-sm leading-6">
          <div className="relative group">
            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
            </div><a href="https://twitter.com/dan_schulman" className="cursor-pointer">
              <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                <div className="flex items-center space-x-4"><Image src="https://randomuser.me/api/portraits/women/2.jpg" className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Lara M.</h3>
                    <p className="text-gray-500 text-md">Marketing Director</p>
                  </div>
                </div>
                <p className="leading-normal text-gray-300 text-md">Creating pitch decks from YouTube content has never been easier. SlideTube-AI helped me quickly turn a competitor’s video into a clear, professional presentation for our team. It’s fast, intuitive, and incredibly useful!</p>
              </div>
            </a>
          </div>
        </li>
        <li className="text-sm leading-6">
          <div className="relative group">
            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
            </div><a href="https://twitter.com/satyanadella" className="cursor-pointer">
              <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                <div className="flex items-center space-x-4"><Image src="https://randomuser.me/api/portraits/women/19.jpg" className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Satya Nadella" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Marry K.</h3>
                    <p className="text-gray-500 text-md">Project Manager</p>
                  </div>
                </div>
                <p className="leading-normal text-gray-300 text-md">As a busy project manager, I rely on SlideTube-AI to streamline the creation of presentations for meetings. With just a link to a YouTube video, I can instantly generate polished slides. It&lsquo;s a total game-changer for my workflow.</p>
              </div>
            </a>
          </div>
        </li>
 
      </ul>
    </div>
  </div>

    </section>
  )
}

export default Testmonials
