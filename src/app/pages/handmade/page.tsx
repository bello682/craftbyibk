"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Hammer, Ruler, Scissors, Sparkles, ArrowDown } from "lucide-react";

const artisans = [
  {
    title: "Precision Cutting",
    description:
      "Every hide is hand-selected and cut with millimetric precision to ensure structural integrity.",
    icon: Scissors,
    image:
      "https://i.pinimg.com/1200x/7e/1a/fd/7e1afda856d6db2a26bee9e637259881.jpg",
  },
  {
    title: "Hand Burnishing",
    description:
      "Our edges are finished using traditional beeswax and friction, creating a glass-like patina.",
    icon: Hammer,
    image:
      "https://i.pinimg.com/1200x/3d/dd/cb/3dddcb24096bf058a3b625c73a63c141.jpg",
  },
  {
    title: "Saddle Stitching",
    description:
      "Two-needle hand stitching that machines simply cannot replicate for durability and soul.",
    icon: Ruler,
    image:
      "https://i.pinimg.com/1200x/a0/9d/91/a09d91e595dff58295a85904da30503e.jpg", // Replace with artisan image
  },
];

export default function HandmadePage() {
  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 opacity-50">
          <Image
            src="https://i.pinimg.com/1200x/7e/1a/fd/7e1afda856d6db2a26bee9e637259881.jpg"
            alt="Artisan Workshop"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-6 block"
          >
            The Soul of Craft_ByIbk
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[15vw] lg:text-[12vw] font-black uppercase leading-[0.8] text-white tracking-tighter"
          >
            HAND <br /> MADE.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
          >
            <span className="text-[9px] font-bold uppercase tracking-widest opacity-50">
              Explore Process
            </span>
            <ArrowDown size={16} className="animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-10">
              OBJECTS OF <br />{" "}
              <span className="text-zinc-300">PERMANENCE.</span>
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed mb-8">
              We don&apos;t believe in mass production. Each piece at
              Craft_ByIbk is a singular journey from raw hide to finished
              masterpiece, taking up to 48 hours of focused manual labor.
            </p>
            <div className="flex gap-4">
              <div className="bg-zinc-100 p-6 rounded-[30px] flex-1">
                <Sparkles size={24} className="mb-4 text-zinc-400" />
                <h4 className="font-black uppercase text-xs tracking-widest mb-2">
                  Lifetime Soul
                </h4>
                <p className="text-[10px] text-zinc-500 uppercase leading-relaxed">
                  Built to be passed down through generations.
                </p>
              </div>
              <div className="bg-black text-white p-6 rounded-[30px] flex-1 shadow-2xl">
                <Hammer size={24} className="mb-4 text-zinc-600" />
                <h4 className="font-black uppercase text-xs tracking-widest mb-2">
                  Master Tools
                </h4>
                <p className="text-[10px] text-zinc-400 uppercase leading-relaxed">
                  Traditional techniques meets modern vision.
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-[60px] overflow-hidden shadow-2xl">
            <Image
              src="https://i.pinimg.com/1200x/3d/dd/cb/3dddcb24096bf058a3b625c73a63c141.jpg"
              alt="Craft Process"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ARTISAN STEPS */}
      <section className="bg-zinc-50 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <h3 className="text-4xl font-black uppercase tracking-tighter">
              The Process
            </h3>
            <span className="text-zinc-400 font-mono text-sm">01 — 03</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artisans.map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group cursor-crosshair"
              >
                <div className="relative h-[450px] rounded-[40px] overflow-hidden mb-8">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <step.icon className="text-white mb-4" size={32} />
                    <h4 className="text-white text-2xl font-black uppercase tracking-tighter">
                      {step.title}
                    </h4>
                  </div>
                </div>
                <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-40 text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
            OWN A PIECE <br /> OF THE{" "}
            <span className="text-zinc-200">ART.</span>
          </h2>
          <button
            onClick={() => (window.location.href = "/pages/shop")}
            className="bg-black text-white px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs hover:scale-105 transition-transform active:scale-95 shadow-2xl"
          >
            Browse The Workshop
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
