"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "WEEKLY",
    price: "2.00",
    currency: "€",
    perPlayer: true,
    description: "Kickstart your server instantly with a short burst of activity. Great for testing features, attracting first players, and making your server feel alive from day one.",
    popular: false,
  },
  {
    name: "MONTHLY",
    price: "3.50",
    currency: "€",
    perPlayer: true,
    description: "Build steady momentum with reliable daily activity. Keep your server looking active, attract real players faster, and maintain a consistent, populated environment.",
    popular: true,
  },
  {
    name: "QUARTERLY",
    price: "9.00",
    currency: "€",
    perPlayer: true,
    description: "Maximize growth with long-term presence and stability. Create a strong foundation of activity that keeps your server engaging, competitive, and always populated.",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
            Choose the plan that works best for your server needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl p-8 transition-all group hover:scale-[1.02] ${
                plan.popular
                  ? "bg-zinc-900/50 border-2 border-purple-500"
                  : "bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-sm font-semibold tracking-wider text-zinc-400 mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-2xl font-bold text-white">{plan.currency}</span>
                </div>
                <div className="text-sm text-zinc-500 mt-2">
                  per fake player
                </div>
              </div>

              <p className="text-sm text-zinc-400 text-center mb-8 leading-relaxed">
                {plan.description}
              </p>

              <Button asChild className={`w-full rounded-md transition-all ${
                plan.popular
                  ? "bg-purple-600 text-white hover:bg-purple-500"
                  : "bg-zinc-800 text-white hover:bg-zinc-700"
              }`}>
                <a href="https://panel.cfxplayers.com" target="_blank" rel="noreferrer">
                  Get Started
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
