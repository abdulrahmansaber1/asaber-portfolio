"use client"

import { backEndProjects } from "@/app/projects/_components/data"
import { ProjectCard } from "@/app/projects/_components/project-card"
import { useTranslations } from "next-intl"

export const HomeLatestProjects = () => {
  const translate = useTranslations()

  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-2">
        <h2 className="text-4xl font-black tracking-tight">{translate("latestProjects")}</h2>
        <div className="h-1.5 w-20 bg-primary rounded-full" />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {backEndProjects.slice(0, 3).map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </section>
    </div>
  )
}
