import { ScrollProgress } from "@/components/ui/scrollprogress"

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      {children}
    </>
  )
}
