'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const privileges = [
  'Trophy',
  'Certificate',
  'Refreshment',
  'Cooler',
  'Extension Box',
  'Prize Pool',
  'Wifi',
];

export function HackathonPrivileges() {
  return (
    <section className="relative py-24 border-t border-white/5 bg-[#020202]" id="privileges">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-neon-amber"
          >
            Hackathon Privileges
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 mt-4 font-body"
          >
            Build with comfort, compete for rewards, and enjoy the complete CIH 2.0 experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40"
          >
            <div className="relative h-56 md:h-64">
              <Image
                src="/electronic-gadgets.svg"
                alt="Electronic Gadgets including Laptop Stands and Pendrives"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-5 border-t border-white/10">
              <h3 className="font-display text-2xl text-white">Electronic Gadgets</h3>
              <p className="text-white/60 text-sm mt-2">Laptop Stands, Pendrives, and practical builder accessories.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40"
          >
            <div className="relative h-56 md:h-64">
              <Image
                src="/goodies.svg"
                alt="Goodies for participants"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-5 border-t border-white/10">
              <h3 className="font-display text-2xl text-white">Goodies</h3>
              <p className="text-white/60 text-sm mt-2">Exclusive CIH packs for participants and top-performing teams.</p>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {privileges.map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan text-sm font-bold tracking-wide"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}