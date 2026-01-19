import { Language } from "@/types"
import { Inter, Cairo, Nunito, Rubik } from "next/font/google"

export const cairoFont = Cairo({ subsets: ["arabic"] })
export const rubikFont = Rubik({ subsets: ["arabic"] })
export const nunitoFont = Nunito({ subsets: ["latin"] })
export const interFont = Inter({ subsets: ["latin"] })

export const loadFont = (locale: Language) => {
  return locale === "ar" ? cairoFont : interFont
}
