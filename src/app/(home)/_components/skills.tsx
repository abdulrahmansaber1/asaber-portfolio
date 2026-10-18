"use client"

import { cn, groupedSkills, routes } from "@/lib"
import { motion, useInView } from "framer-motion"
import { ChevronsLeft, ChevronsRight, Zap } from "lucide-react"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import { useRef } from "react"
import { AnimatedTitle } from "@/components/widgets/common/animated-title"

export const HomeSkillsSection = () => {
  const language = useLocale()
  const translate = useTranslations()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <div ref={ref} className="space-y-14">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-5">

          <AnimatedTitle className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
            {translate("mySkills")}
          </AnimatedTitle>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href={routes.about} passHref>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-bold text-sm cursor-pointer shadow-[0_0_30px_-8px_rgba(49,46,129,0.4)] flex items-center gap-2 group"
            >
              {translate("moreAboutMe")}
              {language === "en" ? (
                <ChevronsRight className="size-4 transition-transform group-hover:translate-x-1" />
              ) : (
                <ChevronsLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              )}
            </motion.div>
          </Link>
        </motion.div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {groupedSkills.map((group, groupIndex) => (
          <motion.div
            key={`group-${groupIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.2 + groupIndex * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative p-6 rounded-3xl h-fit border border-white/[0.06] bg-gradient-to-br from-card/80 via-card/50 to-card/10 backdrop-blur-sm hover:border-primary/20 transition-all duration-500 overflow-hidden"
          >
            {/* Decorative gradient blob */}
            <div className="absolute -top-20 -right-20 size-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700 pointer-events-none" />

            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-muted-foreground/60 mb-6 group-hover:text-primary/70 transition-colors duration-500">
              {translate(group.group)}
            </h3>

            <div className="grid grid-cols-3 gap-2.5 relative z-10">
              {group.items.map((skill, skillIndex) => (
                <motion.div
                  key={`skill-${skillIndex}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl border border-white/[0.04] bg-background/30 hover:bg-primary/8 hover:border-primary/20 transition-all duration-300 cursor-default group/item"
                >
                  <div className="relative size-9 shrink-0">
                    <Image
                      className={cn(
                        skill.label === "Next.js" && "dark:invert",
                        "object-contain transition-all duration-300 group-hover/item:scale-110 group-hover/item:drop-shadow-[0_0_8px_rgba(99,102,241,0.3)]"
                      )}
                      src={skill.logo}
                      alt={skill.label}
                      fill
                    />
                  </div>
                  <span className="font-bold text-xs text-center text-foreground/60 group-hover/item:text-foreground transition-colors truncate w-full">
                    {skill.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  )
}
