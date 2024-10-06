import Link from "next/link"
import translate from "@/lib/translate"

import { useContext } from "react"
import { homePage } from "../data"
import { cn } from "@/lib"

import { LanguageContext } from "@/providers/language"
import { FileIcon } from "lucide-react"

export const HomeIntroLinksSection = () => {
  const language = useContext(LanguageContext)

  return (
    <section className="flex gap-6 justify-center">
      {homePage.introLinks.map(({ href, icon: Icon, title }, index) => (
        <Link
          href={href}
          key={`intro-link-${index}`}
          className={cn(
            "flex gap-1 items-center dark:text-gray-300 text-gray-600 font-normal text-lg",
            "transition-colors dark:hover:text-gray-50 hover:text-black",
            language === "en" ? "flex-row" : "flex-row-reverse"
          )}
        >
          <Icon className="size-4" />
          <span>{title}</span>
        </Link>
      ))}
      <a
        href={"/cv.pdf"}
        download={"cv.pdf"}
        className={cn(
          "flex gap-1 items-center dark:text-gray-300 text-gray-600 font-normal text-lg",
          "transition-colors dark:hover:text-gray-50 hover:text-black",
          language === "en" ? "flex-row" : "flex-row-reverse"
        )}
      >
        <FileIcon className="size-4" />
        <span>Resume</span>
      </a>
    </section>
  )
}
