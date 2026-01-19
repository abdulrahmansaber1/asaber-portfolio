"use client"

import Link from "next/link"
import { Rocket, Home } from "lucide-react"
import { motion } from "framer-motion"
import { RetroButton } from "@/components/retroui/Button"

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] text-center px-6 overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-primary/5 blur-[120px] rounded-full -z-10"
      />

      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, type: "spring" }} className="relative mb-8">
        <div className="text-[150px] md:text-[200px] font-black tracking-tighter leading-none text-white/5 select-none">404</div>
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 flex items-center justify-center">
          <Rocket className="size-24 md:size-32 text-primary drop-shadow-2xl" />
        </motion.div>
      </motion.div>

      <div className="space-y-6 max-w-2xl relative z-10">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
          Houston, we have a <span className="text-primary">problem!</span>
        </h1>
        <p className="text-xl text-muted-foreground font-medium leading-relaxed">
          The page you&apos;re looking for has drifted off into deep space. Let&apos;s get you back to the mothership before you run out of oxygen!
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <Link href="/" passHref>
            <RetroButton size="lg" className="font-bold min-w-[200px]">
              <Home className="mr-2 size-5" />
              BACK TO HOME
            </RetroButton>
          </Link>
        </div>
      </div>

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            opacity: Math.random(),
          }}
          animate={{
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute size-1 bg-primary rounded-full -z-10"
        />
      ))}
    </div>
  )
}
