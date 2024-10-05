import { contact, links, socialMedia } from "@/lib"
import { Mail, Phone } from "lucide-react"
import Link from "next/link"

type Props = {}
export const Footer = ({}: Props) => {
  return (
    <footer className="bg-black py-8 mt-16 pb-0">
      <div className="grid xl:grid-cols-3 grid-cols-2 gap-4 max-w-screen-2xl mx-auto">
        <section>
          <p className="mb-4 uppercase font-bold dark:text-gray-500">Personal Information</p>
          <p>Abdulrahman Saber</p>
          <p>Full Stack Web Developer</p>
        </section>
        <section>
          <p className="mb-4 uppercase font-bold dark:text-gray-500">Contact Me</p>
          <ul className="space-y-4">
            <li>
              <a
                className="transition-all dark:hover:text-gray-200 hover:text-gray-500 flex gap-2 items-center"
                href={`mailto:${contact.email}`}
              >
                <Mail className="size-4" /> {contact.email}
              </a>
            </li>
            <li>
              <a
                className="transition-all dark:hover:text-gray-200 hover:text-gray-500 flex gap-2 items-center"
                href={contact.whatsapp}
              >
                <Phone className="size-4" /> {contact.phone}
              </a>
            </li>
          </ul>
        </section>

        <section>
          <p className="mb-4 uppercase font-bold dark:text-gray-500">Links</p>
          <ul className="flex gap-4">
            {socialMedia.map(({ href, icon: Icon }, index) => (
              <li key={`social-li-${index}`}>
                <a href={href} target="_blank">
                  <Icon className="size-7" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="text-center text-gray-300 py-4 bg-accent mt-8">
        <p>
          Copyrights 2024 reserved for <b>Abdulrahman Saber</b>. All rights reserved.
        </p>
      </section>
    </footer>
  )
}
