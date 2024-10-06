import Image from "next/image"
import React from "react"

export default function Error404() {
  return (
    <div className="flex flex-col items-center gap-2 justify-center mt-20">
      <Image src="/error404.svg" alt="Error 404" width={400} height={400} className="mx-auto" />
      <h1 className="text-5xl font-extrabold text-red-500">Error 404</h1>
      <p className="xl:text-3xl text-lg text-gray-500 font-semibold text-center">
        Requested page doesn't exists.
      </p>
    </div>
  )
}
