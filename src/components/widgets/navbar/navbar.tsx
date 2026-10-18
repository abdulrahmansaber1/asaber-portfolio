"use client"

import Link from "next/link"

import { navbarURLs } from "./data"
import { cn, routes } from "@/lib"

import { NavbarItem } from "./item"
import { useTranslations } from "next-intl"
import { LanguageSwitcher } from "../common/language-switcher"
import { Logo } from "../common/logo"
import { ThemeSwitcher } from "../common/theme-switcher"
import { RetroButton } from "@/components/retroui/Button"
import { motion, AnimatePresence } from "framer-motion"
import { FileDown, ArrowDownToLine, FileText } from "lucide-react"

export const Navbar = () => {
  const translate = useTranslations()

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-4 z-50 md:mx-6 xl:mx-auto                      flex items-center justify-between gap-4 py-2 px-2 mx-auto max-w-screen-2xl rounded-full border border-primary/10 dark:border-white/10 bg-background/80 dark:bg-background/60 backdrop-blur-xl shadow-2xl hidden lg:flex"
    >
      {/* Left Section: Nav Links */}
      <section className="flex-1 flex items-center justify-start">
        <ul className="flex items-center gap-1">
          {navbarURLs.map((item, index) => (
            <NavbarItem key={`nav-item-${index}-${item.label}`} {...item} />
          ))}
          <li>
            <motion.a
              href="/cv.pdf"
              download
              whileHover="hover"
              whileTap="tap"
              variants={{
                hover: { scale: 1.05, y: -2 },
                tap: { scale: 0.98, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative flex items-center gap-3 px-4 py-2 rounded-full text-sm font-black text-muted-foreground hover:text-foreground transition-colors duration-500 group overflow-hidden bg-secondary/10 border border-primary/5 will-change-transform"
            >
              <div className="relative size-4 overflow-hidden">
                <motion.div variants={{ hover: { y: 25 } }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="absolute inset-0 flex items-center justify-center">
                  <FileText className="size-4" />
                </motion.div>
                <motion.div
                  variants={{ hover: { y: 0 } }}
                  initial={{ y: -25 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute inset-0 flex items-center justify-center text-primary"
                >
                  <ArrowDownToLine className="size-4" />
                </motion.div>
              </div>
              <span className="relative z-10 tracking-tight">{translate("cv")}</span>
            </motion.a>
          </li>
        </ul>
      </section>

      {/* Center Section: Logo */}
      <section className="flex items-center justify-center">
        <Logo />
      </section>

      {/* Right Section: Utilities */}
      <section className="flex-1 flex items-center justify-end gap-4">
        <div className="flex items-center gap-1 p-1 border rounded-full  bg-secondary/50 border border-primary/10">
          <LanguageSwitcher className="size-10 rounded-full" />
          <ThemeSwitcher className="size-10 rounded-full" />
        </div>
        <Link href={routes.workTogether} passHref>
          <RetroButton size="sm" className="font-bold h-[50px] px-6 rounded-full border-primary/20 shadow-none hover:translate-y-0 active:translate-y-0">
            {translate("workTogetherButton")}
          </RetroButton>
        </Link>
      </section>
    </motion.div>
  )
}
