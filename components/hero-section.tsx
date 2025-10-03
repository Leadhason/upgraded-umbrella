"use client"

import { useEffect, useState } from "react"

const videos = [
  "/video-one.mp4",
  "/video-two.mp4",
]

export function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Carousel Background */}
      <div className="absolute inset-0">
        {videos.map((video, index) => (
          <div
            key={video}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentVideoIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              src={video || "/placeholder.svg"}              className="h-full w-full object-cover"
            />
          </div>
        ))}
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center px-6 lg:px-12">
        <div className="mx-auto max-w-7xl -ml-7 -mb-20 p-3">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-balance font-bold leading-none tracking-tight text-white">
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">ELEVATING</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">ATHLETES</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary">WORLDWIDE</span>
            </h1>
            <p className="mb-8 max-w-xl text-pretty text-md leading-relaxed text-white/90 md:text-lg">
              Representing elite soccer talent across the globe with unparalleled expertise, dedication, and a commitment to
              excellence in football management and player development.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#talent"
                className="inline-flex items-center justify-center rounded-md bg-black p-4 px-6 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-primary"
              >
                OUR PLAYERS
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border-2 border-white px-6 p-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white hover:text-black"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 right-8 z-10 flex flex-col gap-3">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideoIndex(index)}
            className={`h-12 w-1 rounded-full transition-all ${
              index === currentVideoIndex ? "bg-primary" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    {/* Scroll Indicator 
    <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium tracking-widest text-white/70">SCROLL</span>
        <div className="h-12 w-6 rounded-full border-2 border-white/30">
        <div className="mx-auto mt-2 h-2 w-1 animate-bounce rounded-full bg-white/70" />
        </div>
      </div>
    </div>
    */}
    </section>
  )
}
