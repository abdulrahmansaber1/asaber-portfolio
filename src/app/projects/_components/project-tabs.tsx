"use client"

import Link from "next/link"
import translate from "@/lib/translate"

import { usePathname } from "next/navigation"
import { useContext } from "react"

import { cn, projectsTabs } from "@/lib"
import { motion } from "framer-motion"

import { useLanguage } from "@/hooks/use-language"
import { Check } from "lucide-react"

export const ProjectTabs = () => {
  const variants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 }
  }

  const pathname = usePathname()
  const language = useLanguage()

  return (
    <div className="flex gap-2 h-fit justify-center flex-wrap">
      {projectsTabs.map((tab, index) => (
        <motion.div
          transition={{ duration: 0.5, delay: 0.1 * index }}
          key={tab.name + index}
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <Link
            href={tab.href}
            className={cn(
              "rounded-md px-8 p-2 text-center font-bold shadow-sm dark:shadow-lg transition-colors flex items-center gap-2 dark:bg-transparent dark:text-white bg-white text-black text-xs xl:text-sm md:text-sm",
              tab.href === pathname && "bg-indigo-900 text-white dark:bg-indigo-900"
            )}
          >
            {pathname === tab.href && <Check className="size-4" />}
            {translate(tab.name, language)}
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
