"use client"

import { motion } from "framer-motion"
import { Users, Server, Clock, Star } from "lucide-react"
import Image from "next/image"

const stats = [
  {
    icon: Users,
    value: "1,000+",
    label: "Fake Players Deployed",
  },
  {
    icon: Server,
    value: "50+",
    label: "Servers Trust Us",
  },
  {
    icon: Clock,
    value: "99.9%",
    label: "Uptime Guarantee",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Customer Rating",
  },
]

export function Stats() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image - Larger and more visible */}
      <div className="absolute inset-0">
        <Image
          src="/images/stats-bg.png"
          alt="Stats background"
          fill
          className="object-cover object-[50%_15%] opacity-50"
        />
        {/* Smaller fades at edges */}
        <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black to-transparent" />
        {/* Light overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group cursor-default"
            >
              {/* Icon without round background - like features */}
              <div className="flex items-center justify-center mb-4">
                <stat.icon className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
