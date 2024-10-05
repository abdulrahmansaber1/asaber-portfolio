"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { motion } from "framer-motion"
import Image from "next/image"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { TProject } from "@/types"
import { GitHubLogoIcon, Link1Icon } from "@radix-ui/react-icons"
import { useContext } from "react"
import { LanguageContext } from "@/providers/language"
import translate from "@/lib/translate"

type Props = {
  project: TProject
  image: string
  index: number
}

export const ProjectHeader = ({ project, image, index }: Props) => {
  const variants = {
    initial: { scale: 1 },
    animate: { scale: 0.95 },
  }

  const language = useContext(LanguageContext)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.div
          initial="initial"
          whileTap="animate"
          variants={variants}
          className="relative w-full h-[220px] rounded-md overflow-hidden dark:shadow-2xl shadow-sm hover:opacity-90 transition-opacity cursor-pointer"
        >
          <AspectRatio ratio={354 / 220}>
            <Image src={image} alt="Project Image" layout="fill" className="object-cover" />
          </AspectRatio>
        </motion.div>
      </SheetTrigger>
      <SheetContent className="xl:min-w-[450px] min-w-[90%]">
        <SheetHeader className="mb-4">
          <SheetTitle>{project.title}</SheetTitle>
        </SheetHeader>
        <section className="grid gap-8">
          <section className="max-w-full">
            <Image
              src={project.gif ? project.gif : image}
              alt="Project Image"
              width={500}
              height={400}
              className="rounded-md w-full max-w-full shadow-md dark:shadow-2xl"
            />
          </section>
          <section className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">{translate("projectName", language)}</h3>
              <p className="text-sm text-gray-500">{project.title}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">{translate("projectDescription", language)}</h3>
              <p className="text-sm text-gray-500">{project.description}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">{translate("projectTools", language)}</h3>
              <p className="text-sm text-gray-500 flex gap-2 flex-wrap">
                {project.tools.map((item, index) => (
                  <span
                    className="p-1 bg-[#222] rounded-md px-4 text-gray-300"
                    key={`${item}-${index}`}
                  >
                    {item}
                  </span>
                ))}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">{translate("links", language)}</h3>
              <div className="flex gap-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-blue-500 hover:underline text-sm flex gap-2 items-center"
                  >
                    <GitHubLogoIcon className="size-4" />
                    Github
                  </a>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    className="text-blue-500 hover:underline text-sm flex gap-2 items-center"
                  >
                    <Link1Icon className="size-4" />
                    Preview
                  </a>
                )}
              </div>
            </div>
          </section>
        </section>
      </SheetContent>
    </Sheet>
  )
}
