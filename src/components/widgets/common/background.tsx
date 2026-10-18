import { cn } from "@/lib"
import { GridPattern } from "../animated-widgets/grid-pattern"

export const Background = () => {
  return (
    <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
      <GridPattern
        width={48}
        height={48}
        x={-1}
        y={-1}
        squares={[
          [3, 3],
          [5, 1],
          [8, 4],
          [6, 7],
          [12, 5],
          [15, 8],
          [10, 12],
          [14, 14],
          [18, 11],
          [7, 16],
          [11, 18],
          [16, 20],
          [20, 15],
          [22, 9],
        ]}
        className={cn(
          "inset-x-0 inset-y-[-30%] h-[180%] w-full skew-y-12",
          "stroke-black/[0.08] dark:stroke-white/[0.07]",
          "fill-primary/[0.08] dark:fill-primary/[0.12]",
          "[mask-image:radial-gradient(ellipse_80%_70%_at_50%_35%,#000_65%,transparent_100%)]"
        )}
      />
    </div>
  )
}
