"use client"

import Link from "next/link"

import { usePathname } from "next/navigation"
import { useState } from "react"
import { navbarURLs } from "../data"
import { cn, routes } from "@/lib"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { MobileNavbarLink } from "./item"
import { FileDown, ArrowDownToLine, FileText, Menu } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useTranslations } from "next-intl"
import { LanguageSwitcher } from "../../common/language-switcher"
import { Logo } from "../../common/logo"
import { ThemeSwitcher } from "../../common/theme-switcher"
import { RetroButton } from "@/components/retroui/Button"
import { motion, AnimatePresence } from "framer-motion"

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false)

  const pathname = usePathname()
  const translate = useTranslations()

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between p-4 border-b border-primary/10 dark:border-white/10 bg-background/80 dark:bg-background/60 backdrop-blur-xl md:hidden">
      <Logo />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20">
            <Menu className="size-6" />
          </button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[300px] border-l border-primary/10 bg-background/95 backdrop-blur-xl p-6">
          <SheetHeader className="mb-8">
            <SheetTitle onClick={handleClose} className="flex justify-center">
              <Logo />
            </SheetTitle>
          </SheetHeader>

          <nav className="space-y-6">
            <ul className="space-y-2">
              {navbarURLs.map(({ href, label, icon: Icon }, index) => (
                <MobileNavbarLink handleClose={handleClose} key={index + label} label={label} icon={Icon} href={href} />
              ))}

              <li>
                <motion.a
                  href="/cv.pdf"
                  download
                  whileHover="hover"
                  whileTap="tap"
                  variants={{
                    hover: { x: 5 },
                    tap: { scale: 0.98 },
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className={cn(
                    "relative flex items-center gap-4 px-4 py-3 rounded-lg transition-all font-black group overflow-hidden bg-secondary/10 border border-primary/5 will-change-transform",
                    pathname === "/cv.pdf" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary",
                  )}
                >
                  {/* Animated Background Glow */}
                  <motion.div
                    variants={{
                      hover: { opacity: 1, scale: 1.2 },
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 bg-primary/5 blur-2xl -z-10"
                  />

                  {/* Shimmer Effect */}
                  <motion.div
                    variants={{
                      hover: { x: ["-100%", "200%"] },
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -skew-x-12 -z-10"
                  />

                  {/* Sliding Icon Animation */}
                  <div className="relative size-5 overflow-hidden">
                    <motion.div
                      variants={{
                        hover: { y: 25 },
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <FileText className="size-5" />
                    </motion.div>
                    <motion.div
                      variants={{
                        hover: { y: 0 },
                      }}
                      initial={{ y: -25 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="absolute inset-0 flex items-center justify-center text-primary"
                    >
                      <ArrowDownToLine className="size-5" />
                    </motion.div>
                  </div>

                  <span className="relative z-10">{translate("cv")}</span>
                </motion.a>
              </li>
            </ul>

            <Separator className="bg-primary/10" />

            <div className="space-y-2">
              <LanguageSwitcher
                label={translate("switchLanguage")}
                className="w-full justify-start px-4 py-3 rounded-lg font-bold text-muted-foreground hover:text-primary hover:bg-primary/10"
                variant="ghost"
              />
              <ThemeSwitcher
                label={translate("switchTheme")}
                className="w-full justify-start px-4 py-3 rounded-lg font-bold text-muted-foreground hover:text-primary hover:bg-primary/10"
                variant="ghost"
              />
            </div>

            <Separator className="bg-primary/10" />

            <Link href={routes.workTogether} onClick={handleClose} className="block w-full pt-4">
              <RetroButton className="w-full font-bold rounded-lg">{translate("workTogetherButton")}</RetroButton>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
