'use client';

import { motion } from 'framer-motion';

export function Organizers() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Organized By</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto rounded-full mb-16" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-12 border-t-4 border-t-neon-cyan/80 relative overflow-hidden"
        >
          {/* subtle accent glow */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
          
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-2">
              Department of Data Science
            </h3>
            <p className="text-foreground/60 text-lg">
              GH Raisoni College of Engineering and Management, Nagpur
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#0a0a0a] px-4 text-sm tracking-wider uppercase text-foreground/50">
                Under The Forums
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 group hover:border-neon-amber/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-neon-amber group-hover:shadow-[0_0_10px_#ffbf00] transition-shadow" />
              <span className="font-display font-medium text-lg tracking-wide">Code Crafters Club</span>
            </div>
            
            <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 group hover:border-neon-blue/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-neon-blue group-hover:shadow-[0_0_10px_#3b82f6] transition-shadow" />
              <span className="font-display font-medium text-lg tracking-wide">DataCrux Forum</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
