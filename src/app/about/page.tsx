import React from "react"

import { AboutIntroSection } from "./_components/intro"
import { AboutSkillsSection } from "./_components/skills"
import { AboutEducationSection } from "./_components/education"
import { AboutRightSection } from "./_components/right-section"
import { AboutLastAchievement } from "./_components/last-achievement"
import { Metadata } from "next/types"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Abdulrahman Saber - About",
  description:
    "Learn more about Abdulrahman Saber, a Full Stack Web Developer with 9 years of experience. Proficient in various frameworks and languages including Laravel, PHP, React, and NextJS.",
}

export default function AboutPage() {
  return (
    <section className="grid xl:grid-cols-8 grid-cols-1 gap-8 items-center">
      <section className="col-span-5 py-8 space-y-8">
        <AboutIntroSection />
        <AboutSkillsSection />
        <AboutEducationSection />
        <AboutLastAchievement />
      </section>
      <AboutRightSection />
    </section>
  )
}
