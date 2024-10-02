"use client"

import { useRouter } from "next/navigation"
import { useContext } from "react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LanguageContext } from "@/providers/language"
import { Language } from "@/types"

import { languageCookie } from "@/lib"

import cookies from "js-cookie"
import translate from "@/lib/translate"

export function LanguageSwitcher() {
  const language = useContext(LanguageContext)
  const router = useRouter()

  const changeLanguage = (language: Language) => {
    cookies.set(languageCookie, language)
    router.refresh()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className="border-none transition-all uppercase" variant="ghost">
          {language}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-none w-44 space-y-0.5">
        <DropdownMenuItem onClick={() => changeLanguage("ar")}>{translate("arabic", language)}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("en")}>{translate("english", language)}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
