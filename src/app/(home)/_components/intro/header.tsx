import translate from "@/lib/translate"

import { useLanguage } from "@/hooks/use-language"

import { useContext } from "react"

export const HomeIntroHeaderSection = () => {
  const language = useLanguage()

  return (
    <section className="space-y-2 text-center w-full">
      <h1 className="xl:text-6xl md:text-4xl text-3xl font-bold mb-10">
        {translate("helloIntro", language)}{" "}
        <span className="home-h1-intro">{translate("homeIntroTitle", language)}</span>
      </h1>
      <p
        className="xl:text-xl md:text-xl text-lg dark:text-gray-300 font-normal xl:max-w-[70%] md:max-w-[70%] w-full mx-auto"
        dangerouslySetInnerHTML={{ __html: translate("homeIntroDescription", language) }}
      />
    </section>
  )
}
