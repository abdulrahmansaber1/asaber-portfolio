"use client"

import WordPullUp from "@/components/ui/word-pull-up"
import translate from "@/lib/translate"

import { useLanguage } from "@/hooks/use-language"

import { useContext } from "react"

type Props = {
  title: string
}

export const ProjectPageTitle = ({ title }: Props) => {
  const language = useLanguage()
  return (
    <WordPullUp
      className="xl:text-5xl md:text-4xl text-3xl font-extrabold mb-6"
      words={translate(title, language)}
    />
  )
}
