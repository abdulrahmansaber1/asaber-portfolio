import { links } from "@/lib"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { File } from "lucide-react"

export const homePage = {
  title: "Hello, I'm Abdulrahman Saber",
  description:
    "An Experienced Full Stack Web Developer who embarked this journey 9 years ago. Learning many web technologies and frameworks, and building scalable web applications with high performance.",

  lastProject: {
    url: "https://ab2a-qalbne.vercel.app/",
    pcPicture: "/home/last-project-lg.png",
    mobilePicture: "/home/last-project-sm.png",
  },

  introLinks: [
    { icon: GitHubLogoIcon, title: "GitHub", href: links.github },
    { icon: LinkedInLogoIcon, title: "Linkedin", href: links.linkedin },
    { icon: File, title: "Resume", href: "/resume.pdf" },
  ],

  servicesEN: ["Web Development", "Web Design", "SEO", "Web Hosting", "Consultation", "Maintenance", "Support", "Analytics"],
  servicesAR: ["تطوير المواقع", "تصميم المواقع", "تحسين محرك البحث", "استضافة المواقع", "استشارات", "صيانة", "دعم", "تحليلات"],
}
