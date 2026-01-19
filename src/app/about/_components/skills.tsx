"use client"

import Image from "next/image"
import React from "react"
import { useTranslations } from "next-intl"
import { skills } from "@/lib/skills"
import { motion } from "framer-motion"
import { cn } from "@/lib"

export const AboutSkillsSection = () => {
  const translate = useTranslations()

  return (
    <section className="space-y-6">
      <h2 className="text-sm font-black uppercase tracking-[0.2em] text-foreground/50 flex items-center gap-3">
        <span className="size-1.5 rounded-full bg-primary" />
        {translate("skills")}
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={`skill-${index}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.02, ease: "easeOut" }}
            className="group relative flex flex-col items-center justify-center p-3 rounded-lg border border-white/5 bg-secondary/5 hover:border-primary/20 hover:bg-secondary/10 transition-all duration-300"
          >
            <div className="relative size-8 mb-2 transition-transform duration-300 group-hover:scale-110">
              <Image className={cn(skill.label === "Next.js" && "dark:invert", "object-contain")} src={skill.logo} alt={skill.label} fill />
            </div>
            <span className="text-[10px] font-bold text-muted-foreground group-hover:text-foreground transition-colors text-center truncate w-full">{skill.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
