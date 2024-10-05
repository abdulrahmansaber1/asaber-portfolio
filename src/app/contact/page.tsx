import React from "react"

import { ContactForm } from "./_components/form"
import { ContactRightSectionHeader } from "./_components/right-section-header"
import { Metadata } from "next"
import { ContactHeader } from "./_components/contact-header"

import ShineBorder from "@/components/ui/shine-border"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata: Metadata = {
  title: "Abdulrahman Saber - Contact",
  description:
    "Get in touch with me. Whether you have a question, a project, or just want to say hi.",
}

export default function ContactPage() {
  return (
    <div className="grid xl:grid-cols-6 items-center gap-20 xl:py-16 md:py-16 py-8">
      <ContactHeader />
      <ShineBorder
        className="col-span-3 w-full relative space-y-6 xl:p-8 p-4 rounded-md dark:bg-[#101010] bg-white dark:shadow-xl shadow-md"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <ContactRightSectionHeader />
        <ContactForm />
      </ShineBorder>
    </div>
  )
}
