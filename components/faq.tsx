"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do fake players work on FiveM?",
    answer:
      "Our system creates virtual player entities that register on your server just like real users. They appear in player counts, server browsers, txAdmin, and Discord bots - helping your server look more active and inviting.",
  },
  {
    question: "Will my server get flagged or banned?",
    answer:
      "We use sophisticated techniques developed over years of research to ensure complete invisibility. Our detection evasion methods are continuously updated to stay ahead of any monitoring systems.",
  },
  {
    question: "Does this work with txAdmin and bots?",
    answer:
      "Yes, full compatibility. Your fake players appear everywhere real players do - server lists, txAdmin dashboard, Discord status bots, and all web panels. The integration is seamless.",
  },
  {
    question: "Can I choose what names they have?",
    answer:
      "Absolutely. With our Growth plan and above, you get full control over player names. Create names that match your server theme or community style for a natural appearance.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "Within minutes. After payment, you receive instant access to your dashboard where you can configure everything and deploy players to your server immediately.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We support PayPal, Visa, MasterCard, American Express, and various cryptocurrencies including Bitcoin and Ethereum for those who prefer privacy.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 pb-32 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Got Questions?
          </h2>
          <p className="text-lg text-zinc-500">
            Find answers to the most common questions about CfxPlayers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-zinc-900/30 rounded-xl border border-zinc-800/50 px-6 data-[state=open]:border-purple-500/50 hover:border-zinc-700 transition-all group"
              >
                <AccordionTrigger className="text-left text-white hover:text-purple-400 hover:no-underline py-5 group-hover:text-purple-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
