"use client"

import { TOtherProject } from "@/types"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

import { motion } from "framer-motion"

type Props = {
  type: "ai" | "other"
  project: TOtherProject
  index: number
}

export const OtherProjectContainer = ({ index, type, project }: Props) => {
  const variants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className="project-container shadow-md dark:shadow-2xl dark:border dark:border-[#222] rounded-md p-4 dark:bg-[#101010] bg-white h-fit"
      variants={variants}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 0.5, delay: index * 0.01 }}
    >
      <h2 className="font-bold text-xl mb-1">{project.title}</h2>
      <p className="text-gray-400 text-sm xl:text-lg md:text-lg mb-4">{project.description}</p>
      <section className="flex gap-2 justify-between flex-row-reverse items-end">
        <ul className="flex gap-1 flex-wrap items-center justify-end">
          {project.tools.map((tool, index) => (
            <li
              className="px-2 py-1 bg-gray-100 dark:bg-[#222] rounded-sm text-xs"
              key={`${tool}-${index * Math.random() * 10000}`}
            >
              {tool}
            </li>
          ))}
        </ul>
        <a
          href={project.github}
          target="_blank"
          className="border h-fit border-gray-200 dark:border-[#333] p-1 px-2 rounded-md font-semibold transition-colors dark:bg-transparent bg-gray-300 dark:text-gray-300 text-black hover:text-white hover:bg-[#333] dark:hover:bg-[#333]"
        >
          <GitHubLogoIcon />
        </a>
      </section>
    </motion.div>
  )
}
