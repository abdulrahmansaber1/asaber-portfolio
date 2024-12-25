type Props = {
  skills: string[]
}

export const ProjectSkills = ({ skills }: Props) => {
  return (
    <section className="px-2">
      <ul className="flex gap-1 flex-wrap items-center">
        {skills.map((skill, index) => (
          <li
            className="px-2 py-1 bg-gray-100 dark:bg-darkBorder rounded-sm text-xs"
            key={`${skill}-${index * Math.random()}`}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
