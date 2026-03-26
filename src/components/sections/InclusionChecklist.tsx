'use client';

import { motion } from 'framer-motion';
import { GrCheckmark } from 'react-icons/gr';

const points = [
  "You are tired of generic, boring hackathons.",
  "You want to build real solutions for real problems.",
  "You thrive under pressure and tight deadlines.",
  "You want to connect with elite local builders."
];

export function InclusionChecklist() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      
      {/* Decorative side pillars matching the reference aesthetic */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white/5 to-transparent pointer-events-none hidden lg:block border-r border-white/5" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/5 to-transparent pointer-events-none hidden lg:block border-l border-white/5" />

      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-neon-cyan mb-12"
        >
          This Hackathon Is For You If...
        </motion.h2>

        <div className="flex flex-col gap-6 items-center">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-[#0a0a0a] border border-white/10 rounded-full px-6 md:px-10 py-4 w-full max-w-2xl font-body text-lg text-white/80 hover:border-neon-cyan/50 hover:bg-[#111] transition-all"
            >
              <GrCheckmark className="text-neon-amber w-6 h-6 shrink-0" />
              <span className="text-left">{point}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
