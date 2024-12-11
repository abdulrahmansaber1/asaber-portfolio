"use client"

import Safari from "@/components/ui/safari"
import Iphone15Pro from "@/components/ui/iphone-15-pro"

import { homePage } from "../data"

import { HomeIntroHeaderSection } from "./header"
import { HomeIntroLinksSection } from "./links"
import { HomeIntroButtonsSection } from "./buttons"

export const HomeIntroSection = () => {
  return (
    <section className="my-8 mt-8 flex flex-col justify-center">
      <section className="xl:col-span-4 md:col-span-4 lg:col-span-6 col-span-6 w-full space-y-8">
        <HomeIntroHeaderSection />
        <HomeIntroLinksSection />
        <HomeIntroButtonsSection />
      </section>

      <Safari
        url={homePage.lastProject.url}
        className="size-md mx-auto hidden xl:block mt-10"
        src={homePage.lastProject.pcPicture}
      />
      <Iphone15Pro
        className="max-w-full xl:hidden md:hidden lg:hidden block mx-auto mt-10"
        src={homePage.lastProject.mobilePicture}
      />
    </section>
  )
}
