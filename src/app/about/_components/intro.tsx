"use client"

import { useLocale, useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  FileText,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Sparkles,
  Download,
  Github,
  Linkedin
} from "lucide-react"
import { cn, links, routes, contact } from "@/lib"
import { Title } from "@/components/widgets/common/title"

export const AboutIntroSection = () => {
  const translate = useTranslations()
  const locale = useLocale()
  const isRTL = locale === "ar"

  return (
    <section className="space-y-10">
      {/* Title */}
      <div className="relative">
        <Title title="aboutMe" />
      </div>

      {/* Hero Profile & Narrative Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left / Profile Portrait Card (4 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4"
        >
          <div className="relative group rounded-3xl border border-white/10 bg-gradient-to-br from-card/90 via-card/50 to-card/20 p-6 backdrop-blur-xl shadow-2xl hover:border-primary/30 transition-all duration-500 overflow-hidden text-center sm:text-left">
            {/* Ambient hover glow */}
            <div className="absolute -top-16 -left-16 size-40 bg-primary/15 rounded-full blur-3xl group-hover:bg-primary/25 transition-all duration-700 pointer-events-none" />

            {/* Photo */}
            <div className="relative mx-auto sm:mx-0 size-36 sm:size-44 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/10 group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/me.jpeg"
                alt="Abdulrahman Saber"
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Profile Meta */}
            <div className={cn("mt-5 space-y-2", isRTL && "sm:text-right")}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{isRTL ? "متاح للفرص والمشاريع" : "Available for Roles"}</span>
              </div>

              <h3 className="text-xl font-black text-foreground">
                {isRTL ? "عبدالرحمن صابر" : "Abdulrahman Saber"}
              </h3>

              <p className="text-xs text-primary font-bold">
                {isRTL ? "مهندس برمجيات • مطور Full-Stack & DevOps" : "Software Engineer • Full-Stack & DevOps"}
              </p>
            </div>

            {/* Info Pills */}
            <div className={cn("mt-4 pt-4 border-t border-border/40 space-y-2 text-xs text-muted-foreground", isRTL && "text-right")}>
              <div className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
                <Briefcase className="size-3.5 text-primary shrink-0" />
                <span className="font-semibold text-foreground/90">
                  {isRTL ? "مهندس برمجيات في CoreVine" : "Software Engineer @ CoreVine"}
                </span>
              </div>

              <div className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
                <GraduationCap className="size-3.5 text-primary shrink-0" />
                <span>
                  {isRTL ? "بكالوريوس هندسة الإلكترونيات والاتصالات" : "B.Sc. Electronics & Communications"}
                </span>
              </div>

              <div className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
                <MapPin className="size-3.5 text-primary shrink-0" />
                <span>Zagazig, Egypt • Global Remote</span>
              </div>
            </div>

            {/* Social Icons & CV Download */}
            <div className={cn("mt-5 pt-4 border-t border-border/40 flex items-center justify-between gap-2", isRTL && "flex-row-reverse")}>
              <a
                href="/cv.pdf"
                download="Abdulrahman_Saber_CV.pdf"
                className={cn(
                  "flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs shadow-md shadow-primary/20 hover:scale-105 transition-transform",
                  isRTL && "flex-row-reverse"
                )}
              >
                <Download className="size-3.5" />
                <span>{isRTL ? "تحميل السيرة الذاتية" : "Download CV"}</span>
              </a>

              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-white/10 hover:border-primary/40 bg-secondary/15 hover:bg-secondary/30 text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="size-4" />
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-white/10 hover:border-primary/40 bg-secondary/15 hover:bg-secondary/30 text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right / Detailed Story & Narrative (8 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={cn("lg:col-span-8 space-y-6", isRTL && "text-right")}
        >
          <div className="space-y-4">
            <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider", isRTL && "flex-row-reverse")}>
              <Sparkles className="size-3" />
              <span>{isRTL ? "سيرتي الذاتية ورؤيتي" : "My Background & Vision"}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight leading-snug">
              {isRTL
                ? "مطور برمجيات ذو شغف عميق بالمعمارية السحابية والأنظمة البرمجية عالية الأداء."
                : "A Full-Stack & DevOps Engineer building high-throughput, cloud-native digital systems."}
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {isRTL
                ? "بدأت مسيرتي البرمجية منذ أكثر من 9 سنوات بدافع الشغف العميق باستكشاف كيفية عمل الأنظمة الرقمية، قواعد البيانات، وشبكات الويب. طوال هذه السنوات، قمت بتطوير مهاراتي من خلال العمل المستقل، المبادرات التقنية المكثفة، والوظائف الهندسية الاحترافية، لأصل إلى تخصص متقدم يجمع بين تطوير الواجهات الأمامية التفاعلية وبناء الأنظمة الخلفية وإدارة البنية السحابية."
                : "My coding journey began over 9 years ago, sparked by an insatiable curiosity to understand how software, networks, and distributed systems operate under the hood. Over nearly a decade of constant learning, client freelancing, and full-time engineering, I have honed an end-to-end craft that unites modern reactive front-ends, robust backend micro-APIs, and resilient cloud infrastructure."}
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {isRTL
                ? "دائمًا ما أدمج التفكير الهندسي التحليلي المكتسب من دراستي لهندسة الإلكترونيات والاتصالات بجامعة الزقازيق مع أحدث الممارسات البرمجية في الإنتاج، مما يمكنني من تقديم حلول برمجية مستقرة، سريعة الاستجابة، وقابلة للتوسع تحت مختلف أحجام الضغط."
                : "By blending rigorous analytical problem-solving from my Electronics and Communications Engineering degree at Zagazig University with modern industry best practices, I build applications that are not only visually engaging, but architecturally sound, secure, and ready to scale effortlessly."}
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className={cn("flex flex-wrap items-center gap-3 pt-2", isRTL && "justify-end")}>
            <Link href={routes.contact} passHref>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-bold text-sm cursor-pointer shadow-lg shadow-primary/20",
                  isRTL && "flex-row-reverse"
                )}
              >
                <Mail className="size-4" />
                <span>{isRTL ? "دعنا نعمل معاً" : "Let's Work Together"}</span>
              </motion.div>
            </Link>

            <Link href={routes.experience} passHref>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/10 hover:border-primary/30 bg-secondary/10 hover:bg-secondary/20 text-foreground font-bold text-sm cursor-pointer transition-colors"
              >
                <Briefcase className="size-4 text-primary" />
                <span>{isRTL ? "استعراض الخبرة العملية" : "Explore Experience Timeline"}</span>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
