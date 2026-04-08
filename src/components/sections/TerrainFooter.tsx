'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function TerrainFooter() {
  return (
    <footer className="relative bg-black pt-32 overflow-hidden border-t border-white/10">
      
      {/* Background Terrain Image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image 
          src="/terrain.png" 
          alt="Dark bioluminescent terrain" 
          fill 
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center pb-32">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8"
        >
          The Next Innovation <br/>
          <span className="text-neon-cyan drop-shadow-[0_0_15px_rgba(0,112,243,0.5)]">
            Won&apos;t Wait.
          </span> Will You?
        </motion.h2>
        <Link href="https://forms.gle/HCPw5vzVD8vaPVi99">
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-neon-cyan text-black px-10 py-4 rounded-full font-bold font-body text-lg transition-transform hover:scale-105 shadow-[0_0_30px_rgba(0,112,243,0.6)]"
        >
          Register Now
        </motion.button>
        </Link>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-md py-8">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1 opacity-80">
            <span className="font-display font-bold text-xl tracking-wider text-neon-amber">CIH 2.0</span>
            <span className="text-sm font-body font-medium text-white/80">G H Raisoni College of Engineering and Management (GHRCEMN)</span>
            <span className="text-xs font-body text-white/50 max-w-sm">
              Venue: Shradha Park, B-37-39/1, Wadi Link Road, MIDC, Hingna, Nagpur, Maharashtra 441110
            </span>
          </div>
          
          <div className="flex flex-col items-center lg:items-end gap-3">
            <div className="flex gap-6 text-sm text-white/70 font-body font-medium">
              <a href="#" className="hover:text-neon-cyan transition-colors">Instagram</a>
              <a href="https://chat.whatsapp.com/CauypSZQb7p7TGJxgqZGEq" className="hover:text-neon-cyan transition-colors">WhatsApp</a>
              <a href="/legal" className="hover:text-neon-cyan transition-colors">Legal & Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
