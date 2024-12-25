import { HomeIntroSection } from "./_components/intro/intro"
import { HomeSkillsSection } from "./_components/skills"
import { HomeServicesSection } from "./_components/services"
import { HomeLatestProjects } from "./_components/latest-projects"

export default function Home() {
  return (
    <div className="space-y-10 mb-10">
      <HomeIntroSection />
      <HomeSkillsSection />
      <HomeServicesSection />
      <HomeLatestProjects />
    </div>
  )
}
