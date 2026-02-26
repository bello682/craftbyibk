"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Timer, Zap, Lock, ArrowRight } from "lucide-react";
import { useGlobalModal } from "@/components/providers/ModalProvider";
import Image from "next/image";

const limitedDrops = [
  {
    id: "ltd-01",
    name: "Obsidian Midnight Tote",
    edition: "12 Pieces Total",
    price: 850,
    image:
      "https://i.pinimg.com/736x/40/87/57/40875738e51be4bb9faf22dd89937845.jpg?auto=compress&cs=tinysrgb&w=1600", // Artisan stitching close-up
    status: "Available",
    description:
      "Hand-burnished with a unique indigo dye technique, resulting in a deep, cosmic black patina.",
    serial: "04/12",
  },
  {
    id: "ltd-02",
    name: "The Raw Heritage Brief",
    edition: "05 Pieces Total",
    price: 1200,
    image:
      "https://i.pinimg.com/1200x/c6/c9/0d/c6c90d1b88cc7e870e09f8c6dd72fc6d.jpg?auto=compress&cs=tinysrgb&w=1600", // Ultra-thick heritage hide
    status: "Sold Out",
    description:
      "Sourced from a singular, ultra-thick heritage hide. No two pieces share the same grain pattern.",
    serial: "05/05",
  },
];

const currentYear = new Date().getFullYear();

export default function LimitedEditionPage() {
  const { openComingSoon } = useGlobalModal();
  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="bg-[#0A0A0A] text-white">
        <main className="pt-32 pb-20 px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
          {/* EXCLUSIVE HEADER */}
          <section className="mb-24 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute -top-10 left-0 text-zinc-800 text-[20vw] font-black leading-none select-none -z-10"
            >
              RARE
            </motion.div>

            <div className="relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[clamp(40px,10vw,120px)] font-black uppercase tracking-tighter leading-[0.8] mb-8"
              >
                LIMITED <br />
                <span className="text-zinc-700">EDITIONS.</span>
              </motion.h1>
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full">
                  <Timer size={14} className="text-orange-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Next Drop: March {currentYear}
                  </span>
                </div>
                <p className="max-w-md text-zinc-500 text-xs uppercase tracking-widest leading-relaxed">
                  Experimental silhouettes and rare hides. Once these pieces are
                  gone, the patterns are retired forever.
                </p>
              </div>
            </div>
          </section>

          {/* DROP LIST */}
          <div className="space-y-32">
            {limitedDrops.map((product, i) => (
              <motion.section
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* IMAGE HOVER EFFECT */}
                <div className="lg:col-span-7 group relative cursor-crosshair">
                  <div className="aspect-[16/10] bg-zinc-900 rounded-[40px] overflow-hidden relative">
                    {/* ADDED: Next.js Image Component */}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority
                    />

                    {/* Keeping your exact text overlay */}
                    <div className="absolute inset-0 flex items-center justify-center text-white font-black uppercase text-4xl tracking-widest bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      {product.name}
                    </div>

                    {product.status === "Sold Out" && (
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                        <div className="border-2 border-white/20 px-10 py-4 rounded-full flex items-center gap-3">
                          <Lock size={18} />
                          <span className="font-black uppercase tracking-[0.3em] text-sm">
                            Vaulted
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Serial Tag - Exactly as you designed it */}
                  <div className="absolute top-6 left-6 bg-white text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {product.serial}
                  </div>
                </div>

                {/* DETAILS */}
                <div className="lg:col-span-5 space-y-8">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-4 block">
                      {product.edition}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                      {product.name}
                    </h2>
                    <p className="text-2xl font-black italic text-zinc-300">
                      ${product.price}
                    </p>
                  </div>

                  <p className="text-zinc-500 text-sm uppercase tracking-wide leading-relaxed">
                    {product.description}
                  </p>

                  {product.status === "Available" ? (
                    <Link
                      // href={`/product/${product.id}`}
                      href="#"
                      onClick={openComingSoon}
                      className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-zinc-200 transition-all group"
                    >
                      Acquire Piece
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-2 transition-transform"
                      />
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center gap-4 border border-zinc-800 text-zinc-700 px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs cursor-not-allowed"
                    >
                      Collection Exhausted
                    </button>
                  )}
                </div>
              </motion.section>
            ))}
          </div>

          {/* RESERVATION CTA */}
          <section className="mt-40 border-t border-zinc-900 pt-24 text-center">
            <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-8">
              NEVER MISS <br /> A RELEASE.
            </h3>
            <p className="text-zinc-500 uppercase tracking-widest text-[10px] mb-12">
              Limited Edition drops sell out in minutes. Get SMS alerts.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="text"
                placeholder="PHONE NUMBER"
                className="bg-zinc-900 border-none rounded-full px-8 py-4 flex-1 text-xs font-bold uppercase tracking-widest outline-none focus:ring-1 ring-white"
              />
              <button
                onClick={openComingSoon}
                className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
              >
                <Zap size={20} fill="black" />
              </button>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
