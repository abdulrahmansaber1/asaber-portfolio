"use client"

import { useLocale, useTranslations } from "next-intl"
import { motion } from "framer-motion"

type Props = {
  title: string
}

export const ProjectPageTitle = ({ title }: Props) => {
  const translate = useTranslations()
  const locale = useLocale()
  return (
    <div className="relative inline-block">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50 uppercase"
      >
        {translate(title)}
      </motion.h1>
    </div>
  )
}
