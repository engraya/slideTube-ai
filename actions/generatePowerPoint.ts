'use server'

import { currentUser } from '@clerk/nextjs/server'

import { db } from '../db'
import { VideoIdSchema } from '@/lib/schemas'
import * as aiService from '@/lib/services/ai.service'
import * as presentationService from '@/lib/services/presentation.service'
import * as storageService from '@/lib/services/storage.service'
import * as videoService from '@/lib/services/video.service'

export async function CreatePowerpoint(videoId: string) {
  try {
    const user = await currentUser()
    if (!user?.id) {
      return { success: false, error: 'Please sign in to create presentations.' }
    }

    const dbUser = await db.user.findFirst({ where: { id: user.id } })
    if (!dbUser) {
      return { success: false, error: 'User account not found. Please sign out and sign in again.' }
    }

    const validId = VideoIdSchema.safeParse(videoId)
    if (!validId.success) {
      return { success: false, error: 'Invalid YouTube video ID.' }
    }

    const metadata = await videoService.getVideoMetadata(validId.data)
    const transcript = await videoService.getSubtitleText(metadata.subtitleUrl)

    const [titleAndDesc, slides] = await Promise.all([
      aiService.generateTitleAndDescription(transcript),
      aiService.generateSlides(transcript),
    ])

    const buffer = await presentationService.createPptx(
      slides,
      titleAndDesc.title,
      metadata.videoName,
    )
    const downloadUrl = await storageService.upload(
      buffer,
      `${titleAndDesc.title.replace(/[^a-zA-Z0-9-_\s]/g, '').trim()}.pptx`,
    )

    await db.generatedPowerpoints.create({
      data: {
        link: downloadUrl,
        title: titleAndDesc.title,
        description: titleAndDesc.description,
        ownerId: user.id,
      },
    })

    return { success: true, downloadUrl, title: titleAndDesc.title }
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'An unexpected error occurred. Please try again.'
    return { success: false, error: message }
  }
}
