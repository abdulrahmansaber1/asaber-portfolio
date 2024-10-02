"use client"

import translate from "@/lib/translate"

import React, { useContext } from "react"
import Marquee from "@/components/ui/marquee"

import { LanguageContext } from "@/providers/language"
import { homePage } from "./data"

export const HomeServicesSection = () => {
  const language = useContext(LanguageContext)
  return (
    <div>
      <section>
        <h2 className="text-3xl font-semibold">{translate("myServices", language)}</h2>
      </section>

      <section className="mt-4">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          {language === "en" && (
            <React.Fragment>
              <Marquee className="[--duration:10s]" repeat={3}>
                {homePage.servicesEN.slice(0, 4).map((item, idx) => (
                  <div className="text-xl" key={`en-${idx}`}>
                    {item}
                  </div>
                ))}
              </Marquee>
              <Marquee className="[--duration:10s]" repeat={3} reverse>
                {homePage.servicesEN.slice(4, 8).map((item, idx) => (
                  <div className="text-xl" key={`en-rev-${idx}`}>
                    {item}
                  </div>
                ))}
              </Marquee>
            </React.Fragment>
          )}
          {language === "ar" && (
            <React.Fragment>
              <Marquee className="[--duration:10s]" repeat={3} reverse>
                {homePage.servicesAR.slice(0, 4).map((item, idx) => (
                  <div className="text-xl" key={`ar-rev-${idx}`}>
                    {item}
                  </div>
                ))}
              </Marquee>
              <Marquee className="[--duration:10s]" repeat={3}>
                {homePage.servicesAR.slice(0, 4).map((item, idx) => (
                  <div className="text-xl" key={`ar-${idx}`}>
                    {item}
                  </div>
                ))}
              </Marquee>
            </React.Fragment>
          )}
        </div>
      </section>
    </div>
  )
}
