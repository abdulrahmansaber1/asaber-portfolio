"use client"

import { useLocale } from "next-intl"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from "lucide-react"
import { cn, links } from "@/lib"

const credentials = [
  {
    id: "degree",
    typeEn: "Academic Degree",
    typeAr: "الدرجة الأكاديمية",
    titleEn: "Zagazig University",
    titleAr: "جامعة الزقازيق",
    subEn: "B.Sc. in Electronics and Communications Engineering",
    subAr: "بكالوريوس في هندسة الإلكترونيات والاتصالات",
    orgEn: "Faculty of Engineering",
    orgAr: "كلية الهندسة",
    period: "2020 – 2025",
    location: "Zagazig, Egypt",
    descriptionEn:
      "Rigorous 5-year engineering curriculum focused on computer architecture, digital signal processing, communication networks, embedded systems, and advanced mathematical analysis. This background equips me with a deep understanding of low-level system design and analytical problem solving for software architecture.",
    descriptionAr:
      "برنامج هندسي مكثف مدته 5 سنوات يركز على معمارية الحاسوب، معالجة الإشارات الرقمية، شبكات الاتصالات، الأنظمة المدمجة، والتحليل الرياضي المتقدم. تزودني هذه الخلفية الهندسية بفهم عميق لتصميم الأنظمة وحل المشكلات البرمجية المعقدة بأسلوب هندسي دقيق.",
    chipsEn: [
      "Computer Architecture",
      "Digital Signal Processing (DSP)",
      "Communication Networks",
      "Embedded Systems",
      "Algorithms & Problem Solving"
    ],
    chipsAr: [
      "معمارية الحاسوب",
      "معالجة الإشارات الرقمية (DSP)",
      "شبكات الاتصالات",
      "الأنظمة المدمجة",
      "الخوارزميات وحل المشكلات"
    ],
    theme: {
      border: "border-blue-500/20 hover:border-blue-500/40",
      bg: "from-blue-500/10 via-card/80 to-card/30",
      iconBg: "bg-blue-500/15 border-blue-500/30 text-blue-400",
      badge: "bg-blue-500/15 text-blue-400 border-blue-500/30",
      glow: "bg-blue-500/10 group-hover:bg-blue-500/20"
    },
    icon: GraduationCap
  },
  {
    id: "aws",
    typeEn: "Cloud Certification",
    typeAr: "شهادة معتمدة في السحابة",
    titleEn: "AWS Academy Graduate",
    titleAr: "خريج أكاديمية AWS",
    subEn: "AWS Academy Cloud Foundations",
    subAr: "أساسيات الحوسبة السحابية من AWS",
    orgEn: "Amazon Web Services (AWS)",
    orgAr: "أمازون ويب سيرفيسز (AWS)",
    period: "Sep 17, 2024",
    location: "Global / Credly Verified",
    descriptionEn:
      "Completed rigorous institutional cloud architecture training covering core AWS services (EC2, S3, RDS, Lambda), virtual networking (VPC), identity & access management (IAM), cloud security policies, cost optimization, and high availability design patterns.",
    descriptionAr:
      "تدريب مؤسسي شامل ومعتمد في معمارية السحابة يغطي خدمات AWS الأساسية، والشبكات السحابية الافتراضية (VPC)، وإدارة الهوية والأمان (IAM)، وأفضل الممارسات لتصميم تطبيقات ذات توافر عالٍ وتكلفة محسنة.",
    chipsEn: [
      "AWS Core (EC2, S3, RDS)",
      "VPC & Cloud Networking",
      "IAM Security & Compliance",
      "High Availability & Scaling",
      "Cloud Economics & Billing"
    ],
    chipsAr: [
      "خدمات AWS (EC2, S3, RDS)",
      "الشبكات السحابية (VPC)",
      "إدارة الهوية والأمان (IAM)",
      "التوافر العالي والتوسع",
      "إدارة التكاليف السحابية"
    ],
    link: links.awsCertificate,
    linkLabelEn: "View Verified Credential",
    linkLabelAr: "التحقق من الشهادة عبر Credly",
    theme: {
      border: "border-amber-500/20 hover:border-amber-500/40",
      bg: "from-amber-500/10 via-card/80 to-card/30",
      iconBg: "bg-amber-500/15 border-amber-500/30 text-amber-400",
      badge: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      glow: "bg-amber-500/10 group-hover:bg-amber-500/20"
    },
    icon: Award,
    isVerified: true
  },
  {
    id: "depi",
    typeEn: "Technical Fellowship",
    typeAr: "منحة تدريبية تقنية مكثفة",
    titleEn: "DEPI Web Fellowship",
    titleAr: "مبادرة رواد مصر الرقمية (DEPI)",
    subEn: "React.js & Modern Web Stack Developer",
    subAr: "تطوير تطبيقات الويب الحديثة وإطار React.js",
    orgEn: "Ministry of Communications & IT (MCIT)",
    orgAr: "وزارة الاتصالات وتكنولوجيا المعلومات",
    period: "Jul 2023 – Dec 2023",
    location: "Egypt",
    descriptionEn:
      "Intensive 6-month scholarship initiative funded by the Ministry of Communications and Information Technology. Focused on mastery of Single Page Applications with React.js, modern client state management, RESTful microservices with Node.js and Express, and MongoDB.",
    descriptionAr:
      "منحة تدريبية مكثفة مدتها 6 أشهر مقدمة من وزارة الاتصالات وتكنولوجيا المعلومات المصرية، ركزت على إتقان بناء تطبيقات الصفحة الواحدة (SPAs) باستخدام React.js، وإدارة الحالة، وتطوير الواجهات الخلفية باستخدام Node.js و Express و MongoDB.",
    chipsEn: [
      "React.js & SPAs",
      "Node.js & Express APIs",
      "MongoDB Database Design",
      "State Management (Redux)",
      "Agile & Team Sprints"
    ],
    chipsAr: [
      "تطبيقات React.js",
      "واجهات برمجية Node.js",
      "قواعد بيانات MongoDB",
      "إدارة الحالة (Redux)",
      "منهجية Agile والعمل الجماعي"
    ],
    theme: {
      border: "border-emerald-500/20 hover:border-emerald-500/40",
      bg: "from-emerald-500/10 via-card/80 to-card/30",
      iconBg: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
      badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      glow: "bg-emerald-500/10 group-hover:bg-emerald-500/20"
    },
    icon: BookOpen
  }
]

