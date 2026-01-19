"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { useRouter } from "next/navigation"

export const GoBackLink = () => {
  const translate = useTranslations()
  const locale = useLocale()
  const router = useRouter()
  const Icon = locale === "en" ? ChevronLeft : ChevronRight

  return (
    <Button onClick={() => router.back()} variant="ghost" className="text-xl gap-2 hover:bg-transparent hover:underline px-0">
      <Icon className="size-6" />
      {translate("goBack")}
    </Button>
  )
}
