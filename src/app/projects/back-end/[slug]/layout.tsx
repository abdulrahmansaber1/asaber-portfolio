import { GoBackLink } from "@/components/go-back"
import React from "react"

export default function SlugLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-10">
        <GoBackLink />
      </div>
      {children}
    </div>
  )
}
