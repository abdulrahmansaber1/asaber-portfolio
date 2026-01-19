import { cn } from "@/lib"
import { ProjectTabs } from "./project-tabs"
import { ProjectPageTitle } from "./title"
import { useLocale, useTranslations } from "next-intl"

type Props = {
  title: string
}

export const PageHeader = ({ title }: Props) => {
  const translate = useTranslations()
  const locale = useLocale()

  return (
    <header className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
      <div className={cn("space-y-6 text-center lg:text-left", locale === "ar" && "lg:text-right")}>
        <div className="relative inline-block">
          <ProjectPageTitle title={title} />
          <div className="absolute -bottom-2 left-0 h-2 w-24 bg-primary rounded-full hidden lg:block" />
        </div>
        <p className="max-w-[650px] text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed mx-auto lg:mx-0">{translate("projectsSubtitle")}</p>
      </div>
      <div className={cn("flex justify-center lg:justify-end", locale === "ar" && "lg:justify-start")}>
        <ProjectTabs />
      </div>
    </header>
  )
}
