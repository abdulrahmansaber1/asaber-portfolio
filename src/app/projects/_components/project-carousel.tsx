"use client"

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib"

type Props = {
  images: string[]
  title: string
  className?: string
  aspectRatioClassName?: string
  autoPlayInterval?: number
}

export const ProjectMediaCarousel = ({
  images,
  title,
  className,
  aspectRatioClassName = "aspect-video",
  autoPlayInterval = 3500,
}: Props) => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)

  // Deduplicate and filter valid image paths
  const validImages = React.useMemo(() => {
    return Array.from(new Set(images.filter(Boolean)))
  }, [images])

  React.useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    api.on("reInit", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  // Auto-switch between images with pause on hover/touch
  React.useEffect(() => {
    if (!api || validImages.length <= 1 || isPaused) return

    const timer = setInterval(() => {
      api.scrollNext()
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [api, validImages.length, isPaused, autoPlayInterval])

  // If only 1 image, render clean static image container
  if (validImages.length <= 1) {
    const singleImage = validImages[0] || "/logo/logo.png"
    return (
      <div
        className={cn(
          "group relative rounded-3xl overflow-hidden border border-white/10 bg-card/40 backdrop-blur-xl shadow-2xl",
          aspectRatioClassName,
          className
        )}
      >
        <Image
          src={singleImage}
          alt={title}
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>
    )
  }

  return (
    <div
      className={cn(
        "group relative rounded-3xl overflow-hidden border border-white/10 bg-card/40 backdrop-blur-xl shadow-2xl select-none",
        aspectRatioClassName,
        className
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        className="size-full"
      >
        <CarouselContent className="size-full ml-0">
          {validImages.map((img, idx) => (
            <CarouselItem key={`${img}-${idx}`} className="relative basis-full pl-0">
              <div className={cn("relative w-full overflow-hidden", aspectRatioClassName)}>
                <Image
                  src={img}
                  alt={`${title} - screenshot ${idx + 1}`}
                  fill
                  priority={idx === 0}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Subtle Bottom & Top Gradients for UI clarity */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

      {/* Counter Badge */}
      <div className="absolute top-4 right-4 z-20 pointer-events-none">
        <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-bold text-white tracking-wider shadow-lg">
          {current + 1} / {validImages.length}
        </span>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          api?.scrollPrev()
        }}
        aria-label="Previous slide"
        className="absolute left-3.5 top-1/2 -translate-y-1/2 z-20 flex size-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md border border-white/15 opacity-0 group-hover:opacity-100 hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 transition-all duration-200 shadow-xl"
      >
        <ChevronLeft className="size-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          api?.scrollNext()
        }}
        aria-label="Next slide"
        className="absolute right-3.5 top-1/2 -translate-y-1/2 z-20 flex size-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md border border-white/15 opacity-0 group-hover:opacity-100 hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 transition-all duration-200 shadow-xl"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 shadow-lg">
        {validImages.map((_, idx) => (
          <button
            key={`dot-${idx}`}
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              api?.scrollTo(idx)
            }}
            aria-label={`Go to slide ${idx + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              current === idx
                ? "w-6 bg-primary shadow-sm"
                : "w-1.5 bg-white/40 hover:bg-white/70"
            )}
          />
        ))}
      </div>
    </div>
  )
}
