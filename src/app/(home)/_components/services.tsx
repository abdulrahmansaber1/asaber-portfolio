"use client"

import { useLocale, useTranslations } from "next-intl"
import { homePage } from "./data"
import { motion } from "framer-motion"

export const HomeServicesSection = () => {
  const language = useLocale()
  const translate = useTranslations()

  return (
    <div className="space-y-10">
      <section className="space-y-2">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">{translate("myServices")}</h2>
        <div className="h-1.5 w-20 bg-primary rounded-full" />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {homePage.services.map((service, index) => (
          <motion.div
            key={`service-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -12,
              transition: { type: "spring", stiffness: 400, damping: 25 },
            }}
            className="relative p-8 rounded-[2.5rem] border border-white/10 bg-secondary/5 backdrop-blur-sm hover:border-primary/30 transition-colors duration-500 group overflow-hidden will-change-transform"
          >
            <div className="relative z-10 space-y-6">
              <div className="size-14 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground text-2xl font-black shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out">
                0{index + 1}
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-black tracking-tight uppercase">{language === "ar" ? service.arTitle : service.enTitle}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">{language === "ar" ? service.arDescription : service.enDescription}</p>
              </div>
            </div>

            {/* Decorative Background Element */}
            <div className="absolute -right-8 -bottom-8 size-32 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors duration-500" />
          </motion.div>
        ))}
      </section>
    </div>
  )
}
