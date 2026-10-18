import React from "react"
import { Metadata } from "next/types"
import { AboutIntroSection } from "./_components/intro"
import { AboutPrinciplesSection } from "./_components/principles"
import { AboutCredentialsSection } from "./_components/credentials"
import { AboutSkillsSection } from "./_components/skills"
import { AboutJourneySection } from "./_components/journey"
import { AboutRightSection } from "./_components/right-section"
import { AboutCtaSection } from "./_components/cta"

export const metadata: Metadata = {
  title: "Abdulrahman Saber - About",
  description:
    "Learn more about Abdulrahman Saber, a Full Stack & DevOps Engineer with 9 years of experience. Proficient across Laravel, React, Next.js, Docker, Kubernetes, and AWS.",
}

export default function AboutPage() {
  return (
    <div className="relative pt-8 pb-24 space-y-24 md:space-y-32">
      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-32 size-96 bg-primary/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/3 -right-32 size-96 bg-indigo-500/5 rounded-full blur-[130px]" />
      </div>

      {/* Hero Narrative with Portrait & Live Status */}
      <AboutIntroSection />

      {/* Core Engineering Principles & Work Philosophy */}
      <AboutPrinciplesSection />

      {/* Reconstructed Education & Certified Credentials (Zagazig + AWS + DEPI) */}
      <AboutCredentialsSection />

      {/* Technical Skills & 3D Interactive Cloud */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <AboutSkillsSection />
        </div>
        <div className="lg:col-span-4 flex justify-center">
          <AboutRightSection />
        </div>
      </div>

      {/* 9-Year Chronological Journey */}
      <AboutJourneySection />

      {/* Get In Touch Banner */}
      <AboutCtaSection />
    </div>
  )
}
