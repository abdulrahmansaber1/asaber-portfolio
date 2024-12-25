"use client"

import Image from "next/image"
import Link from "next/link"

import translate from "@/lib/translate"

import { useLanguage } from "@/hooks/use-language"
import { motion } from "framer-motion"
import { routes } from "@/lib"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { GitHubLogoIcon, Link1Icon } from "@radix-ui/react-icons"
import { Dispatch, SetStateAction } from "react"
import { MoreHorizontal } from "lucide-react"
import { TProject } from "@/types"

type Props = {
  project: TProject
  image: string
  index: number
  setSheetOpen: Dispatch<SetStateAction<boolean>>
  sheetOpen: boolean
}

export const ProjectHeader = ({ project, image, sheetOpen, setSheetOpen }: Props) => {
  const variants = {
    initial: { scale: 1 },
    animate: { scale: 0.95 }
  }

  const language = useLanguage()

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <motion.div
          initial="initial"
          whileTap="animate"
          variants={variants}
          className="relative w-full h-[220px] rounded-md overflow-hidden dark:shadow-2xl shadow-sm hover:opacity-90 transition-opacity cursor-pointer"
        >
          <Image
            src={image}
            alt="Project Image"
            width={500}
            height={500}
            className="shadow-md dark:shadow-2xl rounded-md w-full object-cover"
          />
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
                    key={`span-ski-${item}-${index}`}
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
                    {translate("github", language)}
                  </a>
                )}

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    className="text-blue-500 hover:underline text-sm flex gap-2 items-center"
                  >
                    <Link1Icon className="size-4" />
                    {translate("preview", language)}
                  </a>
                )}

                {project.slug && (
                  <Link
                    href={routes.backendProject(project.slug)}
                    className="text-blue-500 hover:underline text-sm flex gap-2 items-center"
                  >
                    <MoreHorizontal className="size-4" />
                    {translate("moreDetails", language)}
                  </Link>
                )}
              </div>
            </div>
          </section>
        </section>
      </SheetContent>
    </Sheet>
  )
}
