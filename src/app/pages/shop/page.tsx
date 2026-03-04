"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Filter, Search, Heart, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryData } from "@/lib/store/redux/adminSlice";
import Link from "next/link";

export default function ShopPage() {
  const dispatch = useDispatch();

  // 1. Filter States
  const [selectedCategory, setSelectedCategory] = useState("All Pieces");
  const [searchQuery, setSearchQuery] = useState("");

  // Get data from Redux Store
  const { allProducts, loading } = useSelector((state: any) => state.admin);

  // 1. Merge ALL backend lists into one master array
  const products = useMemo(() => {
    if (!allProducts) return [];
    return [
      ...(allProducts.collectionsData || []),
      ...(allProducts.shopData || []),
      ...(allProducts.otherData || []),
    ];
  }, [allProducts]);

  // 2. Extract unique categories dynamically from the merged products
  const dynamicCategories = useMemo(() => {
    const types = products.map((p: any) => p.productType || "Accessories");
    return ["All Pieces", ...Array.from(new Set(types))];
  }, [products]);

  useEffect(() => {
    dispatch(getAllCategoryData() as any);
  }, [dispatch]);

  // 2. Filter Logic (Memoized for performance)
  const filteredProducts = useMemo(() => {
    return products.filter((product: any) => {
      const matchesCategory =
        selectedCategory === "All Pieces" ||
        product.productType?.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSearch =
        product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.productType?.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  const handleWhatsAppInquiry = (productName: string) => {
    const message = encodeURIComponent(
      `Hello Craft_ByIbk, I am viewing your Collection and I am very interested in the "${productName}". Could you provide more details on availability?`,
    );
    window.open(`https://wa.me/2348077276464?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 md:pt-40">
        {/* SECTION 1: HEADER & SEARCH */}
        <section className="px-6 md:px-20 mb-16 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 border-b border-zinc-100 pb-12">
              <div className="space-y-6 flex-1 min-w-0">
                <h1 className="text-[clamp(60px,12vw,120px)] leading-[0.85] font-black tracking-tighter uppercase text-black mb-8">
                  Our <br />
                  <span className="text-zinc-200">Collection</span>
                </h1>
                <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs font-bold">
                  Craft_ByIbk / Objects of Permanence
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-full py-4 pl-12 pr-4 text-xs font-bold uppercase tracking-widest focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CATEGORY TABS (Restored for Filtering) */}
        <section className="px-6 md:px-20 mb-20 overflow-x-auto no-scrollbar">
          <div className="max-w-screen-2xl mx-auto flex gap-3 mb-6">
            {dynamicCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                  selectedCategory === cat
                    ? "bg-black text-white border-black"
                    : "bg-white text-zinc-400 border-zinc-200 hover:border-black hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* SECTION 3: PRODUCT GRID */}
        <section className="px-6 md:px-20 pb-40">
          <div className="max-w-screen-2xl mx-auto">
            {loading ? (
              <div className="h-64 flex items-center justify-center font-black uppercase tracking-[0.5em] text-zinc-300">
                Loading Studio...
              </div>
            ) : // ) : filteredProducts.length === 0 ? (
            //   <div className="h-64 flex items-center justify-center font-black uppercase tracking-[0.2em] text-zinc-400">
            //     No pieces found in this category.
            //   </div>
            filteredProducts.length === 0 ? (
              <div className="h-96 flex flex-col items-center justify-center text-center px-6">
                <div className="space-y-4">
                  <h3 className="font-black uppercase tracking-[0.2em] text-zinc-400 text-sm">
                    No pieces found
                  </h3>
                  <p className="text-black font-black uppercase tracking-tighter text-3xl md:text-5xl max-w-2xl leading-none">
                    {searchQuery
                      ? `Nothing matching "${searchQuery}"`
                      : `No ${selectedCategory === "All Pieces" ? "items" : selectedCategory} currently in stock`}
                  </p>
                  <div className="pt-8">
                    <button
                      onClick={() => {
                        setSelectedCategory("All Pieces");
                        setSearchQuery("");
                      }}
                      className="text-[10px] font-black uppercase tracking-[0.3em] border-b-2 border-black pb-2 hover:text-zinc-400 hover:border-zinc-200 transition-all"
                    >
                      Reset Studio Filters
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
                {filteredProducts.map((product: any) => (
                  <div key={product._id} className="group relative">
                    <div className="relative aspect-[3/4] bg-zinc-100 rounded-[30px] overflow-hidden mb-6">
                      <Image
                        src={product.frontImageView}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out lg:group-hover:scale-110"
                        unoptimized
                      />

                      <div className="absolute top-6 right-6 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity lg:translate-x-4 lg:group-hover:translate-x-0 duration-300">
                        <button className="p-3 bg-white rounded-full shadow-xl hover:bg-black hover:text-white transition-colors">
                          <Heart size={16} />
                        </button>
                      </div>

                      <div className="absolute inset-x-6 bottom-6 flex flex-col gap-2 z-20 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-6 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500">
                        <Link
                          href={`/pages/product/${product._id}`}
                          className="w-full bg-white/90 backdrop-blur-md text-black py-4 rounded-2xl font-black uppercase text-[9px] tracking-[0.2em] shadow-xl hover:bg-black hover:text-white transition-colors flex items-center justify-center"
                        >
                          View Details
                        </Link>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleWhatsAppInquiry(product.name);
                          }}
                          className="w-full bg-black text-white py-4 rounded-2xl font-black uppercase text-[9px] tracking-[0.2em] shadow-xl hover:bg-zinc-800 transition-colors"
                        >
                          Enquire Now
                        </button>
                      </div>
                      <div className="absolute inset-0 bg-black/5 lg:bg-black/0 lg:group-hover:bg-black/10 transition-colors pointer-events-none" />
                    </div>

                    <div className="flex justify-between items-start px-2">
                      <div className="space-y-1">
                        <h3 className="text-xl font-black uppercase tracking-tighter leading-tight lg:group-hover:underline decoration-2">
                          {product.name}
                        </h3>
                        <p className="text-zinc-400 text-[9px] font-black uppercase tracking-widest">
                          {product.productType} / {product.category}
                        </p>
                      </div>
                      <div className="text-lg font-bold text-black font-mono tracking-tighter">
                        ${product.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* SECTION 4: BESPOKE SECTION */}
        <section className="px-6 md:px-20 pb-20">
          <div className="max-w-screen-2xl mx-auto">
            <div className="bg-zinc-900 rounded-[50px] p-12 md:p-24 text-white overflow-hidden relative">
              <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-center">
                  Bespoke <br /> Craftsmanship
                </h2>
                <p className="text-zinc-400 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mb-12 max-w-xl text-center">
                  Can't find your exact fit? Our artisans specialize in custom
                  commissions tailored to your unique specifications.
                </p>

                <div className="flex gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar w-full max-w-3xl">
                  {products.slice(0, 3).map((p: any) => (
                    <div
                      key={p._id}
                      className="min-w-[150px] aspect-square relative rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all"
                    >
                      <Image
                        src={p.frontImageView}
                        alt={p.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>

                <button
                  onClick={() =>
                    handleWhatsAppInquiry("Bespoke Custom Commission")
                  }
                  className="group bg-white text-black rounded-full py-6 px-12 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-all flex items-center gap-4"
                >
                  Start a Commission
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
