"use client"

import { motion } from "framer-motion"

import { TProject } from "@/types"
import { ProjectHeader } from "./project-header"
import { ProjectTitle } from "./project-title"
import { ProjectSkills } from "./project-skills"
import { ProjectFooter } from "./project-footer"

type Props = {
  project: TProject
  index?: number
}

export const ProjectContainer = ({ index = 1, project }: Props) => {
  const variants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className="project-container shadow-md dark:shadow-2xl dark:border dark:border-[#222] rounded-md p-2 space-y-4 dark:bg-[#101010] bg-white h-fit"
      variants={variants}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 0.5, delay: index * 0.01 }}
    >
      <ProjectHeader project={project} index={index} image={project.image ?? "/projects/back-end/food-orders.png"} />
      <ProjectTitle shortDescription={project.shortBrief} title={project.title} description={project.description} />
      <ProjectSkills skills={project.tools} />
      <ProjectFooter github={project.github} preview={project.url} />
    </motion.div>
  )
}
