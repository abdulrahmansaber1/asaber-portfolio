"use client"

import { motion } from "framer-motion"
import { useLocale } from "next-intl"
import { Award, GraduationCap, BookOpen, Star, ExternalLink } from "lucide-react"
import { cn } from "@/lib"
import { links } from "@/lib"

const highlights = [
  {
    icon: Award,
    title: "AWS Academy Graduate",
    subtitle: "AWS Academy Cloud Foundations",
    date: "Sep 17, 2024",
    dateAr: "17 سبتمبر 2024",
    description: "Completed AWS Cloud Foundations, gaining hands-on experience with AWS core services, architecture, security, and pricing.",
    descriptionAr: "أتممت AWS Cloud Foundations مع خبرة عملية في الخدمات الأساسية والبنية والأمان والتسعير.",
    link: links.awsCertificate,
    color: "from-orange-500/10 to-amber-500/5",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10 group-hover:bg-orange-500",
    borderHover: "hover:border-orange-500/25",
  },
  {
    icon: GraduationCap,
    title: "B.Sc Electronics & Communications",
    subtitle: "Zagazig University",
    date: "2020 – 2025",
    dateAr: "2020 – 2025",
    description: "Studied Electronics & Communications Engineering, building strong analytical, problem-solving, and engineering fundamentals.",
    descriptionAr: "درست هندسة الإلكترونيات والاتصالات، مما بنّى أساساً قوياً في التحليل وحل المشكلات.",
    color: "from-blue-500/10 to-indigo-500/5",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10 group-hover:bg-blue-500",
    borderHover: "hover:border-blue-500/25",
  },
  {
    icon: BookOpen,
    title: "DEPI – React Developer",
    subtitle: "Digital Egypt Pioneers Initiative",
    date: "Jul – Dec 2023",
    dateAr: "يوليو – ديسمبر 2023",
    description: "Intensively trained on React.js, Node.js, and MongoDB in an initiative by Egypt's Ministry of Communications.",
    descriptionAr: "تدريب مكثف على React.js وNode.js وMongoDB في مبادرة وزارة الاتصالات المصرية.",
    color: "from-emerald-500/10 to-teal-500/5",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500",
    borderHover: "hover:border-emerald-500/25",
  },
  {
    icon: Star,
    title: "Full Stack Freelancer",
    subtitle: "Self-employed",
    date: "2024 – Present",
    dateAr: "2024 – الآن",
    description: "Built diverse production-grade apps including e-commerce platforms, course platforms, and custom dashboards for clients.",
    descriptionAr: "بنيت تطبيقات إنتاجية متنوعة كمتاجر إلكترونية ومنصات دورات ولوحات تحكم مخصصة.",
    color: "from-violet-500/10 to-purple-500/5",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10 group-hover:bg-violet-500",
    borderHover: "hover:border-violet-500/25",
  },
]

export const ExperienceHighlights = () => {
  const locale = useLocale()
  const isRTL = locale === "ar"

  return (
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn("space-y-1", isRTL && "text-right")}
      >
        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-foreground/50 flex items-center gap-3" style={isRTL ? { justifyContent: "flex-end" } : {}}>
          <span className="size-1.5 rounded-full bg-primary" />
          {isRTL ? "أبرز الإنجازات والمحطات" : "Key Highlights & Achievements"}
        </h2>
        <p className={cn("text-muted-foreground text-sm max-w-lg", isRTL && "mr-0 ml-auto")}>
          {isRTL
            ? "أبرز المحطات الأكاديمية والمهنية على مسيرتي."
            : "The standout academic and professional milestones along my journey."}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative"
          >
            <div className={cn(
              "relative p-5 md:p-6 rounded-2xl border border-white/5 bg-gradient-to-br overflow-hidden h-full transition-all duration-500",
              item.color,
              item.borderHover
            )}>
              <div className="absolute -bottom-8 -right-8 size-32 bg-white/3 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className={cn("relative z-10 flex flex-col h-full gap-4", isRTL && "items-end text-right")}>
                {/* Icon + title row */}
                <div className={cn("flex items-start gap-4", isRTL && "flex-row-reverse")}>
                  <div className={cn("p-2.5 rounded-xl transition-all duration-300", item.iconBg, "group-hover:text-white flex-shrink-0")}>
                    <item.icon className={cn("size-5", item.iconColor, "group-hover:text-white transition-colors duration-300")} />
                  </div>
                  <div className={cn("flex-1", isRTL && "text-right")}>
                    <h3 className="text-sm md:text-base font-black text-foreground leading-tight">{item.title}</h3>
                    <p className="text-xs text-muted-foreground font-semibold mt-0.5">{item.subtitle}</p>
                  </div>
                  <span className="text-[10px] font-bold text-muted-foreground/70 shrink-0 mt-0.5">
                    {isRTL ? item.dateAr : item.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {isRTL ? item.descriptionAr : item.description}
                </p>

                {/* Link */}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline",
                      isRTL && "flex-row-reverse"
                    )}
                  >
                    {isRTL ? "عرض الشهادة" : "View Credential"}
                    <ExternalLink className="size-3" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
