'use client';

import { motion } from 'framer-motion';

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export function FloatingElement({
  children,
  delay = 0,
  duration = 6,
  yOffset = 20,
  className = "",
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}
