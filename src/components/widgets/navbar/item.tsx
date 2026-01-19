"use client"

import React from "react"
import Link from "next/link"

import { usePathname } from "next/navigation"
import { cn } from "@/lib"

import { LucideIcon } from "lucide-react"
import { useTranslations } from "next-intl"

type Props = {
  href: string
  icon?: LucideIcon
  label?: string
}

export const NavbarItem = ({ href, icon: Icon, label }: Props) => {
  const pathname = usePathname()
  const translate = useTranslations()
  const isLinkActive = pathname.endsWith(href)

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "block px-4 py-2 rounded-full transition-all text-sm font-bold text-white",
          isLinkActive ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "dark:text-gray-100 text-muted-foreground hover:bg-[var(--nav-hover)]",
          label == "home" ? "text-primary" : "",
          label == "home" && isLinkActive ? "text-white" : "",
          label == "home" ? "rounded-full size-12 flex items-center justify-center" : "",
        )}
      >
        {label == "home" ? <React.Fragment>{Icon && <Icon className="size-5" />}</React.Fragment> : <React.Fragment>{label && translate(label)}</React.Fragment>}
      </Link>
    </li>
  )
}
