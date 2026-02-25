import React from "react";
import Image from "next/image";
import { ShoppingBag, Filter } from "lucide-react";

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

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-40 px-6 md:px-20">
      {/* SHOP HEADER */}
      <header className="mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-100 pb-12">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              The <br /> Collection
            </h1>
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs font-bold">
              CraftByIbk / Objects of Permanence
            </p>
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 border border-zinc-200 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-50 transition-all">
              <Filter size={14} /> Filter
            </button>
          </div>
        </div>
      </header>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
        {products.map((product) => (
          <div key={product.id} className="group flex flex-col">
            {/* IMAGE CONTAINER */}
            <div className="relative aspect-[3/4] bg-zinc-100 rounded-[40px] overflow-hidden mb-6">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                unoptimized
              />

              {/* HOVER ADD BUTTON */}
              <div className="absolute inset-x-6 bottom-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                <button className="w-full bg-white text-zinc-900 py-5 rounded-3xl font-bold uppercase text-[10px] tracking-widest shadow-2xl flex items-center justify-center gap-2 hover:bg-zinc-900 hover:text-white transition-colors">
                  <ShoppingBag size={14} /> Add to Cart
                </button>
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors pointer-events-none" />
            </div>

            {/* PRODUCT DETAILS */}
            <div className="flex justify-between items-start px-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight">
                  {product.name}
                </h3>
                <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                  {product.category}
                </p>
              </div>
              <div className="text-lg font-medium text-zinc-900 font-mono">
                {product.price}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER CALLOUT */}
      <section className="mt-40 bg-zinc-900 rounded-[60px] p-12 md:p-24 text-center">
        <h2 className="text-zinc-100 text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">
          Looking for Bespoke?
        </h2>
        <p className="text-zinc-400 max-w-md mx-auto mb-12 uppercase text-xs tracking-widest leading-loose">
          If you have a specific vision, our artisans can craft a custom piece
          tailored to your dimensions.
        </p>
        <button className="border border-zinc-700 text-zinc-300 px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-zinc-100 hover:text-zinc-900 transition-all">
          Enquire Now
        </button>
      </section>
    </main>
  );
}
