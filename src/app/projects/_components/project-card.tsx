"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { TProject } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Info, Eye, Sparkles } from "lucide-react"
import { useLocale } from "next-intl"
import { ProjectHeader } from "./project-header"
import { Button } from "@/components/ui/button"
import { getProjectSummary } from "./translations"

type Props = {
  project: TProject
  index: number
}

export const ProjectCard = ({ project, index }: Props) => {
  const [sheetOpen, setSheetOpen] = useState(false)
  const locale = useLocale()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col h-full overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-card/80 via-card/40 to-card/20 backdrop-blur-xl transition-all duration-500"
    >
      {/* Hover border glow effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-primary/25 shadow-[inset_0_0_30px_-10px_rgba(99,102,241,0.1)]" />

      {/* Image Section */}
      <div className="relative aspect-[16/10] w-full overflow-hidden cursor-pointer" onClick={() => setSheetOpen(true)}>
        <Image
          src={project.image || "/logo/logo.png"}
          alt={project.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-primary/90 text-white text-sm font-bold backdrop-blur-xl border border-primary/30 shadow-2xl"
          >
            <Eye className="size-4" />
            Preview
          </motion.div>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-black/40 backdrop-blur-xl border-white/10 text-white text-[10px] uppercase tracking-[0.15em] font-bold shadow-lg px-3 py-1.5 rounded-xl">
            <Sparkles className="size-3 mr-1.5" />
            {project.tools[0] || "Project"}
          </Badge>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        <div className="space-y-2.5">
          <h3 className="text-lg font-bold leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground/70 line-clamp-2 leading-relaxed">
            {getProjectSummary(project, locale)}
          </p>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tools.slice(0, 4).map((tool) => (
            <span
              key={tool}
              className="px-2.5 py-1 text-[10px] font-bold rounded-lg bg-primary/[0.06] border border-primary/10 text-primary/70 transition-all hover:bg-primary/15 hover:border-primary/25 hover:text-primary"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 4 && (
            <span className="px-2.5 py-1 text-[10px] font-bold rounded-lg bg-muted/30 border border-white/5 text-muted-foreground/60">
              +{project.tools.length - 4}
            </span>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center gap-2 pt-4 border-t border-white/[0.04] mt-2">
          {project.github && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1 gap-2 rounded-xl border-white/10 bg-white/[0.02] hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 text-xs font-bold"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="size-3.5" />
                Code
              </a>
            </Button>
          )}
          {project.url && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1 gap-2 rounded-xl border-white/10 bg-white/[0.02] hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 text-xs font-bold"
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-3.5" />
                Live
              </a>
            </Button>
          )}
          {project.viewUrl && (
            <Button
              asChild
              size="sm"
              className="flex-1 gap-2 rounded-xl bg-gradient-to-r from-primary to-indigo-500 hover:from-primary/90 hover:to-indigo-500/90 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.5)] transition-all duration-300 text-xs font-bold"
            >
              <Link href={project.viewUrl}>
                <Info className="size-3.5" />
                Details
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Decorative corner glow */}
      <div className="absolute -top-20 -right-20 size-40 bg-primary/[0.06] blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 size-40 bg-indigo-500/[0.04] blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

      <ProjectHeader project={project} image={project.image || "/logo/logo.png"} index={index} sheetOpen={sheetOpen} setSheetOpen={setSheetOpen} />
    </motion.div>
  )
}
