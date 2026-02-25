// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="relative w-full bg-white px-6 md:px-10 pt-10 pb-20 overflow-hidden">
//       <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">
//         {/* Left Side: Massive Typography & CTA */}
//         <div className="w-full lg:w-1/2 z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h1 className="text-[clamp(60px,12vw,140px)] leading-[0.85] font-black tracking-tighter uppercase text-black mb-8">
//               CRAFTED <br />
//               <span className="text-zinc-200">FASHION</span>
//             </h1>

//             <p className="max-w-md text-sm md:text-base text-zinc-500 leading-relaxed mb-10">
//               Discover a bag experience that not only mirrors your unique
//               personality but amplifies it. At CraftByIbk, every piece is
//               crafted to elevate your confidence, celebrate your individuality,
//               and empower you to stand out effortlessly.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <button className="bg-black text-white px-10 py-4 text-xs font-bold uppercase rounded-sm hover:bg-zinc-800 transition-colors">
//                 Buy Product
//               </button>
//               <button className="border border-zinc-300 text-black px-10 py-4 text-xs font-bold uppercase rounded-sm hover:bg-zinc-50 transition-colors">
//                 Explore Product
//               </button>
//             </div>
//           </motion.div>
//         </div>

//         {/* Right Side: Image Composition */}
//         <div className="w-full lg:w-1/2 relative">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative w-full aspect-[4/5] bg-zinc-100 rounded-[40px] md:rounded-[80px] overflow-hidden shadow-2xl"
//           >
//             {/* When your backend is ready, replace this div with:
//                <Image
//                  src={heroImageData.url}
//                  alt="CraftByIbk Featured Bag"
//                  fill
//                  className="object-cover"
//                  priority
//                />
//             */}
//             <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-200">
//               <span className="text-zinc-400 font-black uppercase tracking-widest text-lg">
//                 Main Collection
//               </span>
//               <span className="text-zinc-400 italic text-sm">
//                 Upload via Backend
//               </span>
//             </div>
//           </motion.div>

//           {/* Abstract Badge (Mirroring the 'Reflect' aesthetic) */}
//           <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-full shadow-xl hidden md:block">
//             <div className="w-24 h-24 rounded-full border-2 border-dashed border-zinc-200 flex items-center justify-center animate-spin-slow">
//               <span className="text-[10px] font-bold text-center uppercase tracking-tighter">
//                 Premium • <br />
//                 Handmade
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const heroSlides = [
  {
    titleFirst: "CRAFTED",
    titleSecond: "FASHION",
    description:
      "Discover a bag experience that not only mirrors your unique personality but amplifies it. At CraftByIbk, every piece is crafted to elevate your confidence.",
    badgeText: "Premium • Handmade",
    imageLabel: "Main Collection",
  },
  {
    titleFirst: "SIGNATURE",
    titleSecond: "LEATHER",
    description:
      "Our signature series focuses on raw textures and timeless durability. Built for the modern professional who values artisanal integrity.",
    badgeText: "Limited • Edition",
    imageLabel: "Signature Series",
  },
  {
    titleFirst: "MODERN",
    titleSecond: "MINIMAL",
    description:
      "Clean lines meet exceptional function. Explore our latest drop of minimalist carriers designed to simplify your everyday journey.",
    badgeText: "New • Arrival",
    imageLabel: "Modern Drop",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Automatically cycle through the array every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="relative w-full bg-white px-6 md:px-10 pt-10 pb-20 overflow-hidden">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side: Massive Typography & CTA */}
        <div className="w-full lg:w-1/2 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current} // Key ensures animation fires when the array index changes
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-[clamp(60px,12vw,140px)] leading-[0.85] font-black tracking-tighter uppercase text-black mb-8">
                {slide.titleFirst} <br />
                <span className="text-zinc-200">{slide.titleSecond}</span>
              </h1>

              <p className="max-w-md text-sm md:text-base text-zinc-500 leading-relaxed mb-10">
                {slide.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-black text-white px-10 py-4 text-xs font-bold uppercase rounded-sm hover:bg-zinc-800 transition-colors">
                  Buy Product
                </button>
                <button className="border border-zinc-300 text-black px-10 py-4 text-xs font-bold uppercase rounded-sm hover:bg-zinc-50 transition-colors">
                  Explore Product
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Image Composition */}
        <div className="w-full lg:w-1/2 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] bg-zinc-100 rounded-[40px] md:rounded-[80px] overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-200">
                <span className="text-zinc-400 font-black uppercase tracking-widest text-lg">
                  {slide.imageLabel}
                </span>
                <span className="text-zinc-400 italic text-sm text-center px-4">
                  Cycle Slide {current + 1} of {heroSlides.length}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Abstract Badge */}
          <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-full shadow-xl hidden md:block">
            <motion.div
              key={current}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              className="w-24 h-24 rounded-full border-2 border-dashed border-zinc-200 flex items-center justify-center"
            >
              <span className="text-[10px] font-bold text-center uppercase tracking-tighter">
                {slide.badgeText.split("•").map((t, i) => (
                  <span key={i}>
                    {t} {i === 0 && <br />}
                  </span>
                ))}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
