"use client"

import Image from "next/image"
import React, { useContext } from "react"
import ShimmerButton from "@/components/ui/shimmer-button"
import translate from "@/lib/translate"

import { LanguageContext } from "@/providers/language"

import { skills } from "@/lib/skills"
import { motion } from "framer-motion"
import { cn } from "@/lib"

export const AboutSkillsSection = () => {
  const language = useContext(LanguageContext)

  return (
    <section>
      <h2 className="text-2xl dark:text-gray-400 font-bold mb-2 after:content-none after:h-2 after:rounded-md after:bg-primary after:w-10 relative after:">{translate("skills", language)}</h2>
      <section className="flex flex-wrap mx-auto gap-1 max-w-screen-lg">
        {skills.map((skill, index) => (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} className="relative" key={index}>
            <ShimmerButton className="shadow-2xl flex gap-2 py-2">
              <Image className={cn((skill.label === "Next.js" || skill.label === "Tailwind CSS") && "invert", "size-4")} src={skill.logo} alt={skill.label} width={20} height={20} />
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-gray-300 lg:text-lg">{skill.label}</span>
            </ShimmerButton>
          </motion.div>
        ))}
      </section>
    </section>
  )
}
