import React from "react"

import { Metadata } from "next"
import { PageHeader } from "./_components/page-header"
import { ProjectContainer } from "./_components/container"

import { allProjects } from "./_components/data"

export const metadata: Metadata = {
  title: "Abdulrahman Saber - Projects",
  description:
    "A list of projects I've worked on. From front-end to back-end, and everything in between.",
  keywords: [
    "Abdulrahman saber projects",
    "Abdulrahman saber work",
    "Abdulrahman saber portfolio",
    "Abdulrahman saber Front-end Projects",
    "Abdulrahman saber Back-end Projects"
  ]
}

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader title='projects' />
      <section className='grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4'>
        {allProjects.map((project, index) => (
          <ProjectContainer key={project.title + index} index={index} project={project} />
        ))}
      </section>
    </div>
  )
}
