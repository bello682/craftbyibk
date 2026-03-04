"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HANDMADE from "../../public/images/handmade.jpg";
import SIGNATURE from "../../public/images/signature.png";
import EVENING from "../../public/images/evening elegance.png";
import TRAVEL from "../../public/images/travel style green.png";
import URBAN from "../../public/images/urban.png";
import MINIMALIST from "../../public/images/minimalList.png";
import VINTAGE from "../../public/images/vintage.png";
import LIMITED from "../../public/images/limitedEdition.png";

const FEATURED_COLLECTIONS = [
  {
    id: "1",
    img: HANDMADE,
    title: "HANDMADE\nCOLLECTION",
    tag: "Artisanal",
    description:
      "Meticulously designed for everyday luxury. This artisanal piece represents the pinnacle of Craft_ByIbk's dedication to quality, using only the finest ethically sourced leathers and hand-stitched details that ensure longevity.",
  },
  {
    id: "2",
    img: SIGNATURE,
    title: "SIGNATURE\nESSENTIALS",
    tag: "Core",
    description:
      "Timeless silhouettes for the modern professional. Our signature range focuses on functionality without compromising the high-end aesthetic required for the boardroom or the evening gala.",
  },
  {
    id: "3",
    img: EVENING,
    title: "EVENING\nELEGANCE",
    tag: "Clutch",
    description:
      "Statement pieces for high-profile settings. These bags are designed to catch the light and the eye, featuring sleek contours and sophisticated hardware that define the evening's standard.",
  },
  {
    id: "4",
    img: TRAVEL,
    title: "TRAVEL\nLIFESTYLE",
    tag: "Tote",
    description:
      "Sophisticated design for those on the move. Oversized yet lightweight, our travel collection ensures you carry your world with ease, grace, and unparalleled durability.",
  },
  {
    id: "5",
    img: URBAN,
    title: "URBAN\nADAPT",
    tag: "Modular",
    description:
      "Versatile designs for fast-paced city life. The Urban Adapt series features modular compartments and weather-resistant finishes to keep you organized from your morning commute to late-night events.",
  },
  {
    id: "6",
    img: MINIMALIST,
    title: "MINIMALIST\nSERIES",
    tag: "Modernist",
    description:
      "Stripping back the noise to focus on pure form and premium texture. A series of sleek, monochrome accessories for the true minimalist who values clean lines over excess.",
  },
  {
    id: "7",
    img: VINTAGE,
    title: "VINTAGE\nREVIVAL",
    tag: "Classic",
    description:
      "Old-world charm meets modern craft. We have reimagined historic silhouettes with contemporary structural integrity, giving you a bag that feels like a precious heirloom with modern utility.",
  },
  {
    id: "8",
    img: LIMITED,
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
                    <Image
                      src={current.img}
                      alt="Artisanal Tote"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
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

                    {/* <button className="group flex items-center gap-6 text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">
                      <span className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                        →
                      </span>
                      Explore Product
                    </button> */}

                    {/* REPLACING BUTTON WITH DESIGN ANIMATION */}
                    <div
                      className={`flex items-center gap-6 ${isReversed ? "lg:flex-row-reverse" : "flex-row"}`}
                    >
                      {/* Rotating Gear/Seal Animation */}
                      <div className="relative w-14 h-14 flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 border border-dashed border-zinc-700 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                        />
                      </div>

                      {/* Scrolling Status Text */}
                      <div className="overflow-hidden flex flex-col">
                        <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-1">
                          Studio Edition
                        </span>
                        <div className="flex gap-2 items-center">
                          <span className="w-8 h-[1px] bg-zinc-800" />
                          <motion.span
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-zinc-600 text-[8px] uppercase tracking-[0.3em] font-bold"
                          >
                            Authentic Craft 2026
                          </motion.span>
                        </div>
                      </div>
                    </div>
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
