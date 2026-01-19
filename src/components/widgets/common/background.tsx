import { cn } from "@/lib"
import { GridPattern } from "../animated-widgets/grid-pattern"

export const Background = () => {
  return (
    <div className="fixed w-full flex h-full left-0 top-0 -z-10 flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn("[mask-image:radial-gradient(800px_circle_at_center,#222,transparent)]", "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12")}
      />
    </div>
  )
}
