"use client"

import { useLocale, useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib"

const engineeringFocus = {
  en: [
    "Computer Architecture & Microprocessors",
    "Data Communications & Networking",
    "Digital Signal Processing (DSP)",
    "Embedded Systems & Hardware Logic",
    "Analytical Problem Solving & Algorithms"
  ],
  ar: [
    "معمارية الحاسوب والمعالجات الدقيقة",
    "شبكات البيانات والاتصالات الرقمية",
    "معالجة الإشارات الرقمية (DSP)",
    "الأنظمة المدمجة ومنطق العتاد",
    "التحليل الرياضي المتقدم والخوارزميات"
  ]
}

export const AboutEducationSection = () => {
  const translate = useTranslations()
  const locale = useLocale()
  const isRTL = locale === "ar"

  return (
    <section className="space-y-4">
      {/* Section Header */}
      <div className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
        <span className="size-2 rounded-full bg-primary" />
        <h2 className="text-xs font-black uppercase tracking-[0.25em] text-foreground/60">
          {translate("education")}
        </h2>
      </div>

      {/* Main Education Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative group rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-card/80 to-card/30 p-6 md:p-8 backdrop-blur-xl shadow-lg hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 overflow-hidden"
      >
        {/* Ambient subtle glow on hover */}
        <div className="absolute -top-16 -right-16 size-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700 pointer-events-none" />

        <div className={cn("relative z-10 space-y-6", isRTL && "text-right")}>
          {/* Header Row: University, Degree & Meta */}
          <div className={cn("flex flex-col md:flex-row md:items-start justify-between gap-4", isRTL && "md:flex-row-reverse")}>
            <div className={cn("flex items-start gap-4", isRTL && "flex-row-reverse")}>
              <div className="p-3.5 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 group-hover:scale-105 transition-transform duration-300 shrink-0">
                <GraduationCap className="size-6" />
              </div>

              <div className="space-y-1">
                <div className={cn("flex flex-wrap items-center gap-2", isRTL && "flex-row-reverse")}>
                  <h3 className="text-xl md:text-2xl font-black text-foreground tracking-tight">
                    {translate("zagizagUniversity")}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-blue-500/15 text-blue-400 border border-blue-500/25">
                    {isRTL ? "كلية الهندسة" : "Faculty of Engineering"}
                  </span>
                </div>

                <p className="text-sm md:text-base font-bold text-foreground/90">
                  {translate("zagizagUniversityMajor")}
                </p>
              </div>
            </div>

            {/* Date & Location Badges */}
            <div className={cn("flex flex-wrap items-center gap-3 shrink-0 text-xs font-semibold text-muted-foreground", isRTL && "flex-row-reverse")}>
              <span className={cn("inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-secondary/30 border border-white/5", isRTL && "flex-row-reverse")}>
                <Calendar className="size-3.5 text-primary" />
                {translate("zagizagUniversityDate")}
              </span>
              <span className={cn("inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-secondary/30 border border-white/5", isRTL && "flex-row-reverse")}>
                <MapPin className="size-3.5 text-primary" />
                Zagazig, Egypt
              </span>
            </div>
          </div>

          {/* Academic Overview Description */}
          <p className="text-xs md:text-sm text-muted-foreground/90 leading-relaxed border-t border-border/40 pt-4">
            {isRTL
              ? "دراسة هندسية متقدمة في معمارية الحاسوب، معالجة الإشارات، الأنظمة المدمجة، وشبكات الاتصالات. زودتني هذه الخلفية الأكاديمية بأساس تحليلي متين في فهم الأنظمة الحاسوبية وتصميم برمجيات عالية الكفاءة والموثوقية."
              : "Advanced engineering coursework spanning computer architecture, signal processing, embedded systems, and communication networks. This academic background instills rigorous analytical thinking for architecting resilient, high-throughput software systems."}
          </p>

          {/* Key Coursework Focus Chips */}
          <div className="space-y-2.5 pt-1">
            <div className={cn("flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground/70", isRTL && "flex-row-reverse")}>
              <BookOpen className="size-3.5 text-primary" />
              <span>{isRTL ? "أبرز المجالات الأكاديمية" : "Core Engineering Focus Areas"}</span>
            </div>

            <div className={cn("flex flex-wrap gap-2", isRTL && "justify-end")}>
              {(isRTL ? engineeringFocus.ar : engineeringFocus.en).map((chip) => (
                <span
                  key={chip}
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-secondary/20 border border-white/5 text-foreground/80 hover:border-blue-500/30 hover:text-blue-400 transition-colors",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  <CheckCircle2 className="size-3 text-blue-400 shrink-0" />
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
