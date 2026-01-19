"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export const AboutEducationSection = () => {
  const translate = useTranslations()

  return (
    <section className="space-y-6">
      <h2 className="text-sm font-black uppercase tracking-[0.2em] text-foreground/50 flex items-center gap-3">
        <span className="size-1.5 rounded-full bg-primary" />
        {translate("education")}
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative p-6 rounded-lg border border-white/5 bg-secondary/5 hover:border-primary/20 transition-all duration-300 group overflow-hidden"
      >
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <GraduationCap className="size-6" />
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tight">{translate("zagizagUniversity")}</h3>
                <p className="text-foreground/80 font-bold text-sm">{translate("zagizagUniversityMajor")}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-muted-foreground font-medium text-xs">
              <div className="flex items-center gap-2">
                <Calendar className="size-3.5" />
                <span>{translate("zagizagUniversityDate")}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-3.5" />
                <span>Zagazig, Egypt</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Background Accent */}
        <div className="absolute -right-8 -bottom-8 size-32 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors duration-500" />
      </motion.div>
    </section>
  )
}
