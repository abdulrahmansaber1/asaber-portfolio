"use client"

import * as React from "react"
import { MoonIcon, SunIcon, FileIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib"

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className="border-none transition-all" variant="ghost">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-none w-44 space-y-0.5">
        <DropdownMenuItem className={cn("flex gap-2 items-center", theme === "light" && "bg-accent")} onClick={() => setTheme("light")}>
          <SunIcon className="" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem className={cn("flex gap-2 items-center", theme === "dark" && "bg-accent")} onClick={() => setTheme("dark")}>
          <MoonIcon className="" />
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
