"use client"

import React, { useContext } from "react"
import translate from "@/lib/translate"

import { Building } from "lucide-react"
import { LanguageContext } from "@/providers/language"

export const AboutEducationSection = () => {
  const language = useContext(LanguageContext)

  return (
    <section>
      <h2 className="text-2xl dark:text-gray-400 font-bold mb-2 after:content-none after:h-2 after:rounded-md after:bg-primary after:w-10 relative after:">{translate("education", language)}</h2>
      <p className="flex justify-between items-center font-medium text-lg">
        <span className="inline-flex items-center gap-2">
          <Building className="size-4" /> {translate("zagizagUniversity", language)}
        </span>
        <span className="italic dark:text-gray-300 text-gray-500">{translate("zagizagUniversityDate", language)}</span>
      </p>
      <p>
        <span>{translate("zagizagUniversityMajor", language)}</span>
      </p>
    </section>
  )
}
