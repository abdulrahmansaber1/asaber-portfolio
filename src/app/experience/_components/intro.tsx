"use client"

import { useLocale, useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { cn } from "@/lib"
import { Title } from "@/components/widgets/common/title"

export const ExperienceIntroSection = () => {
  const translate = useTranslations()
  const locale = useLocale()
  const isRTL = locale === "ar"

  return (
    <section className={cn("space-y-6", isRTL ? "text-right" : "text-left")}>
      <div className="relative">
        <Title title="experience" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          "text-lg md:text-xl text-muted-foreground font-medium max-w-[600px] leading-relaxed",
          isRTL ? "mr-0" : "ml-0"
        )}
      >
        {translate("experienceSubtitle")}
      </motion.p>
    </section>
  )
}
