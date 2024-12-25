"use client"

import { useTheme } from "next-themes"
import { cn } from "@/lib"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { Button, ButtonProps } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

type Props = ButtonProps & {
  label?: string
}

export function ThemeSwitcher({ label, className, size = "icon", variant = "ghost" }: Props) {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size={size}
          className={cn("border-none transition-all flex gap-4", className)}
          variant={variant}
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          {label && label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-none w-44 space-y-0.5">
        <DropdownMenuItem
          className={cn("flex gap-2 items-center", theme === "light" && "bg-accent")}
          onClick={() => setTheme("light")}
        >
          <SunIcon className="" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn("flex gap-2 items-center", theme === "dark" && "bg-accent")}
          onClick={() => setTheme("dark")}
        >
          <MoonIcon className="" />
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
