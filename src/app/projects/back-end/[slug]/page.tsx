import Image from "next/image"

import { backEndProjects } from "../../_components/data"

import { CheckCircle2, Github, LinkIcon, ArrowLeft } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { RetroButton } from "@/components/retroui/Button"
import Link from "next/link"
import { routes } from "@/lib"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function Project({ params }: Props) {
  const { slug } = await params

  const project = backEndProjects.find((project) => project.slug === slug)
  const translate = await getTranslations()

  if (!project) return null

  return (
    <div className="relative space-y-12">
      <Link href={routes.projects} className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors group">
        <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
        {translate("goBack")}
      </Link>

      <header className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-primary uppercase">{project.title}</h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-4xl leading-relaxed">{project.description}</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-8">
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
            <Image src={project.gif || project.image || "/projects/back-end/food-orders.png"} alt={project.title} fill className="object-cover" />
          </div>
        </div>

        <div className="lg:col-span-5 space-y-10">
          <section className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-widest text-primary/70">{translate("technologies")}</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span key={idx} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-muted-foreground">
                  {tool}
                </span>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-widest text-primary/70">{translate("features")}</h3>
            <ul className="space-y-3">
              {project.keyFeatures?.map((feature, idx) => (
                <li key={`feature-${idx}`} className="flex items-start gap-3 text-lg font-medium text-muted-foreground">
                  <CheckCircle2 className="size-6 text-primary shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {(project.url || project.github) && (
            <section className="space-y-4 pt-8 border-t border-white/5">
              <h3 className="text-sm font-black uppercase tracking-widest text-primary/70">{translate("links")}</h3>
              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <RetroButton variant="secondary" className="font-bold">
                      <Github className="mr-2 size-5" />
                      {translate("github")}
                    </RetroButton>
                  </a>
                )}
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <RetroButton className="font-bold">
                      <LinkIcon className="mr-2 size-5" />
                      {translate("preview")}
                    </RetroButton>
                  </a>
                )}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
