import { ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-neutral-950 border-t border-neutral-850 text-neutral-400 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          
          {/* Copyright text info */}
          <div className="text-center sm:text-left space-y-2">
            <span className="text-lg font-sans text-white uppercase tracking-widest block font-medium">
              JAYAM <span className="text-amber-500 font-bold">GRANITES</span>
            </span>
            <p className="text-xs text-neutral-500 max-w-md">
              © 2026 {BUSINESS_INFO.name}. All Rights Reserved.<br />
              <span className="text-amber-500/80">Designed with dedication for quality granite solutions.</span>
            </p>
          </div>

          {/* Quick link actions / Back to Top */}
          <div className="flex flex-col items-center sm:items-end gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-3.5 rounded-full bg-neutral-900 border border-neutral-800 text-amber-500 hover:text-white hover:border-amber-500/40 cursor-pointer shadow-lg transition-colors group"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600">
              Back to top
            </span>
          </div>

        </div>

        {/* Small subtle dividing details */}
        <div className="mt-8 pt-8 border-t border-neutral-900/60 flex flex-wrap justify-between items-center text-[10px] font-mono text-neutral-600 gap-4">
          <div className="flex items-center gap-2">
            <span>DHARMAPURI, IND</span>
            <span>•</span>
            <span>WHOLESALE & RETAIL</span>
            <span>•</span>
            <span>ESTABLISHED YARD</span>
          </div>
          <div>
            <span>MIRROR GLOSS GUARANTEED</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
