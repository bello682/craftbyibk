"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import banner1 from "../../public/images/banner1.png";
import banner2 from "../../public/images/banner2.png";
import banner3 from "../../public/images/banner3.png";
import Image from "next/image";
import { useGlobalModal } from "./providers/ModalProvider";

const PROMOS = [
  {
    id: 1,
    tagline: "Limited Time Offer",
    title: "30% OFF",
    subtitle: "ALL NEW ARRIVALS",
    desc: "Elevate your collection with our latest artisanal bags. Handcrafted excellence meets contemporary design.",
    button: "Shop The Sale",
    theme: banner1,
  },
  {
    id: 2,
    tagline: "Exclusive Access",
    title: "FREE SHIPPING",
    subtitle: "ON ALL GLOBAL ORDERS",
    desc: "Experience luxury without boundaries. We deliver our hand-stitched leather goods to your doorstep, anywhere in the world.",
    button: "View Collections",
    theme: banner2,
  },
  {
    id: 3,
    tagline: "Craftsmanship First",
    title: "BUY 1 GET 1",
    subtitle: "ON TRAVEL ESSENTIALS",
    desc: "Master the art of travel. Secure our premium luggage tags or passport holders when you purchase any travel tote.",
    button: "Claim Offer",
    theme: banner3,
  },
];

export default function PromoBanner() {
  const [index, setIndex] = useState(0);
  const { openComingSoon } = useGlobalModal();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % PROMOS.length);
    }, 15000); // 15 seconds rotation
    return () => clearInterval(timer);
  }, []);

  const current = PROMOS[index];

  return (
    // <section
    //   className="relative w-full py-12 md:py-20 px-6 overflow-hidden transition-colors duration-1000"
    //   // style={{ backgroundColor: current.theme }}
    // >
    // <section className="relative w-full aspect-[21/9] md:aspect-[3/1] min-h-[300px] max-h-[500px] flex items-center justify-center px-6 overflow-hidden">
    <section className="relative w-full max-w-full overflow-x-hidden aspect-video md:aspect-[21/9] lg:aspect-[3/1] min-h-[350px] max-h-[600px] flex items-center justify-center px-6 ">
      {/* Dynamic Background Image Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${current.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          {/* <Image
            src={current.theme}
            alt="Promotion Background"
            fill
            className="object-cover brightness-[0.7]" // Brightness helps text pop
            priority
          /> */}
          <Image
            src={current.theme}
            alt="Promotion Background"
            fill
            className="object-cover object-top brightness-[0.7]" // object-top keeps the logo visible
            priority
          />
          {/* Subtle overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none overflow-hidden">
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
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.5em] text-white/70 mb-4">
                {current.tagline}
              </span>
              {/* Main Title */}
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white mb-6">
                {current.title} <br />
                <span className="text-white/40">{current.subtitle}</span>
              </h2>
              {/* Description - Line Clamp for safety zinc-600 */}
              <p className="max-w-md md:max-w-xl text-[10px] md:text-xs text-zinc-200 uppercase tracking-[0.2em] leading-relaxed mb-8 font-medium line-clamp-2">
                {current.desc}
              </p>
              {/* Call to Action */}
              <motion.button
                onClick={openComingSoon}
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
