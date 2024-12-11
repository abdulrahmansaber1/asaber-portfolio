import VerticalTimeline01 from "@/components/ui/timeline"
import React from "react"
import { experiences } from "./_components/data"
import { ExperienceIntroSection } from "./_components/intro"

export default function ExperiencePage() {
  return (
    <div className="py-8 space-y-8">
      <ExperienceIntroSection />
      <VerticalTimeline01 items={experiences} />
    </div>
  )
}
