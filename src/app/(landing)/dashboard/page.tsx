import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import DashboardPresentations from "@/app/components/DashboardPresentations";
import { db } from "../../../../db";
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from "next/navigation";
import React from "react";

async function DashboardPage() {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }

  const presentations = await db.generatedPowerpoints.findMany({
    where: {
      ownerId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });


  return (
    <div className="min-h-screen py-12">
      <MaxWidthWrapper>
        <h1 className="text-4xl bg-gradient-to-br from-gray-700 via-gray-200 to-gray-600 bg-clip-text text-center font-bold tracking-tight text-transparent drop-shadow-sm mb-8">
            Your Recent presentations{" "}
          </h1>
        <DashboardPresentations presentations={presentations} />
      </MaxWidthWrapper>
    </div>
  )
}

export default DashboardPage