export const AboutCredentialsSection = () => {
  const locale = useLocale()
  const isRTL = locale === "ar"
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section ref={ref} className="space-y-8">
      {/* Section Heading */}
      <div className={cn("space-y-2", isRTL && "text-right")}>
        <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider", isRTL && "flex-row-reverse")}>
          <GraduationCap className="size-3.5" />
          <span>{isRTL ? "المسار الأكاديمي والشهادات" : "Academic & Certifications"}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
          {isRTL ? "التعليم الأكاديمي والاعتمادات" : "Education & Certified Credentials"}
        </h2>
        <p className="text-muted-foreground text-sm max-w-2xl">
          {isRTL
            ? "الخلفية الأكاديمية والشهادات المهنية التي صقلت معرفتي العميقة في علوم الحاسوب وهندسة الأنظمة السحابية."
            : "Formal engineering education and validated certifications forming the technical bedrock of my career."}
        </p>
      </div>

      {/* Cards Stack */}
      <div className="space-y-6">
        {credentials.map((item, index) => {
          const type = isRTL ? item.typeAr : item.typeEn
          const title = isRTL ? item.titleAr : item.titleEn
          const sub = isRTL ? item.subAr : item.subEn
          const org = isRTL ? item.orgAr : item.orgEn
          const desc = isRTL ? item.descriptionAr : item.descriptionEn
          const chips = isRTL ? item.chipsAr : item.chipsEn
          const linkLabel = isRTL ? item.linkLabelAr : item.linkLabelEn

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div
                className={cn(
                  "relative rounded-3xl border bg-gradient-to-br backdrop-blur-xl p-6 sm:p-8 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl",
                  item.theme.border,
                  item.theme.bg,
                  isRTL && "text-right"
                )}
              >
                {/* Ambient glow */}
                <div
                  className={cn(
                    "absolute -top-20 -right-20 size-56 rounded-full blur-3xl transition-all duration-700 pointer-events-none",
                    item.theme.glow
                  )}
                />

                <div className="relative z-10 space-y-6">
                  {/* Top Row: Type Pill, Icon, Title, Org, and Date */}
                  <div className={cn("flex flex-col sm:flex-row sm:items-start justify-between gap-4", isRTL && "sm:flex-row-reverse")}>
                    <div className={cn("flex items-start gap-4", isRTL && "flex-row-reverse")}>
                      <div
                        className={cn(
                          "p-3.5 rounded-2xl border transition-transform duration-300 group-hover:scale-105 shrink-0 shadow-md",
                          item.theme.iconBg
                        )}
                      >
                        <item.icon className="size-6" />
                      </div>

                      <div className="space-y-1.5">
                        <div className={cn("flex flex-wrap items-center gap-2", isRTL && "flex-row-reverse")}>
                          <span className={cn("px-2.5 py-0.5 rounded-md text-[11px] font-bold border", item.theme.badge)}>
                            {type}
                          </span>
                          {item.isVerified && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                              <ShieldCheck className="size-3" />
                              {isRTL ? "شهادة موثقة" : "Verified Badge"}
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
                          {title}
                        </h3>

                        <p className="text-sm font-bold text-foreground/90">
                          {sub} <span className="text-muted-foreground font-normal">• {org}</span>
                        </p>
                      </div>
                    </div>

                    {/* Date & Location Chips */}
                    <div className={cn("flex flex-wrap sm:flex-col sm:items-end gap-1.5 shrink-0 text-xs font-medium text-muted-foreground", isRTL && "sm:items-start")}>
                      <span className={cn("inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-secondary/30 border border-white/5", isRTL && "flex-row-reverse")}>
                        <Calendar className="size-3.5 text-primary" />
                        <span>{item.period}</span>
                      </span>
                      <span className={cn("inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-secondary/30 border border-white/5", isRTL && "flex-row-reverse")}>
                        <MapPin className="size-3.5 text-primary" />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Narrative Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground/90 leading-relaxed border-t border-border/40 pt-4">
                    {desc}
                  </p>

                  {/* Competency / Focus Chips */}
                  <div className="space-y-2.5 pt-1">
                    <div className={cn("flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground/70", isRTL && "flex-row-reverse")}>
                      <Sparkles className="size-3 text-primary" />
                      <span>{isRTL ? "المهارات والركائز المكتسبة" : "Key Knowledge & Competencies"}</span>
                    </div>

                    <div className={cn("flex flex-wrap gap-2", isRTL && "justify-end")}>
                      {chips.map((chip) => (
                        <span
                          key={chip}
                          className={cn(
                            "inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-secondary/20 border border-white/5 text-foreground/80 hover:border-primary/30 hover:text-foreground transition-colors",
                            isRTL && "flex-row-reverse"
                          )}
                        >
                          <CheckCircle2 className="size-3 text-primary shrink-0 opacity-80" />
                          <span>{chip}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Optional Credential Trigger Link */}
                  {item.link && (
                    <div className={cn("pt-2 border-t border-border/40 flex", isRTL ? "justify-end" : "justify-start")}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-xs font-bold text-amber-400 transition-all duration-300 shadow-sm",
                          isRTL && "flex-row-reverse"
                        )}
                      >
                        <Award className="size-4" />
                        <span>{linkLabel}</span>
                        <ExternalLink className="size-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
