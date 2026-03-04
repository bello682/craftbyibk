"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryData } from "@/lib/store/redux/adminSlice";
import Image from "next/image";
import Link from "next/link";

export default function ProductCollection() {
  const dispatch = useDispatch();

  // 1. Get the raw object from Redux
  const { allProducts, loading } = useSelector((state: any) => state.admin);

  // 2. Combine all arrays into one master list
  const masterProducts = useMemo(() => {
    if (!allProducts) return [];
    return [
      ...(allProducts.collectionsData || []),
      ...(allProducts.shopData || []),
      ...(allProducts.otherData || []),
    ];
  }, [allProducts]);

  // 3. Generate dynamic categories from the data
  const dynamicCategories = useMemo(() => {
    // Extract 'productType' (or 'category') from every product
    const types = masterProducts.map((p: any) => p.productType || "General");
    // Remove duplicates using Set and add 'All' at the beginning
    return ["All", ...Array.from(new Set(types))];
  }, [masterProducts]);

  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    dispatch(getAllCategoryData() as any);
  }, [dispatch]);

  // 4. Filter and Shuffle for the display (Limit to 8)
  const displayProducts = useMemo(() => {
    const filtered =
      activeTab === "All"
        ? masterProducts
        : masterProducts.filter((p: any) => p.productType === activeTab);

    return [...filtered].sort(() => 0.5 - Math.random()).slice(0, 8);
  }, [masterProducts, activeTab]);

  return (
    <section className="px-6 md:px-10 lg:px-16 py-24 bg-white max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
          Our Collection
        </h2>
        <p className="max-w-xs md:max-w-md text-[10px] md:text-[11px] text-zinc-500 leading-relaxed uppercase tracking-wider text-left md:text-right">
          Dynamic essentials sourced directly from the studio. Use the filters
          below to explore the {masterProducts.length} pieces currently in
          rotation.
        </p>
      </div>

      {/* DYNAMIC CATEGORY TABS */}
      <div className="flex flex-wrap gap-3 mb-12">
        {dynamicCategories.map((cat: string) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest border transition-all duration-300 rounded-full ${
              activeTab === cat
                ? "bg-black text-white border-black"
                : "bg-white text-zinc-400 border-zinc-100 hover:border-black hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className="min-h-[400px]">
        {loading ? (
          <div className="h-64 flex items-center justify-center font-black uppercase tracking-[0.5em] text-zinc-200">
            Syncing Studio...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
            <AnimatePresence mode="popLayout">
              {displayProducts.map((product: any) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={product._id}
                  className="group"
                >
                  <Link href={`/pages/product/${product._id}`}>
                    <div className="relative aspect-[3/4] bg-zinc-50 rounded-[30px] overflow-hidden mb-6">
                      <Image
                        src={product.frontImageView}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors" />
                    </div>
                  </Link>

                  <div className="flex justify-between items-start px-2">
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-tighter line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest">
                        {product.productType}
                      </p>
                    </div>
                    <span className="font-mono font-bold text-sm">
                      ₦{product.price?.toLocaleString()}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      <div className="mt-20 flex justify-center">
        <Link
          href="/pages/shop"
          className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] bg-zinc-50 px-10 py-5 rounded-full hover:bg-black hover:text-white transition-all"
        >
          {/* Explore All {masterProducts.length} Objects */}
          View Full Collection
        </Link>
      </div>

      {/* View All CTA */}
      {/* <div className="mt-20 flex justify-center">
        <Link
          href="/pages/shop"
          className="text-[10px] font-black uppercase tracking-[0.4em] border-b-2 border-black pb-2 hover:text-zinc-400 hover:border-zinc-200 transition-all"
        >
          View Full Collection
        </Link>
      </div> */}
    </section>
  );
}
