import { GrCode } from 'react-icons/gr';

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
      
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <GrCode className="text-neon-cyan w-6 h-6" />
          <span className="font-display font-bold tracking-wide">Campus Innovate Hackathon 2.0</span>
        </div>
        
        <div className="text-foreground/50 text-sm flex gap-6">
          <a href="#" className="hover:text-neon-cyan transition-colors">Code of Conduct</a>
          <a href="#" className="hover:text-neon-amber transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-neon-blue transition-colors">Contact Us</a>
        </div>
        
        <p className="text-foreground/40 text-sm">
          &copy; {new Date().getFullYear()} GHRCEM. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
