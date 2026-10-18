"use client"

import React from "react"
import { motion } from "framer-motion"
import { TOtherProject } from "@/types"
import { Github, ArrowUpRight, Cpu, Terminal } from "lucide-react"
import { useLocale } from "next-intl"
import { getProjectDescription } from "./translations"

type Props = {
  type: "ai" | "other"
  project: TOtherProject
  index: number
}

export const OtherProjectCard = ({ index, project, type }: Props) => {
  const locale = useLocale()
  const description = getProjectDescription(project, locale)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative flex flex-col justify-between h-full p-6 sm:p-7 rounded-3xl border border-white/10 bg-card/40 backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_20px_40px_-15px_rgba(var(--primary),0.25)]"
    >
      {/* Background radial glow */}
      <div className="absolute -top-24 -right-24 size-48 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent pointer-events-none" />

      <div className="relative z-10 space-y-4">
        {/* Header icon and external link */}
        <div className="flex items-center justify-between">
          <div className="size-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-md">
            {type === "ai" ? <Cpu className="size-6" /> : <Terminal className="size-6" />}
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200"
              aria-label="View source repository"
            >
              <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>

        {/* Title and description */}
        <div className="space-y-2.5">
          <h3 className="text-xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      {/* Footer tags and action */}
      <div className="relative z-10 mt-6 pt-5 border-t border-white/10 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-secondary/60 border border-white/5 text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 hover:bg-primary hover:text-primary-foreground border border-white/10 transition-all duration-300 text-xs font-bold shadow-sm"
          >
            <Github className="size-4" />
            <span>View Source</span>
          </a>
        )}
      </div>
    </motion.div>
  )
}
