import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO, NAV_ITEMS } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection based on section position
      const scrollPosition = window.scrollY + 120;
      const sections = NAV_ITEMS.map(item => {
        const id = item.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          return {
            id: item.href,
            top: element.offsetTop,
            bottom: element.offsetTop + element.offsetHeight
          };
        }
        return null;
      }).filter(Boolean);

      const activeSection = sections.find(
        section => section && scrollPosition >= section.top && scrollPosition < section.bottom
      );

      if (activeSection) {
        setActiveHash(activeSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetPos = element.offsetTop - 80; // height of fixed header
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth'
      });
      setActiveHash(href);
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-900/95 backdrop-blur-md shadow-lg border-b border-amber-500/10 py-3'
          : 'bg-gradient-to-b from-black/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => smoothScrollTo(e, '#home')}
            className="flex flex-col items-start group"
          >
            <span className="text-xl sm:text-2xl font-sans tracking-widest text-white font-semibold transition-colors duration-300 group-hover:text-amber-400">
              JAYAM <span className="text-amber-500 font-bold">GRANITES</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase leading-none group-hover:text-neutral-200 transition-colors">
              Gundalapatti • Dharmapuri
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => smoothScrollTo(e, item.href)}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                  activeHash === item.href
                    ? 'text-amber-400 font-semibold'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {item.label}
                {activeHash === item.href && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-500"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Call CTA Button */}
          <div className="hidden md:block">
            <a
              id="header-call-btn"
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500 text-neutral-950 font-bold text-sm tracking-wide transition-all duration-300 hover:bg-amber-400 active:scale-95 shadow-md shadow-amber-500/20 hover:shadow-amber-400/30"
            >
              <PhoneCall className="w-4 h-4" />
              <span>CALL NOW</span>
            </a>
          </div>

          {/* Mobile Hamburguer trigger */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-neutral-300 hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-neutral-950 border-b border-amber-500/20 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.href}
                  href={item.href}
                  onClick={(e) => smoothScrollTo(e, item.href)}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold tracking-wider uppercase transition-colors ${
                    activeHash === item.href
                      ? 'bg-amber-500/10 text-amber-400 border-l-4 border-amber-500'
                      : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}

              <div className="pt-4 px-4">
                <a
                  id="mobile-drawer-call-btn"
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-3 w-full py-3 rounded-xl bg-amber-500 text-neutral-950 font-bold text-base tracking-wide hover:bg-amber-400 shadow-md transition-transform active:scale-[0.98]"
                >
                  <PhoneCall className="w-5 h-5 animate-pulse" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
