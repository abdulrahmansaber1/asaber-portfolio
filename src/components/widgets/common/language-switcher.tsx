"use client"

import { setCookie } from "cookies-next/client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Language } from "@/types"
import { Globe } from "lucide-react"
import { useLocale } from "next-intl"
import { cn } from "@/lib"

type Props = any

export function LanguageSwitcher({ label, className, size = "icon", variant = "ghost" }: Props) {
  const language = useLocale()
  const router = useRouter()

  const toggleLanguage = () => {
    const nextLanguage: Language = language === "en" ? "ar" : "en"
    setCookie("lang", nextLanguage)
    router.refresh()
  }

  return (
    <Button 
      size={size} 
      className={cn("border-none transition-all flex gap-4", className)} 
      variant={variant}
      onClick={toggleLanguage}
    >
      {!label && <span className="uppercase font-bold text-xs">{language}</span>}
      {label && <Globe className="size-5" />}
      {label && label}
    </Button>
  )
}
