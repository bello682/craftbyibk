"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategoryData,
  deleteProductsAction,
} from "../../../../lib/store/redux/adminSlice";
import {
  Trash2,
  Package,
  CheckSquare,
  Square,
  X,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminManageProducts() {
  const dispatch = useDispatch();
  const { allProducts, loading } = useSelector((state: any) => state.admin);

  const [activeTab, setActiveTab] = useState<
    "collectionsData" | "shopData" | "otherData"
  >("collectionsData");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  // Auto-hide toast after 3 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  useEffect(() => {
    dispatch(getAllCategoryData() as any);
  }, [dispatch]);

  const toggleSelect = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  //   const handleDelete = async () => {
  //     await dispatch(
  //       deleteProductsAction({ ids: selectedItems, category: activeTab }) as any,
  //     );
  //     setSelectedItems([]);
  //     setShowConfirm(false);
  //   };
  const handleDelete = async () => {
    try {
      await dispatch(
        deleteProductsAction({
          ids: selectedItems,
          category: activeTab,
        }) as any,
      ).unwrap();
      setToast({
        message: `${selectedItems.length} items removed from studio`,
        type: "success",
      });
      setSelectedItems([]);
      setShowConfirm(false);
    } catch (error: any) {
      setToast({ message: error || "Failed to delete items", type: "error" });
    }
  };

  const currentList = allProducts[activeTab] || [];

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter">
              Inventory Manager
            </h1>
            <p className="text-zinc-400 text-xs uppercase tracking-widest mt-2">
              Manage and prune your studio uploads
            </p>
          </div>

          {selectedItems.length > 0 && (
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={() => setShowConfirm(true)}
              className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em] flex items-center gap-3 shadow-xl shadow-red-100"
            >
              <Trash2 size={16} /> Delete {selectedItems.length} Selected
            </motion.button>
          )}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-zinc-100 mb-8">
          {["collectionsData", "shopData", "otherData"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab as any);
                setSelectedItems([]);
              }}
              className={`pb-4 px-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                activeTab === tab
                  ? "border-b-2 border-black text-black"
                  : "text-zinc-300"
              }`}
            >
              {tab.replace("Data", "")}
            </button>
          ))}
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentList.map((product: any) => (
            <div
              key={product._id}
              onClick={() => toggleSelect(product._id)}
              className={`group relative bg-zinc-50 rounded-[32px] p-4 transition-all cursor-pointer border-2 ${
                selectedItems.includes(product._id)
                  ? "border-black bg-white"
                  : "border-transparent"
              }`}
            >
              <div className="aspect-square relative rounded-[24px] overflow-hidden bg-zinc-200 mb-4">
                <Image
                  src={product.frontImageView}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  {selectedItems.includes(product._id) ? (
                    <div className="bg-black text-white p-1 rounded-lg">
                      <CheckSquare size={18} />
                    </div>
                  ) : (
                    <div className="bg-white/80 backdrop-blur-md p-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <Square size={18} />
                    </div>
                  )}
                </div>
              </div>
              <h3 className="font-bold uppercase text-[11px] tracking-tight truncate">
                {product.name}
              </h3>
              <p className="text-zinc-400 text-[9px] font-medium uppercase mt-1">
                {product.sku}
              </p>
              <p className="text-black font-black text-xs mt-2">
                ₦{product.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        {currentList.length === 0 && !loading && (
          <div className="py-40 text-center border-2 border-dashed border-zinc-100 rounded-[40px]">
            <Package className="mx-auto text-zinc-200 mb-4" size={48} />
            <p className="text-zinc-400 uppercase text-[10px] font-bold tracking-[0.2em]">
              No products found in this category
            </p>
          </div>
        )}
      </div>

      {/* DELETE CONFIRMATION MODAL */}
      <AnimatePresence>
        {showConfirm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowConfirm(false)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white rounded-[40px] p-10 max-w-md w-full text-center"
            >
              <div className="w-20 h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle size={40} />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">
                Confirm Delete
              </h2>
              <p className="text-zinc-500 text-sm mb-8">
                You are about to permanently delete{" "}
                <span className="font-bold text-black">
                  {selectedItems.length}
                </span>{" "}
                items from the studio database. This action cannot be undone.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 py-4 rounded-2xl bg-zinc-100 font-bold uppercase text-[10px] tracking-widest hover:bg-zinc-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="flex-1 py-4 rounded-2xl bg-black text-white font-bold uppercase text-[10px] tracking-widest hover:bg-red-600 transition-colors shadow-lg"
                >
                  Delete Now
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* TOAST NOTIFICATION */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className={`fixed top-10 left-1/2 z-[200] px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[320px] border ${
              toast.type === "success"
                ? "bg-white border-zinc-100 text-black"
                : "bg-red-600 border-red-500 text-white"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                toast.type === "success" ? "bg-zinc-100" : "bg-white/20"
              }`}
            >
              {toast.type === "success" ? "✓" : "!"}
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em]">
              {toast.message}
            </p>
            <button
              onClick={() => setToast(null)}
              className="ml-auto opacity-50 hover:opacity-100"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
