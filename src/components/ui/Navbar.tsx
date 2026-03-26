'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Problems', href: '/#problems' },
    { name: 'Timeline', href: '/#timeline' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Rules', href: '/rules' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 flex items-center ${
          isScrolled ? 'h-16 md:h-20 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'h-20 md:h-24 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
          
          {/* Enhanced Logo */}
          <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            {/* <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border border-white/10 rounded-xl overflow-hidden group-hover:border-neon-cyan/50 transition-colors shadow-[0_0_15px_rgba(0,112,243,0.3)]">
               <Image src="/navbar_logo.png" alt="CIH 2.0 Logo" fill className="object-cover" />
               <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div> */}
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg md:text-xl text-white tracking-widest leading-none drop-shadow-md">
                CIH <span className="text-neon-amber drop-shadow-[0_0_8px_rgba(250,219,95,0.4)]">2.0</span>
              </span>
              <span className="text-[8px] md:text-[9px] text-white/50 tracking-[0.25em] font-bold uppercase mt-1">Campus Innovate</span>
            </div>
          </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-body text-sm text-white/70 font-bold tracking-wide">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-white text-black px-6 py-2.5 rounded-full font-bold font-body text-xs md:text-sm hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Register Now
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
               <div className="w-6 h-5 flex flex-col justify-between relative">
                  <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
                  <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
               </div>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-6 font-display text-2xl font-bold text-white/90">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-neon-cyan transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 bg-[#0052FF] text-white px-8 py-4 rounded-full font-bold font-body text-lg shadow-[0_0_20px_rgba(0,82,255,0.4)] w-full text-center"
            >
              Register Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
