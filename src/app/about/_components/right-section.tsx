"use client"

import { aboutPage } from "./data"
import IconCloud from "@/components/widgets/animated-widgets/icon-cloud"
import { motion } from "framer-motion"

export const AboutRightSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[500px] aspect-square flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 w-full h-full">
        <IconCloud iconSlugs={aboutPage.skills} />
      </div>

      {/* Subtle Decorative Background Glow */}
      <div className="absolute inset-0 bg-primary/5 blur-[120px] -z-10" />
    </motion.div>
  )
}
