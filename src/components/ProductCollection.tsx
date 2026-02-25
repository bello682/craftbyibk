"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mockProducts } from "@/lib/data";

const categories = [
  "Hoodie",
  "Caps & Bags",
  "Trending",
  "Out Wear",
  "Accessories",
];

export default function ProductCollection() {
  const [activeTab, setActiveTab] = useState("Hoodie");

  const filteredProducts = mockProducts.filter((p) => p.category === activeTab);

  return (
    <section className="px-6 md:px-10 lg:px-16 py-24 bg-white max-w-[1440px] mx-auto">
      {/* Header Row: Title and Description on the same line */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
          Our Collection
        </h2>
        <p className="max-w-xs md:max-w-md text-[10px] md:text-[11px] text-zinc-500 leading-relaxed uppercase tracking-wider text-left md:text-right">
          Step into the world of CraftByIbk, where each collection tells its own
          story. From minimalist essentials to bold statement pieces, our
          current collections are designed to suit every occasion and style.
        </p>
      </div>

      {/* Filter Row: Buttons on their own line */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 ${
              activeTab === cat
                ? "bg-black text-white border-black"
                : "bg-white text-black border-zinc-200 hover:border-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid: Cards taking full widths of their columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key={product.id}
              className="group w-full"
            >
              {/* Card Display */}
              <div className="relative aspect-[3/4] bg-zinc-100 rounded-2xl overflow-hidden mb-4 transition-all duration-500 group-hover:shadow-lg">
                {/* Product Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-300 font-bold uppercase tracking-tighter text-xl px-4 text-center">
                  {product.name}
                </div>

                {/* Hover Interaction */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                  <button className="bg-white text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-sm hover:bg-black hover:text-white transition-colors">
                    Add to Cart
                  </button>
                  <button className="bg-white text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-sm hover:bg-black hover:text-white transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex justify-between items-center">
                <h3 className="text-[11px] font-bold uppercase tracking-tight text-zinc-900 truncate pr-2">
                  {product.name}
                </h3>
                <p className="text-[11px] font-black italic whitespace-nowrap">
                  ${product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
