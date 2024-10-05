"use client"

import translate from "@/lib/translate"

import React, { useContext } from "react"

import { LanguageContext } from "@/providers/language"
import { homePage } from "./data"

import { motion } from "framer-motion"

export const HomeServicesSection = () => {
  const language = useContext(LanguageContext)
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <div>
      <section className="mb-4">
        <h2 className="text-3xl font-semibold">{translate("myServices", language)}</h2>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {homePage.services.map((service, index) => (
          <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            key={`service-${index}`}
            className="border rounded-md p-4 dark:border-[#222] border-gray-300 flex flex-col justify-between dark:shadow-2xl shadow-sm"
          >
            <section>
              <p className="text-lg font-extrabold text-white p-2 rounded-md bg-primary dark:shadow-xl w-fit mb-2 shadow-sm">
                0{index + 1}
              </p>
              <p className="uppercase text-2xl font-bold">
                {language === "ar" ? service.arTitle : service.enTitle}
              </p>
            </section>
            <p className="text-gray-500">
              {language === "ar" ? service.arDescription : service.enDescription}
            </p>
          </motion.div>
        ))}
      </section>
    </div>
  )
}
