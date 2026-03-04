"use client";

import { useState } from "react"; // Added for Modal state
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Leaf,
  Recycle,
  Infinity,
  Droplets,
  X,
  Globe2,
  Heart,
} from "lucide-react";
import Image from "next/image";

const pillars = [
  {
    icon: <Leaf size={24} />,
    title: "Vegetable Tanned",
    desc: "We prioritize leathers treated with natural tannins found in bark and leaves, eliminating harsh chromium chemicals.",
  },
  {
    icon: <Infinity size={24} />,
    title: "Built for Decades",
    desc: "The ultimate form of sustainability is a product that never needs to be replaced. Our bags are engineered for a lifetime.",
  },
  {
    icon: <Recycle size={24} />,
    title: "Zero Waste Initiative",
    desc: "Smaller leather off-cuts are repurposed into cardholders and key loops, ensuring 98% material utilization.",
  },
];

const currentYear = new Date().getFullYear();

export default function SustainabilityPage() {
  const [showReport, setShowReport] = useState(false); // Modal Toggle State

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
        {/* HERO SECTION */}
        <section className="mb-32">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(50px,12vw,160px)] font-black uppercase tracking-tighter leading-[0.8] mb-12"
          >
            ETHICAL <br />
            <span className="text-zinc-200">BY DESIGN.</span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-xl uppercase tracking-tight">
              At Craft_ByIbk, we don't believe in "Eco-Collections." We believe
              that sustainability should be the baseline for every single stitch
              we make. Luxury shouldn't come at the cost of the future.
            </p>
            <div className="flex items-center justify-start lg:justify-end">
              <div className="w-32 h-32 rounded-full border border-black flex items-center justify-center animate-spin-slow">
                <span className="text-[10px] font-bold text-center uppercase tracking-widest leading-tight">
                  Earth First <br /> • <br /> Lagos Made
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* MATERIAL FOCUS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          {/* <div className="relative aspect-square md:aspect-auto md:h-[700px] bg-zinc-100 rounded-[40px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-zinc-300 font-black uppercase tracking-[1em] text-xs transform -rotate-90">
              Raw Materials
            </div>
          </div> */}
          <div className="relative aspect-square md:aspect-auto md:h-[700px] bg-zinc-100 rounded-[40px] overflow-hidden group">
            {/* Verified: Natural rolls of high-quality leather */}
            <Image
              src="https://i.pinimg.com/736x/bf/8b/19/bf8b1953b933f18d3ea07bb5f81154fb.jpg?auto=compress&cs=tinysrgb&w=1200"
              alt="Natural leather textures and hides"
              fill
              unoptimized
              priority
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Subtle overlay to ensure text is legible regardless of image brightness */}
            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 flex items-center justify-center text-white font-black uppercase tracking-[1em] text-xs transform -rotate-90 z-10 pointer-events-none">
              Raw Materials
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-20 bg-[#0F0F0F] text-white rounded-[40px]">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">
              The Lifespan <br /> of Leather.
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
              Unlike synthetic "vegan" leathers—which are often just plastics
              that degrade in years—real, high-quality leather is a byproduct of
              the food industry that lasts for generations. When treated
              correctly, it is one of the most sustainable materials on Earth.
            </p>
            <ul className="space-y-4">
              {["Non-Toxic Dyes", "Local Sourcing", "Biodegradable Fibers"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest"
                  >
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </section>

        {/* THREE PILLARS */}
        <section className="py-24 border-t border-zinc-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tighter">
                  {pillar.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-wider">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* LOCAL IMPACT */}
        <section className="mt-32 text-center max-w-4xl mx-auto">
          <h2 className="text-10px font-black uppercase tracking-[0.5em] text-zinc-400 mb-8">
            Social Responsibility
          </h2>
          <p className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-tight mb-12">
            By keeping our production 100% local to Lagos, we reduce our carbon
            shipping footprint by 60% compared to international brands.
          </p>
          <div
            onClick={() => setShowReport(true)}
            className="inline-block border-b-2 border-black pb-2 text-xs font-black uppercase tracking-widest cursor-pointer hover:text-zinc-500 hover:border-zinc-500 transition-all"
          >
            Read our {currentYear} Impact Report
          </div>
        </section>
      </main>

      {/* IMPACT REPORT MODAL */}
      <AnimatePresence>
        {showReport && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowReport(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[40px] overflow-y-auto z-[210] p-8 md:p-16 shadow-2xl"
            >
              <button
                onClick={() => setShowReport(false)}
                className="absolute top-8 right-8 p-2 hover:bg-zinc-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              <div className="max-w-2xl">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">
                  Annual Audit
                </span>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mt-4 mb-12">
                  {currentYear} <br />{" "}
                  <span className="text-zinc-200">Impact.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Globe2 size={18} />
                      <h4 className="text-sm font-black uppercase tracking-widest">
                        Environment
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-500 uppercase leading-relaxed font-bold">
                      Zero plastic packaging. 85% of hides sourced within 200km
                      of the workshop. Vegetable tanning usage increased by 40%
                      this year.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Heart size={18} />
                      <h4 className="text-sm font-black uppercase tracking-widest">
                        Community
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-500 uppercase leading-relaxed font-bold">
                      12 new apprentices trained. 100% living wage guarantee.
                      Supporting local tanneries in the Lagos area.
                    </p>
                  </div>
                </div>

                <div className="space-y-12 mb-16">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        Material Waste Reduction
                      </span>
                      <span className="text-2xl font-black">94%</span>
                    </div>
                    <div className="w-full h-1 bg-zinc-100 overflow-hidden rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "94%" }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="h-full bg-black"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100">
                  <p className="text-lg font-bold italic leading-tight">
                    "We don't just build bags; we build legacies. If the
                    material is natural and the stitch is true, time is its only
                    friend."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
