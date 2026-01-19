import { Language } from "@/types"
import clsx from "clsx"
import { ClassNameValue, twMerge } from "tailwind-merge"

export function cn(...classes: ClassNameValue[]) {
  return twMerge(clsx(classes))
}

export function loadDirection(locale: Language) {
  return locale === "ar" ? "rtl" : "ltr"
}
