import { useState } from 'react';
import { ZoomIn, X, Info, Layers, CheckSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS, BUSINESS_INFO } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section
      id="gallery"
      className="relative py-24 bg-neutral-950 overflow-hidden text-white"
    >
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-2"
          >
            OUR SPEEDED WORK & INVENTORY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-sans tracking-tight"
          >
            Our Gallery
          </motion.h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg mt-6 leading-relaxed font-light"
          >
            Explore our collection of premium granite slabs, polished stones, and completed projects showcasing our craftsmanship and quality.
          </motion.p>
        </div>

        {/* Grid Container with Layout Animations */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {GALLERY_ITEMS.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                key={item.id}
                className="bg-neutral-900 rounded-xl border border-neutral-800/85 overflow-hidden group cursor-pointer shadow-lg hover:border-amber-500/40 transition-all duration-300 relative aspect-[4/3]"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Elegant minimalist hover overlay */}
                <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-neutral-950 flex items-center justify-center shadow-lg shadow-amber-500/30 scale-75 group-hover:scale-100 transition-transform duration-300 mb-1.5">
                    <ZoomIn className="w-5 h-5 font-bold" />
                  </div>
                  <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider font-sans px-1 line-clamp-1">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal (AnimatePresence) */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Blur backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
                className="absolute inset-0 bg-neutral-950/95 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative bg-neutral-900 rounded-3xl border border-neutral-800 max-w-4xl w-full overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-12 lg:max-w-[600px]"
              >
                
                {/* Close trigger */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-950/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 cursor-pointer max-w-full "
                  aria-label="Close lightbox"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left: Interactive Image */}
                <div className="md:col-span-12 bg-black min-h-[200px] md:min-h-[350px]">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Right: Technical Spec Sheet */}
                {/* <div className="md:col-span-5 p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono font-semibold tracking-widest uppercase border border-amber-500/20">
                      {selectedItem.type === 'slab' ? 'Selected slab spec' : 'Showroom tour'}
                    </span>

                    <h3 className="text-2xl font-bold font-sans uppercase tracking-wide text-white">
                      {selectedItem.title}
                    </h3>

                    <div className="h-0.5 bg-amber-500/20 w-12" />

                    <p className="text-neutral-300 text-sm font-light leading-relaxed">
                      {selectedItem.description}
                    </p>
                  </div>

                  {selectedItem.type === 'slab' && (
                    <div className="bg-neutral-950 rounded-xl border border-neutral-800 p-4 space-y-3 font-mono text-xs text-neutral-400 shadow-inner">
                      <div className="flex justify-between border-b border-neutral-850 pb-2">
                        <span className="flex items-center gap-1.5 uppercase tracking-wider text-neutral-500">
                          <Layers className="w-3.5 h-3.5 text-amber-500" />
                          Thickness
                        </span>
                        <span className="text-neutral-100 font-semibold">{selectedItem.thickness}</span>
                      </div>
                      
                      <div className="flex justify-between border-b border-neutral-850 pb-2">
                        <span className="flex items-center gap-1.5 uppercase tracking-wider text-neutral-500">
                          <CheckSquare className="w-3.5 h-3.5 text-amber-500" />
                          Surface Finish
                        </span>
                        <span className="text-neutral-100 font-semibold">{selectedItem.finish}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="flex items-center gap-1.5 uppercase tracking-wider text-neutral-500">
                          <Info className="w-3.5 h-3.5 text-amber-500" />
                          Origin Location
                        </span>
                        <span className="text-neutral-100 font-semibold">{selectedItem.origin}</span>
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <a
                      id="lightbox-cta-call"
                      href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                      className="block w-full text-center py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold tracking-wide text-sm uppercase transition-all shadow-md shadow-amber-500/10 active:scale-[0.98]"
                    >
                      Inquire About This Item
                    </a>
                  </div>
                </div> */}

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
