import React from 'react';
import { MapPin, Phone, MessageSquare, Facebook, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-neutral-900 border-t border-neutral-800 text-white"
    >
      {/* Dynamic background lighting */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl z-0" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-neutral-950/20 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-2"
          >
            LET'S COLLABORATE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-sans tracking-tight"
          >
            Contact Us
          </motion.h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: Address Card, Social Media */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-neutral-950 rounded-2xl border border-neutral-800 p-8 space-y-6 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl" />
              
              <h3 className="text-2xl font-bold font-sans uppercase tracking-wider border-b border-neutral-800 pb-4">
                Showroom Office
              </h3>

              {/* Physical Address */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/10 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider font-mono"> Address</h4>
                  <p className="text-neutral-200 text-sm leading-relaxed mt-2 uppercase">
                    {BUSINESS_INFO.address.street},<br />
                    Gundalapatti, <span className="text-amber-500 font-bold">{BUSINESS_INFO.address.city}</span>,<br />
                    {BUSINESS_INFO.address.state} – {BUSINESS_INFO.address.pincode}
                  </p>
                </div>
              </div>

              {/* Phone Line */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/10 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider font-mono">Phone </h4>
                  <p className="text-amber-400 text-lg font-bold font-sans mt-2 tracking-wide">
                  <span>+91 9150016489</span> <span>, +91 9150016487</span> <span>, {BUSINESS_INFO.phone} </span> 
                  </p>
                  <p className="text-neutral-500 text-xs font-mono uppercase mt-1">Available for WhatsApp & Voice Call</p>
                </div>
              </div>

              {/* Social Channels */}
              {/* <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/10 shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider font-mono">Social Media Channels</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed mt-1">
                    Stay up-to-date with our container arrivals, slab drops, and wholesale discounts.
                  </p>
                </div>
              </div> */}
            </div>

            {/* Core Direct Contact Actions */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-mono font-bold pl-1">
                Social Media Links
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Button 1: Facebook */}
                <a
                  id="contact-facebook"
                  href={BUSINESS_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-5 py-4 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 text-white font-semibold text-sm tracking-wide transition-all active:scale-98 shadow-md"
                >
                  <Facebook className="w-4 h-4 text-[#1877F2] fill-[#1877F2] shrink-0" />
                  <span>Facebook </span>
                </a>

                {/* Button 2: Instagram */}
                <a
                  id="contact-instagram"
                  href={BUSINESS_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-5 py-4 rounded-xl bg-gradient-to-tr from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border border-pink-500/30 text-white font-semibold text-sm tracking-wide transition-all active:scale-98 shadow-md"
                >
                  <Instagram className="w-4 h-4 text-pink-500 shrink-0" />
                  <span>Instagram </span>
                </a>

              </div>
            </div>
          </div>

          {/* Column 2: Premium Embedded Map */}
          <div className="lg:col-span-7 h-full min-h-[450px]">
            <div className="bg-neutral-950 rounded-2xl border border-neutral-800 p-2 shadow-2xl h-full min-h-[450px] relative overflow-hidden group">
              <iframe
                title="Jayam Granites Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.049043153552!2d78.16508593879895!3d12.17372501891344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac1700773cc0bd%3A0x77043a21b425078d!2sJayam%20granites!5e0!3m2!1sen!2sin!4v1782111139110!5m2!1sen!2sin"
                className="w-full h-full min-h-[450px] rounded-xl border-0 filter brightness-[0.8] contrast-[1.2] invert-[0.9] hue-rotate-[180deg]"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
