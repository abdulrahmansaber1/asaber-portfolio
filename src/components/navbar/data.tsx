import { routes } from "@/lib"
import { Goal, Home, Phone, User, FileIcon } from "lucide-react"

export const navbarURLs = [
  { href: routes.home, icon: Home, label: "home" },
  { href: routes.about, icon: User, label: "about" },
  { href: routes.experience, icon: User, label: "experience" },
  { href: routes.projects, icon: Goal, label: "projects" },
  { href: routes.workTogether, icon: Phone, label: "contact" }
]
