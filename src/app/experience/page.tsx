import { experiences } from "./_components/data"
import { ExperienceIntroSection } from "./_components/intro"
import VerticalTimeline01 from "@/components/widgets/animated-widgets/timeline"

export default function ExperiencePage() {
  return (
    <div className="relative pt-12 pb-20 space-y-16">
      <ExperienceIntroSection />
      <div className="relative">
        <VerticalTimeline01 items={experiences} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -z-10 hidden md:block" />
      </div>
    </div>
  )
}
