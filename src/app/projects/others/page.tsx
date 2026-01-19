import React from "react"

import { Metadata } from "next"
import { PageHeader } from "../_components/page-header"
import { OtherProjectCard } from "../_components/other-project-card"

import { otherProjects } from "../_components/data"

export const metadata: Metadata = {
  title: "Abdulrahman Saber - Other Projects",
  description: "A collection of various projects including mobile apps, games, and frameworks.",
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="othersProjects" />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {otherProjects.map((project, index) => (
          <OtherProjectCard key={`${project.title}-other-${index}`} project={project} index={index} type="other" />
        ))}
      </div>
    </>
  )
}
