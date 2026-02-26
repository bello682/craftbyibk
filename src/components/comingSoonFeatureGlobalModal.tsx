// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ArrowRight, Home, Hammer, Sparkles } from "lucide-react";
// import Link from "next/link";

// interface GlobalModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   duration?: number; // Time in milliseconds before auto-close
// }

// export const FeatureModal = ({
//   isOpen,
//   onClose,
//   duration = 8000,
// }: GlobalModalProps) => {
//   const [progress, setProgress] = useState(100);

//   // Handle auto-close progress bar
//   useEffect(() => {
//     if (isOpen) {
//       setProgress(100);
//       const interval = 100; // Update every 100ms
//       const step = (interval / duration) * 100;

//       const timer = setInterval(() => {
//         setProgress((prev) => {
//           if (prev <= 0) {
//             clearInterval(timer);
//             onClose();
//             return 0;
//           }
//           return prev - step;
//         });
//       }, interval);

//       return () => clearInterval(timer);
//     }
//   }, [isOpen, onClose, duration]);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-[999] flex items-center justify-center p-6 md:p-10">
//           {/* OVERLAY with Backdrop Blur */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="absolute inset-0 bg-black/80 backdrop-blur-md"
//           />

//           {/* MODAL CONTAINER */}
//           <motion.div
//             initial={{ scale: 0.9, y: 20, opacity: 0 }}
//             animate={{ scale: 1, y: 0, opacity: 1 }}
//             exit={{ scale: 0.9, y: 20, opacity: 0 }}
//             transition={{ type: "spring", damping: 25, stiffness: 300 }}
//             className="relative bg-white w-full max-w-xl rounded-[40px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]"
//           >
//             {/* PROGRESS BAR (Top) */}
//             <div className="absolute top-0 left-0 w-full h-1.5 bg-zinc-100">
//               <motion.div
//                 className="h-full bg-black"
//                 style={{ width: `${progress}%` }}
//               />
//             </div>

//             {/* CLOSE BUTTON */}
//             <button
//               onClick={onClose}
//               className="absolute top-8 right-8 p-2 text-zinc-400 hover:text-black hover:bg-zinc-100 rounded-full transition-all"
//             >
//               <X size={20} />
//             </button>

//             {/* CONTENT AREA */}
//             <div className="p-10 md:p-16 text-center">
//               {/* LOGO / ICON AREA */}
//               <div className="flex flex-col items-center mb-10">
//                 <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
//                   <Hammer size={32} strokeWidth={1.5} />
//                 </div>
//                 <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">
//                   CraftByIbk Studio
//                 </h3>
//               </div>

//               {/* MESSAGE */}
//               <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
//                 Crafting <br />{" "}
//                 <span className="text-zinc-300">New Excellence</span>
//               </h2>

//               <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-widest leading-relaxed mb-12 max-w-xs mx-auto font-medium">
//                 We are currently hand-stitching this digital feature. Expect the
//                 same precision as our leatherwork, very soon.
//               </p>

//               {/* ACTION BUTTONS */}
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link
//                   href="/shop"
//                   onClick={onClose}
//                   className="flex-1 bg-black text-white py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all active:scale-95 shadow-lg"
//                 >
//                   <Sparkles size={14} /> View Collection
//                 </Link>

//                 <Link
//                   href="/"
//                   onClick={onClose}
//                   className="flex-1 bg-zinc-100 text-black py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all active:scale-95"
//                 >
//                   <Home size={14} /> Back to Home
//                 </Link>
//               </div>

//               {/* BOTTOM STATUS */}
//               <div className="mt-12 pt-8 border-t border-zinc-100 flex justify-center gap-8">
//                 <div className="flex flex-col items-center">
//                   <span className="text-[9px] font-black uppercase tracking-tighter">
//                     Status
//                   </span>
//                   <span className="text-[10px] text-zinc-400 uppercase tracking-widest">
//                     In Progress
//                   </span>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <span className="text-[9px] font-black uppercase tracking-tighter">
//                     Artisan
//                   </span>
//                   <span className="text-[10px] text-zinc-400 uppercase tracking-widest">
//                     Digital Team
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// };

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, Hammer, Sparkles, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface GlobalModalProps {
  isOpen: boolean;
  onClose: () => void;
  duration?: number; // Time in ms before auto-close
}

