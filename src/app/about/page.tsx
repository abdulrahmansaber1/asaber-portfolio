import React from "react"

import { AboutIntroSection } from "./_components/intro"
import { AboutSkillsSection } from "./_components/skills"
import { AboutEducationSection } from "./_components/education"
import { AboutRightSection } from "./_components/right-section"
import { AboutLastAchievement } from "./_components/last-achievement"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Abdulrahman Saber - About",
  description: "Learn more about Abdulrahman Saber, a Full Stack Web Developer with 9 years of experience. Proficient in various frameworks and languages including Laravel, PHP, React, and NextJS.",
}

export default function AboutPage() {
  return (
    <div className="relative pt-8 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <section className="lg:col-span-7 space-y-12">
          <AboutIntroSection />
          <AboutSkillsSection />
          <AboutEducationSection />
          <AboutLastAchievement />
        </section>
        <section className="lg:col-span-5 lg:sticky lg:top-32 flex justify-center">
          <AboutRightSection />
        </section>
      </div>
    </div>
  )
}
