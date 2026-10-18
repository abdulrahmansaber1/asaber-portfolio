import { GithubIcon, LinkedinIcon } from "lucide-react"

export const constants = {
  siteName: "Abdulrahman Saber Portfolio",
  languageCookieName: "asaber-language",
  availableLanguages: ["en", "ar"],
  defaultLanguage: "en",
  themes: ["light", "dark"],
  defaultTheme: "dark",
}

export const logo = {
  main: "/logo/logo.png",
  white: "/logo/logo-white.png",
}

export const contact = {
  email: "abdulrahmansaber120@gmail.com",
  phone: "+20 1123 5251 23",
  whatsapp: "https://wa.me/+201123525123",
  telegram: "https://t.me/asaber3030",
  me: "/me.jpeg",
}

export const links = {
  github: "https://github.com/abdulrahmansaber1",
  linkedin: "https://www.linkedin.com/in/abdulrahman-saber/",
  awsCertificate: "https://www.credly.com/badges/5a83bedf-27b7-4ea1-b734-17fbc33c72ef/linked_in_profile",
}

export const metadata = {
  title: "Abdulrahman Saber - Portfolio",
  description: "Experienced Full Stack Developer with a demonstrated history of working in the computer software industry. Skilled in TypeScript, Next.js, React, PHP, Laravel, Node.js, Nest.js Express.js, MongoDB, and AWS",
  keywords: ["abdulrahmansaber1", "asaber", "abdulrahman saber", "abdulrahman-saber", "abdo saber", "saber abdulrahman"],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
}

export const socialMedia = [
  { icon: GithubIcon, href: links.github },
  { icon: LinkedinIcon, href: links.linkedin },
]

export const languageCookie = "asaber-language"

export const projectsTabs = [
  { name: "all", href: "/projects" },
  { name: "frontEnd", href: "/projects/front-end" },
  { name: "backEnd", href: "/projects/back-end" },
  { name: "ai", href: "/projects/ai" },
  { name: "others", href: "/projects/others" },
]
