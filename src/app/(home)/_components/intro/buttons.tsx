import { useContext } from "react"
import { routes } from "@/lib"

import { LanguageContext } from "@/providers/language"
import { LinkBtn } from "@/components/button"
import { ChevronsLeft, ChevronsRight, Target } from "lucide-react"

import translate from "@/lib/translate"

export const HomeIntroButtonsSection = () => {
  const language = useContext(LanguageContext)

  return (
    <section className="flex gap-2 justify-center">
      <LinkBtn href={routes.about}>
        {translate("aboutMe", language)}
        {language === "en" ? (
          <ChevronsRight className="size-4" />
        ) : (
          <ChevronsLeft className="size-4" />
        )}
      </LinkBtn>
      <LinkBtn href={routes.projects}>
        {translate("projects", language)} <Target className="size-4" />
      </LinkBtn>
    </section>
  )
}
