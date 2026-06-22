import React from 'react';
import { Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO, HERO_IMAGE } from '../data';

export default function Hero() {
  const handleDirectionsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-neutral-950 overflow-hidden pt-20"
    >
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Premium Granite Showroom"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-[0.25] contrast-[1.12]"
        />
        {/* Multilayer gradient masks for supreme cinematic styling */}
        <div className="absolute inset-0 bg-neutral-950/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/60" />
        
        {/* Delicate golden accent light streak */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono tracking-widest uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Premium natural stone yard</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-sans tracking-tight text-white leading-[1.15]"
          >
            <span className="font-extralight block text-neutral-400 text-2xl sm:text-3xl tracking-widest uppercase mb-2">WELCOME TO</span>
            <span className="font-bold bg-gradient-to-r from-white via-neutral-100 to-amber-300 bg-clip-text text-transparent block">
              {BUSINESS_INFO.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-amber-500 text-lg sm:text-xl font-mono tracking-wide uppercase font-medium"
          >
            {BUSINESS_INFO.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light"
          >
            {BUSINESS_INFO.shortDescription}
          </motion.p>

          {/* Strategic Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-6"
          >
            <a
              id="hero-call-now"
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-amber-500 text-neutral-950 font-bold text-base tracking-wide transition-all duration-300 hover:bg-amber-400 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/20"
            >
              <Phone className="w-5 h-5 fill-neutral-950 text-neutral-950" />
              <span>Call Now: {BUSINESS_INFO.phone}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
