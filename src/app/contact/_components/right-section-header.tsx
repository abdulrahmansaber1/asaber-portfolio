"use client"

import { contact } from "@/lib"
import { useContext } from "react"

import { LanguageContext } from "@/providers/language"

import translate from "@/lib/translate"

type Props = {}
export const ContactRightSectionHeader = ({}: Props) => {
  const language = useContext(LanguageContext)

  return (
    <section className="space-y-2">
      <h2 className="xl:text-4xl text-3xl font-semibold first-letter:text-primary">
        {translate("contactPageSecondaryTitle", language)}
      </h2>
      <p className="xl:text-lg text-sm text-gray-400">
        {translate("contactPagePara1", language)}{" "}
        <a className="font-semibold underline" href={contact.whatsapp} target="_blank">
          {translate("whatsapp", language)}
        </a>{" "}
        {translate("message", language)}.
      </p>
    </section>
  )
}
