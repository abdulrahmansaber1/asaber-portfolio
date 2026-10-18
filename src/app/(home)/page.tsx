import { HomeIntroSection } from "./_components/intro/intro"
import { HomeMetricsSection } from "./_components/metrics"
import { HomeWhoIAmSection } from "./_components/who-i-am"
import { HomeSkillsSection } from "./_components/skills"
import { HomeServicesSection } from "./_components/services"
import { HomeLatestProjects } from "./_components/latest-projects"
import { HomeCtaSection } from "./_components/cta"

export default function Home() {
  return (
    <div className="space-y-24 md:space-y-32 mb-20">
      {/* Hero Section */}
      <HomeIntroSection />

      {/* Key Metrics / Impact Bar */}
      <HomeMetricsSection />

      {/* Who I Am Deep Dive (Photo, Credentials, Engineering Pillars) */}
      <HomeWhoIAmSection />

      {/* Technical Skills Stack */}
      <HomeSkillsSection />

      {/* Services (including DevOps & Cloud) */}
      <HomeServicesSection />

      {/* Featured Projects */}
      <HomeLatestProjects />

      {/* Let's Collaborate Call-to-Action */}
      <HomeCtaSection />
    </div>
  )
}
