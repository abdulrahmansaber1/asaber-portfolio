"use client"

import translate from "@/lib/translate"
import ShinyButton from "@/components/ui/shiny-button"

import { useContext, useState } from "react"
import { navbarURLs } from "../data"
import { cn, routes } from "@/lib"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSwitcher } from "@/components/language-switcher"
import { LanguageContext } from "@/providers/language"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/logo"
import { FileIcon, Menu } from "lucide-react"
import { MobileNavbarLink } from "./item"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false)

  const language = useContext(LanguageContext)
  const pathname = usePathname()

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div
      className={cn(
        "p-8 py-3",
        "flex items-center justify-between",
        "z-50 border-b bg-white dark:bg-transparent border-gray-200 dark:border-gray-600/30 bg-background/20 rounded-md mx-auto shadow-sm xl:shadow-none md:shadow-none",
        "xl:hidden md:hidden lg:hidden"
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
            <SheetTitle
              onClick={handleClose}
              className="dark:text-white flex gap-4 items-center justify-center"
            >
              <Logo />
            </SheetTitle>
          </SheetHeader>

          <ul className="space-y-1">
            {navbarURLs.map(({ href, label, icon: Icon }, index) => (
              <MobileNavbarLink
                handleClose={handleClose}
                key={index + label}
                label={label}
                icon={Icon}
                href={href}
              />
            ))}

            <li>
              <a
                href={"/cv.pdf"}
                download="/cv.pdf"
                className={cn(
                  "flex gap-4 items-center px-4 py-1.5 rounded-md dark:hover:bg-[#222] transition-colors text-sm",
                  pathname === "/cv.pdf"
                    ? "bg-[#222] text-white dark:hover:bg-[#222]"
                    : "text-black dark:text-white hover:bg-[#222] hover:text-white"
                )}
              >
                <FileIcon className="size-5" />
                CV
              </a>
            </li>
          </ul>

          <Separator className="dark:bg-[#222] mt-4 bg-gray-300" />

          <section className="flex flex-col gap-1 mt-4">
            <LanguageSwitcher
              label={translate("switchLanguage", language)}
              className="w-full justify-start text-sm hover:bg-[#333] dark:hover:bg-[#333] text-black dark:text-white hover:text-white"
              size="sm"
              variant="ghost"
            />
            <ThemeSwitcher
              label={translate("switchTheme", language)}
              className="w-full justify-start text-sm hover:bg-[#333] dark:hover:bg-[#333] text-black dark:text-white hover:text-white"
              size="sm"
              variant="ghost"
            />
          </section>

          <Separator className="dark:bg-[#222] mt-4 bg-gray-300" />

          <Link href={routes.workTogether} className="mt-4 block w-full">
            <ShinyButton
              onClick={handleClose}
              className="bg-indigo-900 rounded-md font-semibold capitalize text-white w-full"
            >
              {translate("workTogetherButton", language)}
            </ShinyButton>
          </Link>
        </SheetContent>
      </Sheet>
    </div>
  )
}
