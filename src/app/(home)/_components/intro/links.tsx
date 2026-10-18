"use client"

import Link from "next/link"

import { homePage } from "../data"
import { cn, links } from "@/lib"

import { FileIcon, ExternalLink, Github, Linkedin, Download } from "lucide-react"
import { useLocale } from "next-intl"
import { motion } from "framer-motion"

export const HomeIntroLinksSection = () => {
  const language = useLocale()

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="flex gap-2 justify-center items-center"
    >
      <motion.div
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href={links.linkedin}
          target="_blank"
          className={cn(
            "flex gap-2 items-center px-4 py-2.5 rounded-xl text-sm font-bold",
            "bg-card/50 border border-white/10 backdrop-blur-sm",
            "text-foreground border-primary/30 bg-primary/5",
            "transition-all duration-300",
            language === "en" ? "flex-row" : "flex-row-reverse"
          )}
        >
          <Linkedin className="size-4" />
          <span>Linkedin</span>
          <ExternalLink className="size-3 opacity-40" />
        </Link>
      </motion.div>

      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
        <a
          href={"/cv.pdf"}
          download={"cv.pdf"}
          className={cn(
            "flex gap-2 items-center px-4 py-2.5 rounded-xl text-sm font-bold",
            "bg-primary/10 border border-primary/20 backdrop-blur-sm",
            "text-primary hover:bg-primary/15 hover:border-primary/40",
            "transition-all duration-300",
            language === "en" ? "flex-row" : "flex-row-reverse"
          )}
        >
          <Download className="size-4" />
          <span>Resume</span>
          <FileIcon className="size-4" />
        </a>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href={links.github}
          target="_blank"
          className={cn(
            "flex gap-2 items-center px-4 py-2.5 rounded-xl text-sm font-bold",
            "bg-card/50 border border-white/10 backdrop-blur-sm",
            "text-foreground border-primary/30 bg-primary/5",
            "transition-all duration-300",
            language === "en" ? "flex-row" : "flex-row-reverse"
          )}
        >
          <Github className="size-4" />
          <span>Github</span>
          <ExternalLink className="size-3 opacity-40" />
        </Link>
      </motion.div>

    </motion.section>
  )
}
