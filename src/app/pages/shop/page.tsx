"use client";

import React from "react";
import Image from "next/image";
import { ShoppingBag, Filter, Search, Heart } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  {
    id: 1,
    name: "The Artisan Tote",
    price: "$450",
    category: "Signature",
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
  },
  {
    id: 2,
    name: "Lagos Briefcase",
    price: "$680",
    category: "Professional",
    image: "https://images.pexels.com/photos/3760917/pexels-photo-3760917.jpeg",
  },
  {
    id: 3,
    name: "Onyx Folio",
    price: "$220",
    category: "Minimalist",
    image: "https://images.pexels.com/photos/4665903/pexels-photo-4665903.jpeg",
  },
  {
    id: 4,
    name: "Cognac Weekender",
    price: "$850",
    category: "Travel",
    image: "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg",
  },
];

const categories = [
  "All Pieces",
  "Totes",
  "Briefcases",
  "Wallets",
  "Travel",
  "Accessories",
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 md:pt-40">
        {/* SECTION 1: DYNAMIC HEADER (Reflect Style) */}
        <section className="px-6 md:px-20 mb-16 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 border-b border-zinc-100 pb-12">
              <div className="space-y-6 flex-1 min-w-0">
                {/* <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
                  Our <br /> Collection
                </h1> */}
                <h1 className="text-[clamp(60px,12vw,120px)]  leading-[0.85] font-black tracking-tighter uppercase text-black mb-8">
                  Our <br />
                  <span className="text-zinc-200">Collection</span>
                </h1>

                <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs font-bold">
                  CraftByIbk / Objects of Permanence
                </p>
                <p className="max-w-md text-zinc-500 text-xs md:text-sm uppercase tracking-widest leading-relaxed font-medium">
                  Step into the world of CraftByIbk, where each piece tells its
                  own story. Minimalist essentials designed to suit every
                  occasion.
                </p>
              </div>

              {/* SEARCH & FILTER (Reflect-Inspired) */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-full py-4 pl-12 pr-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:ring-1 focus:ring-black transition-all"
                  />
                </div>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors">
                  <Filter size={14} /> Filter
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CATEGORY TABS (Reflect Style) */}
        <section className="px-6 md:px-20 mb-20 overflow-x-auto no-scrollbar">
          <div className="max-w-screen-2xl mx-auto flex gap-3 mb-6">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`whitespace-nowrap px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                  i === 0
                    ? "bg-black text-white border-black"
                    : "bg-white text-zinc-400 border-zinc-200 hover:border-black hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* SECTION 3: PRODUCT GRID (Professional Real-Life Layout) */}
        {/* <section className="px-6 md:px-20 pb-40">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                //    IMAGE BOX
                  <div className="relative aspect-[3/4] bg-zinc-100 rounded-[30px] overflow-hidden mb-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      unoptimized
                    />

                    // TOP ACTIONS
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
                      <button className="p-3 bg-white rounded-full shadow-xl hover:bg-black hover:text-white transition-colors">
                        <Heart size={16} />
                      </button>
                    </div>

                    //  HOVER BUTTONS (Inspired by 'Add to Cart' in image)
                    <div className="absolute inset-x-6 bottom-6 flex flex-col gap-2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                      <button className="w-full bg-white/90 backdrop-blur-md text-black py-4 rounded-2xl font-black uppercase text-[9px] tracking-[0.2em] shadow-xl hover:bg-black hover:text-white transition-colors">
                        Add to Cart
                      </button>
                      <button className="w-full bg-black text-white py-4 rounded-2xl font-black uppercase text-[9px] tracking-[0.2em] shadow-xl hover:bg-zinc-800 transition-colors">
                        Buy Now
                      </button>
                    </div>

                    // OVERLAY 
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
                  </div>

                //   PRODUCT TEXT
                  <div className="flex justify-between items-start px-2">
                    <div className="space-y-1">
                      <h3 className="text-xl font-black uppercase tracking-tighter leading-tight group-hover:underline decoration-2">
                        {product.name}
                      </h3>
                      <p className="text-zinc-400 text-[9px] font-black uppercase tracking-widest">
                        {product.category} Collection
                      </p>
                    </div>
                    <div className="text-lg font-bold text-black font-mono tracking-tighter">
                      {product.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        <section className="px-6 md:px-20 pb-40">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  {/* IMAGE BOX */}
                  <div className="relative aspect-[3/4] bg-zinc-100 rounded-[30px] overflow-hidden mb-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out lg:group-hover:scale-110" // Hover only on large screens
                      unoptimized
                    />

                    {/* TOP ACTIONS - Always visible on mobile, hover on desktop */}
                    <div className="absolute top-6 right-6 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity lg:translate-x-4 lg:group-hover:translate-x-0 duration-300">
                      <button className="p-3 bg-white rounded-full shadow-xl hover:bg-black hover:text-white transition-colors">
                        <Heart size={16} />
                      </button>
                    </div>

                    {/* BUTTONS: Fixed for Mobile/Tablet functionality */}
                    <div
                      className="absolute inset-x-6 bottom-6 flex flex-col gap-2 z-20 
                            /* Mobile/Tablet: Always visible and in position */
                            opacity-100 translate-y-0 
                            /* Desktop: Hide and animate only if device supports hover */
                            lg:opacity-0 lg:translate-y-6 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 
                            transition-all duration-500"
                    >
                      <button className="w-full bg-white/90 backdrop-blur-md text-black py-4 rounded-2xl font-black uppercase text-[9px] tracking-[0.2em] shadow-xl hover:bg-black hover:text-white transition-colors">
                        Add to Cart
                      </button>
                      <button className="w-full bg-black text-white py-4 rounded-2xl font-black uppercase text-[9px] tracking-[0.2em] shadow-xl hover:bg-zinc-800 transition-colors">
                        Buy Now
                      </button>
                    </div>

                    {/* OVERLAY - Subtle tint only on desktop hover */}
                    <div className="absolute inset-0 bg-black/5 lg:bg-black/0 lg:group-hover:bg-black/10 transition-colors pointer-events-none" />
                  </div>

                  {/* PRODUCT TEXT */}
                  <div className="flex justify-between items-start px-2">
                    <div className="space-y-1">
                      <h3 className="text-xl font-black uppercase tracking-tighter leading-tight lg:group-hover:underline decoration-2">
                        {product.name}
                      </h3>
                      <p className="text-zinc-400 text-[9px] font-black uppercase tracking-widest">
                        {product.category} Collection
                      </p>
                    </div>
                    <div className="text-lg font-bold text-black font-mono tracking-tighter">
                      {product.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: NEWSLETTER (Reflect Style Footer Callout) */}
        <section className="px-6 md:px-20 pb-20">
          <div className="max-w-screen-2xl mx-auto bg-zinc-50 rounded-[50px] p-12 md:p-24 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Looking <br className="md:hidden" /> for Bespoke?
            </h2>
            <p className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mb-12 max-w-xl mx-auto">
              If you have a specific vision, our artisans can craft a custom
              piece tailored to your dimensions.
            </p>
            <div className="max-w-md mx-auto relative">
              <button className="w-full bg-white border border-zinc-200 rounded-full py-6 px-8 text-[10px] font-bold uppercase tracking-widest focus:outline-none shadow-sm">
                Enquire Now
                <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors">
                  <ArrowRight size={18} />
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Utility icon for the button
function ArrowRight({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
