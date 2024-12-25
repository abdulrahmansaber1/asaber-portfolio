"use client"

import React, { useContext } from "react"
import translate from "@/lib/translate"

import { Building } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export const AboutEducationSection = () => {
  const language = useLanguage()

  return (
    <section>
      <h2 className="text-2xl dark:text-gray-400 font-bold mb-2 after:content-none after:h-2 after:rounded-md after:bg-primary after:w-10 relative after:">
        {translate("education", language)}
      </h2>
      <p className="flex justify-between items-center font-medium text-lg">
        <span className="inline-flex items-center gap-2">
          <Building className="size-4 hidden xl:block md:block" />{" "}
          {translate("zagizagUniversity", language)}
        </span>
        <span className="italic dark:text-gray-300 text-gray-500 p-1 px-3 font-semibold rounded-md bg-accent text-xs">
          {translate("zagizagUniversityDate", language)}
        </span>
      </p>
      <p className="xl:ml-6 md:ml-6 xl:text-lg text-sm mt-0.5">
        <span>{translate("zagizagUniversityMajor", language)}</span>
      </p>
    </section>
  )
}
