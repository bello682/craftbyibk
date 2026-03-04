// "use client";
// import { useEffect, useState } from "react"; // Added useState
// import { useDispatch, useSelector } from "react-redux";
// import { getAllCategoryData } from "@/lib/store/redux/adminSlice";
// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   Hammer,
//   Package,
//   ShoppingCart,
//   Layers,
//   Menu,
// } from "lucide-react";
// import Sidebar from "../admin/component/adminSideBar"; // Import your Sidebar

// export default function Dashboard() {
//   const dispatch = useDispatch();
//   const { allProducts } = useSelector((state: any) => state.admin);

//   // --- SIDEBAR TOGGLE STATE ---
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   useEffect(() => {
//     dispatch(getAllCategoryData() as any);
//   }, [dispatch]);

//   const stats = [
//     {
//       label: "COLLECTIONS",
//       count: allProducts?.collectionsData?.length || 0,
//       icon: Layers,
//       color: "bg-white",
//     },
//     {
//       label: "SHOP INVENTORY",
//       count: allProducts?.shopData?.length || 0,
//       icon: ShoppingCart,
//       color: "bg-zinc-100",
//     },
//     {
//       label: "OTHER PRODUCTS",
//       count: allProducts?.otherData?.length || 0,
//       icon: Package,
//       color: "bg-zinc-200",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-zinc-50">
//       {/* 1. PASS STATE TO SIDEBAR
//           We pass the state so the sidebar knows when to slide in on mobile
//       */}
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//       <div
//         className={`transition-all duration-300 flex-1 ${isSidebarOpen ? "ml-64" : "ml-0"} p-4 md:p-10 lg:p-16`}
//       >
//         <header className="p-6 md:p-10 bg-white border-b border-zinc-200">
//           <div className="flex justify-between items-start">
//             <div>
//               <div className="mb-4">
//                 <LogoComponent />
//               </div>
//               <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
//                 ADMIN
//                 <br />
//                 OVERVIEW
//               </h1>
//             </div>
//           </div>

//           <div className="mt-8 text-left md:text-right w-full md:w-auto p-4 bg-zinc-900 text-white rounded-lg md:bg-transparent md:text-black">
//             <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
//               Total Inventory Items
//             </p>
//             <span className="text-4xl font-light">
//               {(allProducts?.collectionsData?.length || 0) +
//                 (allProducts?.shopData?.length || 0) +
//                 (allProducts?.otherData?.length || 0)}
//             </span>
//           </div>
//         </header>

//         <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
//           {stats.map((item, i) => (
//             <motion.div
//               key={item.label}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               className={`${item.color} p-12 border border-zinc-200 flex flex-col justify-between h-80 hover:bg-black hover:text-white transition-colors group`}
//             >
//               <div className="flex justify-between items-start">
//                 <item.icon
//                   size={24}
//                   className="text-zinc-400 group-hover:text-white"
//                 />
//                 <ArrowUpRight
//                   size={20}
//                   className="text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity"
//                 />
//               </div>
//               <div>
//                 <p className="text-7xl font-black mb-2">{item.count}</p>
//                 <p className="text-xs font-bold tracking-[0.3em] uppercase">
//                   {item.label}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function LogoComponent() {
//   return (
//     <div className="flex items-center scale-75 origin-left">
//       <span className="text-2xl font-bold tracking-tight text-black">
//         CRAFT
//       </span>
//       <span className="relative text-2xl font-light tracking-tight text-black flex items-center">
//         <motion.div
//           animate={{
//             rotate: [0, 10, -10, 0],
//             scale: [1, 1.1, 1.1, 1],
//             opacity: [0.1, 0.15, 0.15, 0.1],
//           }}
//           transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
//           className="absolute inset-0 flex items-center justify-center -z-10"
//         >
//           <Hammer size={40} className="text-black" />
//         </motion.div>
//         _BY
//       </span>
//       <span className="text-2xl font-bold tracking-tight text-black ml-1">
//         IBK
//       </span>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryData } from "@/lib/store/redux/adminSlice";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Hammer,
  Package,
  ShoppingCart,
  Layers,
  Menu,
  Plus,
  TrendingUp,
  Activity,
  X,
} from "lucide-react";
import Sidebar from "../admin/component/adminSideBar";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state: any) => state.admin);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllCategoryData() as any);
  }, [dispatch]);

  const collectionsCount = allProducts?.collectionsData?.length || 0;
  const shopCount = allProducts?.shopData?.length || 0;
  const otherCount = allProducts?.otherData?.length || 0;
  const totalItems = collectionsCount + shopCount + otherCount;

  const stats = [
    {
      label: "Collections",
      count: collectionsCount,
      icon: Layers,
      color: "bg-white",
      link: "/admin/collections",
    },
    {
      label: "Shop Inventory",
      count: shopCount,
      icon: ShoppingCart,
      color: "bg-zinc-100",
      link: "/admin/shop",
    },
    {
      label: "Other Products",
      count: otherCount,
      icon: Package,
      color: "bg-zinc-200",
      link: "/admin/others",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F5] text-black selection:bg-black selection:text-white">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <main
        className={`transition-all duration-500 ease-in-out flex-1 ${
          isSidebarOpen ? "lg:ml-64" : "ml-0"
        } min-h-screen`}
      >
        {/* TOP NAV / MOBILE TRIGGER */}
        <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-zinc-200 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* MOBILE & TABLET TOGGLE: Hidden on Large screens (Desktop) */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-zinc-100 rounded-full transition-colors lg:hidden"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* SYSTEM STATUS: Visible on all screens, but adds margin only when toggle is hidden */}
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mt-1">
              System Status:{" "}
              <span className="text-emerald-500">Operational</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            {/* Hidden on small mobile to save space, visible on tablet up */}
            <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
              <Activity size={14} className="text-emerald-500 animate-pulse" />
              Live Server
            </div>

            <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold ring-2 ring-zinc-100 shadow-sm">
              IBK
            </div>
          </div>
        </nav>

        {/* HERO SECTION */}
        <header className="p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <LogoComponent />
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mt-6">
                Admin
                <br />
                Overview
              </h1>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-black text-white p-8 w-full lg:w-72 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)]"
            >
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-1">
                Global Inventory
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-black">{totalItems}</span>
                <span className="text-zinc-500 font-bold uppercase text-[10px]">
                  SKUs
                </span>
              </div>
              <div className="w-full bg-zinc-800 h-1 mt-4 relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "70%" }}
                  className="absolute inset-0 bg-white"
                />
              </div>
            </motion.div>
          </div>
        </header>

        {/* STATS GRID */}
        <div className="px-8 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((item, i) => (
            <Link href={item.link} key={item.label}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`${item.color} p-10 border-2 border-black flex flex-col justify-between h-72 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group relative overflow-hidden`}
              >
                <div className="flex justify-between items-start relative z-10">
                  <div className="p-3 bg-black text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <item.icon size={20} />
                  </div>
                  <ArrowUpRight
                    size={24}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </div>

                <div className="relative z-10">
                  <p className="text-6xl font-black mb-1 tracking-tighter">
                    {item.count}
                  </p>
                  <p className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-500 group-hover:text-black">
                    {item.label}
                  </p>
                </div>

                {/* Decorative background number */}
                <span className="absolute -bottom-10 -right-4 text-[12rem] font-black opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                  {i + 1}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* QUICK ACTIONS / PRODUCTION SECTION */}
        <section className="p-8 md:p-12 lg:p-16">
          <div className="border-t-2 border-black pt-12">
            <h3 className="text-sm font-black uppercase tracking-widest mb-8 flex items-center gap-2">
              <TrendingUp size={16} /> Quick Operations
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  label: "New Collection",
                  link: "/admin/adminView/collections",
                  icon: Plus,
                },
                {
                  label: "Update Shop",
                  link: "/admin/adminView/shop",
                  icon: ShoppingCart,
                },
                {
                  label: "Add Others",
                  link: "/admin/adminView/others",
                  icon: Package,
                },
                {
                  label: "Broadcast",
                  link: "/admin/adminView/notifications",
                  icon: Activity,
                },
              ].map((action) => (
                <Link
                  key={action.label}
                  href={action.link}
                  className="flex items-center justify-between p-6 bg-white border border-zinc-200 hover:border-black transition-all font-bold uppercase text-[10px] tracking-widest group"
                >
                  {action.label}
                  <action.icon
                    size={14}
                    className="text-zinc-400 group-hover:text-black transition-colors"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function LogoComponent() {
  return (
    <div className="flex items-center">
      <span className="text-3xl font-black tracking-tighter text-black">
        CRAFT
      </span>
      <div className="relative mx-2">
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="opacity-20 absolute -inset-2 flex items-center justify-center"
        >
          <Hammer size={32} />
        </motion.div>
        <span className="text-xl font-light italic">_BY</span>
      </div>
      <span className="text-3xl font-black tracking-tighter text-black">
        IBK
      </span>
    </div>
  );
}
