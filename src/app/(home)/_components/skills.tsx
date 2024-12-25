"use client"

import translate from "@/lib/translate"

import { useContext } from "react"
import { cn, groupedSkills, routes } from "@/lib"
import { motion } from "framer-motion"

import { LinkBtn } from "@/components/button"
import { useLanguage } from "@/hooks/use-language"
import { ChevronsLeft, ChevronsRight } from "lucide-react"

import Image from "next/image"

export const HomeSkillsSection = () => {
  const language = useLanguage()

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  }

  return (
    <div>
      <section className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold">{translate("mySkills", language)}</h2>
        <LinkBtn href={routes.about}>
          {translate("moreAboutMe", language)}
          {language == "en" ? (
            <ChevronsRight className="size-4" />
          ) : (
            <ChevronsLeft className="size-4" />
          )}
        </LinkBtn>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-3 gap-4">
        {groupedSkills.map((group, index) => (
          <section key={`group-${index}`}>
            <p className="dark:text-gray-500 text-xl font-semibold mb-2">
              {translate(group.group, language)}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {group.items.map((skill, index) => (
                <motion.div
                  variants={variants}
                  initial={"initial"}
                  whileInView={"animate"}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative gap-4 px-4 p-2 border text-center rounded-md border-accent flex items-center hover:ring hover:ring-indigo-700 transition-shadow"
                  key={`skill-${index}-${skill.label}`}
                >
                  <Image
                    className={cn(skill.label === "Next.js" && "dark:invert")}
                    src={skill.logo}
                    alt={skill.label}
                    width={30}
                    height={30}
                  />
                  <span>{skill.label}</span>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </section>
    </div>
  )
}
