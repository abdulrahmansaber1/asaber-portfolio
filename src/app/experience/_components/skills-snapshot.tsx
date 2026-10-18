"use client"

import { motion } from "framer-motion"
import { useLocale } from "next-intl"
import Image from "next/image"
import { cn } from "@/lib"

const skillsSnapshot = [
  { label: "Next.js", logo: "/skills/web/nextjs.svg" },
  { label: "React.js", logo: "/skills/web/react.svg" },
  { label: "TypeScript", logo: "/skills/web/typescript.svg" },
  { label: "Laravel", logo: "/skills/web/laravel.svg" },
  { label: "PHP", logo: "/skills/web/php.svg" },
  { label: "Node.js", logo: "/skills/web/nodejs.svg" },
  { label: "NestJS", logo: "/skills/web/nestjs.svg" },
  { label: "MySQL", logo: "/skills/web/mysql.svg" },
  { label: "PostgreSQL", logo: "/skills/web/postgresql.svg" },
  { label: "Docker", logo: "/skills/devops/docker.svg" },
  { label: "TailwindCSS", logo: "/skills/web/tailwindcss.svg" },
  { label: "Python", logo: "/skills/web/python.svg" },
]

export const ExperienceSkillsSnapshot = () => {
  const locale = useLocale()
  const isRTL = locale === "ar"

  return (
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn("space-y-1", isRTL && "text-right")}
      >
        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-foreground/50 flex items-center gap-3" style={isRTL ? { justifyContent: "flex-end" } : {}}>
          <span className="size-1.5 rounded-full bg-primary" />
          {isRTL ? "المهارات التقنية" : "Tech Stack & Skills"}
        </h2>
        <p className={cn("text-muted-foreground text-sm max-w-lg", isRTL && "mr-0 ml-auto")}>
          {isRTL
            ? "الأدوات والتقنيات التي أستخدمها بشكل يومي في مشاريعي المهنية."
            : "Tools and technologies I use daily across my professional projects."}
        </p>
      </motion.div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
        {skillsSnapshot.map((skill, i) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.06, y: -3 }}
            className="group relative"
          >
            <div className="relative flex flex-col items-center gap-2.5 p-3 md:p-4 rounded-xl border border-white/5 bg-secondary/5 hover:border-primary/25 hover:bg-secondary/10 transition-all duration-300 overflow-hidden cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <div className="relative size-8 md:size-9 flex-shrink-0">
                <Image
                  src={skill.logo}
                  alt={skill.label}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="relative text-[10px] md:text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-200 text-center leading-tight">
                {skill.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
