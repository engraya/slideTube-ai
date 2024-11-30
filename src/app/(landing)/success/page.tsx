"use client";

import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
function SuccessPage() {
  const router = useRouter();
  console.log("Router", router)
  const downloadUrl = ''

  const pathname = usePathname()
  const searchParams = useSearchParams()

  // const url = `${searchParams}`
  // console.log("Url Path", url);



  

  return (
    <div className="h-screen w-full ">
      <div className="gap-8r mx-auto flex h-full items-center justify-center">
        <div className="flex flex-col gap-4 rounded-lg border border-green-300 p-4 text-white shadow-xl shadow-green-400/30 dark:text-black">
          <h5 className="text-sm font-semibold text-green-500">Success</h5>
          <div className="flex w-full items-center justify-around gap-2">
            <div className="whitespace-nowrap font-serif text-3xl font-semibold uppercase text-gray-800 dark:text-gray-400">
              Congratulations
            </div>
            <hr className="h-1 w-[50%] rounded-full border-t-green-500 bg-green-500" />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Your presentation has been created and saved successfully. You can
            find it in your downloads folder.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/generate"
              className="w-full rounded-sm border-2 border-green-500 px-4 py-1 text-emerald-950 dark:text-gray-400"
            >
              Create More
            </Link>
            <Link
              href="/"
              className="w-full rounded-sm bg-green-500 px-4 py-1 text-white"
            >
              Back to Home
            </Link>
          </div>
          <div className="flex justify-center gap-4">
            <Link
              href={downloadUrl}
              className="w-full rounded-sm border-2 border-green-500 px-4 py-1 text-emerald-950 dark:text-gray-400"
            >
              Download Presentation 
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessPage
