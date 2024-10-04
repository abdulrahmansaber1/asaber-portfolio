type Props = {
  title: string
  description: string
  shortDescription?: string
}

export const ProjectTitle = ({ title, description, shortDescription }: Props) => {
  return (
    <section className="px-2">
      <h2 className="font-medium text-lg mb-0.5 line-clamp-1">{title}</h2>
      <p className="font-normal text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{description}</p>
    </section>
  )
}
