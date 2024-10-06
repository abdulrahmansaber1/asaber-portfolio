"use client"

import React from "react"
import Link from "next/link"
import translate from "@/lib/translate"

import { usePathname } from "next/navigation"
import { useContext } from "react"
import { cn } from "@/lib"

import { LucideIcon } from "lucide-react"
import { LanguageContext } from "@/providers/language"

type Props = {
  href: string
  icon?: LucideIcon
  label?: string
}

export const NavbarItem = ({ href, icon: Icon, label }: Props) => {
  const language = useContext(LanguageContext)
  const pathname = usePathname()

  const isLinkActive = pathname.endsWith(href)

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "block px-3 py-2 rounded-md transition-all text-sm dark:hover:bg-accent font-semibold hover:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-50",
          isLinkActive
            ? "bg-primary hover:bg-primary dark:hover:bg-primary text-gray-50 dark:text-gray-50"
            : "text-gray-600 dark:text-gray-300"
        )}
      >
        {label == "home" ? (
          <React.Fragment>{Icon && <Icon className="size-5" />}</React.Fragment>
        ) : (
          <React.Fragment>{label && translate(label, language)}</React.Fragment>
        )}
      </Link>
    </li>
  )
}
