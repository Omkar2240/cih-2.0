'use client';

import { motion } from 'framer-motion';

const timeline = [
  {
    phase: "Phase 1: Registration",
    title: "The Assembly",
    description: "Form your squad. Understand the problem statements and finalize your weapon of choice (tech stack).",
    duration: "Pre-Event",
    color: "bg-red-500",
    textColor: "text-red-500",
  },
  {
    phase: "Phase 2: Ideation Sprint",
    title: "The Blueprint",
    description: "Brainstorming and architecture design. Mentors will review the initial blueprint for feasibility.",
    duration: "Hours 1-2",
    color: "bg-neon-cyan",
    textColor: "text-neon-cyan",
  },
  {
    phase: "Phase 3: Deep Work",
    title: "The Crucible",
    description: "Heads down coding. Transform your blueprint into a tangible, working prototype.",
    duration: "Hours 3-5",
    color: "bg-neon-amber",
    textColor: "text-neon-amber",
  },
  {
    phase: "Phase 4: Judgment",
    title: "The Grand Reveal",
    description: "Pitch your prototype to the judges. Show them how you outbuilt the competition.",
    duration: "Hour 6",
    color: "bg-purple-500",
    textColor: "text-purple-500",
  }
];

export function Timeline() {
  return (
    <section className="py-24 bg-[#020202] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body text-xl md:text-2xl text-neon-cyan mb-2"
        >
          Four Phases. One Mission.
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-5xl font-bold mb-16 text-white"
        >
          Can you survive the Gauntlet?
        </motion.h3>

        <div className="space-y-6">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col md:flex-row items-center text-left bg-black border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-full md:w-48 mb-4 md:mb-0">
                <span className={`inline-block px-3 py-1 rounded-sm bg-white/5 text-xs font-bold uppercase tracking-wider ${item.textColor} border border-current/20`}>
                  {item.phase}
                </span>
                <p className="font-display font-bold text-lg mt-2 text-white/50">{item.duration}</p>
              </div>
              
              <div className="flex-1 md:pl-12 md:border-l border-white/10 group-hover:border-white/30 transition-colors">
                <h4 className="font-display text-2xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-white/60 font-body leading-relaxed">{item.description}</p>
              </div>

              {/* Hover Glow */}
              <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 ${item.color} group-hover:h-full transition-all duration-500 rounded-full shadow-[0_0_15px_currentColor]`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
