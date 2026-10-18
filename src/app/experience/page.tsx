import { experiences } from "./_components/data"
import { ExperienceIntroSection } from "./_components/intro"
import { ExperienceStats } from "./_components/stats"
import { ExperienceTimeline } from "./_components/experience-timeline"
import { ExperienceSkillsSnapshot } from "./_components/skills-snapshot"
import { ExperienceHighlights } from "./_components/highlights"

export default function ExperiencePage() {
  return (
    <div className="relative pt-12 pb-24 space-y-20">
      {/* Ambient background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-32 size-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-32 size-96 bg-violet-500/4 rounded-full blur-[120px]" />
      </div>

      {/* Hero intro */}
      <ExperienceIntroSection />

      {/* Stats row */}
      <ExperienceStats />

      {/* Work experience timeline */}
      <ExperienceTimeline items={experiences} />

      {/* Highlights & achievements */}
      <ExperienceHighlights />

      {/* Tech skills snapshot */}
      <ExperienceSkillsSnapshot />
    </div>
  )
}
