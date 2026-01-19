"use server"

import { cookies } from "next/headers"
import { constants } from "./constants"
import { Language } from "@/types"

export async function getLanguage() {
  const store = await cookies()
  const locale = store.get(constants.languageCookieName)?.value || constants.defaultLanguage
  const mainLocale = constants.availableLanguages.includes(locale) ? locale : constants.defaultLanguage
  return mainLocale as Language
}
