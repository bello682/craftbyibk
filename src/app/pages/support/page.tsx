"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck, RotateCcw, ShieldCheck, Globe } from "lucide-react";

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState("shipping");

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
        {/* HEADER */}
        <section className="mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(50px,12vw,140px)] font-black uppercase tracking-tighter leading-[0.8] mb-12"
          >
            SERVICE <br />
            <span className="text-zinc-200">& POLICY.</span>
          </motion.h1>

          {/* TAB TOGGLE */}
          <div className="flex gap-8 border-b border-zinc-100">
            {["shipping", "returns"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-xs font-black uppercase tracking-[0.3em] transition-all relative ${
                  activeTab === tab ? "text-black" : "text-zinc-400"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="supportTab"
                    className="absolute bottom-0 left-0 w-full h-1 bg-black"
                  />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* CONTENT AREA */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === "shipping" ? (
              <motion.div
                key="shipping"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16"
              >
                <div className="space-y-12">
                  <div className="space-y-4">
                    <h3 className="flex items-center gap-3 text-xl font-black uppercase tracking-tight">
                      <Truck size={20} /> Local Delivery (Nigeria)
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-wide">
                      Orders within Lagos are typically delivered within 1-2
                      business days. Deliveries to other states within Nigeria
                      take 3-5 business days via our premium courier partners.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="flex items-center gap-3 text-xl font-black uppercase tracking-tight">
                      <Globe size={20} /> International Shipping
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-wide">
                      We ship worldwide via DHL Express. International delivery
                      usually takes 5-10 business days depending on customs
                      processing in your country.
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-50 rounded-[40px] p-8 md:p-12">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6">
                    Rates
                  </h4>
                  <table className="w-full text-xs font-bold uppercase tracking-widest">
                    <tbody>
                      <tr className="border-b border-zinc-200">
                        <td className="py-4">Lagos Central</td>
                        <td className="py-4 text-right">₦ Based on Location</td>
                      </tr>
                      <tr className="border-b border-zinc-200">
                        <td className="py-4">Rest of Nigeria</td>
                        <td className="py-4 text-right">₦ Based on Location</td>
                      </tr>
                      <tr>
                        <td className="py-4">Worldwide</td>
                        <td className="py-4 text-right">$ Based on Location</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="returns"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="max-w-3xl space-y-12"
              >
                <div className="space-y-6">
                  <h3 className="flex items-center gap-3 text-2xl font-black uppercase tracking-tight">
                    <RotateCcw size={24} /> 7-Day Exchange Policy
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-wide">
                    Because each item is handmade to order, we do not offer full
                    refunds unless the product is defective. However, we allow
                    exchanges for different models or store credit within 7 days
                    of delivery.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 border border-zinc-100 rounded-3xl">
                    <h4 className="font-black uppercase text-xs mb-4">
                      Conditions
                    </h4>
                    <ul className="space-y-2 text-[10px] text-zinc-500 uppercase font-bold tracking-widest">
                      <li>• Unworn & Unused</li>
                      <li>• Original Packaging</li>
                      <li>• Proof of Purchase</li>
                    </ul>
                  </div>
                  <div className="p-8 border border-zinc-100 rounded-3xl">
                    <h4 className="font-black uppercase text-xs mb-4">
                      Exclusions
                    </h4>
                    <ul className="space-y-2 text-[10px] text-zinc-500 uppercase font-bold tracking-widest">
                      <li>• Custom Embossing</li>
                      <li>• Bespoke Orders</li>
                      <li>• Final Sale Items</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-black text-white p-8 rounded-[30px] flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-widest">
                    Ready to start a return?
                  </p>
                  <button className="bg-white text-black px-6 py-3 rounded-full text-[10px] font-black uppercase hover:bg-zinc-200 transition-colors">
                    Email Support
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}
