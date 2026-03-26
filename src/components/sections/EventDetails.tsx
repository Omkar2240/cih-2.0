'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function EventDetails() {
  return (
    <section className="relative py-24 pb-32 border-t border-white/5 bg-black">
      {/* Title block */}
      <div className="container mx-auto px-4 max-w-5xl text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neon-amber mb-4"
        >
          This Isn&apos;t Just Another Hackathon
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neon-cyan/80 uppercase tracking-widest text-sm font-bold"
        >
          It&apos;s a crucible for builders.
        </motion.p>
      </div>

      {/* Massive Graphic */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full relative h-[300px] md:h-[500px] overflow-hidden mb-16"
      >
        <Image 
          src="/robot-arms.avif" 
          alt="Creation" 
          fill 
          className="object-cover object-center opacity-80" 
        />
        {/* Gradients to blend image into background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
        <div className="absolute inset-x-0 h-32 bottom-0 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </motion.div>

      {/* Detail Boxes Grid below the image */}
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DetailCard 
            title="Date" 
            value="7 April" 
            desc="Mark your calendars"
            delay={0.1}
          />
          <DetailCard 
            title="Time" 
            value="10 AM – 5 PM" 
            desc="Full sprint"
            delay={0.2}
          />
          <DetailCard 
            title="Venue" 
            value="Auditorium" 
            desc="2nd Floor, Block A"
            delay={0.3}
          />
          <DetailCard 
            title="Prizes" 
            value="7K+" 
            desc="Prize pool & electronic goodies"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

function DetailCard({ title, value, desc, delay }: { title: string, value: string, desc: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-6 border-b-2 border-l border-white/5 bg-[#050505] hover:bg-[#0a0a0a] hover:border-neon-cyan/50 transition-colors duration-300"
    >
      <div className="text-neon-cyan text-sm tracking-wider uppercase font-bold mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-neon-cyan/50" />
        {title}
      </div>
      <div className="font-display font-bold text-2xl text-white mb-2">{value}</div>
      <div className="text-white/50 text-sm font-body">{desc}</div>
    </motion.div>
  );
}
