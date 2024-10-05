import React from "react"

import { Metadata } from "next"
import { PageHeader } from "../_components/page-header"
import { OtherProjectContainer } from "../_components/other-card"

import { otherProjects } from "../_components/data"

export const metadata: Metadata = {
  title: "Abdulrahman Saber - Other Projects",
  description:
    "A list of projects I've worked on. From front-end to back-end, and everything in between.",
}

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader title="othersProjects" />
      <div className="space-y-2 grid">
        {otherProjects.map((project, index) => (
          <OtherProjectContainer
            key={`${project.title}-other-${index}`}
            project={project}
            index={index}
            type="other"
          />
        ))}
      </div>
    </div>
  )
}
