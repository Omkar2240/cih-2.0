'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  { q: "Who can participate?", a: "Any college student with a passion for building cool things. Teams of 2 to 4." },
  { q: "How much is the entry fee?", a: "₹400 per team. This covers food, logistics, and prize pool contributions." },
  { q: "Do I need to come with an idea?", a: "No! We'll provide problem statements, but open innovation is also allowed." },
  { q: "Is it only for AI projects?", a: "Absolutely not. Web3, sustainable tech, and general software solutions are all welcome." },
  { q: "Will refreshments be provided?", a: "Yes! We will provide regular refreshments, meals, and energy drinks throughout the 6-hour hackathon to keep you focused and hydrated." }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neon-amber mb-4">Got Questions?</h2>
          <p className="text-white/50 text-sm tracking-widest uppercase">We&apos;ve got answers</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-xl overflow-hidden bg-[#050505]"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-[#0a0a0a] transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-display font-bold text-lg text-white/90">{faq.q}</span>
                <span className={`text-neon-cyan font-bold transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 pt-2 text-white/60 font-body">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
