'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const events = [
  {
    id: 1,
    title: "Tech Hunt",
    image: "/event-1.jpeg", // Replace with your actual image
    link: "https://forms.gle/XpnSvUNfRLqnoPPY9" // Replace with your actual link
  }
];

export function ExploreMoreEvents() {
  return (
    <section className="relative py-24 border-t border-white/5 bg-black" id="explore-events">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-white border-b-2 border-neon-cyan inline-block pb-2"
          >
            Explore More <span className="text-neon-cyan text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-500">Events</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="mx-auto w-full max-w-sm"
            >
              {/* Wraps Image and Title in single Link block */}
              <Link href={event.link} target="_blank" className="group block h-full">
                <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl border border-white/10 bg-[#050505] transition-all duration-300 group-hover:border-neon-cyan/50 shadow-lg group-hover:shadow-neon-cyan/20 cursor-pointer">
                  
                  {/* Image overlay to make text readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-opacity duration-300 group-hover:from-black/80" />
                  
                  <Image 
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  
                  {/* Title block at the bottom */}
                  <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
