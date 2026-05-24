import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Zap, Presentation, TrendingUp } from 'lucide-react'

import DashboardPresentations from '@/app/components/DashboardPresentations'
import MaxWidthWrapper from '@/components/common/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
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

  const firstName = user.firstName ?? 'there'
  const totalCount = presentations.length
  const recentCount = presentations.filter((p) => {
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    return new Date(p.createdAt) > weekAgo
  }).length

  return (
    <div className="min-h-screen py-10 lg:py-14">
      <MaxWidthWrapper>
        {/* Page header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              Welcome back, {firstName}
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Your presentations
            </h1>
          </div>
          <Link href="/generate">
            <Button className="gap-2">
              <Zap className="size-4" aria-hidden="true" />
              New presentation
            </Button>
          </Link>
        </div>

        {/* Stats row */}
        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
          <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
              <Presentation className="size-5 text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{totalCount}</p>
              <p className="text-xs text-muted-foreground">Total presentations</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
            <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-950/30">
              <TrendingUp className="size-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{recentCount}</p>
              <p className="text-xs text-muted-foreground">This week</p>
            </div>
          </div>
          <div className="col-span-2 flex items-center gap-4 rounded-xl border border-dashed border-primary/30 bg-primary/5 p-5 lg:col-span-1">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
              <Zap className="size-5 text-primary" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">
                Ready to create?
              </p>
              <p className="text-xs text-muted-foreground">
                Paste a YouTube URL and go.
              </p>
            </div>
            <Link href="/generate">
              <Button size="sm" variant="outline" className="shrink-0 text-xs">
                Generate
              </Button>
            </Link>
          </div>
        </div>

        {/* Presentations grid */}
        <DashboardPresentations presentations={presentations} />
      </MaxWidthWrapper>
    </div>
  )
}
