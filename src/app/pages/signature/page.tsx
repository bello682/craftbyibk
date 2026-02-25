// "use client";

// import { motion } from "framer-motion";
// import { Navbar } from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Link from "next/link";
// import { ArrowUpRight, Star, Anchor } from "lucide-react";

// const signatureProducts = [
//   {
//     id: "sig-01",
//     name: "The Ibk Aviator",
//     subtitle: "The Founding Silhouette",
//     price: 450,
//     imageLabel: "Aviator",
//     stats: ["12 Hours of Stitching", "Full-Grain Calf", "Hand-Painted Edges"],
//   },
//   {
//     id: "sig-02",
//     name: "Legacy Tote",
//     subtitle: "Architectural Utility",
//     price: 520,
//     imageLabel: "Tote",
//     stats: ["Reinforced Base", "Solid Brass Hardware", "Lifetime Warranty"],
//   },
//   {
//     id: "sig-03",
//     name: "The Lagos Clutch",
//     subtitle: "Evening Minimalism",
//     price: 280,
//     imageLabel: "Clutch",
//     stats: ["Magnetic Closure", "Silk-lined Interior", "Monogram Ready"],
//   },
// ];

// export default function SignatureCollection() {
//   return (
//     <div className="min-h-screen bg-white text-black">
//       <Navbar />

//       <main className="pt-32 pb-20 px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
//         {/* SECTION HEADER */}
//         <header className="mb-32">
//           <div className="flex flex-col md:flex-row justify-between items-end gap-12">
//             <div className="max-w-4xl">
//               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 block mb-6">
//                 Established 2024
//               </span>
//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-[clamp(45px,11vw,130px)] font-black uppercase tracking-tighter leading-[0.85]"
//               >
//                 SIGNATURE <br />
//                 <span className="text-zinc-200">PIECES.</span>
//               </motion.h1>
//             </div>
//             <div className="flex flex-col gap-4 text-right">
//               <Anchor className="ml-auto text-zinc-300" size={32} />
//               <p className="max-w-[200px] text-zinc-500 text-[10px] uppercase tracking-widest leading-relaxed">
//                 The foundational designs that carry our name and our promise of
//                 longevity.
//               </p>
//             </div>
//           </div>
//         </header>

//         {/* PRODUCTS GRID */}
//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
//           {signatureProducts.map((product, i) => (
//             <Link
//               href={`/product/${product.id}`}
//               key={product.id}
//               className="group"
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 viewport={{ once: true }}
//                 className="space-y-8"
//               >
//                 {/* Image Container */}
//                 <div className="relative aspect-[3/4] bg-zinc-50 rounded-[40px] overflow-hidden">
//                   <div className="absolute inset-0 flex items-center justify-center text-zinc-200 font-black uppercase text-2xl tracking-[0.5em] group-hover:scale-110 transition-transform duration-700">
//                     {product.imageLabel}
//                   </div>
//                   {/* Star Icon for Signature status */}
//                   <div className="absolute top-8 right-8 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
//                     <Star size={14} className="fill-black" />
//                   </div>
//                 </div>

//                 {/* Product Info */}
//                 <div className="px-2">
//                   <div className="flex justify-between items-start mb-4">
//                     <div>
//                       <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-zinc-500 transition-colors">
//                         {product.name}
//                       </h3>
//                       <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
//                         {product.subtitle}
//                       </p>
//                     </div>
//                     <span className="text-xl font-black italic">
//                       ${product.price}
//                     </span>
//                   </div>

//                   {/* Technical Specs - "The Robust Detail" */}
//                   <div className="pt-6 border-t border-zinc-100 flex flex-wrap gap-x-6 gap-y-2">
//                     {product.stats.map((stat, idx) => (
//                       <span
//                         key={idx}
//                         className="text-[9px] font-black uppercase tracking-tighter text-zinc-500 flex items-center gap-1"
//                       >
//                         <div className="w-1 h-1 bg-zinc-200 rounded-full" />
//                         {stat}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </Link>
//           ))}
//         </section>

