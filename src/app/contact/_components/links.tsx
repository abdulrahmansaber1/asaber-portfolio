import Image from "next/image"

import { contact } from "@/lib"

import { motion } from "framer-motion"
import { Mail, MessageCircle, Phone } from "lucide-react"

export const ContactLinks = () => {
  const variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
  }

  return (
    <section className="space-y-4 grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1">
      <motion.a
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{ duration: 0.4, delay: 0 }}
        className="flex gap-2 items-center font-medium text-gray-600 dark:text-gray-300 group"
        href={`mailto:${contact.email}`}
        target="_blank"
      >
        <div className="size-10 rounded-md flex justify-center items-center dark:bg-[#222] bg-white dark:shadow-2xl shadow-md group-hover:text-white group-hover:bg-primary transition-colors">
          <Mail className="size-4" />
        </div>
        {contact.email}
      </motion.a>

      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex gap-2 items-center font-medium text-gray-600 dark:text-gray-300"
      >
        <div className="size-10 rounded-md flex justify-center items-center dark:bg-[#222] bg-white dark:shadow-2xl shadow-md group-hover:text-white">
          <Phone className="size-4" />
        </div>
        <bdi>{contact.phone}</bdi>
      </motion.div>

      <motion.a
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex gap-2 items-center font-medium text-gray-600 dark:text-gray-300 group"
        href={contact.whatsapp}
        target="_blank"
      >
        <div className="size-10 rounded-md flex justify-center items-center dark:bg-[#222] bg-white dark:shadow-2xl shadow-md group-hover:text-white group-hover:bg-primary transition-colors">
          <MessageCircle className="size-4" />
        </div>
        Whatsapp
      </motion.a>

      <motion.a
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="flex gap-2 items-center font-medium text-gray-600 dark:text-gray-300 group"
        href={contact.telegram}
        target="_blank"
      >
        <div className="size-10 rounded-md flex justify-center items-center dark:bg-[#222] bg-white dark:shadow-2xl shadow-md group-hover:text-white group-hover:bg-primary transition-colors">
          <MessageCircle className="size-4" />
        </div>
        Telegram
      </motion.a>
    </section>
  )
}
