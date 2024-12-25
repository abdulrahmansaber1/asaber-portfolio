"use client"

import React from "react"
import Image from "next/image"
import translate from "@/lib/translate"

import { useLanguage } from "@/hooks/use-language"
import { backEndProjects } from "../../_components/data"

import { CheckCircle2, Github, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = {
  params: {
    slug: string
  }
}

export default function Project({ params }: Props) {
  const slug = params.slug
  const project = backEndProjects.find((project) => project.slug === slug)
  const language = useLanguage()

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="xl:text-4xl text-4xl font-extrabold text-primary">{project?.title}</h1>
        <p className="text-lg dark:text-gray-400 text-gray-600 max-w-5xl">{project?.description}</p>
      </header>

      <section className="grid xl:grid-cols-6 gap-10">
        <section className="xl:col-span-3">
          {project?.gif ? (
            <Image
              src={project.gif}
              alt={project.title}
              width={500}
              height={300}
              className="w-full max-w-full rounded-md"
            />
          ) : (
            project?.image && (
              <Image
                src={project?.image}
                alt={project?.title}
                width={500}
                height={300}
                className="w-full max-w-full rounded-md"
              />
            )
          )}
        </section>

        <section className="xl:col-span-3 space-y-8">
          <div>
            <h3 className="mb-2 dark:text-gray-300 text-gray-600 text-xl font-bold">
              {translate("technologies", language)}
            </h3>
            <ul className="flex gap-2">
              {project?.tools.map((tool, idx) => (
                <li className="px-2 py-1 bg-gray-300 dark:bg-[#231f27] rounded-sm" key={idx}>
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 dark:text-gray-300 text-gray-600 text-xl font-bold">
              {translate("features", language)}
            </h3>
            <ul className="p-0 space-y-2">
              {project?.keyFeatures?.map((feature, idx) => (
                <li key={`feature-${idx}`} className="flex gap-3 items-center text-lg">
                  <CheckCircle2 className="text-primary" /> {feature}
                </li>
              ))}
            </ul>
          </div>

          {(project?.url || project?.github) && (
            <div>
              <h3 className="mb-2 dark:text-gray-300 text-gray-600 text-xl font-bold">
                {translate("urls", language)}
              </h3>
              <ul className="flex gap-2 items-center">
                {project?.github && (
                  <li>
                    <a href={project?.github} target="_blank">
                      <Button className="gap-2" variant="ghost">
                        <Github className="size-4" />
                        {translate("github", language)}
                      </Button>
                    </a>
                  </li>
                )}
                {project?.url && (
                  <li>
                    <a href={project?.url} target="_blank">
                      <Button className="gap-2" variant="ghost">
                        <LinkIcon className="size-4" />
                        {translate("preview", language)}
                      </Button>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </section>
      </section>
    </div>
  )
}
