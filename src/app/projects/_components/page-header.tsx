"use client"

import { cn } from "@/lib"
import { ProjectTabs } from "./project-tabs"
import { ProjectPageTitle } from "./title"
import { useLocale, useTranslations } from "next-intl"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FolderOpen } from "lucide-react"

type Props = {
  title: string
}

export const PageHeader = ({ title }: Props) => {
  const translate = useTranslations()
  const locale = useLocale()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-30px" })

  return (
    <header ref={ref} className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
      <div className={cn("space-y-6 text-center lg:text-left", locale === "ar" && "lg:text-right")}>

        <ProjectPageTitle title={title} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[650px] text-lg md:text-xl text-muted-foreground/80 font-medium leading-relaxed mx-auto lg:mx-0"
        >
          {translate("projectsSubtitle")}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={cn("flex justify-center lg:justify-end", locale === "ar" && "lg:justify-start")}
      >
        <ProjectTabs />
      </motion.div>
    </header>
  )
}
