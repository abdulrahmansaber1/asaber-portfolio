import { ProjectTabs } from "./project-tabs"
import { ProjectPageTitle } from "./title"

type Props = {
  title: string
}

export const PageHeader = ({ title }: Props) => {
  return (
    <header className="mt-8 flex xl:flex-row md:flex-row flex-col xl:justify-between md:justify-between justify-center items-center mb-4">
      <ProjectPageTitle title={title} />
      <ProjectTabs />
    </header>
  )
}
