"use client"

import { useLanguage } from "@/hooks/use-language"
import { Caveat } from "next/font/google"
import { useContext } from "react"

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap"
})

export interface TimelineItemProps {
  date: string
  label: string
  title: string
  description: string
}

export default function VerticalTimeline01({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className={`${caveat.variable} -my-6`}>
      {items.map((item, index) => (
        <div key={index} className="relative pl-6 sm:pl-60 py-6 group">
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[13rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[13rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute w-44 left-0 px-4 translate-y-0.5 inline-flex items-center justify-center text-xs uppercase h-6 mb-3 sm:mb-0 text-gray-600 dark:text-gray-400 font-bold bg-secondary rounded-full">
              {item.date}
            </time>
            <div className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</div>
            <div className="dark:text-gray-400 text-gray-600 font-bold mt-1 xl:ml-5 xl:mr-5">
              ({item.label})
            </div>
          </div>
          <div className="text-slate-500">{item.description}</div>
        </div>
      ))}
    </div>
  )
}
