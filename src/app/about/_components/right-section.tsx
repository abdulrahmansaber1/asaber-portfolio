"use client"

import React from "react"
import IconCloud from "@/components/ui/icon-cloud"
import Image from "next/image"

import { aboutPage } from "./data"

export const AboutRightSection = () => {
  return (
    <section className="mx-auto col-span-3 w-full">
      {/* <Image src={contact.me} alt="Abdulrahman Saber" width={800} height={800} className="mx-auto rounded-2xl size-[400px] object-cover shadow-2xl" /> */}
      <IconCloud iconSlugs={aboutPage.skills} />
    </section>
  )
}
