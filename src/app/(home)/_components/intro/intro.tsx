"use client"

import { homePage } from "../data"

import { HomeIntroHeaderSection } from "./header"
import { HomeIntroLinksSection } from "./links"
import { HomeIntroButtonsSection } from "./buttons"
import Safari from "@/components/widgets/animated-widgets/safari"
import Iphone15Pro from "@/components/widgets/animated-widgets/iphone-15-pro"
import { motion } from "framer-motion"

export const HomeIntroSection = () => {
  return (
    <section className="relative pt-12 pb-20">
      <HomeIntroHeaderSection />
      <HomeIntroLinksSection />
      <HomeIntroButtonsSection />
    </section>
  )
}
