"use client"

import React, { useContext } from "react"
import translate from "@/lib/translate"

import WordPullUp from "@/components/ui/word-pull-up"

import { useLanguage } from "@/hooks/use-language"

export const AboutIntroSection = () => {
  const language = useLanguage()

  return (
    <section>
      <WordPullUp
        className="xl:text-6xl md:text-4xl text-4xl font-extrabold mb-6"
        words={translate("aboutMe", language)}
      />
      <p className="leading-6 text-sm">{translate("aboutMeDescription", language)}</p>
    </section>
  )
}
