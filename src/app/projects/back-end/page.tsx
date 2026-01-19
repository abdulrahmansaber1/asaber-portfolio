import React from "react"

import { Metadata } from "next"
import { PageHeader } from "../_components/page-header"
import { ProjectCard } from "../_components/project-card"

import { backEndProjects } from "../_components/data"

export const metadata: Metadata = {
  title: "Abdulrahman Saber - Back-end Projects",
  description: "A list of projects I've worked on with back-end technologies.",
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="backEndProjects" />
      <section className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {backEndProjects.map((project, index) => (
          <ProjectCard key={project.title + index} index={index} project={project} />
        ))}
      </section>
    </>
  )
}
