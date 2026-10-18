"use client"

import { useLocale, useTranslations } from "next-intl"
import { links } from "@/lib"
import { Award, Cloud, Calendar, ExternalLink, CheckCircle2, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib"

const awsCompetencies = {
  en: [
    "AWS Core Services (EC2, S3, RDS, Lambda)",
    "Cloud Architecture & Global Infrastructure",
    "Identity & Access Management (IAM) & Security",
    "Virtual Private Cloud (VPC) & Networking",
    "Cloud Economics, Billing & Cost Optimization",
    "High Availability, Fault Tolerance & Scaling"
  ],
  ar: [
    "خدمات AWS الأساسية (EC2, S3, RDS, Lambda)",
    "معمارية السحابة والبنية التحتية العالمية",
    "إدارة الوصول والهوية (IAM) والأمان السحابي",
    "الشبكات السحابية الافتراضية (VPC)",
    "إدارة التكاليف واقتصاديات السحابة",
    "التوسع التلقائي وتوافر الأنظمة العالي"
  ]
}

export const AboutLastAchievement = () => {
  const language = useLocale()
  const translate = useTranslations()
  const isRTL = language === "ar"

  return (
    <section className="space-y-4">
      {/* Section Header */}
      <div className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
        <span className="size-2 rounded-full bg-amber-500" />
        <h2 className="text-xs font-black uppercase tracking-[0.25em] text-foreground/60">
          {translate("lastAchievement")}
        </h2>
      </div>

      {/* Main Certification Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative group rounded-2xl border border-white/10 bg-gradient-to-br from-amber-500/10 via-card/80 to-card/30 p-6 md:p-8 backdrop-blur-xl shadow-lg hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-500 overflow-hidden"
      >
        {/* Ambient subtle glow on hover */}
        <div className="absolute -top-16 -right-16 size-48 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-700 pointer-events-none" />

        <div className={cn("relative z-10 space-y-6", isRTL && "text-right")}>
          {/* Header Row: Badge Icon, Title & Date */}
          <div className={cn("flex flex-col md:flex-row md:items-start justify-between gap-4", isRTL && "md:flex-row-reverse")}>
            <div className={cn("flex items-start gap-4", isRTL && "flex-row-reverse")}>
              <div className="p-3.5 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 group-hover:scale-105 transition-transform duration-300 shrink-0">
                <Award className="size-6" />
              </div>

              <div className="space-y-1">
                <div className={cn("flex flex-wrap items-center gap-2", isRTL && "flex-row-reverse")}>
                  <h3 className="text-xl md:text-2xl font-black text-foreground tracking-tight">
                    AWS Academy Graduate
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-amber-500/15 text-amber-400 border border-amber-500/25">
                    <ShieldCheck className="size-3" />
                    {isRTL ? "شهادة معتمدة" : "Verified Badge"}
                  </span>
                </div>

                <p className="text-sm md:text-base font-bold text-foreground/90">
                  AWS Academy Cloud Foundations
                </p>
              </div>
            </div>

            {/* Issued Date Pill */}
            <div className={cn("flex items-center gap-2 shrink-0 text-xs font-semibold text-muted-foreground", isRTL && "flex-row-reverse")}>
              <span className={cn("inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-secondary/30 border border-white/5", isRTL && "flex-row-reverse")}>
                <Calendar className="size-3.5 text-amber-400" />
                <span>{translate("issuedAt")} {translate("issudeDate")}</span>
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs md:text-sm text-muted-foreground/90 leading-relaxed border-t border-border/40 pt-4">
            {isRTL
              ? "إتمام تدريب مكثف ومعتمد من Amazon Web Services يغطي ركائز الحوسبة السحابية الأساسية، تصميم البنية التحتية القابلة للتوسع، تأمين البيانات والشبكات السحابية، وأفضل الممارسات المعمارية في بيئات الإنتاج الفعلية."
              : "Completed rigorous institutional training by Amazon Web Services covering foundational cloud computing concepts, scalable infrastructure architecture, IAM cloud security, networking (VPC), and architectural best practices for production environments."}
          </p>

          {/* Competencies Chips */}
          <div className="space-y-2.5 pt-1">
            <div className={cn("flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground/70", isRTL && "flex-row-reverse")}>
              <Cloud className="size-3.5 text-amber-400" />
              <span>{isRTL ? "الكفاءات والخدمات المكتسبة" : "Validated Cloud Competencies"}</span>
            </div>

            <div className={cn("flex flex-wrap gap-2", isRTL && "justify-end")}>
              {(isRTL ? awsCompetencies.ar : awsCompetencies.en).map((chip) => (
                <span
                  key={chip}
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-secondary/20 border border-white/5 text-foreground/80 hover:border-amber-500/30 hover:text-amber-400 transition-colors",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  <CheckCircle2 className="size-3 text-amber-400 shrink-0" />
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Verified Credential Link Button */}
          <div className={cn("pt-2 border-t border-border/40 flex", isRTL ? "justify-end" : "justify-start")}>
            <a
              href={links.awsCertificate}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/25 hover:border-amber-500/40 text-xs font-bold text-amber-400 transition-all duration-300",
                isRTL && "flex-row-reverse"
              )}
            >
              <Award className="size-4" />
              <span>{translate("viewCredentials")}</span>
              <ExternalLink className="size-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
