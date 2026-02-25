// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const FEATURED_COLLECTIONS = [
//   {
//     id: "1",
//     title: "HANDMADE\nCOLLECTION",
//     tag: "Artisanal",
//     description: "Meticulously designed for everyday luxury.",
//   },
//   {
//     id: "2",
//     title: "SIGNATURE\nESSENTIALS",
//     tag: "Core",
//     description: "Timeless silhouettes for the modern professional.",
//   },
//   {
//     id: "3",
//     title: "EVENING\nELEGANCE",
//     tag: "Clutch",
//     description: "Statement pieces for high-profile settings.",
//   },
//   {
//     id: "4",
//     title: "TRAVEL\nLIFESTYLE",
//     tag: "Tote",
//     description: "Sophisticated design for those on the move.",
//   },
//   {
//     id: "5",
//     title: "URBAN\nADAPT",
//     tag: "Modular",
//     description: "Versatile designs for city life.",
//   },
//   {
//     id: "6",
//     title: "MINIMALIST\nSERIES",
//     tag: "Sleek",
//     description: "Pure form and premium texture.",
//   },
//   {
//     id: "7",
//     title: "VINTAGE\nREVIVAL",
//     tag: "Classic",
//     description: "Old-world charm meets modern craft.",
//   },
//   {
//     id: "8",
//     title: "LIMITED\nEDITION",
//     tag: "Exclusive",
//     description: "One-of-a-kind pieces for the bold.",
//   },
// ];

// export default function FeatureCollections() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % FEATURED_COLLECTIONS.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="bg-black w-full min-h-screen flex flex-col">
//       {[0, 1].map((blockPos) => {
//         // UNIQUE INDEX LOGIC:
//         // Block 0 (Top) gets 'index'
//         // Block 1 (Bottom) gets 'index + 1' (wrapped using modulo)
//         const uniqueIndex = (index + blockPos) % FEATURED_COLLECTIONS.length;
//         const current = FEATURED_COLLECTIONS[uniqueIndex];
//         const isReversed = blockPos % 2 !== 0;

//         return (
//           <section
//             key={blockPos}
//             className="py-20 px-6 md:px-16 border-b border-zinc-900 last:border-0"
//           >
//             <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//               {/* Image Column */}
//               <div
//                 className={`relative aspect-[4/5] bg-zinc-900 rounded-[3rem] overflow-hidden ${isReversed ? "lg:order-last" : ""}`}
//               >
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={current.id} // Animation triggers because ID changes per block
//                     initial={{ opacity: 0, scale: 1.1 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 1 }}
//                     className="absolute inset-0 flex items-center justify-center text-zinc-800 font-black text-2xl px-10 text-center uppercase"
//                   >
//                     {/* Placeholder for actual Image */}
//                     {current.title.replace("\n", " ")}
//                   </motion.div>
//                 </AnimatePresence>
//               </div>

