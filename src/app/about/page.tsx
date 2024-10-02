"use client"

import React from "react"
import { AboutIntroSection } from "./_components/intro"
import { AboutSkillsSection } from "./_components/skills"
import { AboutEducationSection } from "./_components/education"
import { AboutRightSection } from "./_components/right-section"

export default function AboutPage() {
  return (
    <div>
      <section className="grid xl:grid-cols-8 grid-cols-1 gap-8 items-center">
        <section className="col-span-5 py-8 space-y-8">
          <AboutIntroSection />
          <AboutSkillsSection />
          <AboutEducationSection />
        </section>
        <AboutRightSection />
      </section>
    </div>
  )
}
