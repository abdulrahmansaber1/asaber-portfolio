import { ClassNameValue } from "tailwind-merge"
import { cn } from "@/lib"

import Link from "next/link"
import ShinyButton from "../animated-widgets/shiny-button"

type Props = { href: string; children: React.ReactNode; className?: ClassNameValue }

export const LinkBtn = ({ href, children, className }: Props) => {
  return (
    <Link href={href}>
      <ShinyButton className={cn("bg-indigo-900 px-4 rounded-md font-semibold capitalize text-white", className)}>
        <div className="flex gap-2 items-center">{children}</div>
      </ShinyButton>
    </Link>
  )
}