//               {/* Text Column */}
//               <div
//                 className={`text-white ${isReversed ? "lg:text-right lg:items-end" : "items-start"} flex flex-col`}
//               >
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={current.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <span className="text-zinc-500 uppercase tracking-[0.3em] text-[10px] mb-4 block font-bold">
//                       {current.tag}
//                     </span>
//                     <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9] whitespace-pre-line">
//                       {current.title}
//                     </h2>
//                     <p
//                       className={`max-w-md text-zinc-400 text-[11px] uppercase tracking-widest mb-10 leading-relaxed ${isReversed ? "lg:ml-auto" : ""}`}
//                     >
//                       {current.description}
//                     </p>
//                     <button className="group flex items-center gap-4 text-white text-xs font-black uppercase tracking-[0.4em]">
//                       <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
//                         →
//                       </span>
//                       Explore
//                     </button>
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </div>
//           </section>
//         );
//       })}
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FEATURED_COLLECTIONS = [
  {
    id: "1",
    title: "HANDMADE\nCOLLECTION",
    tag: "Artisanal",
    description:
      "Meticulously designed for everyday luxury. This artisanal piece represents the pinnacle of CraftByIbk's dedication to quality, using only the finest ethically sourced leathers and hand-stitched details that ensure longevity.",
  },
  {
    id: "2",
    title: "SIGNATURE\nESSENTIALS",
    tag: "Core",
    description:
      "Timeless silhouettes for the modern professional. Our signature range focuses on functionality without compromising the high-end aesthetic required for the boardroom or the evening gala.",
  },
  {
    id: "3",
    title: "EVENING\nELEGANCE",
    tag: "Clutch",
    description:
      "Statement pieces for high-profile settings. These bags are designed to catch the light and the eye, featuring sleek contours and sophisticated hardware that define the evening's standard.",
  },
  {
    id: "4",
    title: "TRAVEL\nLIFESTYLE",
    tag: "Tote",
    description:
      "Sophisticated design for those on the move. Oversized yet lightweight, our travel collection ensures you carry your world with ease, grace, and unparalleled durability.",
  },
  {
    id: "5",
    title: "URBAN\nADAPT",
    tag: "Modular",
    description:
      "Versatile designs for fast-paced city life. The Urban Adapt series features modular compartments and weather-resistant finishes to keep you organized from your morning commute to late-night events.",
  },
  {
    id: "6",
    title: "MINIMALIST\nSERIES",
    tag: "Modernist",
    description:
      "Stripping back the noise to focus on pure form and premium texture. A series of sleek, monochrome accessories for the true minimalist who values clean lines over excess.",
  },
  {
    id: "7",
    title: "VINTAGE\nREVIVAL",
    tag: "Classic",
    description:
      "Old-world charm meets modern craft. We have reimagined historic silhouettes with contemporary structural integrity, giving you a bag that feels like a precious heirloom with modern utility.",
  },
  {
    id: "8",
    title: "LIMITED\nEDITION",
    tag: "Exclusive",
    description:
      "One-of-a-kind pieces for the bold. Our limited edition releases feature rare leather textures and experimental colors that will never be reproduced once the stock is exhausted.",
  },
];

export default function FeatureCollections() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // 10 Seconds for testing so you can see it change
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % FEATURED_COLLECTIONS.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black w-full min-h-screen flex flex-col">
      {[0, 1].map((blockPos) => {
        const uniqueIndex = (index + blockPos) % FEATURED_COLLECTIONS.length;
        const current = FEATURED_COLLECTIONS[uniqueIndex];
        const isReversed = blockPos % 2 !== 0;

        return (
          <section
            key={`section-${blockPos}`}
            className="py-16 md:py-24 px-6 md:px-16 border-b border-zinc-900 last:border-0"
          >
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32 items-center">
              {/* Image Column */}
              <div
                className={`relative aspect-[4/5] bg-zinc-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden order-first ${isReversed ? "lg:order-last" : "lg:order-first"}`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`img-${uniqueIndex}-${blockPos}`} // KEY MUST CHANGE FOR ANIMATION
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center text-zinc-800 font-black text-xl md:text-2xl px-10 text-center uppercase"
                  >
                    {current.title.replace("\n", " ")}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Text Column */}
              <div
                className={`text-white flex flex-col items-start text-left ${isReversed ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"}`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${uniqueIndex}-${blockPos}`} // KEY MUST CHANGE FOR ANIMATION
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <span className="text-zinc-500 uppercase tracking-[0.4em] text-[10px] mb-4 block font-bold">
                      {current.tag}
                    </span>

                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 md:mb-8 leading-[0.9] whitespace-pre-line">
                      {current.title}
                    </h2>

                    <p
                      className={`max-w-md text-zinc-400 text-[11px] uppercase tracking-[0.2em] mb-10 md:mb-12 leading-relaxed line-clamp-3 ${isReversed ? "lg:ml-auto" : ""}`}
                    >
                      {current.description}
                    </p>

                    <button className="group flex items-center gap-6 text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">
                      <span className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                        →
                      </span>
                      Explore Product
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
