"use client"

import { useTranslations } from "next-intl"
import { ContactLinks } from "./links"
import Image from "next/image"
import { motion } from "framer-motion"

export const ContactHeader = () => {
  const translate = useTranslations()

  return (
    <section className="space-y-12">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="relative size-48 md:size-56">
        <Image src="/me.jpeg" alt="Abdulrahman Saber" fill className="object-cover object-top rounded-full border-4 border-primary/20 shadow-2xl" />
      </motion.div>

      <div className="space-y-6">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1]"
        >
         {translate("contactPageTitle")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground font-medium max-w-xl leading-relaxed"
        >
          {translate("contactSubtitle")}
        </motion.p>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <ContactLinks />
      </motion.div>
    </section>
  )
}
