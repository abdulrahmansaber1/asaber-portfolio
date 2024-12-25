import Link from "next/link"
import translate from "@/lib/translate"

import { useLanguage } from "@/hooks/use-language"

import { Dispatch, SetStateAction } from "react"
import { Eye, LinkIcon, Scan, Github } from "lucide-react"
import { CustomTooltip } from "@/components/tooltip"
import { ProjectLinkBtn } from "./link-btn"
import { ClassValue } from "clsx"
import { cn } from "@/lib"

type Props = {
  github?: string
  preview?: string
  slug?: string
  viewUrl?: string
  sheetOpen?: boolean
  setSheetOpen?: Dispatch<SetStateAction<boolean>>
  className?: ClassValue
}

export const ProjectFooter = ({
  className,
  github,
  preview,
  slug,
  viewUrl,
  setSheetOpen
}: Props) => {
  const langauge = useLanguage()

  return (
    <section className={cn("flex gap-1 justify-end", className)}>
      {github && <ProjectLinkBtn href={github} icon={Github} />}
      {preview && <ProjectLinkBtn href={preview} icon={LinkIcon} />}
      {slug && viewUrl && (
        <CustomTooltip label={translate("viewDetails", langauge)}>
          <ProjectLinkBtn href={viewUrl} icon={Eye} which="next" target="_self" />
        </CustomTooltip>
      )}
      <CustomTooltip label={translate("quickPreview", langauge)}>
        <button
          onClick={() => (setSheetOpen ? setSheetOpen(true) : null)}
          className="p-2 py-2 rounded-sm border dark:border-[#222] border-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-colors flex items-center gap-2"
        >
          <Scan className="size-4" />
        </button>
      </CustomTooltip>
    </section>
  )
}
