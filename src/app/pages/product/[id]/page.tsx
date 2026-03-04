"use client";

import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategoryData } from "@/lib/store/redux/adminSlice";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Plus,
  Minus,
  MessageCircle,
  ShieldCheck,
  Truck,
  RotateCcw,
  Heart,
} from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("details");
  const [currentUrl, setCurrentUrl] = useState("");
  const [isDescModalOpen, setIsDescModalOpen] = useState(false);

  // Get data from Redux
  const { allProducts } = useSelector((state: any) => state.admin);

  // --- FIX STARTS HERE ---
  // 1. Merge all categories so the 'find' function can see every product
  const allItems = useMemo(() => {
    if (!allProducts) return [];
    return [
      ...(allProducts.collectionsData || []),
      ...(allProducts.shopData || []),
      ...(allProducts.otherData || []),
    ];
  }, [allProducts]);

  // 2. Find the specific product from the merged list
  const product = allItems.find((p: any) => p._id === id);
  // This filters products to only show others from the same category
  // 3. Related products logic (now uses the full list)
  const relatedProducts = useMemo(() => {
    return allItems
      .filter(
        (p: any) => p.productType === product?.productType && p._id !== id,
      )
      .slice(0, 4);
  }, [allItems, product, id]);

  useEffect(() => {
    if (allItems.length === 0) {
      dispatch(getAllCategoryData() as any);
    }
    setCurrentUrl(window.location.href);
  }, [dispatch, allItems.length]);

  const handleWhatsAppOrder = () => {
    const phoneNumber = "2348077276464";
    const message = `Hello Craft_ByIbk, I would like to place an order:

*Product:* ${product?.name}
*Price:* $${product?.price}
*Quantity:* ${quantity}
*Category:* ${product?.productType}

*Product Link:* ${currentUrl}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center font-black uppercase tracking-[0.5em] text-zinc-300">
        Loading Masterpiece...
      </div>
    );

  console.log("Backend Details Check:", product?.details);

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-24 pb-20 px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* LEFT: IMAGE GALLERY */}
          <div className="w-full lg:w-[55%] space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-[4/5] bg-zinc-100 rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl"
            >
              {/* The Main Display Image (defaults to front view) */}
              <Image
                src={product.frontImageView}
                alt={product.name}
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>

            {/* DYNAMIC THUMBNAILS: This captures every view sent from the backend */}
            <div className="grid grid-cols-4 gap-4">
              {[
                product.frontImageView,
                product.backImageView,
                product.leftImageView, // Added specifically
                product.rightImageView, // Added specifically
                product.sideImageView, // Fallback for different naming
              ]
                .filter(Boolean) // This removes any that are empty/null
                .map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-square bg-zinc-50 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-black transition-all group"
                    onClick={() => {
                      /* If you want to swap the big image on click, we'd add a state here */
                    }}
                  >
                    <Image
                      src={img}
                      alt={`View ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* RIGHT: PRODUCT INFO */}
          <div className="w-full lg:w-[45%] flex flex-col pt-4">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-black text-white text-[9px] font-black px-3 py-1 uppercase tracking-widest rounded-full">
                  {product.category || "Collection"}
                </span>
                <span className="text-zinc-400 text-[9px] font-black uppercase tracking-widest">
                  {/* ID: {product._id.slice(-6).toUpperCase()} */}
                  SKU: {product.sku}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-black italic">
                ₦{product.price?.toLocaleString()}
              </p>
            </header>

            <div className="space-y-8">
              {/* DESCRIPTION SECTION with TRUNCATION & MODAL */}
              <div className="space-y-4">
                <div className="relative">
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-md uppercase tracking-wide line-clamp-3">
                    {product.description ||
                      "A heavyweight artisanal masterpiece crafted for those who value permanence and style."}
                  </p>
                  {product.description?.length > 150 && (
                    <button
                      onClick={() => setIsDescModalOpen(true)}
                      className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] border-b border-black pb-0.5 hover:text-zinc-400 hover:border-zinc-400 transition-all"
                    >
                      Read Full Archive +
                    </button>
                  )}
                </div>

                {/* FULL DESCRIPTION MODAL */}
                <AnimatePresence>
                  {isDescModalOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-[100] flex items-center justify-center px-6"
                    >
                      {/* Backdrop */}
                      <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                        onClick={() => setIsDescModalOpen(false)}
                      />

                      {/* Modal Content */}
                      <motion.div
                        initial={{ y: 50, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 50, opacity: 0, scale: 0.95 }}
                        className="relative bg-white w-full max-w-2xl rounded-[40px] p-8 md:p-12 overflow-hidden max-h-[80vh] flex flex-col"
                      >
                        <div className="flex justify-between items-center mb-8">
                          <h3 className="text-2xl font-black uppercase tracking-tighter">
                            Product Archive
                          </h3>
                          <button
                            onClick={() => setIsDescModalOpen(false)}
                            className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                          >
                            <Plus className="rotate-45" size={20} />
                          </button>
                        </div>

                        <div className="overflow-y-auto pr-4 custom-scrollbar">
                          {/* Primary Highlights */}
                          <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="border-l-2 border-black pl-4">
                              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                                Material
                              </p>
                              <p className="text-sm font-bold uppercase tracking-tighter">
                                Heavyweight Premium Cotton
                              </p>
                            </div>
                            <div className="border-l-2 border-black pl-4">
                              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                                Build
                              </p>
                              <p className="text-sm font-bold uppercase tracking-tighter">
                                Artisanal Hand-Finish
                              </p>
                            </div>
                          </div>

                          {/* Main Text Body */}
                          <div className="space-y-6">
                            <p className="text-zinc-600 text-sm md:text-base leading-relaxed uppercase tracking-wider whitespace-pre-line border-t border-zinc-100 pt-6">
                              <span className="text-black font-black text-lg block mb-2">
                                The Narrative —
                              </span>
                              {product.description ||
                                "No archival data available for this specific piece."}
                            </p>

                            {/* Feature List */}
                            <div className="bg-zinc-50 p-6 rounded-2xl">
                              <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-black">
                                Technical Specifications
                              </p>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                                {[
                                  "Reinforced Stitching",
                                  "Oversized Luxury Fit",
                                  "Breathable High-Density Fabric",
                                  "Pre-shrunk for Permanence",
                                  "Signature Craft_ByIbk Branding",
                                ].map((spec, i) => (
                                  <li
                                    key={i}
                                    className="flex items-center gap-2 text-[9px] font-bold text-zinc-500 uppercase tracking-widest"
                                  >
                                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                                    {spec}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-zinc-100">
                          <p className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.3em]">
                            Craft_ByIbk / {product.sku} / {product.productType}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* QUANTITY & PLACE ORDER */}
              <div className="flex flex-col gap-4 py-8 border-y border-zinc-100">
                <div className="flex items-center gap-6">
                  <div className="flex items-center border border-zinc-200 rounded-full px-4 py-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="hover:text-zinc-400"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center font-bold text-sm">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="hover:text-zinc-400"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    onClick={handleWhatsAppOrder}
                    className="flex-1 bg-black text-white py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all active:scale-95"
                  >
                    <MessageCircle size={18} fill="white" />
                    Place Your Order Now
                  </button>
                </div>
              </div>

              {/* TABS */}
              <div className="space-y-6">
                <div className="flex gap-8 border-b border-zinc-100">
                  {["details", "shipping"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all relative ${
                        activeTab === tab ? "text-black" : "text-zinc-400"
                      }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <motion.div
                          layoutId="tab"
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-black"
                        />
                      )}
                    </button>
                  ))}
                </div>

                <div className="min-h-[100px]">
                  {activeTab === "details" ? (
                    <ul className="space-y-3">
                      {[
                        "Premium Quality",
                        product.productType,
                        "Artisanal Finish",
                        "Made in Lagos",
                        // Check if details exist and have items, otherwise provide high-end fallbacks
                        ...(Array.isArray(product.details) &&
                        product.details.length > 0
                          ? product.details
                          : ["Limited Edition", "Signature Series"]),
                      ]
                        .filter(Boolean)
                        .map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-[11px] font-bold text-zinc-600 uppercase tracking-wider"
                          >
                            <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                            <span className="leading-tight">{detail}</span>
                          </li>
                        ))}
                    </ul>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Truck size={18} />
                        <div>
                          <p className="text-[11px] font-bold uppercase">
                            Global Delivery
                          </p>
                          <p className="text-[10px] text-zinc-500 uppercase">
                            3-5 Business Days Worldwide
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-zinc-50 p-6 rounded-3xl flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <ShieldCheck size={20} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                  Authentic Artisanal <br /> Craftsmanship Guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED COLLECTIONS SECTION */}
        <div className="mt-40">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                You may also like
              </p>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                Related <br />
                <span className="text-zinc-200">Collection</span>
              </h2>
            </div>
            <Link
              href="/pages/shop"
              className="text-[10px] font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-all"
            >
              View All
            </Link>
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allItems
              .filter((p: any) => p._id !== id)
              .slice(0, 4)
              .map((item: any) => (
                <Link
                  href={`/pages/product/${item._id}`}
                  key={item._id}
                  className="group"
                >
                  <div className="relative aspect-[3/4] bg-zinc-100 rounded-[30px] overflow-hidden mb-6">
                    <Image
                      src={item.frontImageView}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      unoptimized
                    />
                  </div>
                  <div className="flex justify-between px-2">
                    <h3 className="text-sm font-black uppercase tracking-tighter">
                      {item.name}
                    </h3>
                    <p className="text-sm font-bold">${item.price}</p>
                  </div>
                </Link>
              ))}
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.length > 0
              ? relatedProducts.map((item: any) => (
                  <Link
                    href={`/pages/product/${item._id}`}
                    key={item._id}
                    className="group"
                  >
                    <div className="relative aspect-[3/4] bg-zinc-100 rounded-[30px] overflow-hidden mb-6">
                      <Image
                        src={item.frontImageView}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        unoptimized
                      />
                    </div>
                    <div className="flex justify-between px-2">
                      <h3 className="text-sm font-black uppercase tracking-tighter">
                        {item.name}
                      </h3>
                      <p className="text-sm font-bold">${item.price}</p>
                    </div>
                  </Link>
                ))
              : // Fallback if no related items exist in that category
                allItems
                  .filter((p: any) => p._id !== id)
                  .slice(0, 4)
                  .map((item: any) => (
                    <Link
                      href={`/pages/product/${item._id}`}
                      key={item._id}
                      className="group"
                    >
                      <div className="relative aspect-[3/4] bg-zinc-100 rounded-[30px] overflow-hidden mb-6">
                        <Image
                          src={item.frontImageView}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          unoptimized
                        />
                      </div>
                      <div className="flex justify-between px-2">
                        <h3 className="text-sm font-black uppercase tracking-tighter">
                          {item.name}
                        </h3>
                        <p className="text-sm font-bold">${item.price}</p>
                      </div>
                    </Link>
                  ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
