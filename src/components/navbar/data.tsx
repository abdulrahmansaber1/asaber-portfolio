import { routes } from "@/lib"
import { Home } from "lucide-react"

export const navbarURLs = [
  { href: routes.home, icon: Home },
  { href: routes.about, label: "about" },
  { href: routes.projects, label: "projects" },
  { href: routes.experience, label: "experience" },
  { href: routes.cv, label: "cv" },
]
