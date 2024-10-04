import React from "react"

import { Metadata } from "next"
import { PageHeader } from "../_components/page-header"
import { aiProjects } from "../_components/data"
import { OtherProjectContainer } from "../_components/other-card"

export const metadata: Metadata = {
  title: "Abdulrahman Saber - AI Projects",
  description:
    "A list of projects I've worked on. From front-end to back-end, and everything in between.",
}

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader title="aiProjects" />
      <div className="space-y-2 grid">
        {aiProjects.map((project, index) => (
          <OtherProjectContainer key={project.title} project={project} index={index} type="ai" />
        ))}
      </div>
    </div>
  )
}
