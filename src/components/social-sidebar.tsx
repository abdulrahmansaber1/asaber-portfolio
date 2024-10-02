import { socialMedia } from "@/lib"

export const SocialSidebar = () => {
  return (
    <div className="fixed right-24 bottom-10 flex flex-col gap-4 px-3 py-4 rounded-full justify-between dark:border bg-indigo-500 border-transparent text-white dark:text-black dark:bg-transparent dark:border-border">
      {socialMedia.map(({ icon: Icon, href }, idx) => (
        <a target="_blank" href={href} key={idx} className="dark:text-gray-300 transition-colors dark:hover:text-white">
          <Icon className="size-6" />
        </a>
      ))}
    </div>
  )
}
