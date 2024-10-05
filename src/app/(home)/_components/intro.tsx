"use client"

import translate from "@/lib/translate"

import Safari from "@/components/ui/safari"
import Iphone15Pro from "@/components/ui/iphone-15-pro"

import { useContext } from "react"
import { homePage } from "./data"
import { routes } from "@/lib"

import { LanguageContext } from "@/providers/language"
import { LinkBtn } from "@/components/button"
import { ChevronsLeft, ChevronsRight, Target } from "lucide-react"

export const HomeIntroSection = () => {
  const language = useContext(LanguageContext)

  return (
    <section className="my-8 space-y-6 mt-8 grid xl:grid-cols-6 md:grid-cols-6 grid-cols-1 items-center gap-4">
      <section className="xl:col-span-4 md:col-span-4 lg:col-span-6 col-span-6 w-full space-y-8">
        <section className="space-y-2 xl:text-left lg:text-left md:text-left text-center w-full">
          <h1 className="xl:text-6xl md:text-4xl text-3xl font-bold mb-10">
            {translate("helloIntro", language)}{" "}
            <span className="home-h1-intro">{translate("homeIntroTitle", language)}</span>
          </h1>
          <p
            className="xl:text-xl md:text-xl text-sm dark:text-gray-300 font-normal xl:max-w-[70%] md:max-w-[70%] w-full lg:w-full"
            dangerouslySetInnerHTML={{ __html: translate("homeIntroDescription", language) }}
          />
        </section>

        <section className="flex gap-6 justify-center xl:justify-start md:justify-start">
          {homePage.introLinks.map(({ href, icon: Icon, title }, index) => (
            <a
              href={href}
              key={`intro-link-${index}`}
              className="flex gap-1 items-center dark:text-gray-300 text-gray-600 font-normal text-lg transition-colors dark:hover:text-gray-50 hover:text-black"
            >
              <Icon className="size-4" />
              <span>{title}</span>
            </a>
          ))}
        </section>

        <section className="flex gap-2 justify-center xl:justify-start md:justify-start">
          <LinkBtn href={routes.about}>
            {translate("aboutMe", language)}
            {language === "en" ? (
              <ChevronsRight className="size-4" />
            ) : (
              <ChevronsLeft className="size-4" />
            )}
          </LinkBtn>
          <LinkBtn href={routes.projects}>
            {translate("projects", language)} <Target className="size-4" />
          </LinkBtn>
        </section>
      </section>

      <section className="xl:col-span-2 col-span-6 mx-auto">
        {/* <Safari url={homePage.lastProject.url} className="size-md hidden xl:block md:block lg:block mx-auto" src={homePage.lastProject.pcPicture} /> */}
        <Iphone15Pro className="max-w-full" src={homePage.lastProject.mobilePicture} />
      </section>
    </section>
  )
}
