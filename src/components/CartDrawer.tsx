"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import Link from "next/link";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  // This would eventually come from your Cart Context/State
  const cartItems = [
    {
      id: "1",
      name: "LHR London Hoodie",
      price: 250,
      quantity: 1,
      imageLabel: "Hoodie",
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* DRAWER */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-[450px] bg-white z-[101] shadow-2xl flex flex-col"
          >
            {/* HEADER */}
            <div className="p-8 border-b border-zinc-100 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} />
                <h2 className="text-xl font-black uppercase tracking-tighter">
                  Your Bag
                </h2>
                <span className="bg-zinc-100 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {cartItems.length}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* ITEMS LIST */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-6">
                    <div className="w-24 h-32 bg-zinc-100 rounded-2xl flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-zinc-400 uppercase">
                      {item.imageLabel}
                    </div>
                    <div className="flex flex-col justify-between py-1 flex-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-sm font-black uppercase tracking-tight max-w-[150px]">
                            {item.name}
                          </h3>
                          <button className="text-zinc-300 hover:text-black transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-sm font-black italic mt-1">
                          ${item.price}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-zinc-100 rounded-full px-3 py-1 gap-4">
                          <button className="text-zinc-400 hover:text-black">
                            <Minus size={14} />
                          </button>
                          <span className="text-xs font-bold">
                            {item.quantity}
                          </span>
                          <button className="text-zinc-400 hover:text-black">
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <p className="text-zinc-400 uppercase tracking-widest text-[10px] font-bold">
                    Your bag is empty
                  </p>
                </div>
              )}
            </div>

            {/* FOOTER */}
            <div className="p-8 border-t border-zinc-100 bg-zinc-50">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  Subtotal
                </span>
                <span className="text-xl font-black">${subtotal}</span>
              </div>
              <p className="text-[9px] text-zinc-400 uppercase tracking-widest mb-6">
                Shipping and taxes calculated at checkout.
              </p>
              <Link
                href="/checkout"
                className="w-full bg-black text-white py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all"
              >
                Proceed to Checkout
              </Link>
              <button
                onClick={onClose}
                className="w-full text-center mt-4 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-black transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
