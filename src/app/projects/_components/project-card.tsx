"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { TProject } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Info, Eye, Sparkles } from "lucide-react"
import { useTranslations } from "next-intl"
import { ProjectHeader } from "./project-header"
import { cn } from "@/lib"
import { Button } from "@/components/ui/button"

type Props = {
  project: TProject
  index: number
}

export const ProjectCard = ({ project, index }: Props) => {
  const [sheetOpen, setSheetOpen] = useState(false)
  const translate = useTranslations()

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.3)]">
      {/* Image Section - Only clickable area for modal */}
      <div className="relative aspect-video w-full overflow-hidden cursor-pointer" onClick={() => setSheetOpen(true)}>
        <Image src={project.image || "/projects/back-end/food-orders.png"} alt={project.title} fill className="object-cover transition-all duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-50" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 bg-primary/10 backdrop-blur-sm">
          <div className="rounded-2xl bg-primary/90 p-4 backdrop-blur-xl border border-primary/30 transform scale-90 transition-transform duration-300 group-hover:scale-100 shadow-2xl">
            <Eye className="text-white size-7" />
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary/80 backdrop-blur-md border-primary/30 text-primary-foreground text-[11px] uppercase tracking-wider font-bold shadow-lg px-3 py-1.5">
            <Sparkles className="size-3 mr-1" />
            {project.tools[0] || "Project"}
          </Badge>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        <div className="space-y-3">
          <h3 className="text-xl font-bold leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">{project.title}</h3>
          <p className="text-sm text-muted-foreground/90 line-clamp-2 leading-relaxed">{project.shortBrief || project.description}</p>
        </div>

        {/* Tools Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tools.slice(0, 4).map((tool) => (
            <span key={tool} className="px-3 py-1.5 text-[11px] font-semibold rounded-lg bg-primary/8 border border-primary/15 text-primary/90 transition-all hover:bg-primary/15 hover:border-primary/25 hover:scale-105">
              {tool}
            </span>
          ))}
          {project.tools.length > 4 && <span className="px-3 py-1.5 text-[11px] font-semibold rounded-lg bg-muted/50 border border-white/10 text-muted-foreground/80">+{project.tools.length - 4}</span>}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center gap-2 pt-4 border-t border-white/5 mt-2">
          {project.github && (
            <Button asChild variant="outline" size="sm" className="flex-1 gap-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="size-4" />
                Code
              </a>
            </Button>
          )}
          {project.url && (
            <Button asChild variant="outline" size="sm" className="flex-1 gap-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-4" />
                Live
              </a>
            </Button>
          )}
          {project.viewUrl && (
            <Button asChild size="sm" className="flex-1 gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-primary/25 transition-all duration-300">
              <Link href={project.viewUrl}>
                <Info className="size-4" />
                Details
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute -top-24 -right-24 size-48 bg-primary/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 size-48 bg-secondary/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <ProjectHeader project={project} image={project.image || "/projects/back-end/food-orders.png"} index={index} sheetOpen={sheetOpen} setSheetOpen={setSheetOpen} />
    </motion.div>
  )
}
