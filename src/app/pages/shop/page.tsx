// "use client";

// import React, { useState, useEffect, useMemo } from "react";
// import Image from "next/image";
// import { Filter, Search, Heart, ArrowRight } from "lucide-react";
// import { Navbar } from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllCategoryData } from "@/lib/store/redux/adminSlice";
// import Link from "next/link";

// export default function ShopPage() {
//   const dispatch = useDispatch();

//   // 1. Filter States
//   const [selectedCategory, setSelectedCategory] = useState("All Pieces");
//   const [searchQuery, setSearchQuery] = useState("");

//   // Get data from Redux Store
//   const { allProducts, loading } = useSelector((state: any) => state.admin);

//   // 1. Merge ALL backend lists into one master array
//   const products = useMemo(() => {
//     if (!allProducts) return [];
//     return [
//       ...(allProducts.collectionsData || []),
//       ...(allProducts.shopData || []),
//       ...(allProducts.otherData || []),
//     ];
//   }, [allProducts]);

//   // 2. Extract unique categories dynamically from the merged products
//   const dynamicCategories = useMemo(() => {
//     const types = products.map((p: any) => p.productType || "Accessories");
//     return ["All Pieces", ...Array.from(new Set(types))];
//   }, [products]);

//   useEffect(() => {
//     dispatch(getAllCategoryData() as any);
//   }, [dispatch]);

//   // 2. Filter Logic (Memoized for performance)
//   const filteredProducts = useMemo(() => {
//     return products.filter((product: any) => {
//       const matchesCategory =
//         selectedCategory === "All Pieces" ||
//         product.productType?.toLowerCase() === selectedCategory.toLowerCase();

//       const matchesSearch =
//         product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         product.productType?.toLowerCase().includes(searchQuery.toLowerCase());

//       return matchesCategory && matchesSearch;
//     });
//   }, [products, selectedCategory, searchQuery]);

//   const handleWhatsAppInquiry = (productName: string) => {
//     const message = encodeURIComponent(
//       `Hello Craft_ByIbk, I am viewing your Collection and I am very interested in the "${productName}". Could you provide more details on availability?`,
//     );
//     window.open(`https://wa.me/2348077276464?text=${message}`, "_blank");
//   };

//   return (
//     <div className="min-h-screen bg-white flex flex-col">
//       <Navbar />

//       <main className="flex-grow pt-32 md:pt-40">
//         {/* SECTION 1: HEADER & SEARCH */}
//         <section className="px-6 md:px-20 mb-16 overflow-hidden">
//           <div className="max-w-screen-2xl mx-auto">
//             <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 border-b border-zinc-100 pb-12">
//               <div className="space-y-6 flex-1 min-w-0">
//                 <h1 className="text-[clamp(60px,12vw,120px)] leading-[0.85] font-black tracking-tighter uppercase text-black mb-8">
//                   Our <br />
//                   <span className="text-zinc-200">Collection</span>
//                 </h1>
//                 <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs font-bold">
//                   Craft_ByIbk / Objects of Permanence
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
//                 <div className="relative w-full sm:w-64">
//                   <Search
//                     className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
//                     size={16}
//                   />
//                   <input
//                     type="text"
//                     placeholder="Search products..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full bg-zinc-50 border border-zinc-100 rounded-full py-4 pl-12 pr-4 text-xs font-bold uppercase tracking-widest focus:outline-none"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* SECTION 2: CATEGORY TABS (Restored for Filtering) */}
//         <section className="px-6 md:px-20 mb-20 overflow-x-auto no-scrollbar">
//           <div className="max-w-screen-2xl mx-auto flex gap-3 mb-6">
//             {dynamicCategories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`whitespace-nowrap px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
//                   selectedCategory === cat
//                     ? "bg-black text-white border-black"
//                     : "bg-white text-zinc-400 border-zinc-200 hover:border-black hover:text-black"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* SECTION 3: PRODUCT GRID */}
//         <section className="px-6 md:px-20 pb-40">
//           <div className="max-w-screen-2xl mx-auto">
//             {loading ? (
//               <div className="h-64 flex items-center justify-center font-black uppercase tracking-[0.5em] text-zinc-300">
//                 Loading Studio...
//               </div>
//             ) : // ) : filteredProducts.length === 0 ? (
//             //   <div className="h-64 flex items-center justify-center font-black uppercase tracking-[0.2em] text-zinc-400">
//             //     No pieces found in this category.
//             //   </div>
//             filteredProducts.length === 0 ? (
//               <div className="h-96 flex flex-col items-center justify-center text-center px-6">
//                 <div className="space-y-4">
//                   <h3 className="font-black uppercase tracking-[0.2em] text-zinc-400 text-sm">
//                     No pieces found
//                   </h3>
//                   <p className="text-black font-black uppercase tracking-tighter text-3xl md:text-5xl max-w-2xl leading-none">
//                     {searchQuery
//                       ? `Nothing matching "${searchQuery}"`
//                       : `No ${selectedCategory === "All Pieces" ? "items" : selectedCategory} currently in stock`}
//                   </p>
//                   <div className="pt-8">
//                     <button
//                       onClick={() => {
//                         setSelectedCategory("All Pieces");
//                         setSearchQuery("");
//                       }}
//                       className="text-[10px] font-black uppercase tracking-[0.3em] border-b-2 border-black pb-2 hover:text-zinc-400 hover:border-zinc-200 transition-all"
//                     >
//                       Reset Studio Filters
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
//                 {filteredProducts.map((product: any) => (
//                   <div key={product._id} className="group relative">
//                     <div className="relative aspect-[3/4] bg-zinc-100 rounded-[30px] overflow-hidden mb-6">
//                       <Image
//                         src={product.frontImageView}
//                         alt={product.name}
//                         fill
//                         className="object-cover transition-transform duration-1000 ease-out lg:group-hover:scale-110"
//                         unoptimized
//                       />

