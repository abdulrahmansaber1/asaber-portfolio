"use client"

import { useLocale } from "next-intl"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, ShieldCheck, Palette, Cpu, Compass } from "lucide-react"
import { cn } from "@/lib"

const principles = [
  {
    icon: Zap,
    titleEn: "Performance & Sub-Second Latency",
    titleAr: "السرعة الفائقة وزمن الاستجابة الأقل",
    descEn:
      "Every millisecond counts. I optimize database queries, implement multi-tier Redis caching, and leverage Next.js SSR/ISR to deliver lightning-fast experiences for users worldwide.",
    descAr:
      "كل جزء من الثانية له قيمته. أحرص على تحسين استعلامات قواعد البيانات، تطبيق استراتيجيات التخزين المؤقت عبر Redis، واستغلال ميزات Next.js لتوفير سرعة تحميل وتصفح فائقة.",
    color: "from-amber-500/10 to-orange-500/5",
    border: "hover:border-amber-500/30",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/15 border-amber-500/30"
  },
  {
    icon: ShieldCheck,
    titleEn: "DevOps & Cloud Resilience",
    titleAr: "موثوقية السحابة وأتمتة الـ DevOps",
    descEn:
      "Code is only as good as its deployment. I architect cloud infrastructure on AWS, containerize with Docker & Kubernetes, and automate robust CI/CD pipelines to ensure zero-downtime scalability.",
    descAr:
      "جودة الكود تكتمل باستقرار بيئة النشر. أقوم بتصميم البنية السحابية على AWS، عزل الخدمات بالحاويات عبر Docker و Kubernetes، وأتمتة النشر عبر خطوط CI/CD لضمان التوسع الآمن.",
    color: "from-blue-500/10 to-indigo-500/5",
    border: "hover:border-blue-500/30",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/15 border-blue-500/30"
  },
  {
    icon: Palette,
    titleEn: "Craftsmanship & Fluid UI/UX",
    titleAr: "الحرفية والتجربة البصرية السلسة",
    descEn:
      "Software should be an absolute delight to use. I build pixel-perfect, accessible, and intuitive front-ends featuring smooth micro-animations, tailored dark/light modes, and seamless responsiveness.",
    descAr:
      "يجب أن تكون تجربة استخدام التطبيق ممتعة وانسيابية. أهتم بالتفاصيل الدقيقة لواجهات المستخدم، وسهولة الوصول، والحركات التفاعلية السلسة، والتوافق التام مع كافة الشاشات.",
    color: "from-purple-500/10 to-pink-500/5",
    border: "hover:border-purple-500/30",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/15 border-purple-500/30"
  },
  {
    icon: Cpu,
    titleEn: "Engineering Rigor & Clean Code",
    titleAr: "الانضباط الهندسي والكود النظيف",
    descEn:
      "Grounded in an Electronics & Communications engineering background, I prioritize clean architectural patterns, maintainable abstractions, modular components, and comprehensive testability.",
    descAr:
      "انطلاقاً من خلفيتي في هندسة الإلكترونيات والاتصالات، ألتزم بتطبيق المعايير البرمجية النظيفة، وفصل المسؤوليات، وتصميم أنظمة برمجية يسهل صيانتها واختبارها وتطويرها مستقبلاً.",
    color: "from-emerald-500/10 to-teal-500/5",
    border: "hover:border-emerald-500/30",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/15 border-emerald-500/30"
  }
]

export const AboutPrinciplesSection = () => {
  const locale = useLocale()
  const isRTL = locale === "ar"
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section ref={ref} className="space-y-8">
      {/* Section Header */}
      <div className={cn("space-y-2", isRTL && "text-right")}>
        <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider", isRTL && "flex-row-reverse")}>
          <Compass className="size-3.5" />
          <span>{isRTL ? "فلسفتي في العمل" : "Engineering Principles"}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
          {isRTL ? "كيف أصمم وأبني البرمجيات؟" : "How I Architect & Build Software"}
        </h2>
        <p className="text-muted-foreground text-sm max-w-2xl">
          {isRTL
            ? "القيم والمعايير الهندسية التي توجه كل سطر برمجي وكل قرار معماري أتخذه في الإنتاج."
            : "The core engineering principles guiding every line of code and architectural decision I make in production."}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {principles.map((item, index) => {
          const title = isRTL ? item.titleAr : item.titleEn
          const desc = isRTL ? item.descAr : item.descEn

          return (
            <motion.div
              key={item.titleEn}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div
                className={cn(
                  "relative p-6 sm:p-7 rounded-3xl border border-white/5 bg-gradient-to-br backdrop-blur-xl h-full flex flex-col justify-between transition-all duration-500 overflow-hidden shadow-md hover:shadow-xl",
                  item.color,
                  item.border,
                  isRTL && "text-right"
                )}
              >
                <div className="relative z-10 space-y-4">
                  <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
                    <div className={cn("p-3 rounded-2xl border transition-transform duration-300 group-hover:scale-110 shadow-sm", item.iconBg)}>
                      <item.icon className={cn("size-5", item.iconColor)} />
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-foreground tracking-tight">
                      {title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
