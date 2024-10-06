"use client"

import Link from "next/link"
import ShinyButton from "@/components/ui/shiny-button"
import translate from "@/lib/translate"

import { useContext } from "react"
import { navbarURLs } from "./data"
import { cn, routes } from "@/lib"

import { LanguageContext } from "@/providers/language"
import { LanguageSwitcher } from "../language-switcher"
import { ThemeSwitcher } from "../theme-switcher"
import { NavbarItem } from "./item"
import { Logo } from "../logo"
import { usePathname } from "next/navigation"

export const Navbar = () => {
  const language = useContext(LanguageContext)
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "z-50 flex xl:border md:border bg-white dark:bg-transparent border-gray-200 dark:border-gray-600/30 bg-background/20 xl:flex-row md:flex-row gap-4 flex-col justify-between items-center my-4 max-w-screen-2xl rounded-full p-2 px-7 mx-auto shadow-md xl:shadow-none md:shadow-none",
        "hidden xl:flex md:flex"
      )}
    >
      <section className="flex items-center gap-8">
        <ul className="flex items-center gap-1">
          {navbarURLs.map((item, index) => (
            <NavbarItem key={`nav-item-${index}-${item.label}`} {...item} />
          ))}
          <li>
            <a
              href={"/cv.pdf"}
              download="/cv.pdf"
              className={cn(
                "block px-3 py-2 rounded-md transition-all text-sm dark:hover:bg-accent font-semibold hover:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-50",
                pathname.endsWith("/cv.pdf")
                  ? "bg-primary hover:bg-primary dark:hover:bg-primary text-gray-50 dark:text-gray-50"
                  : "text-gray-600 dark:text-gray-300"
              )}
            >
              CV
            </a>
          </li>
        </ul>
      </section>

      <Logo />

      <section className="flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <Link href={routes.workTogether}>
          <ShinyButton className="bg-indigo-900 rounded-md font-semibold capitalize text-white">
            {translate("workTogetherButton", language)}
          </ShinyButton>
        </Link>
      </section>
    </div>
  )
}
