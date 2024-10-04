import { routes } from "@/lib"
import { Home } from "lucide-react"

export const navbarURLs = [
  { href: routes.home, icon: Home },
  { href: routes.about, label: "about" },
  { href: routes.projects, label: "projects" },
  { href: routes.workTogether, label: "contact" },
  { href: routes.cv, label: "cv" },
]
