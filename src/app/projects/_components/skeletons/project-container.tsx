import { Skeleton } from "@/components/ui/skeleton"

type Props = {}
export const ProjectContainerSkeleton = ({}: Props) => {
  return (
    <div className="project-container shadow-md dark:shadow-2xl dark:border dark:border-[#222] rounded-md p-2 space-y-4 dark:bg-[#101010] bg-white h-fit">
      <Skeleton className="w-full h-[220px] rounded-md" />
      <Skeleton className="w-full h-4 rounded-md" />
      <div className="space-y-2">
        <Skeleton className="w-full h-2 rounded-md" />
        <Skeleton className="w-28 h-2 rounded-md" />
        <Skeleton className="w-72 h-2 rounded-md" />
      </div>

      <div className="flex gap-2">
        <Skeleton className="w-20 h-6 rounded-md" />
        <Skeleton className="w-20 h-6 rounded-md" />
        <Skeleton className="w-20 h-6 rounded-md" />
        <Skeleton className="w-20 h-6 rounded-md" />
      </div>
      <div className="flex justify-end gap-1">
        <Skeleton className="w-7 h-6 rounded-md" />
        <Skeleton className="w-7 h-6 rounded-md" />
      </div>
    </div>
  )
}
