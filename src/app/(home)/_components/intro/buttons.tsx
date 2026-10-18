"use client"

import { routes } from "@/lib"
import { ChevronsLeft, ChevronsRight, Target, ArrowRight, Sparkles } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import { motion } from "framer-motion"

export const HomeIntroButtonsSection = () => {
  const language = useLocale()
  const translate = useTranslations()

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-wrap gap-2 justify-center pt-6"
    >
      <Link href={routes.projects} passHref>
        <motion.div
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="relative group px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-bold text-base cursor-pointer overflow-hidden shadow-[0_0_40px_-10px_rgba(49,46,129,0.5)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-indigo-500 to-primary bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10 flex items-center gap-2">
            <Sparkles className="size-4" />
            {translate("projects")}
            {language === "en" ? (
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            ) : (
              <ArrowRight className="size-4 transition-transform group-hover:-translate-x-1 rotate-180" />
            )}
          </span>
        </motion.div>
      </Link>

      <Link href={routes.about} passHref>
        <motion.div
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="relative group px-6 py-3 rounded-2xl border-2 border-primary/20 bg-primary/5 text-foreground font-bold text-base cursor-pointer hover:border-primary/40 hover:bg-primary/10 transition-colors duration-300 backdrop-blur-sm"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Target className="size-4" />
            {translate("aboutMe")}
          </span>
        </motion.div>
      </Link>
    </motion.section>
  )
}
