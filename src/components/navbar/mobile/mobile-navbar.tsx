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
            <SheetTitle className="dark:text-white flex gap-4 items-center">
              <Logo />
              <p className="first-letter:text-primary">Abdulrahman Saber</p>
            </SheetTitle>
          </SheetHeader>

          <ul className="space-y-1">
            {navbarURLs.map((item, index) => (
              <li key={index + item?.label} onClick={handleClose}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-md dark:hover:bg-[#222] block transition-colors",
                    pathname === item.href
                      ? "bg-primary text-white"
                      : "text-black dark:text-white hover:bg-primary hover:text-white"
                  )}
                >
                  {translate(item.label, language)}
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  )
}
