"use client"

import Link from "next/link"

import { usePathname } from "next/navigation"
import { cn } from "@/lib"

import { LucideIcon } from "lucide-react"
import { useTranslations } from "next-intl"

type Props = {
  label: string
  href: string
  icon?: LucideIcon
  handleClose: () => void
}

export const MobileNavbarLink = ({ label, icon: Icon, href, handleClose }: Props) => {
  const pathname = usePathname()
  const isActive = pathname === href
  const translate = useTranslations()

  return (
    <li onClick={handleClose}>
      <Link
        href={href}
        className={cn(
          "flex gap-4 items-center px-4 py-3 rounded-lg transition-all font-bold text-sm",
          isActive ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "text-muted-foreground hover:text-foreground hover:bg-[var(--nav-hover)]",
        )}
      >
        {Icon && <Icon className="size-5" />}
        {translate(label)}
      </Link>
    </li>
  )
}
