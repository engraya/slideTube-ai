'use server'

import { currentUser } from '@clerk/nextjs/server'

import { db } from '../db'
import { UserCreateSchema } from '@/lib/schemas'

export async function CreateUserIfNull() {
  try {
    const user = await currentUser()
    if (!user) return { success: false }

    const parsed = UserCreateSchema.safeParse({
      id: user.id,
      name:
        `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim() || 'Anonymous',
      email: user.emailAddresses[0]?.emailAddress,
    })

    if (!parsed.success) {
      console.error('[CreateUserIfNull] Invalid user data:', parsed.error.format())
      return { success: false }
    }

    const existingUser = await db.user.findUnique({ where: { id: parsed.data.id } })
    if (existingUser) return { success: true }

    await db.user.create({
      data: {
        id: parsed.data.id,
        name: parsed.data.name,
        email: parsed.data.email,
      },
    })

    return { success: true }
  } catch (error) {
    console.error('[CreateUserIfNull] Error:', error)
    return { success: false }
  }
}
