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
import imageLabel1 from "../../public/images/hero1.png";
import imageLabel2 from "../../public/images/hero2.png";
import imageLabel3 from "../../public/images/hero3.png";

const heroSlides = [
  {
    titleFirst: "CRAFTED",
    titleSecond: "FASHION",
    description:
      "Discover a bag experience that not only mirrors your unique personality but amplifies it. At Craft_ByIbk, every piece is crafted to elevate your confidence.",
    badgeText: "Premium • Handmade",
    imageLabel: imageLabel1,
  },
  {
    titleFirst: "SIGNATURE",
    titleSecond: "LEATHER",
    description:
      "Our signature series focuses on raw textures and timeless durability. Built for the modern professional who values artisanal integrity.",
    badgeText: "Limited • Edition",
    imageLabel: imageLabel2,
  },
  {
    titleFirst: "MODERN",
    titleSecond: "MINIMAL",
    description:
      "Clean lines meet exceptional function. Explore our latest drop of minimalist carriers designed to simplify your everyday journey.",
    badgeText: "New • Arrival",
    imageLabel: imageLabel3,
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

              {/* Brand Status Design - Non-Clickable */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12 mt-4">
                {/* Est. Year & Origin */}
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">
                    Est. 2021
                  </span>
                  <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-400">
                    Lagos • Nigeria
                  </span>
                </div>

                {/* Vertical Divider (Hidden on mobile stack) */}
                <div className="hidden sm:block w-[1px] h-10 bg-zinc-200" />

                {/* Craftsmanship Guarantee */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">
                      100% Hand-Stitched
                    </span>
                    <div className="mt-2 w-full h-[2px] bg-black" />
                  </div>

                  {/* Minimalist Iconography */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
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
                  <Image
                    src={slide.imageLabel}
                    alt="Craft Process"
                    fill
                    className="object-cover"
                  />
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
