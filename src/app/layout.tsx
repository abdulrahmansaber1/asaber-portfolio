import "./globals.css"

import { metadata as defaultMetadata, languageCookie, rubikFont, nunitoFont, interFont, cn } from "@/lib"
import { cookies } from "next/headers"

import { LanguageProvider } from "@/providers/language"
import { Language } from "@/types"
import { Metadata } from "next"
import { ThemeProvider } from "@/providers/theme"
import { Navbar } from "@/components/navbar"
import { SocialSidebar } from "@/components/social-sidebar"
import { Background } from "@/components/background"

export const metadata: Metadata = defaultMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies()
  const language = (cookieStore.get(languageCookie)?.value || "en") as Language
  const font = language === "en" ? interFont.className : rubikFont.className
  const direction = language === "en" ? "ltr" : "rtl"

  return (
    <html lang={language} dir={direction}>
      <body className={font} style={{ direction }}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} themes={["light", "dark"]}>
          <LanguageProvider language={language}>
            <Navbar />
            <main className="max-w-screen-2xl xl:p-0 p-8 mx-auto z-10">
              {children}
              <Background />
              <SocialSidebar />
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
