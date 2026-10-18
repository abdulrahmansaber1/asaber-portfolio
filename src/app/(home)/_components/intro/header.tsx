"use client"

import { useLocale, useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib"

export const HomeIntroHeaderSection = () => {
  const translate = useTranslations()
  const locale = useLocale()
  const constraintsRef = useRef(null)

  const titleText = translate("helloIntro")
  const nameText = translate("homeIntroTitle")
  const descriptionText = translate("homeIntroDescription")

  const isRTL = locale === "ar" || /[\u0600-\u06FF]/.test(titleText + nameText)
  const titleWords = titleText.trim().split(/\s+/)
  const nameWords = nameText.trim().split(/\s+/)

  return (
    <section ref={constraintsRef} className="relative space-y-8 text-center w-full py-10 overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`float-${i}`}
            className="absolute size-2 rounded-full bg-primary/30"
            initial={{
              x: `${20 + i * 15}%`,
              y: `${10 + i * 20}%`,
              opacity: 0,
            }}
            animate={{
              y: [`${10 + i * 20}%`, `${5 + i * 18}%`, `${10 + i * 20}%`],
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>


      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
        className="relative"
      >
        <h1
          className={cn(
            "text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black",
            isRTL ? "tracking-normal leading-tight" : "leading-[0.9] tracking-tighter"
          )}
        >
          <span className="block">
            {isRTL
              ? titleWords.map((word, i) => (
                <motion.span
                  key={`hello-word-${i}`}
                  initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block dark:text-white text-foreground me-3 sm:me-4 last:me-0"
                >
                  {word}
                </motion.span>
              ))
              : titleText.split("").map((char, i) => (
                <motion.span
                  key={`hello-${i}`}
                  initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.03,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block dark:text-white text-foreground"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
          </span>
          <span className="block mt-2">
            {isRTL
              ? nameWords.map((word, i) => (
                <motion.span
                  key={`name-word-${i}`}
                  initial={{ opacity: 0, y: 50, rotateX: -90, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block text-primary dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-br dark:from-primary dark:via-primary dark:to-indigo-400 me-3 sm:me-4 last:me-0"
                  style={{ perspective: "1000px", transformOrigin: "bottom center" }}
                >
                  {word}
                </motion.span>
              ))
              : nameText.split("").map((char, i) => (
                <motion.span
                  key={`name-${i}`}
                  initial={{ opacity: 0, y: 50, rotateX: -90, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + i * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block text-primary dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-br dark:from-primary dark:via-primary dark:to-indigo-400"
                  style={{ perspective: "1000px", transformOrigin: "bottom center" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
          </span>
        </h1>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-4 h-1.5 w-32 md:w-48 rounded-full bg-primary dark:bg-gradient-to-r dark:from-transparent dark:via-primary dark:to-transparent origin-center"
        />
      </motion.div>

      {/* Description - Word by word */}
      <motion.div
        className="max-w-[800px] mx-auto px-4"
      >
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
          {descriptionText.split(" ").map((word, i) => (
            <motion.span
              key={`desc-${i}`}
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.5,
                delay: 1.0 + i * 0.03,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block me-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </p>
      </motion.div>
    </section>
  )
}
