import { Skeleton } from "@/components/ui/skeleton"

export const ProjectContainerSkeleton = () => {
  return (
    <div className="flex flex-col h-full overflow-hidden rounded-xl border border-white/10 bg-card/30 backdrop-blur-md p-0">
      <Skeleton className="aspect-video w-full rounded-none" />
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-6 w-3/4 rounded-lg" />
          <Skeleton className="h-4 w-full rounded-lg" />
          <Skeleton className="h-4 w-2/3 rounded-lg" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-5 w-12 rounded-full" />
          <Skeleton className="h-5 w-12 rounded-full" />
          <Skeleton className="h-5 w-12 rounded-full" />
        </div>
        <div className="pt-4 border-t border-white/5 flex justify-between items-center">
          <div className="flex gap-4">
            <Skeleton className="size-8 rounded-full" />
            <Skeleton className="size-8 rounded-full" />
          </div>
          <Skeleton className="h-4 w-20 rounded-lg" />
        </div>
      </div>
    </div>
  )
}
