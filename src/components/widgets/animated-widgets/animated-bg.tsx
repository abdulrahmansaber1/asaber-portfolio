"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export interface InteractiveDotsProps extends React.ComponentProps<"div"> {
  /** Distance between dots in CSS pixels */
  spacing?: number
  /** Resting dot radius in CSS pixels */
  dotRadius?: number
  /** Mouse influence radius in CSS pixels */
  mouseRadius?: number
  /** Maximum displacement distance when pushed by mouse */
  maxDisplacement?: number
  /** Base opacity of resting dots */
  baseOpacity?: number
  /** Whether dots connect with faint lines near mouse */
  showLines?: boolean
  /** Whether clicking creates a shockwave ripple */
  shockwaveOnClick?: boolean
}

interface Dot {
  originX: number
  originY: number
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  targetRadius: number
  color: string
  opacity: number
}

interface Ripple {
  x: number
  y: number
  born: number
  maxRadius: number
  speed: number
}

export function InteractiveDotsBackground({
  spacing = 28,
  dotRadius = 1.6,
  mouseRadius = 170,
  maxDisplacement = 45,
  baseOpacity = 0.28,
  showLines = true,
  shockwaveOnClick = true,
  className,
  children,
  ...props
}: InteractiveDotsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = 1
    let dots: Dot[] = []
    let ripples: Ripple[] = []
    let animId = 0
    let mouse = { x: -9999, y: -9999, active: false }
    let isDark = document.documentElement.classList.contains("dark")

    // Watch for theme changes
    const themeObserver = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains("dark")
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    })

    const initDots = () => {
      const rect = container.getBoundingClientRect()
      width = Math.max(1, Math.round(rect.width))
      height = Math.max(1, Math.round(rect.height))
      dpr = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      dots = []
      const cols = Math.ceil(width / spacing) + 1
      const rows = Math.ceil(height / spacing) + 1
      const offsetX = (width - (cols - 1) * spacing) / 2
      const offsetY = (height - (rows - 1) * spacing) / 2

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const originX = offsetX + i * spacing
          const originY = offsetY + j * spacing
          dots.push({
            originX,
            originY,
            x: originX,
            y: originY,
            vx: 0,
            vy: 0,
            radius: dotRadius,
            targetRadius: dotRadius,
            color: isDark ? "rgba(255, 255, 255," : "rgba(49, 46, 129,",
            opacity: baseOpacity,
          })
        }
      }
    }

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active = true
    }

    const onPointerLeave = () => {
      mouse.active = false
      mouse.x = -9999
      mouse.y = -9999
    }

    const onPointerDown = (e: PointerEvent) => {
      if (!shockwaveOnClick) return
      const rect = container.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const clickY = e.clientY - rect.top
      if (clickX >= 0 && clickX <= width && clickY >= 0 && clickY <= height) {
        ripples.push({
          x: clickX,
          y: clickY,
          born: performance.now(),
          maxRadius: Math.max(width, height) * 0.75,
          speed: 420, // px per second
        })
        if (ripples.length > 5) ripples.shift()
      }
    }

    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("pointerleave", onPointerLeave)
    window.addEventListener("pointerdown", onPointerDown)

    const ro = new ResizeObserver(() => {
      initDots()
    })
    ro.observe(container)

    initDots()

    // Animation Loop
    let lastTime = performance.now()
    const render = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1)
      lastTime = now
      const timeSec = now * 0.001

      ctx.clearRect(0, 0, width, height)

      // Filter expired ripples
      ripples = ripples.filter((r) => {
        const radius = ((now - r.born) / 1000) * r.speed
        return radius < r.maxRadius
      })

      // Active interactive dots near mouse for constellation lines
      const activeNearMouse: Dot[] = []

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i]

        // 1. Idle organic ambient breathing wave
        const ambientWaveX = Math.sin(timeSec * 1.2 + dot.originY * 0.012) * 2.5
        const ambientWaveY = Math.cos(timeSec * 1.2 + dot.originX * 0.012) * 2.5

        let targetX = dot.originX + ambientWaveX
        let targetY = dot.originY + ambientWaveY
        let targetRadius = dotRadius
        let targetOpacity = baseOpacity

        // 2. Mouse Repulsion & Glow
        if (mouse.active) {
          const dx = dot.originX - mouse.x
          const dy = dot.originY - mouse.y
          const dist = Math.hypot(dx, dy)

          if (dist < mouseRadius) {
            const factor = Math.cos((dist / mouseRadius) * (Math.PI / 2)) // 1 at center, 0 at boundary
            const push = factor * maxDisplacement
            const angle = Math.atan2(dy, dx)

            targetX = dot.originX + Math.cos(angle) * push + ambientWaveX
            targetY = dot.originY + Math.sin(angle) * push + ambientWaveY

            targetRadius = dotRadius + factor * 2.2
            targetOpacity = baseOpacity + factor * (1 - baseOpacity)

            if (dist < mouseRadius * 0.75) {
              activeNearMouse.push(dot)
            }
          }
        }

        // 3. Shockwave Ripple Displacement
        for (let r = 0; r < ripples.length; r++) {
          const rip = ripples[r]
          const age = (now - rip.born) / 1000
          const ripRadius = age * rip.speed
          const ripThickness = 80

          const rdx = dot.originX - rip.x
          const rdy = dot.originY - rip.y
          const rdist = Math.hypot(rdx, rdy)
          const distFromWave = Math.abs(rdist - ripRadius)

          if (distFromWave < ripThickness) {
            const waveStrength = (1 - distFromWave / ripThickness) * (1 - ripRadius / rip.maxRadius)
            const angle = Math.atan2(rdy, rdx)
            targetX += Math.cos(angle) * (waveStrength * 30)
            targetY += Math.sin(angle) * (waveStrength * 30)
            targetRadius = Math.max(targetRadius, dotRadius + waveStrength * 3)
            targetOpacity = Math.max(targetOpacity, baseOpacity + waveStrength * 0.7)
          }
        }

        // 4. Elastic Spring physics
        const spring = 12
        const damping = 0.8
        dot.vx = (dot.vx + (targetX - dot.x) * spring * dt) * damping
        dot.vy = (dot.vy + (targetY - dot.y) * spring * dt) * damping
        dot.x += dot.vx
        dot.y += dot.vy

        dot.radius += (targetRadius - dot.radius) * 0.15
        dot.opacity += (targetOpacity - dot.opacity) * 0.15

        // Draw Dot
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, Math.max(0.8, dot.radius), 0, Math.PI * 2)

        const isHighlighted = dot.opacity > baseOpacity + 0.1
        if (isHighlighted) {
          // Dynamic primary cyan / violet glow
          ctx.fillStyle = isDark
            ? `rgba(129, 140, 248, ${Math.min(dot.opacity, 1)})`
            : `rgba(79, 70, 229, ${Math.min(dot.opacity, 1)})`
        } else {
          ctx.fillStyle = isDark
            ? `rgba(255, 255, 255, ${dot.opacity})`
            : `rgba(30, 27, 75, ${dot.opacity})`
        }
        ctx.fill()
      }

      // Draw faint constellation lines between dots close to the cursor
      if (showLines && activeNearMouse.length > 1) {
        ctx.lineWidth = 1
        for (let i = 0; i < activeNearMouse.length; i++) {
          for (let j = i + 1; j < activeNearMouse.length; j++) {
            const p1 = activeNearMouse[i]
            const p2 = activeNearMouse[j]
            const d = Math.hypot(p1.x - p2.x, p1.y - p2.y)
            if (d < spacing * 1.5) {
              const lineAlpha = (1 - d / (spacing * 1.5)) * 0.25
              ctx.strokeStyle = isDark
                ? `rgba(129, 140, 248, ${lineAlpha})`
                : `rgba(79, 70, 229, ${lineAlpha})`
              ctx.beginPath()
              ctx.moveTo(p1.x, p1.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.stroke()
            }
          }
        }
      }

      animId = requestAnimationFrame(render)
    }

    animId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerleave", onPointerLeave)
      window.removeEventListener("pointerdown", onPointerDown)
      ro.disconnect()
      themeObserver.disconnect()
    }
  }, [spacing, dotRadius, mouseRadius, maxDisplacement, baseOpacity, showLines, shockwaveOnClick])

  return (
    <div
      ref={containerRef}
      className={cn("relative isolate overflow-hidden pointer-events-none select-none", className)}
      {...props}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 size-full pointer-events-none"
      />
      {children}
    </div>
  )
}

// Alias for compatibility
export const SonarGrid = InteractiveDotsBackground
export default InteractiveDotsBackground
