"use client"

import { Button } from "./ui/button"
import { useLanguage } from "@/hooks/use-language"
import { ChevronLeft, ChevronRight } from "lucide-react"
import translate from "@/lib/translate"
import { useRouter } from "next/navigation"

export const GoBackLink = () => {
  const language = useLanguage()
  const router = useRouter()
  const Icon = language === "en" ? ChevronLeft : ChevronRight

  return (
    <Button
      onClick={() => router.back()}
      variant="ghost"
      className="text-xl gap-2 hover:bg-transparent hover:underline px-0"
    >
      <Icon className="size-6" />
      {translate("goBack", language)}
    </Button>
  )
}
