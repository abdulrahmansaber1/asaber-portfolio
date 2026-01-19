import React from "react"

import { ProjectContainerSkeleton } from "./_components/project-skeleton"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProjectsLoading() {
  return (
    <div className="mt-8">
      <div className="flex space-y-4 xl:flex-row md:flex-row flex-col xl:justify-between md:justify-between justify-center items-center mb-4">
        <Skeleton className="h-8 w-44 " />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-8 rounded-md " />
          <Skeleton className="h-8 w-16 rounded-md " />
          <Skeleton className="h-8 w-16 rounded-md " />
          <Skeleton className="h-8 w-10 rounded-md " />
          <Skeleton className="h-8 w-16 rounded-md " />
        </div>
      </div>
      <section className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4">
        {Array.from({ length: 12 }).map((i, index) => (
          <ProjectContainerSkeleton key={`project-skeleton-${index}`} />
        ))}
      </section>
    </div>
  )
}
