import { LucideIcon } from "lucide-react"
import Link from "next/link"

type Props = {
  href: string
  icon: LucideIcon
  target?: string
  which?: "next" | "default"
}

export const ProjectLinkBtn = ({
  href,
  which = "default",
  target = "_blank",
  icon: Icon
}: Props) => {
  const Component = which === "next" ? Link : "a"

  return (
    <Component
      href={href}
      target={target}
      className="p-2 py-2 rounded-sm border dark:border-[#222] border-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-colors flex items-center gap-2"
    >
      <Icon className="size-4" />
    </Component>
  )
}
