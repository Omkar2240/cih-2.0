import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const GlowingButton = React.forwardRef<HTMLButtonElement, GlowingButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center px-8 py-4 font-display font-bold text-sm tracking-wide transition-all duration-300 rounded-lg overflow-hidden group",
          variant === 'primary' && "bg-transparent text-black",
          variant === 'secondary' && "bg-white/5 text-white hover:bg-white/10 border border-white/10",
          variant === 'outline' && "bg-transparent text-neon-cyan border border-neon-cyan/50 hover:bg-neon-cyan/10",
          className
        )}
        {...props}
      >
        {variant === 'primary' && (
          <>
            <div className="absolute inset-0 bg-neon-cyan transition-all duration-300 group-hover:bg-white"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(0,240,255,0.8)]"></div>
          </>
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }
);

GlowingButton.displayName = 'GlowingButton';
