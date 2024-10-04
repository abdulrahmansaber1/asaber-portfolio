import { GitHubLogoIcon, Link1Icon } from "@radix-ui/react-icons"

type Props = {
  github?: string
  preview?: string
}

export const ProjectFooter = ({ github, preview }: Props) => {
  return (
    <section className="flex gap-1 justify-end">
      {github && (
        <a href={github} target="_blank" className="p-2 py-2 rounded-sm border border-[#222] hover:bg-primary hover:text-white hover:border-primary transition-colors flex items-center gap-2">
          <GitHubLogoIcon />
        </a>
      )}
      {preview && (
        <a href={preview} target="_blank" className="p-2 py-2 rounded-sm border border-[#222] hover:bg-primary hover:text-white hover:border-primary transition-colors flex items-center gap-2">
          <Link1Icon />
        </a>
      )}
    </section>
  )
}
