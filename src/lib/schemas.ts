import { z } from 'zod'

export const VideoIdSchema = z.string().regex(
  /^[a-zA-Z0-9_-]{11}$/,
  'Invalid YouTube video ID format',
)

export const TitleDescriptionSchema = z.object({
  title: z.string().min(1).max(300),
  description: z.string().min(1).max(3000),
})

export const SlideSchema = z.object({
  title: z.string().min(1).max(300),
  content: z.array(z.string().min(1).max(500)).min(1).max(10),
})

export const PresentationSchema = z.array(SlideSchema).min(1).max(20)

export const UserCreateSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1).max(255),
  email: z.string().email().max(255),
})

export type TitleDescription = z.infer<typeof TitleDescriptionSchema>
export type Slide = z.infer<typeof SlideSchema>
export type UserCreate = z.infer<typeof UserCreateSchema>
