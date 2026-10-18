"use client"

import { useLocale } from "next-intl"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { History, Calendar, CheckCircle2, Milestone } from "lucide-react"
import { cn } from "@/lib"

const milestones = [
  {
    year: "Nov 2024 – Present",
    yearAr: "نوفمبر 2024 – الآن",
    titleEn: "Software Engineer @ CoreVine",
    titleAr: "مهندس برمجيات في CoreVine",
    subEn: "Full-Time Engineering Role",
    subAr: "وظيفة هندسية بدوام كامل",
    descEn:
      "Architecting robust backend APIs using Laravel (PHP) and high-speed web interfaces using Next.js (React) and TypeScript. Collaborating with cross-functional product teams to deliver user-centric enterprise platforms.",
    descAr:
      "تطوير وهندسة واجهات برمجية قوية للباك إند باستخدام Laravel، وبناء واجهات مستخدم سريعة وديناميكية باستخدام Next.js و TypeScript، والتعاون مع فرق العمل لتسليم حلول برمجية متكاملة.",
    isCurrent: true,
    dotColor: "bg-emerald-400"
  },
  {
    year: "2024",
    yearAr: "2024",
    titleEn: "AWS Cloud Foundations & Scaling Freelance",
    titleAr: "اعتماد سحابة AWS وتوسع العمل الحر",
    subEn: "Cloud Mastery & Independent Engineering",
    subAr: "إتقان السحابة والمشاريع المستقلة",
    descEn:
      "Earned AWS Academy Cloud Foundations certification on global cloud infrastructure and security. Shipped production e-commerce, LMS, and custom admin platforms for international clients.",
    descAr:
      "الحصول على شهادة AWS Academy Cloud Foundations في البنية السحابية والأمان، وإطلاق العديد من المتاجر الإلكترونية والمنصات التعليمية ولوحات التحكم لعملاء متنوعين.",
    dotColor: "bg-amber-400"
  },
  {
    year: "2023",
    yearAr: "2023",
    titleEn: "DEPI Web Fellowship & MERN Mastery",
    titleAr: "منحة DEPI والتعمق في MERN Stack",
    subEn: "Digital Egypt Pioneers Initiative (MCIT)",
    subAr: "مبادرة رواد مصر الرقمية (وزارة الاتصالات)",
    descEn:
      "Completed an intensive government-backed technical fellowship focused on advanced React.js single-page applications, Node.js/Express APIs, MongoDB, and modern state architectures.",
    descAr:
      "إتمام منحة تدريبية تقنية مكثفة برعاية وزارة الاتصالات تركز على تطوير تطبيقات الويب بـ React.js، وبناء خدمات الـ Backend بـ Node.js و Express، وقواعد بيانات MongoDB.",
    dotColor: "bg-indigo-400"
  },
  {
    year: "2020 – 2025",
    yearAr: "2020 – 2025",
    titleEn: "B.Sc. in Electronics & Communications",
    titleAr: "بكالوريوس هندسة الإلكترونيات والاتصالات",
    subEn: "Zagazig University (Faculty of Engineering)",
    subAr: "جامعة الزقازيق (كلية الهندسة)",
    descEn:
      "Underwent rigorous engineering education, mastering computer architecture, digital signal processing, communication networks, and mathematical problem-solving that form the analytical backbone of my software design.",
    descAr:
      "دراسة هندسية متقدمة في معمارية المعالجات وشبكات الاتصالات والتحليل الرياضي، مما بنى الأساس المنهجي والتحليلي الذي أعتمد عليه في تصميم البرمجيات.",
    dotColor: "bg-blue-400"
  },
  {
    year: "2017",
    yearAr: "2017",
    titleEn: "The Genesis: First Lines of Code",
    titleAr: "البداية: أولى السطور البرمجية",
    subEn: "Self-Taught Exploration",
    subAr: "شغف التعلم الذاتي",
    descEn:
      "Wrote my very first line of code. Driven by passion and curiosity, explored foundational web languages (HTML, CSS, JavaScript) and backend programming with PHP and SQL.",
    descAr:
      "كتابة أول سطر برمجي في مسيرتي. بدافع الشغف والفضول، بدأت بتعلم لغات الويب الأساسية وتطوير الأنظمة الخلفية بـ PHP وقواعد بيانات SQL.",
    dotColor: "bg-purple-400"
  }
]

export const AboutJourneySection = () => {
  const locale = useLocale()
  const isRTL = locale === "ar"
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section ref={ref} className="space-y-8">
      {/* Section Header */}
      <div className={cn("space-y-2", isRTL && "text-right")}>
        <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider", isRTL && "flex-row-reverse")}>
          <History className="size-3.5" />
          <span>{isRTL ? "محطات الرحلة" : "Chronological Journey"}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
          {isRTL ? "رحلتي خلال 9 سنوات من البرمجة" : "Milestones Over 9 Years"}
        </h2>
        <p className="text-muted-foreground text-sm max-w-2xl">
          {isRTL
            ? "نظرة زمنية على التطور المهني والأكاديمي منذ أول سطر كود كتبته وحتى اليوم."
            : "A timeline of technical evolution from my very first line of code to production software engineering."}
        </p>
      </div>

      {/* Timeline List */}
      <div className="relative pt-2">
        {/* Continuous Spine Line */}
        <div
          className={cn(
            "absolute top-4 bottom-8 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent",
            isRTL ? "right-4 sm:right-6" : "left-4 sm:left-6"
          )}
        />

        <div className="space-y-8">
          {milestones.map((item, index) => {
            const year = isRTL ? item.yearAr : item.year
            const title = isRTL ? item.titleAr : item.titleEn
            const sub = isRTL ? item.subAr : item.subEn
            const desc = isRTL ? item.descAr : item.descEn

            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative flex gap-5 sm:gap-8",
                  isRTL ? "flex-row-reverse text-right" : "text-left"
                )}
              >
                {/* Node */}
                <div className="relative flex-shrink-0 flex items-start pt-1 z-10">
                  <div className="size-8 sm:size-10 rounded-full flex items-center justify-center bg-background border border-primary/40 shadow-md">
                    <span className={cn("size-2.5 sm:size-3 rounded-full", item.dotColor)} />
                    {item.isCurrent && (
                      <span className="absolute -inset-1 rounded-full border-2 border-emerald-400/40 animate-ping" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1">
                  <div className="p-5 sm:p-6 rounded-2xl border border-white/5 bg-secondary/10 hover:border-primary/25 hover:bg-secondary/15 transition-all duration-300 space-y-2">
                    <div className={cn("flex flex-wrap items-center justify-between gap-2", isRTL && "flex-row-reverse")}>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                        <Calendar className="size-3" />
                        {year}
                      </span>
                      {item.isCurrent && (
                        <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {isRTL ? "المحطة الحالية" : "Current Milestone"}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-foreground">
                      {title}
                    </h3>

                    <p className="text-xs font-semibold text-primary/90">
                      {sub}
                    </p>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                      {desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
