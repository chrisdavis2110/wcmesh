"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export function FrequencyBanner() {
  const frequencies = [
    {
      region: "SoCal",
      freq: "927.875",
      bandwidth: "62.5kHz",
      spreadFactor: "9",
      codingRate: "5",
    },
    {
      region: "San Fran",
      freq: "910.525",
      bandwidth: "62.5kHz",
      spreadFactor: "7",
      codingRate: "5",
    },
    {
      region: "Sacramento",
      freq: "909.875",
      bandwidth: "62.5kHz",
      spreadFactor: "9",
      codingRate: "5",
    },
    {
      region: "P.N.W.",
      freq: "910.525",
      bandwidth: "62.5kHz",
      spreadFactor: "7",
      codingRate: "5",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % frequencies.length)
        setIsAnimating(false)
      }, 500) // Half of animation duration
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const currentFreq = frequencies[currentIndex]

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-muted text-foreground">
      <div className="container mx-auto px-4 py-2 sm:py-3">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <Link href="/" className="cursor-pointer hover:opacity-80 transition-opacity shrink-0">
            <img src="/images/wcmesh-logo-horizontal-white.svg" alt="West Coast Mesh" className="h-6 sm:h-8 w-auto" />
          </Link>
          <div className="relative overflow-hidden min-h-[2rem] sm:min-h-[1.5rem] w-full sm:w-auto">
            <p
              className={`font-mono text-xs sm:text-sm text-center transition-all duration-1000 leading-tight sm:leading-normal ${
                isAnimating ? "translate-y-[-100%] opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              <span className="inline-block mr-1 text-wcm-green font-bold">({currentFreq.region})</span>
              <span className="inline-block mr-1">Freq: {currentFreq.freq}</span>
              <span className="hidden sm:inline mx-2">|</span>
              <span className="inline-block sm:inline mr-1 sm:mr-0">Bandwidth: {currentFreq.bandwidth}</span>
              <span className="hidden sm:inline mx-2">|</span>
              <span className="inline-block sm:inline mr-1 sm:mr-0">Spread Factor: {currentFreq.spreadFactor}</span>
              <span className="hidden sm:inline mx-2">|</span>
              <span className="inline-block sm:inline">Coding Rate: {currentFreq.codingRate}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
