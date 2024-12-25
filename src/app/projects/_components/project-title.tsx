import Link from "next/link"

type Props = {
  title: string
  description: string
  shortDescription?: string
  viewUrl?: string
}

export const ProjectTitle = ({ title, description, viewUrl }: Props) => {
  return (
    <section className="px-2">
      <Link
        href={viewUrl || ""}
        className="font-medium text-lg mb-0.5 line-clamp-1 hover:opacity-65 hover:underline"
      >
        {title}
      </Link>
      <p className="font-normal text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
        {description}
      </p>
    </section>
  )
}
