"use client"

import { useRef } from "react"
import { motion, useInView, Variants } from "framer-motion"
import { cn } from "@/lib"

type AnimatedTitleProps = {
  children: string
  className?: string
  as?: "h1" | "h2" | "h3"
  gradient?: boolean
  delay?: number
}

const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: -90,
    filter: "blur(8px)",
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      delay: i * 0.03,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const underlineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export const AnimatedTitle = ({
  children,
  className,
  as: Tag = "h2",
  gradient = false,
  delay = 0,
}: AnimatedTitleProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const isArabic = /[\u0600-\u06FF]/.test(children)

  const words = children.split(" ")

  return (
    <div ref={ref} className="relative inline-block" style={{ perspective: "1000px" }}>
      <Tag
        className={cn(
          "relative",
          gradient && "text-foreground dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-foreground dark:via-primary dark:to-foreground/60",
          className,
          isArabic && "!tracking-normal !leading-tight"
        )}
      >
        {words.map((word, wordIndex) => {
          if (isArabic) {
            return (
              <motion.span
                key={`word-${wordIndex}`}
                custom={wordIndex + delay * 10}
                variants={letterVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="inline-block me-[0.25em] last:me-0"
                style={{ transformOrigin: "bottom center" }}
              >
                {word}
              </motion.span>
            )
          }

          return (
            <span key={`word-${wordIndex}`} className="inline-block me-[0.25em] last:me-0">
              {word.split("").map((letter, letterIndex) => {
                const globalIndex = words.slice(0, wordIndex).join("").length + letterIndex
                return (
                  <motion.span
                    key={`letter-${wordIndex}-${letterIndex}`}
                    custom={globalIndex + delay * 10}
                    variants={letterVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="inline-block"
                    style={{ transformOrigin: "bottom center" }}
                  >
                    {letter}
                  </motion.span>
                )
              })}
            </span>
          )
        })}
      </Tag>
      <motion.div
        variants={underlineVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={cn(
          "h-1.5 mt-2 rounded-full bg-primary dark:bg-gradient-to-r dark:from-primary dark:via-primary/60 dark:to-transparent",
          isArabic ? "origin-right" : "origin-left"
        )}
        style={{ width: "40%" }}
      />
    </div>
  )
}

// Simpler word-by-word animation for subtitles
export const AnimatedSubtitle = ({
  children,
  className,
  delay = 0,
}: {
  children: string
  className?: string
  delay?: number
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const words = children.split(" ")

  return (
    <p ref={ref} className={cn("", className)}>
      {words.map((word, index) => (
        <motion.span
          key={`subtitle-word-${index}`}
          custom={index + delay * 10}
          variants={wordVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="inline-block me-[0.25em] last:me-0"
        >
          {word}
        </motion.span>
      ))}
    </p>
  )
}
