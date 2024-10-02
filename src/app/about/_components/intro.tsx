"use client"

import React, { useContext } from "react"
import translate from "@/lib/translate"

import { LanguageContext } from "@/providers/language"

export const AboutIntroSection = () => {
  const language = useContext(LanguageContext)

  return (
    <section>
      <h1 className="xl:text-6xl md:text-4xl text-4xl font-extrabold mb-6 first-letter:text-primary">{translate("aboutMe", language)}</h1>
      <p className="leading-6 text-sm">{translate("aboutMeDescription", language)}</p>
    </section>
  )
}
