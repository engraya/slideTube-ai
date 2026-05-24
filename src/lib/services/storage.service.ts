import { UTApi } from 'uploadthing/server'

import { StorageError } from '@/lib/errors'

function getUtApi(): UTApi {
  const token = process.env.UPLOADTHING_TOKEN
  if (!token) throw new StorageError('File storage is not configured.')
  return new UTApi({ token })
}

export async function upload(buffer: Buffer, fileName: string): Promise<string> {
  const utapi = getUtApi()

  const file = new File([buffer], fileName, {
    type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  })

  const [result] = await utapi.uploadFiles([file])

  if (!result?.data?.url) {
    throw new StorageError('File upload failed. Please try again.')
  }

  return result.data.url
}