//                       <div className="absolute top-6 right-6 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity lg:translate-x-4 lg:group-hover:translate-x-0 duration-300">
//                         <button className="p-3 bg-white rounded-full shadow-xl hover:bg-black hover:text-white transition-colors">
//                           <Heart size={16} />
//                         </button>
//                       </div>

//                       <div className="absolute inset-x-6 bottom-6 flex flex-col gap-2 z-20 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-6 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500">
//                         <Link
//                           href={`/pages/product/${product._id}`}
//                           className="w-full bg-white/90 backdrop-blur-md text-black py-4 rounded-2xl font-black uppercase text-[9px] tracking-[0.2em] shadow-xl hover:bg-black hover:text-white transition-colors flex items-center justify-center"
//                         >
//                           View Details
//                         </Link>

//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleWhatsAppInquiry(product.name);
//                           }}
//                           className="w-full bg-black text-white py-4 rounded-2xl font-black uppercase text-[9px] tracking-[0.2em] shadow-xl hover:bg-zinc-800 transition-colors"
//                         >
//                           Enquire Now
//                         </button>
//                       </div>
//                       <div className="absolute inset-0 bg-black/5 lg:bg-black/0 lg:group-hover:bg-black/10 transition-colors pointer-events-none" />
//                     </div>

//                     <div className="flex justify-between items-start px-2">
//                       <div className="space-y-1">
//                         <h3 className="text-xl font-black uppercase tracking-tighter leading-tight lg:group-hover:underline decoration-2">
//                           {product.name}
//                         </h3>
//                         <p className="text-zinc-400 text-[9px] font-black uppercase tracking-widest">
//                           {product.productType} / {product.category}
//                         </p>
//                       </div>
//                       <div className="text-lg font-bold text-black font-mono tracking-tighter">
//                         ${product.price}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </section>

//         {/* SECTION 4: BESPOKE SECTION */}
//         <section className="px-6 md:px-20 pb-20">
//           <div className="max-w-screen-2xl mx-auto">
//             <div className="bg-zinc-900 rounded-[50px] p-12 md:p-24 text-white overflow-hidden relative">
//               <div className="relative z-10 flex flex-col items-center">
//                 <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-center">
//                   Bespoke <br /> Craftsmanship
//                 </h2>
//                 <p className="text-zinc-400 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mb-12 max-w-xl text-center">
//                   Can't find your exact fit? Our artisans specialize in custom
//                   commissions tailored to your unique specifications.
//                 </p>

//                 <div className="flex gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar w-full max-w-3xl">
//                   {products.slice(0, 3).map((p: any) => (
//                     <div
//                       key={p._id}
//                       className="min-w-[150px] aspect-square relative rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all"
//                     >
//                       <Image
//                         src={p.frontImageView}
//                         alt={p.name}
//                         fill
//                         className="object-cover"
//                         unoptimized
//                       />
//                     </div>
//                   ))}
//                 </div>

//                 <button
//                   onClick={() =>
//                     handleWhatsAppInquiry("Bespoke Custom Commission")
//                   }
//                   className="group bg-white text-black rounded-full py-6 px-12 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-all flex items-center gap-4"
//                 >
//                   Start a Commission
//                   <ArrowRight size={18} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  Filter,
  Search,
  Heart,
  ArrowRight,
  X,
  ShoppingBag,
  Sparkles,
  ExternalLink, // Added for Ads
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryData } from "@/lib/store/redux/adminSlice";
import Link from "next/link";

