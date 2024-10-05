import "./globals.css"

import { metadata as defaultMetadata, languageCookie, rubikFont, interFont } from "@/lib"
import { cookies } from "next/headers"

import { LanguageProvider } from "@/providers/language"
import { Language } from "@/types"
import { Metadata } from "next"
import { ThemeProvider } from "@/providers/theme"
import { Navbar } from "@/components/navbar"

import { Background } from "@/components/background"
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "@/components/ui/toaster"
import { MobileNavbar } from "@/components/navbar/mobile/mobile-navbar"

export const metadata: Metadata = defaultMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies()
  const language = (cookieStore.get(languageCookie)?.value || "en") as Language
  const font = language === "en" ? interFont.className : rubikFont.className
  const direction = language === "en" ? "ltr" : "rtl"

  return (
    <html lang={language} dir={direction}>
      <body className={font} style={{ direction }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={["light", "dark"]}
          enableSystem={true}
        >
          <LanguageProvider language={language}>
            <Navbar />
            <MobileNavbar />
            <main className="xl:max-w-screen-2xl mx-auto z-10 px-6">
              {children}
              <Toaster />
              <Background />
              <Analytics />
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
