"use client"

import { useLocale, useTranslations } from "next-intl"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib"

type Props = {
  title: string
  className?: string
}

export const Title = ({ title, className }: Props) => {
  const translate = useTranslations()
  const locale = useLocale()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-30px" })

  let titleText = title
  try {
    const translated = translate(title)
    if (translated) titleText = translated
  } catch {
    titleText = title
  }

  const isRTL = locale === "ar" || /[\u0600-\u06FF]/.test(titleText)
  const chars = titleText.split("")
  const words = titleText.trim().split(/\s+/)
  const letterDuration = 0.55
  const letterDelayStep = 0.038
  const wordDelayStep = 0.12
  const totalLettersTime = isRTL ? words.length * wordDelayStep : chars.length * letterDelayStep

  return (
    <div
      ref={ref}
      className={cn("relative inline-flex flex-col items-start gap-3", isRTL && "items-end", className)}
      style={{ perspective: "1000px" }}
    >
      <h1
        className={cn(
          "text-5xl md:text-7xl lg:text-8xl font-black select-none",
          isRTL ? "tracking-normal leading-tight" : "tracking-tighter uppercase"
        )}
      >
        {isRTL
          ? words.map((word, i) => (
              <motion.span
                key={`title-word-${i}`}
                initial={{ opacity: 0, y: 45, rotateX: -90, filter: "blur(8px)" }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * wordDelayStep,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block text-foreground dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-foreground dark:via-foreground/90 dark:to-foreground/45 me-3 sm:me-4 last:me-0"
                style={{ transformOrigin: "bottom center" }}
              >
                {word}
              </motion.span>
            ))
          : chars.map((char, i) => (
              <motion.span
                key={`title-char-${i}`}
                initial={{ opacity: 0, y: 45, rotateX: -90, filter: "blur(8px)" }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" } : {}}
                transition={{
                  duration: letterDuration,
                  delay: i * letterDelayStep,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block text-foreground dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-foreground dark:via-foreground/90 dark:to-foreground/45"
                style={{ transformOrigin: "bottom center" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
      </h1>

      {/* Synchronized Cybernetic Underline System */}
      <div className={cn("relative flex items-center gap-2 pt-1 w-full max-w-[280px]", isRTL && "flex-row-reverse")}>
        {/* Main Growing Bar */}
        <div className="relative flex-1 h-[3px] rounded-full overflow-hidden bg-primary/20 dark:bg-primary/15">
          {/* Base expanding bar: solid bg-primary in light mode, gradient in dark mode */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{
              duration: Math.max(0.7, totalLettersTime + 0.2),
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={cn(
              "absolute inset-0 size-full rounded-full bg-primary dark:bg-gradient-to-r dark:from-primary dark:via-indigo-400 dark:to-primary/80",
              isRTL ? "origin-right" : "origin-left"
            )}
          />

          {/* Laser spark in dark mode only */}
          <motion.div
            initial={{ x: isRTL ? "100%" : "-100%", opacity: 0 }}
            animate={isInView ? { x: isRTL ? "-100%" : "100%", opacity: [0, 1, 1, 0] } : {}}
            transition={{
              duration: Math.max(0.75, totalLettersTime + 0.25),
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hidden dark:block absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white to-transparent blur-[1px]"
          />
        </div>

        {/* Secondary Accent Dash: solid bg-primary/60 in light mode, gradient in dark mode */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: totalLettersTime + 0.25,
          }}
          className={cn(
            "h-[3px] w-6 rounded-full bg-primary/60 dark:bg-gradient-to-r dark:from-primary/80 dark:to-primary/40",
            isRTL ? "origin-right" : "origin-left"
          )}
        />

        {/* Tertiary Accent Glow Dot: solid bg-primary */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: [0, 1.4, 1], opacity: 1 } : {}}
          transition={{
            duration: 0.45,
            delay: totalLettersTime + 0.4,
            ease: "easeOut",
          }}
          className="relative size-2 rounded-full bg-primary shadow-sm dark:shadow-[0_0_10px_rgba(var(--primary),0.8)]"
        >
          <span className="absolute inset-0 size-full rounded-full bg-primary animate-ping opacity-60" />
        </motion.div>
      </div>
    </div>
  )
}

export default Title