// --- NEW: AD COMPONENT (Minimalist & Production Ready) ---
// const ProductionAd = () => {
//   return (
//     <div className="relative aspect-[3/4] bg-zinc-50 rounded-[30px] border border-zinc-100 p-8 flex flex-col justify-between overflow-hidden group/ad hover:bg-zinc-100 transition-colors duration-500">
//       <div className="space-y-4 relative z-10">
//         <span className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-400 bg-white px-3 py-1 rounded-full border border-zinc-100">
//           Sponsored Partner
//         </span>
//         <h4 className="text-2xl font-black uppercase tracking-tighter leading-none text-black">
//           The Art of <br /> Timeless <br /> Design
//         </h4>
//         <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed font-medium">
//           Discover curated essentials that complement the Craft_ByIbk aesthetic.
//         </p>
//       </div>

//       <div className="relative z-10">
//         <button className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest border-b-2 border-black pb-1 group-hover/ad:gap-4 transition-all">
//           Explore Now <ExternalLink size={12} />
//         </button>
//       </div>

//       {/* Subtle Background Pattern */}
//       <div className="absolute -right-4 -bottom-4 opacity-5 group-hover/ad:opacity-10 transition-opacity">
//         <ShoppingBag size={200} strokeWidth={1} />
//       </div>
//     </div>
//   );
// };

