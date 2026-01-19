"use client"

import { useLocale, useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { cn } from "@/lib"

export const ExperienceIntroSection = () => {
  const translate = useTranslations()
  const locale = useLocale()

  return (
    <section className={cn("space-y-6 text-center md:text-left", locale === "ar" && "md:text-right")}>
      <div className="relative inline-block">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50 uppercase"
        >
          {translate("experience")}
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute -bottom-2 left-0 h-2 bg-primary rounded-full hidden md:block"
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl md:text-2xl text-muted-foreground font-medium max-w-[600px] leading-relaxed mx-auto md:mx-0"
      >
        {translate("experienceSubtitle")}
      </motion.p>
    </section>
  )
}
