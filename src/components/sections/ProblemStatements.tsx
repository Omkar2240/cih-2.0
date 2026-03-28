'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaFilePdf, FaGoogle, FaWhatsapp, FaUsers } from 'react-icons/fa6';

const steps = [
  {
    step: "Step 01",
    title: "Review the Challenges",
    desc: "Download and read the official problem statements. Find a track that sparks your interest.",
    buttonText: "View Problem Statements",
    buttonIcon: <FaFilePdf />,
    buttonLink: "https://drive.google.com/file/d/1_7r2VngFoIAYQS4x8p6MbtC3FqyDAChB/view?usp=sharing", // Replace with real PDF link
    buttonStyle: "bg-red-500/10 text-red-400 border-red-500/30 hover:bg-red-500/20"
  },
  {
    step: "Step 02",
    title: "Assemble Your Team",
    desc: "Form a team of 2 to 4 members. You can participate solo, but teaming up is recommended.",
    buttonIcon: <FaUsers />,
  },
  {
    step: "Step 03",
    title: "Register Your Team",
    desc: "Once decided, fill out the official registration form with your team and payment details.",
    buttonText: "Register via Google Forms",
    buttonIcon: <FaGoogle />,
    buttonLink: "https://forms.gle/HCPw5vzVD8vaPVi99", // Replace with real Google form link
    buttonStyle: "bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500/20"
  },
  {
    step: "Step 04",
    title: "Join the Community",
    desc: "Join our official WhatsApp group for all future updates, announcements, and queries.",
    buttonText: "Join WhatsApp Group",
    buttonIcon: <FaWhatsapp />,
    buttonLink: "https://chat.whatsapp.com/CauypSZQb7p7TGJxgqZGEq", // Replace with real WhatsApp link
    buttonStyle: "bg-green-500/10 text-green-400 border-green-500/30 hover:bg-green-500/20"
  }
];

export function ProblemStatements() {
  return (
    <section id="problems" className="py-24 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neon-amber mb-4"
          >
            How To Participate
          </motion.h2>
          <p className="text-neon-cyan uppercase tracking-widest text-sm font-bold">Your journey to victory begins here</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Statue Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative h-[300px] lg:h-[500px]"
          >
            <Image 
              src="/statue.png" 
              alt="Statue typing on laptop" 
              fill 
              className="object-contain object-left drop-shadow-[0_0_30px_rgba(250,219,95,0.2)]" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black pointer-events-none hidden lg:block" />
          </motion.div>

          {/* Registration Flow Steps */}
          <div className="w-full lg:w-1/2 space-y-10 pl-4 md:pl-0 border-l lg:border-none border-white/10 relative">
            {steps.map((track, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-6 lg:pl-0"
              >
                {/* Timeline dot for mobile view */}
                <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-neon-amber lg:hidden" />
                
                <span className="text-neon-amber/70 text-xs font-bold uppercase tracking-widest">{track.step}</span>
                <h3 className="font-display font-bold text-2xl text-white mt-1 mb-2 flex items-center gap-3">
                  {track.buttonIcon} {track.title}
                </h3>
                <p className="text-white/60 font-body text-sm leading-relaxed mb-4">{track.desc}</p>
                
                {track.buttonText && (
                  <a 
                    href={track.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold font-body text-xs md:text-sm border transition-all ${track.buttonStyle}`}
                  >
                    {track.buttonIcon} {track.buttonText}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
