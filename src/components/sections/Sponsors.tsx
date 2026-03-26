'use client';

import { motion } from 'framer-motion';

export function Sponsors() {
  const sponsors = Array.from({ length: 6 });

  return (
    <section className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Sponsors</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-amber mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {sponsors.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative flex items-center justify-center p-8 lg:p-12 rounded-2xl glass-panel border border-white/5 cursor-pointer overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 font-display font-bold text-foreground/40 group-hover:text-neon-cyan transition-colors text-center">
                Your Logo<br/>Here
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
