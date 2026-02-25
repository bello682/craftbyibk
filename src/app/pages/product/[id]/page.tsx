// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Navbar } from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import {
//   Plus,
//   Minus,
//   ShoppingBag,
//   ShieldCheck,
//   Truck,
//   RotateCcw,
// } from "lucide-react";

// export default function ProductDetail() {
//   const [quantity, setQuantity] = useState(1);
//   const [activeTab, setActiveTab] = useState("details");

//   const product = {
//     name: "LHR London England Hoodie",
//     price: 250,
//     description:
//       "A heavyweight artisanal masterpiece. Crafted from 450GSM premium cotton, this hoodie features hand-finished embroidery and a structured fit designed to last a lifetime.",
//     details: [
//       "100% Premium Organic Cotton",
//       "Hand-embroidered LHR branding",
//       "Reinforced double-stitched seams",
//       "Boxy, contemporary fit",
//       "Made in Lagos, Nigeria",
//     ],
//   };

//   return (
//     <div className="min-h-screen bg-white text-black">
//       <Navbar />

//       <main className="pt-24 pb-20 px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
//         <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
//           {/* LEFT: IMAGE GALLERY (STICKY) */}
//           <div className="w-full lg:w-[55%] space-y-6">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="relative aspect-[4/5] bg-zinc-100 rounded-[40px] md:rounded-[60px] overflow-hidden"
//             >
//               <div className="absolute inset-0 flex items-center justify-center text-zinc-300 font-black uppercase tracking-widest text-2xl">
//                 Main Product View
//               </div>
//               {/* Replace with <Image src="/path" fill className="object-cover" /> */}
//             </motion.div>

//             <div className="grid grid-cols-3 gap-4">
//               {[1, 2, 3].map((i) => (
//                 <div
//                   key={i}
//                   className="aspect-square bg-zinc-50 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center text-[10px] text-zinc-400 font-bold uppercase"
//                 >
//                   Angle {i}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT: PRODUCT INFO (SCROLLS) */}
//           <div className="w-full lg:w-[45%] flex flex-col pt-4">
//             <header className="mb-8">
//               <div className="flex items-center gap-3 mb-4">
//                 <span className="bg-black text-white text-[9px] font-black px-3 py-1 uppercase tracking-widest rounded-full">
//                   New Arrival
//                 </span>
//                 <span className="text-zinc-400 text-[9px] font-black uppercase tracking-widest">
//                   SKU: CB-LHR-001
//                 </span>
//               </div>
//               <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4">
//                 {product.name}
//               </h1>
//               <p className="text-2xl font-black italic">${product.price}</p>
//             </header>

//             <div className="space-y-8">
//               <p className="text-zinc-500 text-sm leading-relaxed max-w-md uppercase tracking-wide">
//                 {product.description}
//               </p>

//               {/* QUANTITY & ADD TO CART */}
//               <div className="flex flex-col gap-4 py-8 border-y border-zinc-100">
//                 <div className="flex items-center gap-6">
//                   <div className="flex items-center border border-zinc-200 rounded-full px-4 py-2">
//                     <button
//                       onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                       className="hover:text-zinc-400"
//                     >
//                       <Minus size={16} />
//                     </button>
//                     <span className="w-12 text-center font-bold text-sm">
//                       {quantity}
//                     </span>
//                     <button
//                       onClick={() => setQuantity(quantity + 1)}
//                       className="hover:text-zinc-400"
//                     >
//                       <Plus size={16} />
//                     </button>
//                   </div>
//                   <button className="flex-1 bg-black text-white py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all active:scale-95">
//                     <ShoppingBag size={18} />
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>

//               {/* TABS (DETAILS/SHIPPING) */}
//               <div className="space-y-6">
//                 <div className="flex gap-8 border-b border-zinc-100">
//                   {["details", "shipping"].map((tab) => (
//                     <button
//                       key={tab}
//                       onClick={() => setActiveTab(tab)}
//                       className={`pb-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all relative ${
//                         activeTab === tab ? "text-black" : "text-zinc-400"
//                       }`}
//                     >
//                       {tab}
//                       {activeTab === tab && (
//                         <motion.div
//                           layoutId="tab"
//                           className="absolute bottom-0 left-0 w-full h-0.5 bg-black"
//                         />
//                       )}
//                     </button>
//                   ))}
//                 </div>

