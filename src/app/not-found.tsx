"use client"

import Link from "next/link"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Rocket, Stars } from "lucide-react"

export default function NotFound() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden rounded-md">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px)",
          backgroundSize: "50px 50px",
          backgroundPosition: "0 0, 25px 25px",
          animation: "twinkle 4s ease-in-out infinite alternate"
        }}
      />
      <Rocket
        className="text-yellow-400 w-24 h-24 mb-8 animate-bounce"
        style={{
          transform: `rotate(${
            (Math.atan2(position.y - window.innerHeight / 2, position.x - window.innerWidth / 2) *
              180) /
              Math.PI +
            90
          }deg)`
        }}
      />
      <h1 className="text-8xl font-bold mb-4 animate-pulse">404</h1>
      <h2 className="text-4xl font-semibold mb-4">Houston, we have a problem!</h2>
      <p className="text-xl mb-8 text-center max-w-md">
        The page you're looking for has drifted off into space. Let's get you back to the
        mothership.
      </p>
      <Button
        asChild
        className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 transform hover:scale-105"
      >
        <Link href="/">
          <Stars className="mr-2 h-4 w-4" /> Return to Home Base
        </Link>
      </Button>
      <style jsx global>{`
        @keyframes twinkle {
          0% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
