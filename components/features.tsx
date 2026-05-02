"use client"

import { motion } from "framer-motion"
import {
  Monitor,
  Calendar,
  User,
  Clock,
  DollarSign,
  Headphones,
  Shield,
  TrendingUp,
} from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "100% Uptime",
    description:
      "Our infrastructure never sleeps. Your fake players remain active around the clock without interruption.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduler",
    description: "Set peak hours, schedule increases, and automate your player count through our control panel.",
  },
  {
    icon: User,
    title: "Custom Identities",
    description: "Create unique player names that blend seamlessly with your server community.",
  },
  {
    icon: Monitor,
    title: "txAdmin Integration",
    description:
      "Full visibility across txAdmin, Discord bots, web panels, and in-game player lists.",
  },
  {
    icon: DollarSign,
    title: "Competitive Rates",
    description: "Premium service at prices that make sense. No surprise charges or hidden fees.",
  },
  {
    icon: Headphones,
    title: "Always Available",
    description:
      "Our support team is online 24/7 to help with setup, questions, or any concerns.",
  },
  {
    icon: Shield,
    title: "Stealth Mode",
    description:
      "Built-in anti-detection keeps your fake players invisible to monitoring systems.",
  },
  {
    icon: TrendingUp,
    title: "Boost Rankings",
    description:
      "Higher player counts mean better visibility on server lists and more organic growth.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose CfxPlayers
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
            Everything you need to give your FiveM server the competitive edge
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-800/50 hover:border-purple-500/50 hover:bg-zinc-900/50 transition-all group cursor-default"
            >
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500 group-hover:scale-110 transition-all">
                <feature.icon className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
