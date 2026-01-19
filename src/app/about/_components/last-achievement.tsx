"use client"

import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import { links } from "@/lib"
import { ChevronsLeft, ChevronsRight, Award, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

export const AboutLastAchievement = () => {
  const language = useLocale()
  const translate = useTranslations()

  return (
    <section className="space-y-6">
      <h2 className="text-sm font-black uppercase tracking-[0.2em] text-foreground/50 flex items-center gap-3">
        <span className="size-1.5 rounded-full bg-primary" />
        {translate("lastAchievement")}
      </h2>

      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="relative p-6 rounded-lg border border-white/5 bg-secondary/5 hover:border-primary/20 transition-all duration-300 group overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <GraduationCap className="size-6" />
          </div>

          <div className="flex-1 text-center md:text-left space-y-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <h3 className="text-base md:text-lg font-black tracking-tight flex items-center justify-center md:justify-start gap-2">
                <Award className="size-4 text-primary" />
                AWS Academy Graduate - AWS Academy Cloud Foundations
              </h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-center bg-primary text-primary-foreground text-[10px] font-bold shadow-lg shadow-primary/20">
                {translate("issuedAt")} {translate("issudeDate")}
              </span>
            </div>

            <a href={links.awsCertificate} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline group/link">
              {translate("viewCredentials")}
              {language === "en" ? <ChevronsRight className="size-3.5 group-hover/link:translate-x-1 transition-transform" /> : <ChevronsLeft className="size-3.5 group-hover/link:-translate-x-1 transition-transform" />}
            </a>
          </div>
        </div>

        {/* Subtle Background Accent */}
        <div className="absolute -right-8 -top-8 size-32 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors duration-500" />
      </motion.div>
    </section>
  )
}
