"use client"

import { motion } from "framer-motion"
import { useLocale } from "next-intl"
import { Briefcase, Code2, Users, Trophy } from "lucide-react"
import { cn } from "@/lib"

const stats = [
  { icon: Briefcase, value: "3+", label: "Years Experience", labelAr: "سنوات خبرة" },
  { icon: Code2, value: "50+", label: "Projects Built", labelAr: "مشروع منجز" },
  { icon: Users, value: "3", label: "Companies", labelAr: "شركات" },
  { icon: Trophy, value: "5+", label: "Certifications", labelAr: "شهادات" },
]

export const ExperienceStats = () => {
  const locale = useLocale()
  const isRTL = locale === "ar"

  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6")}>
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          <div className="relative p-5 md:p-6 rounded-2xl border border-white/5 bg-secondary/5 hover:border-primary/25 hover:bg-secondary/10 transition-all duration-500 overflow-hidden text-center">
            {/* Glow blob */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 size-20 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <stat.icon className="size-5" />
              </div>

              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl md:text-4xl font-black bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent"
              >
                {stat.value}
              </motion.span>

              <span className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                {isRTL ? stat.labelAr : stat.label}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
