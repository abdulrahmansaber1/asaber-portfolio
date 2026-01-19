"use client"

import { routes } from "@/lib"
import { ChevronsLeft, ChevronsRight, Target } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { RetroButton } from "@/components/retroui/Button"
import Link from "next/link"
import { motion } from "framer-motion"

export const HomeIntroButtonsSection = () => {
  const language = useLocale()
  const translate = useTranslations()

  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-wrap gap-4 justify-center pt-4">
      <Link href={routes.about} passHref>
        <RetroButton size="lg" className="font-bold min-w-[160px]">
          {translate("aboutMe")}
          {language === "en" ? <ChevronsRight className="ml-2 size-5" /> : <ChevronsLeft className="mr-2 size-5" />}
        </RetroButton>
      </Link>
      <Link href={routes.projects} passHref>
        <RetroButton variant="secondary" size="lg" className="font-bold min-w-[160px] shadow-none hover:shadow-none">
          {translate("projects")} <Target className="ml-2 size-5" />
        </RetroButton>
      </Link>
    </motion.section>
  )
}
