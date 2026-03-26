'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlowCard({ children, className = '', delay = 0 }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`relative group rounded-2xl glass-panel p-[1px] ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-neon-cyan via-transparent to-neon-blue opacity-0 group-hover:opacity-30 blur-md transition-all duration-500 group-hover:duration-200" />
      <div className="relative h-full bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 flex flex-col justify-center items-center text-center z-10 overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
}
