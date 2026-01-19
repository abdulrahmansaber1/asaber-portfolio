"use client"

import { contact } from "@/lib"
import { useTranslations } from "next-intl"

type Props = {}
export const ContactRightSectionHeader = ({}: Props) => {
  const translate = useTranslations()

  return (
    <section className="space-y-2">
      <h2 className="xl:text-4xl text-3xl font-semibold first-letter:text-primary">{translate("contactPageSecondaryTitle")}</h2>
      <p className="xl:text-lg text-sm text-gray-400">
        {translate("contactPagePara1")}{" "}
        <a className="font-semibold underline" href={contact.whatsapp} target="_blank">
          {translate("whatsapp")}
        </a>{" "}
        {translate("message")}.
      </p>
    </section>
  )
}