//         {/* HERITAGE BLOCK */}
//         <section className="mt-40 bg-zinc-50 rounded-[60px] p-12 md:p-24 flex flex-col items-center text-center">
//           <div className="w-px h-24 bg-zinc-200 mb-12" />
//           <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter max-w-2xl leading-none mb-8">
//             DESIGNED TO OUTLIVE <br /> THE TREND.
//           </h2>
//           <p className="max-w-lg text-zinc-500 text-sm uppercase tracking-widest leading-relaxed mb-12">
//             Our Signature collection ignores the seasonal calendar. These pieces
//             are refined over years, not months, ensuring they remain relevant
//             for a lifetime.
//           </p>
//           <Link
//             href="/pages/about"
//             className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] hover:gap-4 transition-all"
//           >
//             Discover our Story <ArrowUpRight size={16} />
//           </Link>
//         </section>
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
import { Star, Anchor, X, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const signatureProducts = [
  {
    id: "sig-01",
    name: "The Ibk Aviator",
    subtitle: "The Founding Silhouette",
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2070&auto=format&fit=crop",
    stats: ["12 Hours of Stitching", "Full-Grain Calf", "Hand-Painted Edges"],
    story:
      "Born from a desire to blend aeronautical structure with artisanal leatherwork. The Aviator features a reinforced frame and our signature 'V' stitch—a nod to the wings of progress.",
  },
  {
    id: "sig-02",
    name: "Legacy Tote",
    subtitle: "Architectural Utility",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1938&auto=format&fit=crop",
    stats: ["Reinforced Base", "Solid Brass Hardware", "Lifetime Warranty"],
    story:
      "More than a bag; it's a mobile sanctuary. Designed for the Lagos professional who demands both architectural elegance and the raw durability of hand-treated hide.",
  },
  {
    id: "sig-03",
    name: "The Ibk Aviator",
    subtitle: "The Founding Silhouette",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop",
    stats: ["12 Hours of Stitching", "Full-Grain Calf", "Hand-Painted Edges"],
    story:
      "Born from a desire to blend aeronautical structure with artisanal leatherwork. The Aviator features a reinforced frame and our signature 'V' stitch—a nod to the wings of progress.",
  },
];

export default function SignatureCollection() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof signatureProducts)[0] | null
  >(null);

  const handleWhatsAppInquiry = (productName: string) => {
    const message = encodeURIComponent(
      `Hello CraftByIbk, I am viewing your Signature Collection and I am very interested in the "${productName}". Could you provide more details on availability?`,
    );
    window.open(`https://wa.me/2348123456789?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
        {/* SECTION HEADER */}
        <header className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-4xl">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 block mb-6">
                Established 2021
              </span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[clamp(45px,11vw,130px)] font-black uppercase tracking-tighter leading-[0.85]"
              >
                SIGNATURE <br />
                <span className="text-zinc-200">PIECES.</span>
              </motion.h1>
            </div>
            <div className="flex flex-col gap-4 text-right">
              <Anchor className="ml-auto text-zinc-300" size={32} />
              <p className="max-w-[200px] text-zinc-500 text-[10px] uppercase tracking-widest leading-relaxed">
                Foundational designs carrying our promise of longevity.
              </p>
            </div>
          </div>
        </header>

        {/* PRODUCTS GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {signatureProducts.map((product, i) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group block cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -15 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="relative aspect-[3/4] bg-zinc-100 rounded-[40px] overflow-hidden shadow-sm group-hover:shadow-2xl transition-shadow duration-500">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
                    <span className="bg-white text-black px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                      View Craftsmanship <ArrowRight size={14} />
                    </span>
                  </div>
                  <div className="absolute top-8 right-8 w-10 h-10 bg-white rounded-full flex items-center justify-center z-10">
                    <Star size={14} className="fill-black" />
                  </div>
                </div>

                <div className="px-2">
                  <h3 className="text-2xl font-black uppercase tracking-tight">
                    {product.name}
                  </h3>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">
                    {product.subtitle}
                  </p>
                  <div className="pt-6 border-t border-zinc-100 flex flex-wrap gap-x-6 gap-y-2">
                    {product.stats.map((stat, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-black uppercase tracking-tighter text-zinc-500 flex items-center gap-1"
                      >
                        <div className="w-1 h-1 bg-zinc-200 rounded-full" />{" "}
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </section>

        {/* CINEMATIC MODAL */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
            >
              <div
                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                onClick={() => setSelectedProduct(null)}
              />

              <motion.div
                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 50, opacity: 0 }}
                className="relative bg-white w-full max-w-6xl rounded-[40px] md:rounded-[60px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl"
              >
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-8 right-8 z-50 bg-black text-white p-3 rounded-full hover:scale-110 transition-transform"
                >
                  <X size={20} />
                </button>

                {/* Left: Huge Image */}
                <div className="relative h-[40vh] lg:h-auto bg-zinc-100">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right: Content */}
                <div className="p-10 md:p-20 flex flex-col justify-center">
                  <Star
                    className="mb-6 text-zinc-200 fill-zinc-200"
                    size={40}
                  />
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-zinc-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">
                    {selectedProduct.subtitle}
                  </p>
                  <p className="text-lg text-zinc-600 leading-relaxed mb-10 italic">
                    "{selectedProduct.story}"
                  </p>

                  <div className="space-y-4 mb-12">
                    {selectedProduct.stats.map((s, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-zinc-400"
                      >
                        <div className="h-px w-8 bg-zinc-200" /> {s}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleWhatsAppInquiry(selectedProduct.name)}
                    className="w-full bg-black text-white py-6 rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all active:scale-95 shadow-xl"
                  >
                    <MessageCircle size={18} fill="white" />
                    Enquire about this Piece
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <section className="mt-40 bg-zinc-50 rounded-[60px] p-12 md:p-24 flex flex-col items-center text-center">
          <div className="w-px h-24 bg-zinc-200 mb-12" />

          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter max-w-2xl leading-none mb-8">
            DESIGNED TO OUTLIVE <br /> THE TREND.
          </h2>

          <Link
            href="/pages/about"
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] hover:gap-4 transition-all text-black"
          >
            Discover our Story <ArrowRight size={16} />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