export const FeatureModal = ({
  isOpen,
  onClose,
  duration = 30000,
}: GlobalModalProps) => {
  const [progress, setProgress] = useState(100);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-close logic (pauses if user starts typing)
  useEffect(() => {
    if (isOpen && !email && !isSubmitted) {
      setProgress(100);
      const interval = 100;
      const step = (interval / duration) * 100;

      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) {
            clearInterval(timer);
            setTimeout(() => {
              onClose();
            }, 0);
            return 0;
          }
          return prev - step;
        });
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isOpen, onClose, duration, email, isSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Backend logic for newsletter goes here
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-10 overflow-y-auto">
          {/* PREMIUM OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* MODAL BODY */}
          <motion.div
            initial={{ scale: 0.95, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 30, opacity: 0 }}
            className="relative bg-white w-full max-w-xl rounded-[40px] md:rounded-[50px] overflow-hidden shadow-2xl my-auto"
          >
            {/* AUTOCLOSE BAR */}
            {/* {!email && !isSubmitted && (
              <div className="absolute top-0 left-0 w-full h-1 bg-zinc-100">
                <motion.div
                  className="h-full bg-black"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )} */}
            {/* 1. MOBILE VERSION: Top-edge thin bar (Hidden on Tablet/Desktop) */}
            {!email && !isSubmitted && (
              <div className="absolute top-0 left-0 w-full h-1 bg-zinc-100 md:hidden">
                <motion.div
                  className="h-full bg-black"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}

            {/* 2. TABLET/DESKTOP VERSION: Detailed bar above input (Hidden on Mobile) */}
            {!isSubmitted && (
              <div className="hidden md:block w-full max-w-sm mx-auto mt-6">
                {/* LABEL & PERCENTAGE */}
                <div className="flex justify-between items-end mb-2 px-1">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">
                    System Ready
                  </span>
                  <span className="text-[9px] font-mono text-zinc-500">
                    {Math.round(progress)}%
                  </span>
                </div>

                {/* THE PROGRESS TRACK */}
                <div className="h-[3px] w-full bg-zinc-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-black shadow-[0_0_8px_rgba(0,0,0,0.1)]"
                    initial={{ width: "100%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "linear" }}
                  />
                </div>
              </div>
            )}

            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 text-zinc-400 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-14 text-center">
              {/* BRAND ICON */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-white mx-auto mb-8 shadow-xl"
              >
                <Hammer size={32} />
              </motion.div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-2">
                CraftByIbk Studio
              </h3>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
                Refining the <br />{" "}
                <span className="text-zinc-300">Experience</span>
              </h2>
              {/* <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-widest leading-relaxed mb-10 max-w-xs mx-auto">
                This feature is currently under our digital artisan&apos;s care.
                Be the first to know when it drops.
              </p> */}
              <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-widest leading-relaxed mb-10 max-w-xs mx-auto">
                We're working hard to bring you exciting new features that match
                the craftsmanship of our products. This will be ready Soon!
              </p>

              {/* NEWSLETTER CAPTURE */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="relative mb-10 group">
                  <input
                    type="email"
                    required
                    placeholder="ENTER YOUR EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-5 px-6 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-black transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-xl hover:bg-zinc-800 transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-10 p-5 bg-zinc-900 rounded-2xl text-white flex items-center justify-center gap-3"
                >
                  <CheckCircle2 size={18} className="text-white" />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    You&apos;re on the list
                  </span>
                </motion.div>
              )}
              {/* NAVIGATION LINKS */}
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/pages/shop"
                  onClick={onClose}
                  className="bg-black text-white py-4 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Sparkles size={12} /> Shop All
                </Link>
                <Link
                  href="/"
                  onClick={onClose}
                  className="bg-zinc-100 text-black py-4 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
                >
                  <Home size={12} /> Home
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
