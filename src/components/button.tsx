import Link from "next/link"
import ShinyButton from "./ui/shiny-button"
import { ClassValue } from "class-variance-authority/types"
import { cn } from "@/lib"

type Props = { href: string; children: React.ReactNode; className?: ClassValue }

export const LinkBtn = ({ href, children, className }: Props) => {
  return (
    <Link href={href}>
      <ShinyButton className={cn("bg-indigo-900 px-4 rounded-md font-semibold capitalize text-white", className)}>
        <div className="flex gap-2 items-center">{children}</div>
      </ShinyButton>
    </Link>
  )
}
