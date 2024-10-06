"use client"

import Link from "next/link"
import translate from "@/lib/translate"

import { usePathname } from "next/navigation"
import { useContext } from "react"
import { cn } from "@/lib"

import { LanguageContext } from "@/providers/language"
import { LucideIcon } from "lucide-react"

type Props = {
  label: string
  href: string
  icon?: LucideIcon
  handleClose: () => void
}

export const MobileNavbarLink = ({ label, icon: Icon, href, handleClose }: Props) => {
  const pathname = usePathname()
  const isActive = pathname === href
  const language = useContext(LanguageContext)

  return (
    <li onClick={handleClose}>
      <Link
        href={href}
        className={cn(
          "flex gap-4 items-center px-4 py-1.5 rounded-md dark:hover:bg-[#222] transition-colors text-sm",
          isActive
            ? "bg-[#222] text-white dark:hover:bg-[#222]"
            : "text-black dark:text-white hover:bg-[#222] hover:text-white"
        )}
      >
        {Icon && <Icon className="size-4 inline-block mr-2" />}
        {translate(label, language)}
      </Link>
    </li>
  )
}
