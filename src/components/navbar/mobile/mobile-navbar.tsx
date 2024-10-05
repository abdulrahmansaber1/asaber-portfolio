"use client"

import { useContext, useState } from "react"
import { usePathname } from "next/navigation"

import { navbarURLs } from "../data"
import { cn } from "@/lib"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/logo"
import { Menu } from "lucide-react"
import { LanguageContext } from "@/providers/language"

import translate from "@/lib/translate"
import ShinyButton from "@/components/ui/shiny-button"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeSwitcher } from "@/components/theme-switcher"

export const MobileNavbar = () => {
  const [open, setOpen] = useState(true)

  const language = useContext(LanguageContext)
  const pathname = usePathname()

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div
      className={cn(
        "flex items-center justify-between p-8 py-3",
        "z-50 flex border-b bg-white dark:bg-transparent border-gray-200 dark:border-gray-600/30 bg-background/20 rounded-md mx-auto shadow-md xl:shadow-none md:shadow-none",
        "xl:hidden md:hidden lg:hidden flex"
      )}
    >
      <Logo />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <ShinyButton className="px-2 border dark:border-gray-600/30 text-black dark:text-white">
            <Menu className="size-4 text-black dark:text-white" />
          </ShinyButton>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mb-4">
            <SheetTitle className="dark:text-white flex gap-4 items-center justify-center">
              <Logo />
            </SheetTitle>
          </SheetHeader>

          <ul className="space-y-1">
            {navbarURLs.map(({ href, label, icon: Icon }, index) => (
              <li key={index + label} onClick={handleClose}>
                <Link
                  href={href}
                  className={cn(
                    "flex gap-4 items-center px-4 py-2 rounded-md dark:hover:bg-[#222] transition-colors",
                    pathname === href
                      ? "bg-primary text-white dark:hover:bg-primary"
                      : "text-black dark:text-white hover:bg-primary hover:text-white"
                  )}
                >
                  {Icon && <Icon className="size-4 inline-block mr-2" />}
                  {translate(label, language)}
                </Link>
              </li>
            ))}
          </ul>

          <Separator className="bg-[#222] mt-4" />

          <section className="flex flex-col gap-2 mt-4">
            <LanguageSwitcher
              label={translate("switchLanguage", language)}
              className="w-full justify-start text-sm bg-[#222] hover:bg-[#333]"
              size="sm"
              variant="default"
            />
            <ThemeSwitcher
              label={translate("switchTheme", language)}
              className="w-full justify-start text-sm bg-[#222] hover:bg-[#333]"
              size="sm"
              variant="ghost"
            />
          </section>
        </SheetContent>
      </Sheet>
    </div>
  )
}
