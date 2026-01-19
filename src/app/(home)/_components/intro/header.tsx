"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

export const HomeIntroHeaderSection = () => {
  const translate = useTranslations()

  return (
    <section className="space-y-6 text-center w-full py-10">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, type: "spring" }}>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black">
          <span className="dark:text-white/60">{translate("helloIntro")}</span>
          <span className="block text-primary">{translate("homeIntroTitle")}</span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-2xl text-muted-foreground font-medium max-w-[800px] mx-auto leading-relaxed px-4"
        dangerouslySetInnerHTML={{ __html: translate("homeIntroDescription") }}
      />
    </section>
  )
}
