"use client"

import { ContactForm } from "./_components/form"
import { ContactRightSectionHeader } from "./_components/right-section-header"
import { ContactHeader } from "./_components/contact-header"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <div className="relative pt-12 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-6 lg:sticky lg:top-32">
          <ContactHeader />
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-6">
          <div className="relative p-6 md:p-10 rounded-xl border border-primary/10 bg-secondary/5 backdrop-blur-xl shadow-2xl overflow-hidden group">
            <div className="relative z-10 space-y-8">
              <ContactRightSectionHeader />
              <ContactForm />
            </div>

            <div className="absolute -top-24 -right-24 size-64 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all duration-700" />
            <div className="absolute -bottom-24 -left-24 size-64 bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/10 transition-all duration-700" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
