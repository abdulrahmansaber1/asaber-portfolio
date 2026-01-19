import { cookies } from "next/headers"
import { getRequestConfig } from "next-intl/server"

export default getRequestConfig(async () => {
  const store = await cookies()
  const language = store.get("lang")?.value || "en"
  const locale = ["en", "ar"].includes(language) ? language : "en"

  return {
    locale,
    messages: (await import(`../languages/${locale}.json`)).default,
  }
})
