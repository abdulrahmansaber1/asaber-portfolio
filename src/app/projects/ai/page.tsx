import React from "react"

import { Metadata } from "next"
import { PageHeader } from "../_components/page-header"
import { aiProjects } from "../_components/data"
import { OtherProjectCard } from "../_components/other-project-card"

export const metadata: Metadata = {
  title: "Abdulrahman Saber - AI Projects",
  description: "A showcase of my AI and Machine Learning projects, exploring the future of technology.",
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="aiProjects" />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {aiProjects.map((project, index) => (
          <OtherProjectCard key={project.title} project={project} index={index} type="ai" />
        ))}
      </div>
    </>
  )
}
