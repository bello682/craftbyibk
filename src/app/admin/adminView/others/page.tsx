"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadOtherProduct } from "../../../../lib/store/redux/adminSlice";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, LayoutGrid, Package, Trash2, ListPlus } from "lucide-react";

export default function OthersPage() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    msg: string;
  } | null>(null);

  // Fully Synced State
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "Other",
    arrivalType: "New Arrival",
    productType: "Accessory",
  });

  // Dynamic Bullet Points
  const [details, setDetails] = useState<string[]>([""]);

  // Files state (Synced to 4 views)
  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    frontImage: null,
    backImage: null,
    leftImage: null,
    rightImage: null,
  });

  const addDetail = () => setDetails([...details, ""]);
  const removeDetail = (index: number) => {
    const newDetails = details.filter((_, i) => i !== index);
    setDetails(newDetails.length ? newDetails : [""]);
  };
  const updateDetail = (index: number, value: string) => {
    const newDetails = [...details];
    newDetails[index] = value;
    setDetails(newDetails);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    const data = new FormData();
    Object.entries(formData).forEach(([k, v]) => data.append(k, v));

    details
      .filter((d) => d.trim() !== "")
      .forEach((detail) => data.append("details[]", detail));

    Object.entries(files).forEach(([k, v]) => {
      if (v) data.append(k, v);
    });

    try {
      await dispatch(uploadOtherProduct(data) as any).unwrap();
      setStatus({ type: "success", msg: "PRODUCT PUBLISHED SUCCESSFULLY" });

      // Reset everything
      setFormData({
        name: "",
        price: "",
        description: "",
        category: "Other",
        arrivalType: "New Arrival",
        productType: "Accessory",
      });
      setDetails([""]);
      setFiles({
        frontImage: null,
        backImage: null,
        leftImage: null,
        rightImage: null,
      });
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      setStatus({
        type: "error",
        msg: error?.payload || error?.message || "FAILED TO PUBLISH.",
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(null), 6000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4 md:p-10 lg:p-16"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-black tracking-[0.3em] uppercase text-zinc-400 mb-2">
              Miscellaneous Inventory
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-black">
              Other Goods
            </h1>
          </div>
          <div className="h-px flex-1 bg-zinc-200 mx-8 hidden lg:block mb-4"></div>
          <LayoutGrid size={40} className="text-zinc-200 hidden md:block" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="group">
                <label className="text-[10px] font-bold uppercase tracking-widest mb-2 block text-zinc-500">
                  Product Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  placeholder="E.G. LEATHER CARD HOLDER"
                  className="w-full bg-transparent border-b-2 border-zinc-200 p-3 focus:border-black outline-none transition-all font-medium uppercase"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="group">
                <label className="text-[10px] font-bold uppercase tracking-widest mb-2 block text-zinc-500">
                  Price (USD)
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={formData.price}
                  placeholder="0.00"
                  className="w-full bg-transparent border-b-2 border-zinc-200 p-3 focus:border-black outline-none transition-all font-medium"
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest mb-2 block text-zinc-500">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    className="w-full bg-transparent border-b-2 border-zinc-200 p-3 focus:border-black outline-none transition-all font-medium appearance-none"
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                  >
                    <option value="Male">MALE</option>
                    <option value="Female">FEMALE</option>
                    <option value="Other">OTHER</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest mb-2 block text-zinc-500">
                    Arrival Type
                  </label>
                  <select
                    value={formData.arrivalType}
                    className="w-full bg-transparent border-b-2 border-zinc-200 p-3 focus:border-black outline-none transition-all font-medium appearance-none"
                    onChange={(e) =>
                      setFormData({ ...formData, arrivalType: e.target.value })
                    }
                  >
                    <option value="New Arrival">NEW ARRIVAL</option>
                    <option value="Classic">CLASSIC</option>
                    <option value="Limited Edition">LIMITED EDITION</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest mb-2 block text-zinc-500">
                  Product Type (Manual)
                </label>
                <input
                  type="text"
                  required
                  value={formData.productType}
                  placeholder="E.G. ACCESSORY / LIFESTYLE"
                  className="w-full bg-transparent border-b-2 border-zinc-200 p-3 focus:border-black outline-none transition-all font-medium uppercase"
                  onChange={(e) =>
                    setFormData({ ...formData, productType: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest mb-2 block text-zinc-500">
                  Main Description
                </label>
                <textarea
                  value={formData.description}
                  placeholder="PRODUCT SPECIFICATIONS..."
                  className="w-full bg-zinc-50 border-2 border-dashed border-zinc-200 p-4 focus:border-black focus:bg-white outline-none transition-all font-medium h-32 uppercase"
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    Detail Points
                  </label>
                  <button
                    type="button"
                    onClick={addDetail}
                    className="text-[10px] font-black flex items-center gap-1 hover:underline"
                  >
                    <ListPlus size={14} /> ADD POINT
                  </button>
                </div>
                <div className="space-y-3">
                  <AnimatePresence>
                    {details.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex gap-2"
                      >
                        <span className="flex items-center justify-center w-8 h-10 font-black text-xs border-b-2 border-zinc-100">
                          {index + 1}.
                        </span>
                        <input
                          type="text"
                          value={detail}
                          placeholder="E.G. GENUINE LEATHER"
                          className="flex-1 bg-transparent border-b-2 border-zinc-200 p-2 focus:border-black outline-none transition-all text-xs uppercase"
                          onChange={(e) => updateDetail(index, e.target.value)}
                        />
                        <button
                          type="button"
                          onClick={() => removeDetail(index)}
                          className="p-2 text-zinc-300 hover:text-black transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Imagery Section */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-6 border-b-2 border-black inline-block pb-1">
              Visual Assets
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["frontImage", "backImage", "leftImage", "rightImage"].map(
                (view) => (
                  <div
                    key={view}
                    className="relative aspect-[3/4] bg-zinc-100 border-2 border-zinc-200 group"
                  >
                    <input
                      type="file"
                      required={view === "frontImage"}
                      className="absolute inset-0 opacity-0 z-10 cursor-pointer"
                      onChange={(e: any) =>
                        setFiles({ ...files, [view]: e.target.files[0] })
                      }
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                      {files[view] ? (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-white">
                          <Package size={28} className="mb-2 text-black" />
                          <p className="text-[8px] font-bold uppercase truncate w-full px-2 text-center">
                            {files[view]!.name}
                          </p>
                          <button
                            type="button"
                            onClick={() => setFiles({ ...files, [view]: null })}
                            className="mt-2 text-[10px] underline font-bold text-red-600"
                          >
                            REMOVE
                          </button>
                        </div>
                      ) : (
                        <>
                          <Plus
                            size={20}
                            className="mb-2 transition-transform text-zinc-400 group-hover:text-black"
                          />
                          <span className="text-[10px] font-bold uppercase tracking-tighter text-center">
                            {view.replace("Image", "")} VIEW
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Action Section */}
          <div className="flex flex-col items-end gap-4 pt-12 border-t-2 border-zinc-100">
            <AnimatePresence mode="wait">
              {status && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className={`px-8 py-4 border-2 font-black text-[10px] tracking-[0.2em] uppercase shadow-xl ${status.type === "success" ? "bg-black text-white border-black" : "bg-white text-red-600 border-red-600"}`}
                >
                  {status.msg}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              disabled={isLoading}
              className={`w-full md:w-auto bg-black text-white px-20 py-6 font-black uppercase tracking-[0.5em] transition-all active:scale-95 shadow-2xl flex items-center justify-center gap-4 ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-zinc-800"}`}
            >
              {isLoading ? "UPLOADING..." : "Publish Goods"}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
