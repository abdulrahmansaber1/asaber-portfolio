"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export const CursorEffect = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  // Direct instant coordinates for the center dot (zero lag)
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Smooth fluid follow-up spring physics
  const springConfig = { stiffness: 280, damping: 22, mass: 0.5 }
  const followerX = useSpring(mouseX, springConfig)
  const followerY = useSpring(mouseY, springConfig)

  // Secondary trailing trailing echo ring for subtle depth
  const echoConfig = { stiffness: 160, damping: 20, mass: 0.8 }
  const echoX = useSpring(mouseX, echoConfig)
  const echoY = useSpring(mouseY, echoConfig)

  useEffect(() => {
    // Only enable on devices that have a fine pointer (desktop mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)")
    setIsDesktop(mediaQuery.matches)

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches)
    }

    mediaQuery.addEventListener("change", handleMediaChange)
    return () => mediaQuery.removeEventListener("change", handleMediaChange)
  }, [])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e

      if (!isVisible) setIsVisible(true)

      mouseX.set(x)
      mouseY.set(y)

      // Detect interactive element without adding any blur or obstruction
      const target = e.target as HTMLElement | null
      if (target) {
        const isInteractive = Boolean(
          target.closest(
            'a, button, input, textarea, select, [role="button"], [data-cursor], .cursor-pointer'
          )
        )
        setIsHovered(isInteractive)
      }
    },
    [mouseX, mouseY, isVisible]
  )

  const handleMouseDown = useCallback(() => setIsClicked(true), [])
  const handleMouseUp = useCallback(() => setIsClicked(false), [])
  const handleMouseLeave = useCallback(() => setIsVisible(false), [])
  const handleMouseEnter = useCallback(() => setIsVisible(true), [])

  useEffect(() => {
    if (!isDesktop) return

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [
    isDesktop,
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
    handleMouseEnter,
  ])

  if (!isDesktop) return null

  return (
    <>
      {/* Trailing secondary echo ring (smoothly floats behind cursor) */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: echoX,
          y: echoY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? (isHovered ? 0.3 : 0.45) : 0,
        }}
      >
        <div
          className={`size-10 rounded-full border border-dashed transition-all duration-300 ${
            isHovered ? "border-primary/50 scale-125" : "border-primary/30 scale-100"
          }`}
        />
      </motion.div>

      {/* Main follow-up spring ring (completely crystal clear inside - ZERO blur) */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center"
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isClicked ? 0.75 : isHovered ? 1.45 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        <div
          className={`size-8 rounded-full border transition-all duration-200 bg-transparent ${
            isHovered
              ? "border-primary border-[1.5px] shadow-[0_0_12px_rgba(99,102,241,0.4)]"
              : "border-primary/50 border-[1px]"
          }`}
        />
      </motion.div>

      {/* Instant precision center dot (zero latency, zero blur) */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isClicked ? 1.3 : isHovered ? 0.6 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
        }}
      >
        <div className="size-2 rounded-full bg-primary shadow-[0_0_6px_rgba(99,102,241,0.8)]" />
      </motion.div>
    </>
  )
}
