import { Skeleton } from "@/components/ui/skeleton"
import React from "react"

export default function AboutLoading() {
  return (
    <div>
      <section className="grid xl:grid-cols-8 grid-cols-1 gap-8 items-center">
        <section className="col-span-5 py-8 space-y-8">
          <Skeleton className="h-8 w-72" />
          <div className="space-y-1">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-36" />
            <Skeleton className="h-3 w-72" />
            <Skeleton className="h-3 w-1/2" />
          </div>
          <Skeleton className="h-4 w-36" />
          <div className="grid grid-cols-2 xl:grid-cols-6 md:grid-cols-4 gap-1 max-w-screen-lg">
            <Skeleton className="w-full h-7" />
            <Skeleton className="w-full h-7" />
            <Skeleton className="w-full h-7" />
            <Skeleton className="w-full h-7" />
            <Skeleton className="w-full h-7" />
            <Skeleton className="w-full h-7" />
            <Skeleton className="w-full h-7" />
            <Skeleton className="w-full h-7" />
            <Skeleton className="w-full h-7" />
          </div>

          {/* Education */}
          <div className="space-y-3">
            <Skeleton className="h-4 w-36" />
            <div className="space-y-1">
              <Skeleton className="h-3 w-40" />
              <Skeleton className="h-3 w-full" />
            </div>
          </div>
          {/* Last Achievement */}
          <div className="space-y-3">
            <Skeleton className="h-4 w-36" />
            <div className="space-y-1">
              <Skeleton className="h-3 w-40" />
              <Skeleton className="h-3 w-full" />
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
