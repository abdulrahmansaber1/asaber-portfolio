"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

export const AboutIntroSection = () => {
  const translate = useTranslations()

  return (
    <section className="space-y-6">
      <div className="relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50 uppercase"
        >
          {translate("aboutMe")}
        </motion.h1>
        <motion.div initial={{ width: 0 }} animate={{ width: 96 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="absolute -bottom-2 start-0 h-2 bg-primary rounded-full" />
      </div>

      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-medium">
        {translate("aboutMeDescription")}
      </motion.p>
    </section>
  )
}
