"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Hammer, ShieldCheck, Zap, Globe } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: <Hammer className="text-black" size={24} />,
    title: "Hand-Stitched",
    desc: "Every seam is bonded by hand, ensuring a longevity that machines simply cannot replicate.",
  },
  {
    icon: <ShieldCheck className="text-black" size={24} />,
    title: "Premium Hide",
    desc: "We source only the finest full-grain leathers that age beautifully, developing a unique patina.",
  },
  {
    icon: <Globe className="text-black" size={24} />,
    title: "Sustainably Minded",
    desc: "Our process minimizes waste by utilizing every inch of the hide for small leather goods.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
        {/* HERO SECTION */}
        <section className="mb-32">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(50px,15vw,180px)] font-black uppercase tracking-tighter leading-[0.8] mb-12"
          >
            THE ART OF <br />
            <span className="text-zinc-200">PATIENCE.</span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-xl"
            >
              Craft_ByIbk was born out of a rebellion against the "fast-fashion"
              cycle. We believe a bag shouldn't just carry your essentials—it
              should carry the legacy of the hands that made it.
            </motion.p>
            <div className="flex gap-10 border-t border-zinc-200 pt-8">
              <div>
                <p className="text-4xl font-black">2021</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400">
                  Established
                </p>
              </div>
              <div>
                <p className="text-4xl font-black">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400">
                  Handmade
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE COMPOSITION */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          <div className="md:col-span-2 h-[400px] md:h-[600px] bg-zinc-100 rounded-3xl overflow-hidden relative group">
            {/* <div className="absolute inset-0 flex items-center justify-center text-zinc-300 font-bold uppercase tracking-[2em] text-sm">
              Workshop View
            </div> */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              {/* Optimized URL: Lower weight (q=60) and smaller width (w=1000) to prevent timeouts */}
              <Image
                src="https://images.unsplash.com/photo-1590739225287-bd31519780c3?q=60&w=1000&auto=format&fit=crop"
                alt="Workshop Background"
                fill
                sizes="33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Dark Tint Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Your Text */}
              <div className="relative z-10 text-zinc-300 font-bold uppercase tracking-[2em] text-sm ">
                Workshop View
              </div>
            </div>
            {/* Replace with <Image /> */}
          </div>
          <div className="h-[400px] md:h-[600px] bg-black rounded-3xl flex flex-col  items-center justify-end  p-10 text-white relative">
            <h3 className="text-2xl font-black uppercase mb-4 leading-tight">
              Authenticity in every stitch.
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We don't use assembly lines. One craftsman, one hide, one
              masterpiece.
            </p>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-20 border-t border-zinc-100">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-16 text-center lg:text-left">
            Our Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center">
                  {v.icon}
                </div>
                <h4 className="text-xl font-black uppercase tracking-tighter">
                  {v.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-wide">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="relative mt-32 overflow-hidden rounded-[50px] p-12 md:p-24 text-center min-h-[500px] flex items-center justify-center">
          {/* Verified Pexels link: Leather bag artisan workshop */}
          <Image
            src="https://images.pexels.com/photos/6069555/pexels-photo-6069555.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Handcrafted Leather Bag Workshop"
            fill
            unoptimized
            priority
            className="object-cover"
          />

          {/* Light overlay to keep the black text sharp */}
          <div className="absolute inset-0 bg-white/70" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-black leading-[0.9]">
              Own a piece of <br /> craftsmanship.
            </h2>
            <button
              onClick={() => (window.location.href = "/pages/shop")}
              className="bg-black text-white px-12 py-5 text-xs font-bold uppercase rounded-full hover:scale-105 transition-transform cursor-pointer"
            >
              View Collections
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
