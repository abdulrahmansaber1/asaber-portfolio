"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

export const HomeIntroHeaderSection = () => {
  const translate = useTranslations()

  return (
    <section className="space-y-6 text-center w-full py-10">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, type: "spring" }}>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight">
          <span className="dark:text-white/60 block sm:inline">{translate("helloIntro")}</span>
          <span className="block text-primary mt-2 sm:mt-0">{translate("homeIntroTitle")}</span>
        </h1>
      </motion.div>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium max-w-[800px] mx-auto leading-relaxed px-4" dangerouslySetInnerHTML={{ __html: translate("homeIntroDescription") }} />
    </section>
  )
}
