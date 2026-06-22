import { Sparkles, Shield, LayoutGrid, BadgePercent, Award, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO, SERVICE_FEATURES } from '../data';

// Custom Lucide Icon Mapper
const IconMapper = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'ShieldAlert':
      return <Shield className={className} />;
    case 'LayoutGrid':
      return <LayoutGrid className={className} />;
    case 'BadgePercent':
      return <BadgePercent className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-neutral-900 border-t border-neutral-800 overflow-hidden"
    >
      {/* Decorative gold vector curves and highlights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -translate-y-20 z-0" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neutral-950/40 rounded-full blur-3xl translate-y-20 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-2"
          >
            DISCOVER OUR HERITAGE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-sans text-white tracking-tight"
          >
            {BUSINESS_INFO.aboutTitle}
          </motion.h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Asymmetrical Grid Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Narrative text & core statistics */}
          <div className="lg:col-span-5 space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold font-sans text-amber-400 uppercase tracking-wide"
            >
              Excellence & Reliability Since Day One
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-neutral-300 text-lg leading-relaxed font-light"
            >
              {BUSINESS_INFO.aboutText}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-neutral-400 text-sm leading-relaxed"
            >
              Each slab is curated, cut, and polished under strict standards to withstand the test of time, weather, and heavy usage. Whether you are building your dream residence or a commercial landmark, we supply materials with supreme density and elegant organic patterning.
            </motion.p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 flex flex-col justify-center items-start"
              >
                <div className="flex items-center gap-2 text-amber-500 font-bold font-sans text-3xl">
                  <span>100%</span>
                </div>
                <span className="text-xs text-neutral-400 mt-1 uppercase font-mono tracking-wider">Premium Grading</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 flex flex-col justify-center items-start"
              >
                <div className="flex items-center gap-2 text-amber-500 font-bold font-sans text-3xl">
                  <span>Direct</span>
                </div>
                <span className="text-xs text-neutral-400 mt-1 uppercase font-mono tracking-wider">Yard Calculation</span>
              </motion.div>
            </div>
          </div>

          {/* Right Block: Core Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICE_FEATURES.map((feature, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, borderColor: 'rgba(245, 158, 11, 0.3)' }}
                key={feature.title}
                className="bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 relative group transition-all duration-300 shadow-xl"
              >
                {/* Micro ornament */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/5 to-transparent rounded-tr-2xl group-hover:from-amber-500/10 transition-all duration-300" />
                <div className="absolute top-4 right-4 text-[10px] font-mono text-amber-500/30 group-hover:text-amber-500/60 transition-colors uppercase">
                  0{idx + 1}
                </div>

                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-all duration-300">
                  <IconMapper name={feature.icon} className="w-6 h-6" />
                </div>

                <h4 className="text-lg font-bold text-white tracking-wide uppercase mb-3 font-sans group-hover:text-amber-400 transition-colors">
                  {feature.title}
                </h4>

                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Decorative divider logo */}
        <div className="flex items-center justify-center gap-4 mt-20">
          <div className="h-px bg-gradient-to-r from-transparent to-neutral-700 grow" />
          <Award className="w-5 h-5 text-amber-500/60" />
          <div className="h-px bg-gradient-to-l from-transparent to-neutral-700 grow" />
        </div>

      </div>
    </section>
  );
}
