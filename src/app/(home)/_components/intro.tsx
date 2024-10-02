"use client"

import translate from "@/lib/translate"

import Safari from "@/components/ui/safari"
import Iphone15Pro from "@/components/ui/iphone-15-pro"

import { useContext } from "react"
import { homePage } from "./data"
import { routes } from "@/lib"

import { LanguageContext } from "@/providers/language"
import { LinkBtn } from "@/components/button"

export const HomeIntroSection = () => {
  const language = useContext(LanguageContext)

  return (
    <section className="my-8 space-y-6 mt-8">
      <section className="text-center space-y-2">
        <h1 className="xl:text-6xl md:text-4xl text-4xl font-bold mb-6">
          {translate("helloIntro", language)} <span className="home-h1-intro">{translate("homeIntroTitle", language)}</span>
        </h1>
        <p
          className="xl:text-xl md:text-xl text-lg dark:text-gray-300 font-normal xl:max-w-[70%] md:max-w-[70%] mx-auto"
          dangerouslySetInnerHTML={{ __html: translate("homeIntroDescription", language) }}
        />
      </section>

      <section className="flex gap-6 justify-center">
        {homePage.introLinks.map(({ href, icon: Icon, title }, index) => (
          <a href={href} key={index} className="flex gap-1 items-center dark:text-gray-300 text-gray-600 font-normal text-lg transition-colors dark:hover:text-gray-50 hover:text-black">
            <Icon className="size-4" />
            <span>{title}</span>
          </a>
        ))}
      </section>

      <section className="flex justify-center gap-2">
        <LinkBtn href={routes.about}>About</LinkBtn>
        <LinkBtn href={routes.projects}>Projects</LinkBtn>
      </section>

      <section>
        <Safari url={homePage.lastProject.url} className="size-md hidden xl:block md:block lg:block mx-auto" src={homePage.lastProject.pcPicture} />
        <Iphone15Pro className="mx-auto max-w-full mt-4 size-sm xl:hidden md:hidden lg:hidden 2xl:hidden" src={homePage.lastProject.mobilePicture} />
      </section>
    </section>
  )
}