//                 <div className="min-h-[100px]">
//                   {activeTab === "details" ? (
//                     <ul className="space-y-3">
//                       {product.details.map((detail, i) => (
//                         <li
//                           key={i}
//                           className="flex items-center gap-3 text-[11px] font-bold text-zinc-600 uppercase"
//                         >
//                           <div className="w-1 h-1 bg-black rounded-full" />
//                           {detail}
//                         </li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <div className="space-y-4">
//                       <div className="flex items-start gap-4">
//                         <Truck size={18} />
//                         <div>
//                           <p className="text-[11px] font-bold uppercase">
//                             Lagos Delivery
//                           </p>
//                           <p className="text-[10px] text-zinc-500 uppercase">
//                             1-2 Business Days
//                           </p>
//                         </div>
//                       </div>
//                       <div className="flex items-start gap-4">
//                         <RotateCcw size={18} />
//                         <div>
//                           <p className="text-[11px] font-bold uppercase">
//                             Easy Returns
//                           </p>
//                           <p className="text-[10px] text-zinc-500 uppercase">
//                             7 Day Return Policy
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* TRUST BADGE */}
//               <div className="bg-zinc-50 p-6 rounded-3xl flex items-center gap-4">
//                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
//                   <ShieldCheck size={20} />
//                 </div>
//                 <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">
//                   Authentic Artisanal <br /> Craftsmanship Guaranteed
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Plus,
  Minus,
  MessageCircle,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("details");
  const [currentUrl, setCurrentUrl] = useState("");

  // Get current URL for WhatsApp reference
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const product = {
    name: "LHR London England Hoodie",
    price: 250,
    sku: "CB-LHR-001",
    description:
      "A heavyweight artisanal masterpiece. Crafted from 450GSM premium cotton, this hoodie features hand-finished embroidery and a structured fit designed to last a lifetime.",
    details: [
      "100% Premium Organic Cotton",
      "Hand-embroidered LHR branding",
      "Reinforced double-stitched seams",
      "Boxy, contemporary fit",
      "Made in Lagos, Nigeria",
    ],
  };

  const handleWhatsAppOrder = () => {
    const phoneNumber = "2348123456789"; // Replace with your real WhatsApp number
    const message = `Hello CraftByIbk, I would like to place an order:

*Product:* ${product.name}
*Price:* $${product.price}
*Quantity:* ${quantity}
*SKU:* ${product.sku}

*Description:* ${product.description}

*Product Link:* ${currentUrl}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-24 pb-20 px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* LEFT: IMAGE GALLERY (STICKY) */}
          <div className="w-full lg:w-[55%] space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-[4/5] bg-zinc-100 rounded-[40px] md:rounded-[60px] overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center text-zinc-300 font-black uppercase tracking-widest text-2xl">
                Main Product View
              </div>
            </motion.div>

            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-zinc-50 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center text-[10px] text-zinc-400 font-bold uppercase"
                >
                  Angle {i}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: PRODUCT INFO (SCROLLS) */}
          <div className="w-full lg:w-[45%] flex flex-col pt-4">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-black text-white text-[9px] font-black px-3 py-1 uppercase tracking-widest rounded-full">
                  New Arrival
                </span>
                <span className="text-zinc-400 text-[9px] font-black uppercase tracking-widest">
                  SKU: {product.sku}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-black italic">${product.price}</p>
            </header>

            <div className="space-y-8">
              <p className="text-zinc-500 text-sm leading-relaxed max-w-md uppercase tracking-wide">
                {product.description}
              </p>

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

              {/* TABS (DETAILS/SHIPPING) */}
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
                      {product.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-[11px] font-bold text-zinc-600 uppercase"
                        >
                          <div className="w-1 h-1 bg-black rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Truck size={18} />
                        <div>
                          <p className="text-[11px] font-bold uppercase">
                            Lagos Delivery
                          </p>
                          <p className="text-[10px] text-zinc-500 uppercase">
                            1-2 Business Days
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <RotateCcw size={18} />
                        <div>
                          <p className="text-[11px] font-bold uppercase">
                            Easy Returns
                          </p>
                          <p className="text-[10px] text-zinc-500 uppercase">
                            7 Day Return Policy
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* TRUST BADGE */}
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
      </main>

      <Footer />
    </div>
  );
}
