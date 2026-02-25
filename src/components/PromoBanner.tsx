"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROMOS = [
  {
    id: 1,
    tagline: "Limited Time Offer",
    title: "30% OFF",
    subtitle: "ALL NEW ARRIVALS",
    desc: "Elevate your collection with our latest artisanal bags. Handcrafted excellence meets contemporary design.",
    button: "Shop The Sale",
    theme: "#E5E5E5",
  },
  {
    id: 2,
    tagline: "Exclusive Access",
    title: "FREE SHIPPING",
    subtitle: "ON ALL GLOBAL ORDERS",
    desc: "Experience luxury without boundaries. We deliver our hand-stitched leather goods to your doorstep, anywhere in the world.",
    button: "View Collections",
    theme: "#D4D4D4",
  },
  {
    id: 3,
    tagline: "Craftsmanship First",
    title: "BUY 1 GET 1",
    subtitle: "ON TRAVEL ESSENTIALS",
    desc: "Master the art of travel. Secure our premium luggage tags or passport holders when you purchase any travel tote.",
    button: "Claim Offer",
    theme: "#EAEAEA",
  },
];

export default function PromoBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % PROMOS.length);
    }, 15000); // 15 seconds rotation
    return () => clearInterval(timer);
  }, []);

  const current = PROMOS[index];

  return (
    <section
      className="relative w-full py-12 md:py-20 px-6 overflow-hidden transition-colors duration-1000"
      style={{ backgroundColor: current.theme }}
    >
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
        <span className="text-[25vw] font-black uppercase leading-none">
          OFFER
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="flex flex-col items-center"
            >
              {/* Tagline */}
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500 mb-4">
                {current.tagline}
              </span>

              {/* Main Title */}
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-black mb-6">
                {current.title} <br />
                <span className="text-zinc-500/60">{current.subtitle}</span>
              </h2>

              {/* Description - Line Clamp for safety */}
              <p className="max-w-md md:max-w-xl text-[10px] md:text-xs text-zinc-600 uppercase tracking-[0.2em] leading-relaxed mb-8 font-medium line-clamp-2">
                {current.desc}
              </p>

              {/* Call to Action */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] transition-all hover:bg-zinc-800 shadow-xl shadow-black/5"
              >
                {current.button}
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
