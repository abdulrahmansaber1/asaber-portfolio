"use client"

import Link from "next/link"
import ShinyButton from "@/components/ui/shiny-button"
import translate from "@/lib/translate"

import { useLanguage } from "@/hooks/use-language"
import { usePathname } from "next/navigation"

import { navbarURLs } from "./data"
import { cn, routes } from "@/lib"

import { LanguageSwitcher } from "../language-switcher"
import { ThemeSwitcher } from "../theme-switcher"
import { NavbarItem } from "./item"
import { Logo } from "../logo"

export const Navbar = () => {
  const language = useLanguage()
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "z-50 flex xl:border md:border dark:bg-transparent border-gray-200 dark:border-transparent dark:bg-darkBg bg-background/20 xl:flex-row md:flex-row gap-4 flex-col justify-between items-center my-4 max-w-screen-2xl rounded-full p-2 px-7 mx-auto",
        "hidden xl:flex md:flex",
        "dark:shadow-2xl shadow-sm",
        "bg-white"
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
                "px-3 py-2 rounded-md transition-all text-sm dark:hover:bg-accent font-semibold hover:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-50 flex gap-2"
              )}
            >
              {translate("cv", language)}
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
