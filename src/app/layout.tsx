import "./globals.css"

import { metadata as defaultMetadataCookie, rubikFont, interFont } from "@/lib"
import { cookies } from "next/headers"

import { Language } from "@/types"
import { Metadata } from "next"
import { ThemeProvider } from "@/providers/theme"
import { Navbar } from "@/components/widgets/navbar"
import { MobileNavbar } from "@/components/widgets/navbar/mobile/mobile-navbar"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"
import { NextIntlClientProvider } from "next-intl"
import { BackgroundGradient } from "@/components/widgets/common/background-gradient"

export const metadata: Metadata = defaultMetadataCookie

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const store = await cookies()
  const language = (store.get("lang")?.value || "en") as Language
  const font = language === "en" ? interFont.className : rubikFont.className
  const direction = language === "en" ? "ltr" : "rtl"

  return (
    <html lang={language} dir={direction}>
      <body className={font} style={{ direction }}>
        <NextIntlClientProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" themes={["light", "dark"]} enableSystem={true}>
            <BackgroundGradient />

            <Navbar />
            <MobileNavbar />
            <main className="xl:max-w-screen-2xl mx-auto z-10 px-6 pb-8">
              {children}
              <Toaster />
              <Analytics />
            </main>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
