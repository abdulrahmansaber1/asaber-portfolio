import React from "react"

import { Metadata } from "next"
import { PageHeader } from "../_components/page-header"
import { ProjectContainer } from "../_components/container"

import { frontEndProjects } from "../_components/data"

export const metadata: Metadata = {
  title: "Abdulrahman Saber - Front-End Projects",
  description: "A list of projects I've worked on with front-end technologies."
}

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader title="frontEndProjects" />
      <section className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4">
        {frontEndProjects.map((project, index) => (
          <ProjectContainer key={project.title + index} index={index} project={project} />
        ))}
      </section>
    </div>
  )
}