// FOR REAL LIFE ADS INTEGRATION:
const ProductionAd = () => {
  useEffect(() => {
    try {
      // We cast window to 'any' so TypeScript doesn't complain
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {},
      );
    } catch (e) {
      console.error("Ad failed to load", e);
    }
  }, []);

  return (
    <div className="relative aspect-[3/4] bg-zinc-50 rounded-[30px] overflow-hidden flex items-center justify-center">
      <p className="absolute top-2 left-4 text-[8px] text-zinc-300 uppercase tracking-widest">
        Advertisement
      </p>

      {/* REAL AD UNIT SLOT */}
      <ins
        className="adsbygoogle"
        style={{
          display: "inline-block",
          width: "100%",
          height: "100%",
          minWidth: "250px",
          minHeight: "250px",
        }}
        data-ad-client="ca-pub-3730534578729256"
        data-ad-slot="8995547678"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default function ShopPage() {
  const dispatch = useDispatch();

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState("All Pieces");
  const [searchQuery, setSearchQuery] = useState("");

  // Sidebar States
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSidebarProduct, setActiveSidebarProduct] = useState<any>(null);

  // Get data from Redux Store
  const { allProducts, loading } = useSelector((state: any) => state.admin);

  // Merge master array
  const products = useMemo(() => {
    if (!allProducts) return [];
    return [
      ...(allProducts.collectionsData || []),
      ...(allProducts.shopData || []),
      ...(allProducts.otherData || []),
    ];
  }, [allProducts]);

  const dynamicCategories = useMemo(() => {
    const types = products.map((p: any) => p.productType || "Accessories");
    return ["All Pieces", ...Array.from(new Set(types))];
  }, [products]);

  const recommendations = useMemo(() => {
    return products
      .filter((p: any) => p._id !== activeSidebarProduct?._id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
  }, [products, activeSidebarProduct]);

  useEffect(() => {
    dispatch(getAllCategoryData() as any);
  }, [dispatch]);

  // Filter Logic
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
    <div className="min-h-screen bg-white flex flex-col relative overflow-x-hidden">
      <Navbar />

      {/* DYNAMIC SIDEBAR */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-[500px] bg-white z-[100] shadow-[-20px_0_80px_rgba(0,0,0,0.15)] transform transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col overflow-y-auto no-scrollbar bg-white">
          <div className="sticky top-0 bg-white/80 backdrop-blur-md z-30 flex justify-between items-center p-8 border-b border-zinc-50">
            <h2 className="font-black uppercase tracking-[0.3em] text-[10px]">
              Studio / Detail View
            </h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-3 hover:bg-black hover:text-white rounded-full transition-all duration-300"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            {activeSidebarProduct ? (
              <>
                <div className="space-y-8">
                  <div className="relative aspect-[4/5] w-full rounded-[40px] overflow-hidden shadow-2xl">
                    <Image
                      src={activeSidebarProduct.frontImageView}
                      alt={activeSidebarProduct.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-1">
                          {activeSidebarProduct.productType}
                        </p>
                        <h3 className="text-4xl font-black uppercase tracking-tighter leading-none">
                          {activeSidebarProduct.name}
                        </h3>
                      </div>
                      <span className="text-2xl font-bold font-mono tracking-tighter">
                        ${activeSidebarProduct.price}
                      </span>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed pb-8 border-b border-zinc-100">
                      This masterwork represents the pinnacle of Craft_ByIbk
                      artistry. Hand-stitched for permanence.
                    </p>
                    <button
                      onClick={() =>
                        handleWhatsAppInquiry(activeSidebarProduct.name)
                      }
                      className="w-full bg-black text-white py-6 rounded-3xl font-black uppercase text-xs tracking-[0.2em] hover:bg-zinc-800 transition-all flex items-center justify-center gap-4 group"
                    >
                      Acquire this Piece{" "}
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-2 transition-transform"
                      />
                    </button>
                  </div>
                </div>

                <div className="space-y-6 pt-8">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-zinc-400" />
                    <h4 className="font-black uppercase tracking-widest text-[10px]">
                      Complete the look
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {recommendations.map((rec: any) => (
                      <div
                        key={rec._id}
                        onClick={() => setActiveSidebarProduct(rec)}
                        className="group flex gap-4 p-4 rounded-[24px] border border-zinc-50 hover:border-zinc-200 hover:bg-zinc-50 transition-all cursor-pointer"
                      >
                        <div className="relative w-20 h-24 rounded-xl overflow-hidden flex-shrink-0">
                          <Image
                            src={rec.frontImageView}
                            alt={rec.name}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h5 className="font-black uppercase text-[11px] tracking-tight group-hover:underline">
                            {rec.name}
                          </h5>
                          <p className="text-zinc-400 text-[9px] uppercase font-bold tracking-widest">
                            {rec.productType}
                          </p>
                          <p className="mt-1 font-bold text-xs">${rec.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="h-[60vh] flex flex-col items-center justify-center text-center opacity-20">
                <ShoppingBag size={60} strokeWidth={1} className="mb-6" />
                <p className="font-black uppercase tracking-[0.3em] text-[10px]">
                  Select a masterpiece
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-[90] transition-opacity duration-500"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <main className="flex-grow pt-32 md:pt-40">
        {/* SECTION 1: HEADER & SEARCH */}
        <section className="px-6 md:px-20 mb-16 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 border-b border-zinc-100 pb-12">
              <div className="space-y-6 flex-1 min-w-0">
                <h1 className="text-[clamp(60px,12vw,120px)] leading-[0.85] font-black tracking-tighter uppercase text-black mb-8">
                  Our <br /> <span className="text-zinc-200">Collection</span>
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

        {/* SECTION 2: CATEGORY TABS */}
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

        {/* SECTION 3: PRODUCT GRID WITH AD INTEGRATION */}
        <section className="px-6 md:px-20 pb-40">
          <div className="max-w-screen-2xl mx-auto">
            {loading ? (
              <div className="h-64 flex items-center justify-center font-black uppercase tracking-[0.5em] text-zinc-300">
                Loading Studio...
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="h-96 flex flex-col items-center justify-center text-center px-6 italic">
                No pieces found.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
                {filteredProducts.map((product: any, index: number) => (
                  <React.Fragment key={product._id}>
                    {/* INJECT AD AFTER EVERY 5 PRODUCTS */}
                    {index > 0 && index % 5 === 0 && <ProductionAd />}

                    <div className="group relative">
                      <div className="relative aspect-[3/4] bg-zinc-100 rounded-[30px] overflow-hidden mb-6">
                        <Image
                          src={product.frontImageView}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-1000 ease-out lg:group-hover:scale-110"
                          unoptimized
                        />
                        <div className="absolute top-6 right-6 z-30">
                          <button
                            onClick={() => {
                              setActiveSidebarProduct(product);
                              setIsSidebarOpen(true);
                            }}
                            className="p-3 bg-white rounded-full shadow-xl hover:bg-black hover:text-white transition-colors"
                          >
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
                      </div>
                      <div className="flex justify-between items-start px-2">
                        <div className="space-y-1">
                          <h3 className="text-xl font-black uppercase tracking-tighter leading-tight lg:group-hover:underline">
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
                  </React.Fragment>
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
                  commissions.
                </p>
                <button
                  onClick={() =>
                    handleWhatsAppInquiry("Bespoke Custom Commission")
                  }
                  className="group bg-white text-black rounded-full py-6 px-12 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-all flex items-center gap-4"
                >
                  Start a Commission <ArrowRight size={18} />
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
