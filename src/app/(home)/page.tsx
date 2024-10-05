import { HomeIntroSection } from "./_components/intro"
import { HomeSkillsSection } from "./_components/skills"
import { HomeServicesSection } from "./_components/services"

export default function Home() {
  return (
    <div className="space-y-10">
      <HomeIntroSection />
      <HomeSkillsSection />
      <HomeServicesSection />
    </div>
  )
}
