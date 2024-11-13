import Balancer from 'react-wrap-balancer'

import Icons from '@/components/icons'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const features = [
  {
    title: 'AI-Powered Slide Generation',
    description: 'Effortlessly convert YouTube videos into professional presentations with AI-driven slide creation. The app analyzes the content, breaks it down into key points, and generates visually appealing slides that capture the essence of the video.',
    icon: Icons.nextJs,
  },
  {
    title: 'Customizable Slide Templates',
    description: 'Choose from a variety of pre-designed templates to match your presentations style and tone. Whether for business, education, or creative projects, you can tailor the look and feel of your slides to suit your audience',
    icon: Icons.react,
  },
  {
    title: 'Summarization & Content Breakdown',
    description: 'Choose from a variety of pre-designed templates to match your presentations style and tone. Whether for business, education, or creative projects, you can tailor the look and feel of your slides to suit your audience',
    icon: Icons.prisma,
  },
  {
    title: 'Multilingual Support',
    description:
      'With multilingual AI capabilities, SlideTube-AI can generate presentations from videos in multiple languages. It recognizes and translates the content to ensure global accessibility and usability',
    icon: Icons.shadcn,
  },
  {
    title: 'Integrated Media Embedding',
    description: 'Seamlessly embed images, charts, and other media directly into your slides. The app suggests relevant visuals from the video to enhance your presentation and make it more engaging.',
    icon: Icons.tailwindCss,
  },
  {
    title: 'Export and Share',
    description:
      'Once your AI-generated presentation is complete, export it in popular formats like PowerPoint (PPT) or PDF. You can easily share it with others, making collaboration and distribution hassle-free.',
    icon: Icons.jest,
  },
]

const Features = () => {
  return (
    <section
      id="features"
      className={cn(
        'container space-y-6 rounded-md bg-secondary py-8',
        'md:py-12 px-12',
        'lg:py-16 px-16',
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-4xl flex-col items-center space-y-4 text-center',
        )}
      >
        <h2
          className={cn(
            'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent drop-shadow-sm',
            'dark:from-gray-100 dark:to-gray-800',
            'md:text-6xl md:leading-tight',
          )}
        >
          Features
        </h2>
        <p
          className={cn(
            'max-w-[85%] leading-normal text-muted-foreground',
            'sm:text-lg',
            'sm:leading-7',
          )}
        >
          <Balancer>
          Leverage the power of AI to automatically generate polished, customizable slides from any YouTube video. Perfect for professionals, educators, and creators.
          </Balancer>
        </p>
      </div>
      <div
        className={cn(
          'grid justify-center gap-4',
          'sm:grid-cols-2',
          'md:grid-cols-3',
        )}
      >
        {features.map((feature) => (
          <Card
            key={feature.title}
            className={cn(
              'flex h-[180px] flex-col justify-between rounded-md p-6',
            )}
          >
            {/* <feature.icon className={cn('h-12 w-12')} /> */}
            <div className={cn('space-y-2')}>
              <h3 className="font-bold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Features
