"use client"

import React from "react"
import IconCloud from "@/components/ui/icon-cloud"
import Image from "next/image"

import { aboutPage } from "./data"

export const AboutRightSection = () => {
  return (
    <section className="mx-auto col-span-3">
      {/* <Image src={contact.me} alt="Abdulrahman Saber" width={800} height={800} className="mx-auto rounded-2xl size-[400px] object-cover shadow-2xl" /> */}
      <div className="relative mx-auto flex size-full items-center justify-center overflow-hidden rounded-lg">
        <IconCloud iconSlugs={aboutPage.skills} />
      </div>
    </section>
  )
}
