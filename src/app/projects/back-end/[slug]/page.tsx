import Link from "next/link"
import { backEndProjects } from "../../_components/data"
import { CheckCircle2, Github, ExternalLink, ArrowLeft, Layers, Sparkles, CheckIcon } from "lucide-react"
import { getLocale, getTranslations } from "next-intl/server"
import { routes } from "@/lib"
import { getProjectDescription, getProjectFeatures } from "../../_components/translations"
import { ProjectMediaCarousel } from "../../_components/project-carousel"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function Project({ params }: Props) {
  const { slug } = await params

  const project = backEndProjects.find((project) => project.slug === slug)
  const translate = await getTranslations()
  const locale = await getLocale()

  if (!project) return null

  const keyFeatures = getProjectFeatures(project.keyFeatures, locale)
  const description = getProjectDescription(project, locale)
  const images = project.images && project.images.length > 0
    ? project.images
    : [project.gif, project.image].filter(Boolean) as string[]

  return (
    <div className="relative max-w-6xl mx-auto py-8 space-y-12">
      {/* Navigation & Header */}
      <div className="space-y-6">
        <Link
          href={routes.projects}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card/40 backdrop-blur-md border border-white/10 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200 group"
        >
          <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
          <span>{translate("goBack")}</span>
        </Link>

        <div className="space-y-4">
          <h1 className="text-4xl text-center sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl mx-auto text-center text-muted-foreground font-normal max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Media Preview Box */}
        <div className="lg:col-span-7 space-y-6">
          <ProjectMediaCarousel
            images={images}
            title={project.title}
          />

          {/* Quick Links Box if both exist */}
          {(project.url || project.github) && (
            <div className="flex flex-wrap gap-4 ">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-foreground font-bold text-sm transition-all duration-200 shadow-sm hover:scale-[1.02]"
                >
                  <Github className="size-4" />
                  <span>{translate("github")}</span>
                </a>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/25 hover:opacity-90 transition-all duration-200 hover:scale-[1.02]"
                >
                  <ExternalLink className="size-4" />
                  <span>{translate("preview")}</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-5 space-y-8">
          {/* Tech Stack */}
          <section className=" space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
              <Layers className="size-4" />
              <span>{translate("technologies")}</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Key Features */}
          {keyFeatures && keyFeatures.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                <CheckIcon className="size-4" />
                <span>{translate("features")}</span>
              </div>
              <ul className="space-y-3.5 pt-1">
                {keyFeatures.map((feature, idx) => (
                  <li key={`feature-${idx}`} className="flex items-start gap-3 text-sm sm:text-base font-normal text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
