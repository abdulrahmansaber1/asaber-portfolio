"use client"

import React from "react"
import { motion } from "framer-motion"
import { TOtherProject } from "@/types"
import { Github, ArrowUpRight, Terminal } from "lucide-react"

type Props = {
  type: "ai" | "other"
  project: TOtherProject
  index: number
}

export const OtherProjectCard = ({ index, project }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative flex flex-col h-full p-6 rounded-xl border border-white/10 bg-card/30 backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(var(--primary),0.3)]"
    >
      <div className="flex-1 space-y-4">
        <div className="flex items-start justify-between">
          <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
            <Terminal className="size-6" />
          </div>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-primary">
            <ArrowUpRight className="size-5" />
          </a>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-white/5 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <span key={tool} className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-secondary/50 border border-white/5 text-muted-foreground">
              {tool}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm font-bold"
        >
          <Github className="size-4" />
          View Source
        </a>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -top-12 -right-12 size-24 bg-primary/5 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  )
}
