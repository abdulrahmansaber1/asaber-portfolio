"use client"

import translate from "@/lib/translate"

import { backEndProjects } from "@/app/projects/_components/data"
import { ProjectContainer } from "@/app/projects/_components/container"
import { useLanguage } from "@/hooks/use-language"

export const HomeLatestProjects = () => {
  const language = useLanguage()

  return (
    <div>
      <section className="mb-4">
        <h2 className="text-3xl font-semibold">{translate("latestProjects", language)}</h2>
      </section>
      <section className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4">
        {backEndProjects.slice(0, 3).map((project, index) => (
          <ProjectContainer key={project.title} index={index} project={project} />
        ))}
      </section>
    </div>
  )
}
