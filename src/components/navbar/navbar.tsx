"use client"

import Link from "next/link"
import ShinyButton from "@/components/ui/shiny-button"

import { LanguageContext } from "@/providers/language"
import { ThemeSwitcher } from "../theme-switcher"
import { LanguageSwitcher } from "../language-switcher"
import { Logo } from "../logo"
import { Home } from "lucide-react"

import { useContext } from "react"

import translate from "@/lib/translate"
import { NavbarItem } from "./item"
import { navbarURLs } from "./data"

export const Navbar = () => {
  const language = useContext(LanguageContext)

  return (
    <div className="z-50 flex xl:border md:border bg-white dark:bg-transparent border-gray-200 dark:border-gray-600/30 bg-background/20 xl:flex-row md:flex-row gap-4 flex-col justify-between items-center my-4 max-w-screen-2xl rounded-full p-2 px-7 mx-auto shadow-md xl:shadow-none md:shadow-none">
      <section className="flex items-center gap-8">
        <ul className="flex items-center gap-1">
          {navbarURLs.map((item, index) => (
            <NavbarItem key={`nav-item-${index}`} {...item} />
          ))}
        </ul>
      </section>
      <Logo />

      <section className="flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <Link href="">
          <ShinyButton className="bg-indigo-900 rounded-md font-semibold capitalize text-white">{translate("workTogetherButton", language)}</ShinyButton>
        </Link>
      </section>
    </div>
  )
}
