"use client"

import Image from "next/image"
import React, { useState } from "react"
import { useTranslations, useLocale } from "next-intl"
import { groupedSkills } from "@/lib/skills"
import { motion, AnimatePresence } from "framer-motion"
import { Code2, Server, Cloud, Cpu, Sparkles } from "lucide-react"
import { cn } from "@/lib"

const categoryIcons = {
  frontEndSkills: Code2,
  backEndSkills: Server,
  devopsSkills: Cloud,
  aiSkills: Cpu
}

export const AboutSkillsSection = () => {
  const translate = useTranslations()
  const locale = useLocale()
  const isRTL = locale === "ar"
  const [activeTab, setActiveTab] = useState<string>("all")

  const allItems = groupedSkills.flatMap((g) => g.items)
  const displayedSkills =
    activeTab === "all"
      ? allItems
      : groupedSkills.find((g) => g.group === activeTab)?.items || []

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className={cn("space-y-2", isRTL && "text-right")}>
        <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider", isRTL && "flex-row-reverse")}>
          <Sparkles className="size-3.5" />
          <span>{isRTL ? "الترسانة التقنية" : "Technical Arsenal"}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
          {isRTL ? "المهارات والتقنيات التي أتقنها" : "Skills & Technologies"}
        </h2>
        <p className="text-muted-foreground text-sm max-w-2xl">
          {isRTL
            ? "مجموعة الأدوات وأطر العمل وقواعد البيانات والبنية السحابية التي أستخدمها في بناء وتوسيع التطبيقات."
            : "The comprehensive stack of frameworks, languages, databases, and cloud tools I utilize in production."}
        </p>
      </div>

      {/* Category Tabs */}
      <div className={cn("flex flex-wrap gap-2 pt-2", isRTL && "flex-row-reverse")}>
        <button
          onClick={() => setActiveTab("all")}
          className={cn(
            "px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 border",
            activeTab === "all"
              ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20 scale-105"
              : "bg-secondary/15 hover:bg-secondary/30 text-muted-foreground border-white/5"
          )}
        >
          {isRTL ? "جميع المهارات" : "All Skills"} ({allItems.length})
        </button>

        {groupedSkills.map((group) => {
          const Icon = categoryIcons[group.group as keyof typeof categoryIcons] || Code2
          const isActive = activeTab === group.group

          return (
            <button
              key={group.group}
              onClick={() => setActiveTab(group.group)}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 border",
                isActive
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20 scale-105"
                  : "bg-secondary/15 hover:bg-secondary/30 text-muted-foreground border-white/5",
                isRTL && "flex-row-reverse"
              )}
            >
              <Icon className="size-3.5" />
              <span>{translate(group.group)}</span>
              <span className="opacity-70 text-[10px]">({group.items.length})</span>
            </button>
          )
        })}
      </div>

      {/* Grid of Skills */}
      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        <AnimatePresence mode="popLayout">
          {displayedSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: (index % 12) * 0.02 }}
              whileHover={{ scale: 1.06, y: -3 }}
              className="group relative flex flex-col items-center justify-center p-4 rounded-2xl border border-white/5 bg-secondary/10 hover:border-primary/30 hover:bg-secondary/20 transition-all duration-300 cursor-default shadow-sm"
            >
              <div className="relative size-9 mb-2.5 transition-transform duration-300 group-hover:scale-110">
                <Image
                  className={cn(skill.label === "Next.js" && "dark:invert", "object-contain")}
                  src={skill.logo}
                  alt={skill.label}
                  fill
                />
              </div>
              <span className="text-xs font-bold text-foreground/80 group-hover:text-foreground transition-colors text-center truncate w-full">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
