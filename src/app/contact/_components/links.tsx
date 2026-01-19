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
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <motion.a
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{ duration: 0.4, delay: 0 }}
        className="flex gap-3 items-center font-bold text-muted-foreground hover:text-primary transition-colors group"
        href={`mailto:${contact.email}`}
        target="_blank"
      >
        <div className="size-12 rounded-2xl flex justify-center items-center bg-secondary border border-white/5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-lg">
          <Mail className="size-5" />
        </div>
        <span className="text-sm md:text-base truncate">{contact.email}</span>
      </motion.a>

      <motion.div initial="initial" animate="animate" variants={variants} transition={{ duration: 0.4, delay: 0.2 }} className="flex gap-3 items-center font-bold text-muted-foreground group">
        <div className="size-12 rounded-2xl flex justify-center items-center bg-secondary border border-white/5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-lg">
          <Phone className="size-5" />
        </div>
        <bdi className="text-sm md:text-base">{contact.phone}</bdi>
      </motion.div>

      <motion.a
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex gap-3 items-center font-bold text-muted-foreground hover:text-primary transition-colors group"
        href={contact.whatsapp}
        target="_blank"
      >
        <div className="size-12 rounded-2xl flex justify-center items-center bg-secondary border border-white/5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-lg">
          <MessageCircle className="size-5" />
        </div>
        <span className="text-sm md:text-base">Whatsapp</span>
      </motion.a>

      <motion.a
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="flex gap-3 items-center font-bold text-muted-foreground hover:text-primary transition-colors group"
        href={contact.telegram}
        target="_blank"
      >
        <div className="size-12 rounded-2xl flex justify-center items-center bg-secondary border border-white/5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-lg">
          <MessageCircle className="size-5" />
        </div>
        <span className="text-sm md:text-base">Telegram</span>
      </motion.a>
    </section>
  )
}
