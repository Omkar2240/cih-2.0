'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaTrophy, FaArrowRight } from 'react-icons/fa6';
import { SiReact, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { Starfield } from '../ui/Starfield';

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-04-06T23:59:59').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateTimer(); // Initial call
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-6 overflow-hidden bg-[#020202]">
      {/* Live Canvas Starfield */}
      <Starfield />
      
      {/* Subtle Glow Behind Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center max-w-5xl">
        
        {/* Powered By Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md mb-8"
        >
          <span className="text-[10px] md:text-xs font-bold text-white/50 tracking-[0.2em] uppercase">Powered By</span>
          <div className="h-4 w-px bg-white/20" />
          <span className="text-xs md:text-sm font-bold text-white flex items-center gap-2">
            <Image 
              src="/codecrafterslogo.png" 
              alt="CodeCrafters Logo" 
              width={44} 
              height={44} 
              className="object-contain"
            />
            CodeCrafters
          </span>
        </motion.div>

        {/* Super Title */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/80 uppercase tracking-[0.2em] font-body text-xs md:text-sm mb-4 font-bold"
        >
          CAMPUS INNOVATE HACKATHON 2.0
        </motion.p>
        
        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold leading-[1.1] mb-0 tracking-tight text-white font-body"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-200 via-white to-amber-100">
            Build at the
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-200 via-white to-white whitespace-nowrap overflow-hidden text-ellipsis max-w-[95vw] inline-block">
           <span className="font-display italic font-medium text-white/90">Edge</span> of Innovation
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xs md:text-base text-white/60 max-w-2xl mx-auto mb-5 font-body px-4"
        >
          Built for builders. A platform to turn ideas into real-world solutions in just 6 hours.
        </motion.p>

        {/* Sponsored By Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-[10px] md:text-xs font-bold text-white/40 tracking-[0.2em] uppercase mb-4">Sponsored By</p>
          <div className="flex flex-wrap items-center gap-4 md:gap-8 text-white/70 justify-center">
            <Image 
              src="/infoceptslogo.png" 
              alt="InfoCepts" 
              width={100} 
              height={30} 
              className="object-contain opacity-90"
            />
            {/* <div className="w-px h-6 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2 text-lg md:text-xl font-bold font-body">
              <SiReact className="text-[#61DAFB]" /> React
            </div>
            <div className="flex flex-col items-start gap-1">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold">
                <SiNextdotjs className="text-white" /> Next.js
              </div>
            </div> */}
          </div>
        </motion.div>

        {/* Trophy Box */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-3 px-4 py-2 md:py-3 md:px-6 rounded-full border border-white/10 bg-[#111]/50 backdrop-blur-md mb-8 w-max max-w-full mx-auto"
        >
          <FaTrophy className="text-gray-300 text-sm md:text-xl shrink-0" />
          <span className="text-[10px] sm:text-xs md:text-sm text-white/90 font-medium">
            Winners will get cash prizes and exciting goodies
          </span>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-row items-center justify-center gap-3 mb-6 w-full"
        >
          <button className="flex items-center justify-center gap-2 bg-[#0052FF] hover:bg-[#0042CC] text-white px-5 md:px-8 py-2.5 md:py-3.5 rounded-full font-bold font-body transition-all shadow-[0_0_20px_rgba(0,82,255,0.4)] text-xs md:text-sm flex-1 sm:flex-none">
            Register Now <FaArrowRight className="text-[10px] md:text-sm" />
          </button>
          <button className="bg-white/5 text-white px-5 md:px-8 py-2.5 md:py-3.5 rounded-full font-bold font-body border border-white/10 transition-all hover:bg-white/10 backdrop-blur-md text-xs md:text-sm flex-1 sm:flex-none">
            View Problem Statements
          </button>
        </motion.div>

        {/* Countdown directly under buttons for visibility on small screens */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center w-full px-2"
        >
          <p className="text-white/70 text-[10px] md:text-xs lg:text-sm font-medium">
            Registration closes Mon, 6th April 2026 - Ends in : 
            <span className="font-bold ml-1 md:ml-2">
              <span className="text-amber-500">{String(timeLeft.days).padStart(2, '0')}D</span> 
              <span className="text-amber-500 mx-1">{String(timeLeft.hours).padStart(2, '0')}H</span> 
              <span className="text-amber-500 mr-1">{String(timeLeft.minutes).padStart(2, '0')}M</span> 
              <span className="text-amber-500">{String(timeLeft.seconds).padStart(2, '0')}S</span>
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
