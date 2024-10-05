import { Skeleton } from "@/components/ui/skeleton"
import React from "react"

export default function AboutLoading() {
  return (
    <div className="grid xl:grid-cols-6 items-center gap-20 xl:py-16 md:py-16 py-8">
      <div className="space-y-10 col-span-3">
        <Skeleton className="size-48 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="w-18 h-6" />
          <Skeleton className="w-32 h-6" />
          <Skeleton className="w-36 h-6" />
        </div>
        <section className="space-y-4 grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <div className="flex gap-2 items-center">
            <Skeleton className="size-7" />
            <Skeleton className="h-7 w-36" />
          </div>
          <div className="flex gap-2 items-center">
            <Skeleton className="size-7" />
            <Skeleton className="h-7 w-72" />
          </div>
          <div className="flex gap-2 items-center">
            <Skeleton className="size-7" />
            <Skeleton className="h-7 w-72" />
          </div>
          <div className="flex gap-2 items-center">
            <Skeleton className="size-7" />
            <Skeleton className="h-7 w-72" />
          </div>
        </section>
      </div>

      <div className="col-span-3 w-full relative space-y-6 p-8 rounded-md dark:bg-[#101010] bg-white dark:shadow-xl shadow-md">
        <div className="space-y-2">
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-36 h-3" />
          <Skeleton className="w-72 h-3" />
        </div>
        <div className="space-y-2">
          <Skeleton className="w-32 h-3" />
          <Skeleton className="w-full h-8" />
        </div>
        <div className="space-y-2">
          <Skeleton className="w-32 h-3" />
          <Skeleton className="w-full h-8" />
        </div>
        <div className="space-y-2">
          <Skeleton className="w-32 h-3" />
          <Skeleton className="w-full h-8" />
        </div>
        <div className="space-y-2">
          <Skeleton className="w-32 h-3" />
          <Skeleton className="w-full h-8" />
        </div>

        <Skeleton className="w-full h-10" />
      </div>
    </div>
  )
}
