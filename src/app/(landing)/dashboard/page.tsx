import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

import DashboardPresentations from '@/app/components/DashboardPresentations'
import MaxWidthWrapper from '@/components/common/MaxWidthWrapper'

import { db } from '../../../../db'

export default async function DashboardPage() {
  const user = await currentUser()

  if (!user) {
    redirect('/sign-in')
  }

  const presentations = await db.generatedPowerpoints.findMany({
    where: { ownerId: user.id },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="min-h-screen py-12">
      <MaxWidthWrapper>
        <h1 className="mb-8 bg-gradient-to-br from-gray-700 via-gray-200 to-gray-600 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent drop-shadow-sm">
          Your Presentations
        </h1>
        <DashboardPresentations presentations={presentations} />
      </MaxWidthWrapper>
    </div>
  )
}
