"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"
import { cn, projectsTabs } from "@/lib"
import { motion } from "framer-motion"

export const ProjectTabs = () => {
  const pathname = usePathname()
  const translate = useTranslations()

  return (
    <div className="flex p-1.5 bg-card/30 backdrop-blur-md rounded-2xl border border-white/10 w-fit self-center md:self-end">
      {projectsTabs.map((tab) => {
        const isActive = tab.href === pathname

        return (
          <Link
            key={tab.name}
            href={tab.href}
            className={cn("relative px-4 py-2 text-xs md:text-sm font-bold transition-colors duration-300", isActive ? "text-white" : "text-muted-foreground hover:text-foreground")}
          >
            {isActive && <motion.div layoutId="activeTab" className="absolute inset-0 bg-primary rounded-xl" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
            <span className="relative z-10">{translate(tab.name)}</span>
          </Link>
        )
      })}
    </div>
  )
}
