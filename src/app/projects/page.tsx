import React from "react"

import { Metadata } from "next"
import { PageHeader } from "./_components/page-header"
import { ProjectCard } from "./_components/project-card"

import { allProjects } from "./_components/data"

export const metadata: Metadata = {
  title: "Abdulrahman Saber - Projects",
  description: "A showcase of my creative work and technical expertise. From front-end to back-end, and everything in between.",
  keywords: ["Abdulrahman saber projects", "Abdulrahman saber work", "Abdulrahman saber portfolio", "Abdulrahman saber Front-end Projects", "Abdulrahman saber Back-end Projects"],
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="projects" />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project, index) => (
          <ProjectCard key={project.title + index} index={index} project={project} />
        ))}
      </section>
    </>
  )
}
