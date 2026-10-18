"use client"

import { motion } from "framer-motion"
import { useLocale } from "next-intl"
import { Code2, Award, Briefcase, Rocket } from "lucide-react"
import { cn } from "@/lib"

const metrics = [
  {
    icon: Code2,
    value: "9+",
    labelEn: "Years Coding Journey",
    labelAr: "سنوات في عالم البرمجة",
    subEn: "Passionate self-starter since 2017",
    subAr: "شغف مستمر بالبرمجة منذ 2017",
    color: "from-blue-500/10 to-indigo-500/5",
    border: "hover:border-blue-500/30",
    iconColor: "text-blue-400"
  },
  {
    icon: Briefcase,
    value: "CoreVine",
    labelEn: "Software Engineer",
    labelAr: "مهندس برمجيات حالي",
    subEn: "Full-Time Engineering Role",
    subAr: "وظيفة هندسية بدوام كامل",
    color: "from-emerald-500/10 to-teal-500/5",
    border: "hover:border-emerald-500/30",
    iconColor: "text-emerald-400"
  },
  {
    icon: Rocket,
    value: "50+",
    labelEn: "Projects & Platforms",
    labelAr: "مشروع ومنصة رقمية",
    subEn: "Web, Full-Stack & APIs",
    subAr: "تطبيقات ويب وأنظمة متكاملة",
    color: "from-violet-500/10 to-purple-500/5",
    border: "hover:border-violet-500/30",
    iconColor: "text-violet-400"
  },
  {
    icon: Award,
    value: "AWS",
    labelEn: "Cloud Foundations Certified",
    labelAr: "شهادة معتمدة من AWS",
    subEn: "Cloud Architecture & Security",
    subAr: "معمارية السحابة والأمان",
    color: "from-amber-500/10 to-orange-500/5",
    border: "hover:border-amber-500/30",
    iconColor: "text-amber-400"
  }
]

export const HomeMetricsSection = () => {
  const locale = useLocale()
  const isRTL = locale === "ar"

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {metrics.map((item, index) => (
        <motion.div
          key={item.labelEn}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="group relative"
        >
          <div
            className={cn(
              "relative p-5 md:p-6 rounded-2xl border border-white/5 bg-gradient-to-br backdrop-blur-md overflow-hidden transition-all duration-500 flex flex-col justify-between h-full",
              item.color,
              item.border,
              isRTL && "text-right"
            )}
          >
            {/* Ambient hover glow */}
            <div className="absolute -top-10 -right-10 size-24 bg-white/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10 space-y-3">
              <div className={cn("flex items-center justify-between", isRTL && "flex-row-reverse")}>
                <div className="p-2.5 rounded-xl bg-secondary/30 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className={cn("size-5", item.iconColor)} />
                </div>
                <span className="text-2xl md:text-3xl font-black text-foreground tracking-tight">
                  {item.value}
                </span>
              </div>

              <div>
                <h3 className="text-sm md:text-base font-bold text-foreground leading-snug">
                  {isRTL ? item.labelAr : item.labelEn}
                </h3>
                <p className="text-xs text-muted-foreground/80 mt-1">
                  {isRTL ? item.subAr : item.subEn}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
