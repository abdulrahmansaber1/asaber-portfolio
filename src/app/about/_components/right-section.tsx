"use client"

import React from "react"
import IconCloud from "@/components/ui/icon-cloud"

import { aboutPage } from "./data"

export const AboutRightSection = () => {
  return <IconCloud iconSlugs={aboutPage.skills} />
}
