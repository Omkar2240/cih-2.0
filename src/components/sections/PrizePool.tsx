'use client';

import { motion } from 'framer-motion';

export function PrizePool() {
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-neon-amber mb-16 md:mb-24"
        >
          Prizes To Be Revealed
        </motion.h2>

        <div className="flex justify-center items-end gap-2 md:gap-12 h-[300px] md:h-[400px] mt-12 relative">
          
          <Pillar delay={0.2} rank="2nd" mdRank="2nd Place" height="h-[150px] md:h-[250px]" medalColor="text-gray-400" prize="TBA" w="w-[70px] md:w-32" prizeSize="text-2xl md:text-4xl" />
          
          <Pillar delay={0.4} rank="1st" mdRank="1st Place" height="h-[220px] md:h-[350px]" medalColor="text-neon-amber" prize="TBA" glow w="w-[80px] md:w-40" prizeSize="text-3xl md:text-5xl" />
          
          <Pillar delay={0.6} rank="3rd" mdRank="3rd Place" height="h-[100px] md:h-[200px]" medalColor="text-amber-700" prize="TBA" w="w-[60px] md:w-32" prizeSize="text-xl md:text-4xl" />

        </div>
      </div>
    </section>
  );
}

function Pillar({ delay, rank, mdRank, height, medalColor, prize, glow = false, w, prizeSize }: { delay: number, rank: string, mdRank: string, height: string, medalColor: string, prize: string, glow?: boolean, w: string, prizeSize: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`relative ${w} flex flex-col items-center flex-shrink-0 ${height}`}
    >
      {/* Prize floating above */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay }}
        className="absolute -top-16 md:-top-24 text-center w-full"
      >
        <span className={`font-display text-[10px] md:text-sm tracking-widest uppercase mb-1 md:mb-2 block ${medalColor}`}>
          <span className="md:hidden">{rank}</span>
          <span className="hidden md:inline">{mdRank}</span>
        </span>
        <span className={`font-display font-bold ${prizeSize} ${glow ? 'text-neon-amber drop-shadow-[0_0_15px_rgba(250,219,95,0.8)]' : 'text-white'}`}>
          {prize}
        </span>
      </motion.div>

      {/* Pillar Cap */}
      <div className="w-full h-4 md:h-8 bg-gradient-to-b from-[#222] to-[#111] rounded-t-sm md:rounded-t-lg border-t border-white/20 relative z-10 shadow-lg" />
      
      {/* Pillar Body with fluting (vertical lines) */}
      <div className="flex-1 w-[85%] bg-gradient-to-r from-[#050505] via-[#1a1a1a] to-[#050505] flex justify-evenly shadow-2xl relative">
        <div className="w-px bg-black/60 shadow-[1px_0_0_rgba(255,255,255,0.05)] h-full" />
        <div className="w-px bg-black/60 shadow-[1px_0_0_rgba(255,255,255,0.05)] h-full" />
        <div className="w-px bg-black/60 shadow-[1px_0_0_rgba(255,255,255,0.05)] h-full" />
        <div className="w-px bg-black/60 shadow-[1px_0_0_rgba(255,255,255,0.05)] h-full" />
      </div>

      {/* Pillar Base */}
      <div className="w-[110%] h-6 md:h-10 bg-gradient-to-t from-[#222] to-[#111] rounded-b-sm md:rounded-b-lg border-b border-black shadow-2xl" />
    </motion.div>
  );
}
