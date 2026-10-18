"use client"

import React from "react"
import { Background } from "./background"

export const BackgroundGradient = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Subtle ambient radial gradient vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(49,46,129,0.18),transparent)]" />

      {/* Skewed squares grid pattern with light visible opacity */}
      <Background />
    </div>
  )
}
