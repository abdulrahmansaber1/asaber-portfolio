"use client"

import { useLocale, useTranslations } from "next-intl"
import { homePage } from "./data"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { AnimatedTitle } from "@/components/widgets/common/animated-title"
import { Code2, Palette, Layers, Cloud, Plug, Database, Search, Wrench } from "lucide-react"
import { cn } from "@/lib"

const serviceIcons = [Code2, Palette, Layers, Cloud, Plug, Database, Search, Wrench]

export const HomeServicesSection = () => {
  const language = useLocale()
  const translate = useTranslations()
  const isRTL = language === "ar"
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <div ref={ref} className="space-y-14">
      <section className="text-center space-y-4">
        <div className="flex justify-center">
          <AnimatedTitle className="text-5xl md:text-7xl font-black tracking-tighter">
            {translate("myServices")}
          </AnimatedTitle>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {homePage.services.map((service, index) => {
          const IconComponent = serviceIcons[index] || Code2
          const title = isRTL ? service.arTitle : service.enTitle
          const description = isRTL ? service.arDescription : service.enDescription
          const formattedNumber = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`

          return (
            <motion.div
              key={`service-${index}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              <motion.div
                whileHover={{
                  y: -6,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                className={cn(
                  "relative p-6 md:p-7 h-full flex flex-col justify-between rounded-3xl border border-white/[0.06] bg-gradient-to-br from-card/80 via-card/40 to-transparent backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5",
                  isRTL && "text-right"
                )}
              >
                {/* Background glow decorations */}
                <div className="absolute top-0 right-0 size-40 bg-primary/[0.03] rounded-full blur-3xl group-hover:bg-primary/[0.09] transition-all duration-700 pointer-events-none" />
                <div className="absolute bottom-0 left-0 size-32 bg-primary/[0.02] rounded-full blur-3xl group-hover:bg-primary/[0.07] transition-all duration-700 pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  {/* Top Bar: Icon + Number */}
                  <div className={cn("flex items-center justify-between gap-4", isRTL && "flex-row-reverse")}>
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="relative size-13 rounded-2xl bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center shadow-[0_0_25px_-5px_rgba(99,102,241,0.4)] group-hover:shadow-[0_0_35px_-5px_rgba(99,102,241,0.6)] transition-shadow duration-500 shrink-0"
                    >
                      <IconComponent className="size-6 text-white" />
                    </motion.div>
                    <span className="text-4xl md:text-5xl font-black text-foreground/20 group-hover:text-primary/40 transition-colors duration-500 select-none">
                      {formattedNumber}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5">
                    <h3 className="text-lg md:text-xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground/85 leading-relaxed line-clamp-3">
                      {description}
                    </p>
                  </div>
                </div>

                {/* Skills / Tech chips */}
                {service.skills && service.skills.length > 0 && (
                  <div className={cn("relative z-10 pt-4 mt-4 border-t border-white/[0.06]", isRTL && "text-right")}>
                    <div className={cn("flex flex-wrap gap-1.5", isRTL && "justify-end")}>
                      {service.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-md text-[10px] md:text-[11px] font-semibold bg-secondary/20 text-muted-foreground border border-white/5 group-hover:border-primary/20 group-hover:text-foreground transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          )
        })}
      </section>
    </div>
  )
}
