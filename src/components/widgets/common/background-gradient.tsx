"use client"

import React from "react"
import { motion } from "framer-motion"
import { Background } from "./background"

export const BackgroundGradient = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      

      {/* Subtle Grid Pattern */}
      <Background />
    </div>
  )
}
