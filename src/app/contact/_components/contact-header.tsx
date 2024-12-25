"use client"

import { useContext } from "react"

import { useLanguage } from "@/hooks/use-language"
import { ContactLinks } from "./links"

import Image from "next/image"
import translate from "@/lib/translate"

export const ContactHeader = () => {
  const language = useLanguage()

  return (
    <section className="space-y-10 col-span-3">
      <section className="flex">
        <Image
          src="/me.jpg"
          alt="Abdulrahman Saber"
          width={500}
          height={500}
          className="object-cover rounded-full size-48"
        />
      </section>
      <section>
        <h1
          className="xl:text-6xl text-4xl md:text-5xl font-extrabold first-letter:text-primary"
          dangerouslySetInnerHTML={{ __html: translate("contactPageTitle", language) }}
        ></h1>
      </section>
      <ContactLinks />
    </section>
  )
}
