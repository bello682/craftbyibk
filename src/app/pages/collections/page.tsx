// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Navbar } from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Image from "next/image";
// import Link from "next/link";
// import { Filter, ChevronRight, LayoutGrid, List } from "lucide-react";

// const collections = [
//   {
//     id: "essential-capsule",
//     name: "Essential Capsule",
//     count: "08 Pieces",
//     image:
//       "https://i.pinimg.com/1200x/3d/dd/cb/3dddcb24096bf058a3b625c73a63c141.jpg",
//     category: "Signature",
//     description:
//       "The foundation of the CraftByIbk wardrobe. Minimalist silhouettes in premium hides.",
//   },
//   {
//     id: "artisan-series",
//     name: "Artisan Series",
//     count: "04 Pieces",
//     image:
//       "https://i.pinimg.com/1200x/7e/1a/fd/7e1afda856d6db2a26bee9e637259881.jpg",
//     category: "Limited",
//     description:
//       "One-of-one creations featuring rare hand-burnishing and exotic textures.",
//   },
//   {
//     id: "the-vault",
//     name: "The Vault",
//     count: "Archive",
//     image:
//       "https://i.pinimg.com/1200x/01/7a/6a/017a6a7c8f87e5b12a8e6e5a5e5e5e5e.jpg",
//     category: "Archived",
//     description:
//       "Retired silhouettes and historical prototypes from the CraftByIbk studio.",
//   },
// ];

// export default function AllCollectionsPage() {
//   const [activeFilter, setActiveFilter] = useState("All");

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />

//       <main className="pt-32 pb-20 px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
//         {/* HEADER */}
//         <header className="mb-20">
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
//             <div className="max-w-2xl">
//               <motion.span
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-4 block"
//               >
//                 Catalog Index
//               </motion.span>
//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]"
//               >
//                 THE <br /> <span className="text-zinc-200">COLLECTIONS.</span>
//               </motion.h1>
//             </div>

//             {/* FILTER BAR */}
//             <div className="flex items-center gap-4 bg-zinc-50 p-2 rounded-full border border-zinc-100">
//               {["All", "Signature", "Limited", "Archived"].map((filter) => (
//                 <button
//                   key={filter}
//                   onClick={() => setActiveFilter(filter)}
//                   className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
//                     activeFilter === filter
//                       ? "bg-black text-white shadow-lg"
//                       : "text-zinc-400 hover:text-black"
//                   }`}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </header>

//         {/* COLLECTIONS GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <AnimatePresence mode="popLayout">
//             {collections
//               .filter(
//                 (c) => activeFilter === "All" || c.category === activeFilter,
//               )
//               .map((collection, idx) => (
//                 <motion.div
//                   key={collection.id}
//                   layout
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.5, delay: idx * 0.1 }}
//                   className="group relative"
//                 >
//                   <Link href={`/collections/${collection.id}`}>
//                     <div className="relative aspect-[4/5] rounded-[50px] overflow-hidden bg-zinc-100 mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-700">
//                       <Image
//                         src={collection.image}
//                         alt={collection.name}
//                         fill
//                         className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
//                       />
//                       {/* OVERLAY ON HOVER */}
//                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
//                         <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
//                           <ChevronRight size={24} className="text-black" />
//                         </div>
//                       </div>

//                       {/* CARD BADGE */}
//                       <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full">
//                         <span className="text-[9px] font-black uppercase tracking-widest text-black">
//                           {collection.count}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="px-4">
//                       <div className="flex items-center gap-3 mb-2">
//                         <div className="h-px w-8 bg-zinc-200" />
//                         <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-400">
//                           {collection.category}
//                         </span>
//                       </div>
//                       <h3 className="text-3xl font-black uppercase tracking-tighter mb-3 group-hover:text-zinc-500 transition-colors">
//                         {collection.name}
//                       </h3>
//                       <p className="text-zinc-500 text-xs leading-relaxed uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
//                         {collection.description}
//                       </p>
//                     </div>
//                   </Link>
//                 </motion.div>
//               ))}
//           </AnimatePresence>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import craft2 from "../../../../public/images/craft2.png";
import craft6 from "../../../../public/images/craft6.png";
import { useGlobalModal } from "@/components/providers/ModalProvider";

