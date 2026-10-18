"use client"

import { backEndProjects } from "@/app/projects/_components/data"
import { ProjectCard } from "@/app/projects/_components/project-card"
import { useTranslations } from "next-intl"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { AnimatedTitle } from "@/components/widgets/common/animated-title"
import { Rocket } from "lucide-react"
import Link from "next/link"
import { routes } from "@/lib"

export const HomeLatestProjects = () => {
  const translate = useTranslations()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <div ref={ref} className="space-y-14">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-5">
          <AnimatedTitle className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
            {translate("latestProjects")}
          </AnimatedTitle>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href={routes.projects} passHref>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-2xl border-2 border-primary/20 bg-primary/5 text-foreground font-bold text-sm cursor-pointer hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm"
            >
              {translate("projects")} →
            </motion.div>
          </Link>
        </motion.div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {backEndProjects.slice(0, 3).map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.2 + index * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <ProjectCard index={index} project={project} />
          </motion.div>
        ))}
      </section>
    </div>
  )
}
