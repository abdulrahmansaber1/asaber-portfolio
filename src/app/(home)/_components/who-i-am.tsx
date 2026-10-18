"use client"

import { useLocale } from "next-intl"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  GraduationCap,
  Briefcase,
  Award,
  MapPin,
  Sparkles,
  ArrowRight,
  Layers,
  Terminal,
  Cpu,
  FileText
} from "lucide-react"
import { AnimatedTitle } from "@/components/widgets/common/animated-title"
import { cn, routes } from "@/lib"

export const HomeWhoIAmSection = () => {
  const locale = useLocale()
  const isRTL = locale === "ar"
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <div ref={ref} className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <div className="flex justify-center">
          <AnimatedTitle className="text-5xl md:text-7xl font-black tracking-tighter">
            {isRTL ? "من أنا" : "Who I Am"}
          </AnimatedTitle>
        </div>
        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
          {isRTL
            ? "تعرف على خلفيتي الأكاديمية، خبراتي البرمجية، وفلسفتي في بناء المنتجات الرقمية."
            : "Get to know my engineering background, technical journey, and product philosophy."}
        </p>
      </div>

      {/* Main Grid: Profile Card + Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Profile Card (4 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative group h-full rounded-3xl border border-white/10 bg-gradient-to-br from-card/90 via-card/50 to-card/20 p-6 md:p-8 backdrop-blur-xl shadow-xl hover:border-primary/30 transition-all duration-500 flex flex-col justify-between overflow-hidden">
            {/* Ambient corner glow */}
            <div className="absolute -top-20 -left-20 size-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Picture + Live Status */}
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="relative size-28 sm:size-32 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/10 shrink-0 group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/me.jpeg"
                    alt="Abdulrahman Saber"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className={cn("space-y-2 text-center sm:text-left", isRTL && "sm:text-right")}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{isRTL ? "متاح للعمل والمشاريع" : "Available for Roles"}</span>
                  </div>

                  <h3 className="text-xl font-black text-foreground">
                    {isRTL ? "عبدالرحمن صابر" : "Abdulrahman Saber"}
                  </h3>

                  <p className="text-xs text-primary font-bold tracking-wide">
                    {isRTL ? "مهندس برمجيات • مطور شامل وسحابي" : "Software Engineer • Full-Stack & DevOps"}
                  </p>
                </div>
              </div>

              {/* Bio Highlights Badges */}
              <div className="space-y-3 pt-2 border-t border-border/40">
                <div className={cn("flex items-center gap-3 p-3 rounded-xl bg-secondary/15 border border-white/5", isRTL && "flex-row-reverse text-right")}>
                  <Briefcase className="size-4 text-primary shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-foreground block">
                      {isRTL ? "مهندس برمجيات في CoreVine" : "Software Engineer @ CoreVine"}
                    </span>
                    <span className="text-muted-foreground">
                      {isRTL ? "تطوير تطبيقات الويب والواجهات الخلفية" : "Building production web APIs & Next.js apps"}
                    </span>
                  </div>
                </div>

                <div className={cn("flex items-center gap-3 p-3 rounded-xl bg-secondary/15 border border-white/5", isRTL && "flex-row-reverse text-right")}>
                  <GraduationCap className="size-4 text-primary shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-foreground block">
                      {isRTL ? "بكالوريوس هندسة الإلكترونيات والاتصالات" : "B.Sc. Electronics & Communications Eng."}
                    </span>
                    <span className="text-muted-foreground">
                      {isRTL ? "جامعة الزقازيق (2020 – 2025)" : "Zagazig University (2020 – 2025)"}
                    </span>
                  </div>
                </div>

                <div className={cn("flex items-center gap-3 p-3 rounded-xl bg-secondary/15 border border-white/5", isRTL && "flex-row-reverse text-right")}>
                  <Award className="size-4 text-primary shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-foreground block">
                      {isRTL ? "شهادة معتمدة من AWS Academy" : "AWS Academy Cloud Foundations"}
                    </span>
                    <span className="text-muted-foreground">
                      {isRTL ? "معمارية وأمان الحوسبة السحابية" : "Cloud infrastructure, scaling & security"}
                    </span>
                  </div>
                </div>

                <div className={cn("flex items-center gap-3 p-3 rounded-xl bg-secondary/15 border border-white/5", isRTL && "flex-row-reverse text-right")}>
                  <MapPin className="size-4 text-primary shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-foreground block">
                      {isRTL ? "مصر • متاح للعمل عن بُعد عالمياً" : "Egypt • Global Remote Available"}
                    </span>
                    <span className="text-muted-foreground">
                      {isRTL ? "العمل مع فرق ومشاريع دولية" : "Experienced working with remote distributed teams"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Resume Link */}
            <div className="relative z-10 pt-6 mt-6 border-t border-border/40">
              <a
                href="/cv.pdf"
                download="Abdulrahman_Saber_CV.pdf"
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/20 hover:bg-primary/10 border border-white/5 hover:border-primary/30 text-xs font-bold text-foreground hover:text-primary transition-all duration-300",
                  isRTL && "flex-row-reverse"
                )}
              >
                <FileText className="size-4" />
                <span>{isRTL ? "تحميل السيرة الذاتية (CV)" : "Download Full Resume (CV)"}</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Narrative & Pillars (7 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-between space-y-6"
        >
          {/* Narrative Card */}
          <div className={cn(
            "p-6 md:p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-card/80 via-card/40 to-transparent backdrop-blur-xl space-y-5",
            isRTL && "text-right"
          )}>
            <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider", isRTL && "flex-row-reverse")}>
              <Sparkles className="size-3" />
              <span>{isRTL ? "رحلتي البرمجية" : "My Coding Journey"}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tight leading-snug">
              {isRTL
                ? "أبني حلولاً برمجية متكاملة تجمع بين السرعة الفائقة، المعمارية الآمنة، وتجربة المستخدم الاستثنائية."
                : "Architecting end-to-end digital experiences where high-throughput backend logic meets fluid, modern UI."}
            </h3>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {isRTL
                ? "بدأت رحلتي في البرمجة منذ 9 سنوات بدافع الشغف العميق بفهم كيفية عمل الأنظمة الحاسوبية وتطبيقات الويب. من خلال دراستي الأكاديمية لهندسة الإلكترونيات والاتصالات، اكتسبت تفكيراً تحليلياً دقيقاً في حل المشكلات التقنية وتصميم هياكل برمجية قوية وقابلة للتوسع تحت مختلف أحجام الضغط."
                : "My software journey began 9 years ago, driven by a deep curiosity for how computer systems, databases, and network architectures function at scale. Combining an analytical engineering foundation from Electronics & Communications with extensive hands-on experience, I focus on shipping clean, resilient, and enterprise-grade software."}
            </p>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {isRTL
                ? "حاليًا أعمل كمهندس برمجيات (Software Engineer) في CoreVine، بجانب تطوير منصات ويب متكاملة، وإدارة البنية السحابية باستخدام Docker و Kubernetes و AWS، وربط خطوط النشر الآلي CI/CD لضمان استقرار التطبيقات وسرعة إطلاقها."
                : "Currently working as a Software Engineer at CoreVine, I architect backend RESTful APIs with Laravel (PHP) and craft reactive, server-rendered web applications with Next.js & TypeScript, while orchestrating cloud environments with Docker, Kubernetes, and AWS."}
            </p>
          </div>

          {/* 3 Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className={cn(
              "p-4 rounded-2xl border border-white/5 bg-secondary/10 hover:border-primary/20 transition-all duration-300 space-y-2",
              isRTL && "text-right"
            )}>
              <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit">
                <Layers className="size-4" />
              </div>
              <h4 className="font-bold text-sm text-foreground">
                {isRTL ? "تطوير شامل (Full Stack)" : "Full-Stack Craft"}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {isRTL ? "إتقان كامل من قواعد البيانات والـ APIs إلى واجهات الـ React و Next.js." : "Bridging SQL/NoSQL databases & APIs with responsive, accessible React interfaces."}
              </p>
            </div>

            <div className={cn(
              "p-4 rounded-2xl border border-white/5 bg-secondary/10 hover:border-primary/20 transition-all duration-300 space-y-2",
              isRTL && "text-right"
            )}>
              <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit">
                <Terminal className="size-4" />
              </div>
              <h4 className="font-bold text-sm text-foreground">
                {isRTL ? "عقلية الـ DevOps" : "DevOps Mindset"}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {isRTL ? "أتمتة النشر بالحاويات (Docker & K8s) وإدارة السحابة (AWS) بأعلى موثوقية." : "Containerization, automated CI/CD pipelines, and robust AWS infrastructure."}
              </p>
            </div>

            <div className={cn(
              "p-4 rounded-2xl border border-white/5 bg-secondary/10 hover:border-primary/20 transition-all duration-300 space-y-2",
              isRTL && "text-right"
            )}>
              <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit">
                <Cpu className="size-4" />
              </div>
              <h4 className="font-bold text-sm text-foreground">
                {isRTL ? "فكر هندسي دقيق" : "Engineering Rigor"}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {isRTL ? "أساس هندسي متين يركز على الكود النظيف والأداء العالي وحل المشكلات." : "Electronics & Communications mindset prioritizing clean code and performance."}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className={cn("flex flex-wrap items-center gap-3 pt-2", isRTL && "justify-end")}>
            <Link href={routes.about} passHref>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-bold text-sm cursor-pointer shadow-lg shadow-primary/20",
                  isRTL && "flex-row-reverse"
                )}
              >
                <span>{isRTL ? "المزيد عن سيرتي الذاتية" : "Learn More About My Story"}</span>
                <ArrowRight className={cn("size-4", isRTL && "rotate-180")} />
              </motion.div>
            </Link>

            <Link href={routes.experience} passHref>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/10 hover:border-primary/30 bg-secondary/10 hover:bg-secondary/20 text-foreground font-bold text-sm cursor-pointer transition-colors"
              >
                <span>{isRTL ? "عرض المسار المهني" : "View Career Journey"}</span>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
