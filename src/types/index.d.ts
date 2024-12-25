import exp from "constants"

export type Language = "en" | "ar"

export type TProject = {
  title: string
  github?: string
  url?: string
  image?: string
  description: string
  tools: string[]
  shortBrief?: string
  gif?: string
  slug?: string
  viewUrl?: string
}

export type TOtherProject = {
  title: string
  github: string
  description: string
  tools: string[]
}
