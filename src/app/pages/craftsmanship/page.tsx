"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scissors, Fingerprint, Award, Layers } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Hand Cutting",
    desc: "Every panel is hand-cut from the center of the hide where the fiber density is highest, ensuring maximum durability.",
  },
  {
    number: "02",
    title: "Saddle Stitching",
    desc: "Using two needles and a single waxed thread, we create a stitch that will never unravel, even if a single loop is broken.",
  },
  {
    number: "03",
    title: "Edge Burnishing",
    desc: "We apply natural beeswax and friction-heat the edges to a glass-like finish, sealing the leather from moisture.",
  },
];

export default function CraftsmanshipPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
        {/* HERO SECTION */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[clamp(50px,12vw,160px)] font-black uppercase tracking-tighter leading-[0.8]"
            >
              100% <br />
              <span className="text-zinc-200">MANUAL.</span>
            </motion.h1>
            <p className="max-w-xs text-zinc-500 text-[10px] uppercase tracking-[0.4em] leading-relaxed mb-4 text-right">
              Obsessively detailed. <br /> Unapologetically slow. <br /> Made in
              Lagos.
            </p>
          </div>

          {/* <div className="relative w-full h-[70vh] bg-zinc-100 rounded-[40px] md:rounded-[80px] overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center text-zinc-300 font-black uppercase tracking-[2em] text-sm italic">
              The Workshop Floor
            </div>
          </div> */}
          <div className="relative w-full h-[70vh] bg-zinc-100 rounded-[40px] md:rounded-[80px] overflow-hidden group">
            {/* Direct Artisan Link - NO Trees, NO Clothes */}
            <Image
              src="https://i.pinimg.com/1200x/7e/1a/fd/7e1afda856d6db2a26bee9e637259881.jpg?auto=compress&cs=tinysrgb&w=1600"
              alt="Artisan leather workshop stitching"
              fill
              unoptimized
              priority
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Dark overlay to make the text pop */}
            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute inset-0 flex items-center justify-center text-zinc-300 font-black uppercase tracking-[2em] text-sm italic z-10 text-center px-4">
              The Workshop Floor
            </div>
          </div>
        </section>

        {/* PHILOSOPHY GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-40">
          <div className="flex flex-col justify-center gap-8">
            <Fingerprint size={48} strokeWidth={1} />
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              One Artisan, <br /> One Piece.
            </h2>
            <p className="text-zinc-600 leading-relaxed uppercase tracking-wide text-sm max-w-md">
              Unlike industrial factories, we do not use assembly lines. Every
              CraftByIbk piece is started and finished by a single artisan. This
              creates a personal connection between the maker and the owner that
              mass production can never replicate.
            </p>
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] bg-zinc-50 rounded-3xl" />
            <div className="aspect-[3/4] bg-zinc-900 rounded-3xl mt-12" />
          </div> */}
          <div className="grid grid-cols-2 gap-4">
            {/* TOP LEFT: THE PROCESS */}
            <div className="relative aspect-[3/4] bg-zinc-50 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://i.pinimg.com/1200x/be/b9/54/beb9546b578da84ee5399d398f459494.jpg?auto=compress&cs=tinysrgb&w=1600"
                alt="Artisan at work"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* BOTTOM RIGHT: THE FINISHED PRODUCT */}
            <div className="relative aspect-[3/4] bg-zinc-900 rounded-3xl mt-12 overflow-hidden shadow-2xl">
              <Image
                src="https://i.pinimg.com/736x/72/23/d3/7223d38f43b397f2097b5991dc2600f8.jpg?auto=compress&cs=tinysrgb&w=1600"
                alt="Handcrafted leather bag"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            {/* BOTTOM RIGHT: THE FINISHED PRODUCT VIDEO */}
            {/* <div className="relative aspect-[3/4] bg-zinc-900 rounded-3xl mt-12 overflow-hidden shadow-2xl">
              <video
                src="/videos/your-bag-video.mp4 Path to your video file in the public folder"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              /> */}

            {/* Optional: Subtle dark overlay to keep it moody */}
            {/* <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div> */}
          </div>
        </section>

        {/* THE PROCESS STEPS */}
        <section className="py-24 border-t border-zinc-100">
          <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-20">
            The Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col gap-8 relative">
                <span className="text-8xl font-black text-zinc-50 tracking-tighter absolute -top-12 -left-4 z-0">
                  {step.number}
                </span>
                <div className="relative z-10 flex flex-col gap-4">
                  <h4 className="text-2xl font-black uppercase tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-widest">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TOOLKIT SECTION */}
        <section className="mt-40 bg-black text-white rounded-[60px] p-12 md:p-24 overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-12">
              The Tools <br /> Of Our Trade.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Scissors />, name: "Precision Shears" },
                { icon: <Layers />, name: "Edge Creaser" },
                { icon: <Award />, name: "Polishing Bone" },
                {
                  icon: <Scissors className="rotate-90" />,
                  name: "Diamond Awl",
                },
              ].map((tool, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-4 text-center"
                >
                  <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400">
                    {tool.icon}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Subtle background text */}
          <div className="absolute -bottom-10 -right-10 text-[20vw] font-black text-zinc-900/30 pointer-events-none uppercase">
            Tools
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
