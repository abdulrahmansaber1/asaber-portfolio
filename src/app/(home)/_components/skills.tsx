"use client"

import { cn, groupedSkills, routes } from "@/lib"
import { motion } from "framer-motion"
import { ChevronsLeft, ChevronsRight } from "lucide-react"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { RetroButton } from "@/components/retroui/Button"
import Link from "next/link"

export const HomeSkillsSection = () => {
  const language = useLocale()
  const translate = useTranslations()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="space-y-12">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {translate("techStack")}
          </div>
          <div className="space-y-2">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">{translate("mySkills")}</h2>
            <div className="h-2 w-24 bg-gradient-to-r from-primary to-primary/20 rounded-full" />
          </div>
        </div>
        <Link href={routes.about} passHref>
          <RetroButton variant="secondary" size="lg" className="rounded-2xl text-white font-black group bg-primary shadow-none">
            {translate("moreAboutMe")}
            {language === "en" ? <ChevronsRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" /> : <ChevronsLeft className="mr-2 size-5 transition-transform group-hover:-translate-x-1" />}
          </RetroButton>
        </Link>
      </section>

      <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {groupedSkills.map((group, groupIndex) => (
          <motion.div key={`group-${groupIndex}`} variants={itemVariants} className="group relative h-fit p-5 rounded-[1.5rem]">
            <h3 className="text-xl font-black uppercase tracking-[0.2em] text-muted-foreground mb-5 group-hover:text-primary transition-colors">{translate(group.group)}</h3>

            <div className="grid grid-cols-2 gap-2">
              {group.items.map((skill, skillIndex) => (
                <div key={`skill-${skillIndex}`} className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl border border-white/5 bg-background/40 hover:bg-primary/5 hover:border-primary/20 transition-all duration-200 group/item">
                  <div className="relative size-8 shrink-0">
                    <Image className={cn(skill.label === "Next.js" && "dark:invert", "object-contain transition-transform duration-300 group-hover/item:scale-110")} src={skill.logo} alt={skill.label} fill />
                  </div>
                  <span className="font-bold text-[15px] text-center text-foreground/70 group-hover/item:text-foreground transition-colors truncate w-full">{skill.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.section>
    </div>
  )
}
