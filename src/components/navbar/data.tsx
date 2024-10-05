import { routes } from "@/lib"
import { Goal, Home, Phone, User, FileIcon } from "lucide-react"

export const navbarURLs = [
  { href: routes.home, icon: Home, label: "home" },
  { href: routes.about, icon: User, label: "about" },
  { href: routes.projects, icon: Goal, label: "projects" },
  { href: routes.workTogether, icon: Phone, label: "contact" },
  { href: routes.cv, icon: FileIcon, label: "cv" },
]
