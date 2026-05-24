import { z } from 'zod'

const EnvSchema = z.object({
  DATABASE_URL: z.string().min(1),
  CLERK_SECRET_KEY: z.string().min(1),
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  RAPID_API_KEY: z.string().min(1),
  GEMINI_API_KEY: z.string().min(1),
  UPLOADTHING_TOKEN: z.string().min(1),
})

function validateEnv() {
  const result = EnvSchema.safeParse(process.env)

  if (!result.success) {
    const missing = Object.keys(result.error.flatten().fieldErrors).join(', ')
    if (process.env.NODE_ENV === 'production') {
      throw new Error(`Missing required environment variables: ${missing}`)
    }
    console.warn(`[env] Missing environment variables: ${missing}`)
  }

  return (result.data ?? process.env) as z.infer<typeof EnvSchema>
}

export const env = validateEnv()
