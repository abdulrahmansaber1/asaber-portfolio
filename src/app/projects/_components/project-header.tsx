"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { routes } from "@/lib"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Dispatch, SetStateAction } from "react"
import { Github, LinkIcon, MoreHorizontal, Terminal, Info, Layers } from "lucide-react"
import { TProject } from "@/types"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

type Props = {
  project: TProject
  image: string
  index: number
  setSheetOpen: Dispatch<SetStateAction<boolean>>
  sheetOpen: boolean
}

export const ProjectHeader = ({ project, image, sheetOpen, setSheetOpen }: Props) => {
  const translate = useTranslations()

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetContent className="w-full sm:max-w-[600px] p-0 border-l border-white/10 bg-background/95 backdrop-blur-xl">
        <ScrollArea className="h-full">
          <div className="relative h-64 w-full overflow-hidden">
            <Image src={project.gif ? project.gif : image} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          <div className="p-8 space-y-8">
            <SheetHeader>
              <div className="space-y-2">
                <Badge variant="outline" className="border-primary/50 text-primary">
                  {project.tools[0]}
                </Badge>
                <SheetTitle className="text-3xl font-black tracking-tight">{project.title}</SheetTitle>
              </div>
            </SheetHeader>

            <div className="space-y-6">
              <section className="space-y-3">
                <div className="flex items-center gap-2 text-primary">
                  <Info className="size-5" />
                  <h3 className="font-bold uppercase tracking-wider text-sm">{translate("projectDescription")}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </section>

              <section className="space-y-3">
                <div className="flex items-center gap-2 text-primary">
                  <Terminal className="size-5" />
                  <h3 className="font-bold uppercase tracking-wider text-sm">{translate("projectTools")}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((item, index) => (
                    <Badge key={index} variant="secondary" className="bg-secondary/50 hover:bg-secondary/80 transition-colors">
                      {item}
                    </Badge>
                  ))}
                </div>
              </section>

              {project.keyFeatures && (
                <section className="space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Layers className="size-5" />
                    <h3 className="font-bold uppercase tracking-wider text-sm">{translate("features")}</h3>
                  </div>
                  <ul className="grid gap-2">
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section className="space-y-4 pt-6 border-t border-white/5">
                <h3 className="font-bold uppercase tracking-wider text-sm text-primary">{translate("links")}</h3>
                <div className="flex flex-wrap gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm font-medium"
                    >
                      <Github className="size-4" />
                      {translate("github")}
                    </a>
                  )}

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-all text-sm font-medium shadow-[0_0_20px_-5px_rgba(var(--primary),0.5)]"
                    >
                      <LinkIcon className="size-4" />
                      {translate("preview")}
                    </a>
                  )}

                  {project.slug && (
                    <Link
                      href={routes.backendProject(project.slug)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm font-medium"
                    >
                      <MoreHorizontal className="size-4" />
                      {translate("moreDetails")}
                    </Link>
                  )}
                </div>
              </section>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
