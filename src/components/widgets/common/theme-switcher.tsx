"use client"

import { useTheme } from "next-themes"
import { cn } from "@/lib"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"

type Props = any

export function ThemeSwitcher({ label, className, size = "icon", variant = "ghost" }: Props) {
  const { setTheme, resolvedTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <Button size={size} className={cn("border-none transition-all flex gap-4 relative", className)} variant={variant} onClick={toggleTheme}>
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      {label && label}
    </Button>
  )
}
