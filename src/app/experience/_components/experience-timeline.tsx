"use client"

import { motion } from "framer-motion"
import { useLocale } from "next-intl"
import { Calendar, Briefcase, MapPin, CheckCircle2, Sparkles } from "lucide-react"
import { cn } from "@/lib"
import { ExperienceItem } from "./data"

interface ExperienceTimelineProps {
  items: ExperienceItem[]
}

const sectionLabels = {
  title: { en: "Work Experience", ar: "الخبرة المهنية" },
  subtitle: {
    en: "Companies and key roles where I've delivered scalable, production-grade digital products.",
    ar: "الشركات والمحطات التي قمت فيها بتطوير وإطلاق حلول برمجية متكاملة وقابلة للتوسع."
  },
  highlightsTitle: { en: "Key Contributions & Impact", ar: "أبرز الإنجازات والمسؤوليات" },
  techTitle: { en: "Technologies & Tools", ar: "التقنيات والأدوات المستخدمة" },
  activeTag: { en: "Active Role", ar: "وظيفة حالية" }
}

export const ExperienceTimeline = ({ items }: ExperienceTimelineProps) => {
  const locale = useLocale()
  const isRTL = locale === "ar"

  return (
    <section className="space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn("space-y-2", isRTL && "text-right")}
      >
        <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider", isRTL && "flex-row-reverse")}>
          <Briefcase className="size-3" />
          <span>{isRTL ? "المسار الوظيفي" : "Career Path"}</span>
        </div>
        <h2
          className="text-2xl md:text-3xl font-black tracking-tight text-foreground"
          style={isRTL ? { textAlign: "right" } : { textAlign: "left" }}
        >
          {isRTL ? sectionLabels.title.ar : sectionLabels.title.en}
        </h2>
        <p className={cn("text-muted-foreground text-sm md:text-base max-w-2xl", isRTL ? "mr-0 ml-auto" : "")}>
          {isRTL ? sectionLabels.subtitle.ar : sectionLabels.subtitle.en}
        </p>
      </motion.div>

      {/* Timeline Wrapper */}
      <div className="relative pt-4">
        {/* Continuous Spine Line */}
        <div
          className={cn(
            "absolute top-4 bottom-8 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent",
            isRTL ? "right-4 sm:right-6 md:right-8" : "left-4 sm:left-6 md:left-8"
          )}
        />

        <div className="space-y-10 md:space-y-14">
          {items.map((item, index) => {
            const role = isRTL ? item.roleAr : item.role
            const company = isRTL ? item.companyAr : item.company
            const period = isRTL ? item.periodAr : item.period
            const location = isRTL ? item.locationAr : item.location
            const type = isRTL ? item.typeAr : item.type
            const description = isRTL ? item.descriptionAr : item.description
            const highlights = isRTL ? item.highlightsAr : item.highlights

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative flex gap-5 sm:gap-8 md:gap-10",
                  isRTL ? "flex-row-reverse" : "flex-row"
                )}
              >
                {/* Milestone Node on Spine */}
                <div className="relative flex-shrink-0 flex items-start pt-1.5 z-10">
                  <div className="relative size-8 sm:size-10 md:size-12 rounded-full flex items-center justify-center bg-background border border-primary/40 shadow-lg shadow-primary/10">
                    {/* Inner glowing dot */}
                    <div className={cn("size-3 md:size-3.5 rounded-full", item.accent.dot)} />

                    {/* Active pulse ring for current role */}
                    {item.isCurrent && (
                      <span className="absolute -inset-1 rounded-full border-2 border-emerald-400/40 animate-ping" />
                    )}
                  </div>
                </div>

                {/* Experience Card */}
                <div className="flex-1 min-w-0">
                  <div
                    className={cn(
                      "relative group rounded-2xl border border-white/10 bg-secondary/5 dark:bg-zinc-900/40 p-6 md:p-8 transition-all duration-500 overflow-hidden",
                      "hover:border-primary/30 hover:bg-secondary/10 dark:hover:bg-zinc-900/60 shadow-lg hover:shadow-2xl hover:shadow-primary/5",
                      item.accent.border
                    )}
                  >
                    {/* Ambient subtle gradient glow on hover */}
                    <div
                      className={cn(
                        "absolute -top-24 -right-24 size-64 bg-gradient-to-br blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
                        item.accent.glow
                      )}
                    />

                    <div className={cn("relative z-10 space-y-6", isRTL && "text-right")}>
                      {/* Top Meta Bar */}
                      <div
                        className={cn(
                          "flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border/50",
                          isRTL && "flex-row-reverse"
                        )}
                      >
                        {/* Company Badge + Type + Location */}
                        <div className={cn("flex flex-wrap items-center gap-2", isRTL && "flex-row-reverse")}>
                          <span
                            className={cn(
                              "inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs md:text-sm font-bold border tracking-wide",
                              item.accent.badge
                            )}
                          >
                            <Briefcase className="size-3.5" />
                            {company}
                          </span>

                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-secondary/30 text-muted-foreground border border-white/5">
                            {type}
                          </span>

                          <span className={cn("inline-flex items-center gap-1 text-xs text-muted-foreground/80", isRTL && "flex-row-reverse")}>
                            <MapPin className="size-3" />
                            {location}
                          </span>
                        </div>

                        {/* Date Period + Active Pill */}
                        <div className={cn("flex items-center gap-2 shrink-0", isRTL && "flex-row-reverse")}>
                          {item.isCurrent && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              {isRTL ? sectionLabels.activeTag.ar : sectionLabels.activeTag.en}
                            </span>
                          )}

                          <span className={cn("inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-muted-foreground", isRTL && "flex-row-reverse")}>
                            <Calendar className="size-3.5 text-primary" />
                            {period}
                          </span>
                        </div>
                      </div>

                      {/* Role Title & Summary */}
                      <div className="space-y-2">
                        <h3 className="text-xl md:text-2xl font-black text-foreground tracking-tight">
                          {role}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {description}
                        </p>
                      </div>

                      {/* Key Highlights / Achievements */}
                      <div className="space-y-3 pt-1">
                        <div className={cn("flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground/70", isRTL && "flex-row-reverse")}>
                          <Sparkles className="size-3.5 text-primary" />
                          <span>{isRTL ? sectionLabels.highlightsTitle.ar : sectionLabels.highlightsTitle.en}</span>
                        </div>

                        <ul className="space-y-2.5">
                          {highlights.map((highlight, hIndex) => (
                            <li
                              key={hIndex}
                              className={cn(
                                "flex items-start gap-3 text-sm text-muted-foreground/90 leading-relaxed",
                                isRTL ? "flex-row-reverse text-right" : "text-left"
                              )}
                            >
                              <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5 opacity-90" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="space-y-2.5 pt-2 border-t border-border/40">
                        <div className={cn("text-xs font-bold uppercase tracking-wider text-muted-foreground/70", isRTL && "text-right")}>
                          {isRTL ? sectionLabels.techTitle.ar : sectionLabels.techTitle.en}
                        </div>

                        <div className={cn("flex flex-wrap gap-1.5 md:gap-2", isRTL && "justify-end")}>
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 rounded-md text-xs font-semibold bg-secondary/25 border border-white/5 text-foreground/80 hover:border-primary/40 hover:text-primary hover:bg-secondary/40 transition-all duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
