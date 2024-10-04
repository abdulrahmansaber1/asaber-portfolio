"use client"

import translate from "@/lib/translate"

import Image from "next/image"

import { useContext } from "react"
import { links } from "@/lib"

import { LanguageContext } from "@/providers/language"
import { ChevronsLeft, ChevronsRight } from "lucide-react"

export const AboutLastAchievement = () => {
  const language = useContext(LanguageContext)

  return (
    <section>
      <h2 className="text-2xl dark:text-gray-400 font-bold mb-2 after:content-none after:h-2 after:rounded-md after:bg-primary after:w-10 relative after:">
        {translate("lastAchievement", language)}
      </h2>
      <section className="flex items-center gap-2">
        <Image
          src="/skills/aws.png"
          alt="AWS Logo"
          width={80}
          height={80}
          className="rounded-sm h-fit hidden xl:block"
        />
        <section className="w-full">
          <p className="text-sm dark:text-gray-400 flex items-center justify-between w-full">
            <span className="line-clamp-1">
              AWS Academy Graduate - AWS Academy Cloud Foundations
            </span>
            <span className="italic line-clamp-1 dark:text-gray-300 text-gray-500 p-1 px-3 font-semibold rounded-md bg-accent text-xs">
              {translate("issuedAt", language)} {translate("issudeDate", language)}
            </span>
          </p>
          <a
            href={links.awsCertificate}
            className="text-xs text-blue-500 inline-flex gap-1 items-center"
            target="_blank"
          >
            {translate("viewCredentials", language)}
            {language === "en" ? <ChevronsRight className="size-3" /> : <ChevronsLeft size={16} />}
          </a>
        </section>
      </section>
    </section>
  )
}
