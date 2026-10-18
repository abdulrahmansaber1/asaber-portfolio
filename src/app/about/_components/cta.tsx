"use client"

import { useLocale } from "next-intl"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Mail, MessageSquare, Send, ArrowRight, Sparkles } from "lucide-react"
import { cn, contact, routes } from "@/lib"

export const AboutCtaSection = () => {
  const locale = useLocale()
  const isRTL = locale === "ar"
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section ref={ref} className="relative overflow-hidden pt-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card/80 to-secondary/10 p-8 sm:p-12 md:p-16 backdrop-blur-xl overflow-hidden text-center shadow-2xl"
      >
        <div className="absolute -top-32 -left-32 size-72 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 size-72 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
            <Sparkles className="size-3.5" />
            <span>{isRTL ? "لنعمل معاً" : "Get In Touch"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
            {isRTL
              ? "مهتم بالتعاون أو بناء مشروع جديد معاً؟"
              : "Interested in working together or hiring me for your team?"}
          </h2>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {isRTL
              ? "أنا دائماً منفتح لمناقشة المشاريع الطموحة، الفرص الوظيفية في تطوير الويب والـ DevOps، والحلول التقنية المبتكرة."
              : "I am always open to exploring challenging engineering opportunities, high-impact web architectures, and full-stack consulting."}
          </p>

          <div className={cn("flex flex-wrap items-center justify-center gap-3 pt-2", isRTL && "flex-row-reverse")}>
            <Link href={routes.contact} passHref>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-primary text-primary-foreground font-bold text-sm cursor-pointer shadow-lg shadow-primary/25",
                  isRTL && "flex-row-reverse"
                )}
              >
                <Mail className="size-4" />
                <span>{isRTL ? "أرسل رسالة" : "Send a Message"}</span>
                <ArrowRight className={cn("size-4", isRTL && "rotate-180")} />
              </motion.div>
            </Link>

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/10 hover:border-emerald-500/40 bg-secondary/10 hover:bg-emerald-500/10 text-foreground font-bold text-sm transition-all duration-300",
                isRTL && "flex-row-reverse"
              )}
            >
              <MessageSquare className="size-4 text-emerald-400" />
              <span>{isRTL ? "واتساب" : "WhatsApp"}</span>
            </a>

            <a
              href={contact.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/10 hover:border-blue-500/40 bg-secondary/10 hover:bg-blue-500/10 text-foreground font-bold text-sm transition-all duration-300",
                isRTL && "flex-row-reverse"
              )}
            >
              <Send className="size-4 text-blue-400" />
              <span>{isRTL ? "تليجرام" : "Telegram"}</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
