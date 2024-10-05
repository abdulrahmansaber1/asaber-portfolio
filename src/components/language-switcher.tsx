"use client"

import { useRouter } from "next/navigation"
import { useContext } from "react"

import { Button, ButtonProps } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LanguageContext } from "@/providers/language"
import { Language } from "@/types"

import { cn, languageCookie } from "@/lib"

import cookies from "js-cookie"
import translate from "@/lib/translate"
import { Globe } from "lucide-react"

type Props = ButtonProps & {
  label?: string
}

export function LanguageSwitcher({ label, className, size = "icon", variant = "ghost" }: Props) {
  const language = useContext(LanguageContext)
  const router = useRouter()

  const changeLanguage = (language: Language) => {
    cookies.set(languageCookie, language)
    router.refresh()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size={size}
          className={cn("border-none transition-all flex gap-4", className)}
          variant={variant}
        >
          {!label && language}
          {label && <Globe className="size-5" />}
          {label && label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-none w-44 space-y-0.5">
        <DropdownMenuItem onClick={() => changeLanguage("ar")}>
          {translate("arabic", language)}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("en")}>
          {translate("english", language)}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
