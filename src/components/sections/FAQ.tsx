'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    q: "When and where is CIH 2.0?",
    a: "Campus Innovate Hackathon 2.0 is on 7 April 2026, from 10 AM to 5 PM at the GHRCEMN Auditorium, 2nd Floor, Block A. Mark your calendars!"
  },
  {
    q: "Who can participate?",
    a: "Any college student with a passion for building cool things. Teams of 2 to 4 members are allowed. Solo participation is technically possible but teaming up is strongly recommended. All branches and years are welcome — no prior hackathon experience needed."
  },
  {
    q: "How much is the entry fee?",
    a: "₹400 per team. This covers refreshments, logistics, goodies, and prize pool contributions. Payment details are included in the registration form."
  },
  {
    q: "What is the registration deadline?",
    a: "Registration closes on Sunday, 5 April 2026. Don't wait — fill out the Google Form and lock in your spot before it's gone."
  },
  {
    q: "How do I register my team?",
    a: "Click 'Register Now' on this page or head to the 'How To Participate' section. Fill out the official Google Form with your team and payment details. After registering, join our WhatsApp group for all event updates and announcements."
  },
  {
    q: "Do I need to come with a pre-built idea or project?",
    a: "Up to 20–40% of your project can be pre-built (e.g., boilerplate setup, wireframes, UI components). However, the core logic, features, and majority of the implementation (60–80%) must be developed during the 6-hour hackathon window on event day."
  },
  {
    q: "Can I use open-source libraries and frameworks?",
    a: "Yes! Open-source libraries, public APIs, standard boilerplate templates (like create-react-app or Next.js starters), and cloud services are all permitted and encouraged. However, using pre-written proprietary code or submitting past projects will result in immediate disqualification."
  },
  {
    q: "How will projects be judged?",
    a: "Projects are evaluated on four equally-weighted criteria by an expert panel: Innovation (25%) — how creative and unique is your solution; Impact & Feasibility (25%) — real-world usefulness and scalability; Technical Execution (25%) — code quality, working prototype, UI/UX; Presentation Quality (25%) — how well you pitch and demo your project."
  },
  {
    q: "What do we need to submit?",
    a: "A public GitHub repository with all source code and a descriptive README, plus a short pitch deck (PPT/Slides) or a video demo highlighting the problem, solution, and impact. Late submissions will not be evaluated unless pre-authorized due to technical difficulties."
  },
  {
    q: "What are the prizes?",
    a: "The prize pool is ₹12,000+, including cash prizes for 1st, 2nd, and 3rd place, along with a trophy, certificates, electronic gadgets (laptop stands, pendrives), and exclusive CIH goodies for all participants. Full prize breakdown will be revealed soon!"
  },
  {
    q: "Will participants receive certificates?",
    a: "Yes! All registered participants receive a certificate of participation. Winners receive special achievement certificates on top of that."
  },
  {
    q: "What is the event day schedule like?",
    a: "The hackathon runs from 10 AM to 5 PM. Phase 1 (Hours 1–2) is Ideation & Blueprint — brainstorm, design your architecture, get mentor feedback. Phase 2 (Hours 3–5) is The Crucible — heads-down coding. Phase 3 (Hour 6) is The Grand Reveal — pitch your prototype to the judges."
  },
  {
    q: "Will there be mentors or support available?",
    a: "Yes! Mentors will be present throughout the hackathon to review your blueprint for feasibility, help you debug, and refine your approach. Don't be shy — use them!"
  },
  {
    q: "What should I bring on the day?",
    a: "Bring your laptop, charger, college ID, and any hardware you plan to use. Wi-Fi will be available at the venue, but having a personal hotspot as a backup is recommended. Pre-download your dev dependencies before arriving."
  },
  {
    q: "Can team members be changed after registration?",
    a: "No. Once the hacking period has officially begun, you cannot switch teams or add new members. Make sure your full team is confirmed before registering."
  },
  {
    q: "Where can I get updates or ask questions?",
    a: "Join the official CIH 2.0 WhatsApp group — the link is in the 'How To Participate' section. All announcements, clarifications, and event updates will be shared there."
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-black relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neon-amber mb-4">Got Questions?</h2>
          <p className="text-white/50 text-sm tracking-widest uppercase">We&apos;ve got answers</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-xl overflow-hidden bg-[#050505]"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-[#0a0a0a] transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-display font-bold text-lg text-white/90">{faq.q}</span>
                <span className={`text-neon-cyan font-bold transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 pt-2 text-white/60 font-body">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