const collections = [
  {
    id: "essential-capsule",
    name: "Essential Capsule",
    count: "08 Pieces",
    image: craft6,
    category: "Caps & Bags",
    description:
      "The foundation of the Craft_ByIbk wardrobe. Minimalist silhouettes in premium hides.",
  },
  {
    id: "artisan-series",
    name: "Artisan Series",
    count: "04 Pieces",
    image: craft2,
    category: "Trending",
    description:
      "One-of-one creations featuring rare hand-burnishing and exotic textures.",
  },
  {
    id: "urban-utility",
    name: "Urban Utility",
    count: "06 Pieces",
    image:
      "https://i.pinimg.com/736x/7b/e6/0a/7be60ae66c18fa1250b0cf1e8ffd1449.jpg",
    category: "Hoodie",
    description:
      "Heavyweight fabrics meets artisanal construction. Engineered for the modern landscape.",
  },
  {
    id: "sculpted-outerwear",
    name: "Sculpted Outerwear",
    count: "03 Pieces",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1470&auto=format&fit=crop",
    category: "Out Wear",
    description:
      "Definitive silhouettes designed to provide warmth without compromising form.",
  },
  {
    id: "modern-heritage",
    name: "Modern Heritage",
    count: "12 Pieces",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1374&auto=format&fit=crop",
    category: "Accessories",
    description:
      "Small leather goods and handcrafted essentials for the daily carry.",
  },
];

const filterOptions = [
  "All",
  "Hoodie",
  "Caps & Bags",
  "Trending",
  "Out Wear",
  "Accessories",
];

export default function AllCollectionsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { openComingSoon } = useGlobalModal();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
        {/* HEADER AREA */}
        <header className="mb-16">
          {/* <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-12"
          >
            OUR <br /> <span className="text-zinc-200">COLLECTION.</span>
          </motion.h1> */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            /* FIX: 
     1. Added 'whitespace-nowrap' to the span to keep the dot with the word.
     2. Refined the 'lg' and 'md' sizes to prevent line breaks on tablets.
  */
            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-12"
          >
            OUR <br />
            <span className="text-zinc-200 whitespace-nowrap">COLLECTION.</span>
          </motion.h1>

          {/* DYNAMIC FILTER BAR - Aligned with your design */}
          <div className="flex flex-wrap items-center gap-3 border-b border-zinc-100 pb-8">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                  activeFilter === filter
                    ? "bg-black text-white border-black"
                    : "bg-transparent text-zinc-400 border-zinc-200 hover:border-black hover:text-black"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </header>

        {/* COLLECTIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {collections
              .filter(
                (c) => activeFilter === "All" || c.category === activeFilter,
              )
              .map((collection, idx) => (
                <motion.div
                  key={collection.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group cursor-pointer"
                >
                  <div
                    onClick={() => {
                      // window.location.href = `/collections/${collection.id}`;
                      openComingSoon();
                    }}
                  >
                    <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden bg-zinc-100 mb-6 transition-all duration-700 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
                      <Image
                        src={collection.image}
                        alt={collection.name}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />

                      {/* SUBTLE OVERLAY */}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500" />

                      {/* VIEW BUTTON REVEAL */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="bg-white text-black px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                          Explore <ChevronRight size={14} />
                        </div>
                      </div>

                      {/* COUNT TAG */}
                      <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                        <span className="text-[9px] font-black text-white uppercase tracking-widest">
                          {collection.count}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-start px-2">
                      <div>
                        <h3 className="text-2xl font-black uppercase tracking-tighter leading-none mb-2">
                          {collection.name}
                        </h3>
                        <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em]">
                          {collection.category}
                        </p>
                      </div>
                      <div className="h-10 w-10 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}
