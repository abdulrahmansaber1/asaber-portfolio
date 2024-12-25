"use client"

import cookies from "js-cookie"
import translate from "@/lib/translate"

import { useRouter } from "next/navigation"
import { useLanguage } from "@/hooks/use-language"
import { cn, languageCookie } from "@/lib"

import { Button, ButtonProps } from "@/components/ui/button"
import { Language } from "@/types"
import { Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

type Props = ButtonProps & {
  label?: string
}

export function LanguageSwitcher({ label, className, size = "icon", variant = "ghost" }: Props) {
  const language = useLanguage()
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
          {!label && <span className="uppercase">{language}</span>}
          {label && <Globe className="size-5" />}
          {label && label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-none w-44 space-y-0.5">
        <DropdownMenuItem
          onClick={() => changeLanguage("ar")}
          className={cn("flex gap-2 items-center", language === "ar" && "bg-accent justify-end")}
        >
          {translate("arabic", language)}
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(
            "flex gap-2 items-center",
            language === "en" && "bg-accent",
            language === "ar" && "justify-end"
          )}
          onClick={() => changeLanguage("en")}
        >
          {translate("english", language)}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
