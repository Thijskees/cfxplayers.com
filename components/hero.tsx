"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const animatedWords = ["affordable", "reliable", "undetectable"]

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length)
    }, 3000) // Slower - 3 seconds between words
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - object-top to show top of image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg-new.png"
          alt="Hero background"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          The #1 FiveM Player Boost Service
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto"
        >
          <p className="mb-4">
            Our service is{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="inline-block font-bold text-purple-400 min-w-[150px] text-center"
              >
                {animatedWords[currentWordIndex]}
              </motion.span>
            </AnimatePresence>{" "}
            and trusted by hundreds
          </p>
          <p className="max-w-xl mx-auto text-zinc-200/95 font-medium leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.65)]">
            Elevate your server rankings and draw in genuine players with our seamless fake player integration
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-6 text-lg rounded-md shadow-lg shadow-purple-600/25 hover:shadow-xl hover:shadow-purple-600/40 hover:scale-105 transition-all">
            <a href="https://discord.gg/cfxplayers" target="_blank" rel="noreferrer">
              Join Our Discord
            </a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "500+", label: "Active Servers" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Live Support" },
          ].map((stat) => (
            <div key={stat.label} className="group cursor-default">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
