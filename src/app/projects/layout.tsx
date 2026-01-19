import { ScrollProgress } from "@/components/ui/scrollprogress"

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative pt-12 pb-20 space-y-16">
      <ScrollProgress />
      {children}
    </div>
  )
}
