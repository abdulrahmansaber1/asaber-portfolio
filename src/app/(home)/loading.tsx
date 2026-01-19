import { Skeleton } from "@/components/ui/skeleton"

export default function HomeLoading() {
  return (
    <div>
      <section className="my-8 space-y-6 mt-8 grid xl:grid-cols-6 md:grid-cols-6 grid-cols-1 items-center gap-4">
        <section className="xl:col-span-4 md:col-span-4 lg:col-span-6 col-span-6 w-full space-y-8">
          <section className="space-y-2 xl:text-left lg:text-left md:text-left text-center w-full">
            <Skeleton className="h-6 full mb-10" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-3 w-full" />
            </div>
          </section>

          <section className="flex gap-6 justify-center xl:justify-start md:justify-start">
            <Skeleton className="h-3 w-36" />
            <Skeleton className="h-3 w-36" />
            <Skeleton className="h-3 w-36" />
          </section>

          <section className="flex gap-2 justify-center xl:justify-start md:justify-start">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-20" />
          </section>
        </section>
        <section className="xl:col-span-2 col-span-6 mx-auto">
          <Skeleton className="w-72 h-96" />
        </section>
      </section>

      <section className="flex justify-between items-center mb-1">
        <Skeleton className="h-7 w-36" />
        <Skeleton className="h-8 w-20" />
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-3 gap-2">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
      </section>

      <section>
        <section className="mb-4">
          <Skeleton className="h-7 w-36" />
        </section>

        <section className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <Skeleton className="h-36 w-full" />
          <Skeleton className="h-36 w-full" />
          <Skeleton className="h-36 w-full" />
          <Skeleton className="h-36 w-full" />
          <Skeleton className="h-36 w-full" />
          <Skeleton className="h-36 w-full" />
        </section>
      </section>
    </div>
  )
}
