import React from "react"

import { Metadata } from "next"
import { PageHeader } from "../_components/page-header"
import { ProjectContainer } from "../_components/project-container"

import { backEndProjects } from "../_components/data"

import { v4 } from "uuid"

export const metadata: Metadata = {
  title: "Abdulrahman Saber - Back-end Projects",
  description: "A list of projects I've worked on with back-end technologies."
}

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader title="backEndProjects" />
      <section className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4">
        {backEndProjects.map((project, index) => (
          <ProjectContainer key={project.title + index + v4()} index={index} project={project} />
        ))}
      </section>
    </div>
  )
}
