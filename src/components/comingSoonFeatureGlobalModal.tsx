// "use client";

// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { subscribeToNewsletter } from "@/lib/store/redux/adminSlice";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Home, Hammer, Sparkles, Send, CheckCircle2 } from "lucide-react";
// import Link from "next/link";

// interface GlobalModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   duration?: number; // Time in ms before auto-close
// }

// export const FeatureModal = ({
//   isOpen,
//   onClose,
//   duration = 30000,
// }: GlobalModalProps) => {
//   const dispatch = useDispatch<any>();
//   const [progress, setProgress] = useState(100);
//   const [email, setEmail] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   // Auto-close logic (pauses if user starts typing)
//   useEffect(() => {
//     if (isOpen && !email && !isSubmitted) {
//       setProgress(100);
//       const interval = 100;
//       const step = (interval / duration) * 100;

//       const timer = setInterval(() => {
//         setProgress((prev) => {
//           if (prev <= 0) {
//             clearInterval(timer);
//             setTimeout(() => {
//               onClose();
//             }, 0);
//             return 0;
//           }
//           return prev - step;
//         });
//       }, interval);

//       return () => clearInterval(timer);
//     }
//   }, [isOpen, onClose, duration, email, isSubmitted]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrorMessage(""); // Reset error
//     if (email) {
//       const result = await dispatch(subscribeToNewsletter(email));
//       if (subscribeToNewsletter.fulfilled.match(result)) {
//         setIsSubmitted(true);
//         // Progress will resume automatically due to useEffect dependency
//       } else {
//         setErrorMessage(result.payload || "Failed to join. Please try again.");
//       }
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-10 overflow-y-auto">
//           {/* PREMIUM OVERLAY */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-black/80 backdrop-blur-xl"
//           />

//           {/* MODAL BODY */}
//           <motion.div
//             initial={{ scale: 0.95, y: 30, opacity: 0 }}
//             animate={{ scale: 1, y: 0, opacity: 1 }}
//             exit={{ scale: 0.95, y: 30, opacity: 0 }}
//             className="relative bg-white w-full max-w-xl rounded-[40px] md:rounded-[50px] overflow-hidden shadow-2xl my-auto"
//           >
//             {/* AUTOCLOSE BAR */}

//             {/* 1. MOBILE VERSION: Top-edge thin bar (Hidden on Tablet/Desktop) */}
//             {!email && !isSubmitted && (
//               <div className="absolute top-0 left-0 w-full h-1 bg-zinc-100 md:hidden">
//                 <motion.div
//                   className="h-full bg-black"
//                   style={{ width: `${progress}%` }}
//                 />
//               </div>
//             )}

//             {/* 2. TABLET/DESKTOP VERSION: Detailed bar above input (Hidden on Mobile) */}
//             {!isSubmitted && (
//               <div className="hidden md:block w-full max-w-sm mx-auto mt-6">
//                 {/* LABEL & PERCENTAGE */}
//                 <div className="flex justify-between items-end mb-2 px-1">
//                   <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">
//                     System Ready
//                   </span>
//                   <span className="text-[9px] font-mono text-zinc-500">
//                     {Math.round(progress)}%
//                   </span>
//                 </div>

//                 {/* THE PROGRESS TRACK */}
//                 <div className="h-[3px] w-full bg-zinc-100 rounded-full overflow-hidden">
//                   <motion.div
//                     className="h-full bg-black shadow-[0_0_8px_rgba(0,0,0,0.1)]"
//                     initial={{ width: "100%" }}
//                     animate={{ width: `${progress}%` }}
//                     transition={{ ease: "linear" }}
//                   />
//                 </div>
//               </div>
//             )}

//             <button
//               onClick={onClose}
//               className="absolute top-6 right-6 z-50 p-2 text-zinc-400 hover:text-black transition-colors"
//             >
//               <X size={24} />
//             </button>

//             <div className="p-8 md:p-14 text-center">
//               {/* BRAND ICON */}
//               <motion.div
//                 animate={{ rotate: [0, 5, -5, 0] }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: 4,
//                   ease: "easeInOut",
//                 }}
//                 className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-white mx-auto mb-8 shadow-xl"
//               >
//                 <Hammer size={32} />
//               </motion.div>
//               <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-2">
//                 Craft_ByIbk Studio
//               </h3>
//               <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
//                 Refining the <br />{" "}
//                 <span className="text-zinc-300">Experience</span>
//               </h2>

//               <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-widest leading-relaxed mb-10 max-w-xs mx-auto">
//                 We're working hard to bring you exciting new features that match
//                 the craftsmanship of our products. This will be ready Soon!
//               </p>

//               {/* NEWSLETTER CAPTURE */}
//               <div className="relative mb-10">
//                 {!isSubmitted ? (
//                   <form onSubmit={handleSubmit} className="relative group">
//                     <input
//                       type="email"
//                       required
//                       placeholder="ENTER YOUR EMAIL"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className={`w-full bg-zinc-50 border ${errorMessage ? "border-red-500" : "border-zinc-200"} rounded-2xl py-5 px-6 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-black transition-all`}
//                     />
//                     <button
//                       type="submit"
//                       className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-xl hover:bg-zinc-800 transition-colors"
//                     >
//                       <Send size={16} />
//                     </button>
//                     {errorMessage && (
//                       <p className="text-[9px] text-red-500 font-black uppercase mt-2 text-left ml-2 tracking-widest">
//                         {errorMessage}
//                       </p>
//                     )}
//                   </form>
//                 ) : (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="p-5 bg-zinc-900 rounded-2xl text-white flex items-center justify-center gap-3"
//                   >
//                     <CheckCircle2 size={18} className="text-white" />
//                     <span className="text-[10px] font-black uppercase tracking-widest">
//                       Welcome to the Inner Circle
//                     </span>
//                   </motion.div>
//                 )}

//                 {/* SUCCESS TOAST OVERLAY */}
//                 <AnimatePresence>
//                   {isSubmitted && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="absolute -top-12 left-0 right-0 mx-auto w-fit bg-black text-white px-4 py-2 rounded-full text-[8px] font-black uppercase tracking-[0.3em] shadow-xl"
//                     >
//                       Subscription Successful
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//               {/* NAVIGATION LINKS */}
//               <div className="grid grid-cols-2 gap-4">
//                 <Link
//                   href="/pages/shop"
//                   onClick={onClose}
//                   className="bg-black text-white py-4 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
//                 >
//                   <Sparkles size={12} /> Shop All
//                 </Link>
//                 <Link
//                   href="/"
//                   onClick={onClose}
//                   className="bg-zinc-100 text-black py-4 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
//                 >
//                   <Home size={12} /> Home
//                 </Link>
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
import { useDispatch } from "react-redux";
import { subscribeToNewsletter } from "@/lib/store/redux/adminSlice";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, Hammer, Sparkles, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface GlobalModalProps {
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

export const FeatureModal = ({
  isOpen,
  onClose,
  duration = 30000,
}: GlobalModalProps) => {
  const dispatch = useDispatch<any>();
  const [progress, setProgress] = useState(100);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Auto-close logic: Resumes if email is empty OR if submission is successful
  useEffect(() => {
    if (isOpen && (!email || isSubmitted)) {
      const interval = 100;
      const step = (interval / duration) * 100;

      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) {
            clearInterval(timer);
            onClose();
            return 0;
          }
          return prev - step;
        });
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isOpen, onClose, duration, email, isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setErrorMessage("");
    setIsLoading(true);

    try {
      const result = await dispatch(subscribeToNewsletter(email));
      if (subscribeToNewsletter.fulfilled.match(result)) {
        setIsSubmitted(true);
        setEmail(""); // Clearing email lets the progress bar resume
      } else {
        setErrorMessage(result.payload || "Failed to join. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-10 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          <motion.div
            initial={{ scale: 0.95, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 30, opacity: 0 }}
            className="relative bg-white w-full max-w-xl rounded-[40px] md:rounded-[50px] overflow-hidden shadow-2xl my-auto"
          >
            {/* PROGRESS BAR LOGIC */}
            {!email && !isSubmitted && (
              <div className="absolute top-0 left-0 w-full h-1 bg-zinc-100 md:hidden">
                <motion.div
                  className="h-full bg-black"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}

            {!isSubmitted && (
              <div className="hidden md:block w-full max-w-sm mx-auto mt-6">
                <div className="flex justify-between items-end mb-2 px-1">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">
                    System Ready
                  </span>
                  <span className="text-[9px] font-mono text-zinc-500">
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="h-[3px] w-full bg-zinc-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-black shadow-[0_0_8px_rgba(0,0,0,0.1)]"
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
              <motion.div
                animate={
                  isLoading ? { rotate: 360 } : { rotate: [0, 5, -5, 0] }
                }
                transition={
                  isLoading
                    ? { repeat: Infinity, duration: 1, ease: "linear" }
                    : { repeat: Infinity, duration: 4, ease: "easeInOut" }
                }
                className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-white mx-auto mb-8 shadow-xl"
              >
                <Hammer size={32} />
              </motion.div>

              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-2">
                Craft_ByIbk Studio
              </h3>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
                Refining the <br />{" "}
                <span className="text-zinc-300">Experience</span>
              </h2>

              <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-widest leading-relaxed mb-10 max-w-xs mx-auto">
                We&apos;re working hard to bring you exciting new features that
                match the craftsmanship of our products. This will be ready
                Soon!
              </p>

              <div className="relative mb-10">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="relative group">
                    <input
                      type="email"
                      required
                      disabled={isLoading}
                      placeholder={
                        isLoading ? "PROCESSING..." : "ENTER YOUR EMAIL"
                      }
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full bg-zinc-50 border ${errorMessage ? "border-red-500" : "border-zinc-200"} rounded-2xl py-5 px-6 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-black transition-all ${isLoading ? "opacity-50" : "opacity-100"}`}
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-xl hover:bg-zinc-800 transition-colors flex items-center justify-center min-w-[44px]"
                    >
                      {isLoading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            ease: "linear",
                          }}
                        >
                          <Hammer size={16} />
                        </motion.div>
                      ) : (
                        <Send size={16} />
                      )}
                    </button>
                    {errorMessage && (
                      <p className="text-[9px] text-red-500 font-black uppercase mt-2 text-left ml-2 tracking-widest">
                        {errorMessage}
                      </p>
                    )}
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-5 bg-zinc-900 rounded-2xl text-white flex items-center justify-center gap-3"
                  >
                    <CheckCircle2 size={18} className="text-white" />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Welcome to the Inner Circle
                    </span>
                  </motion.div>
                )}

                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -top-12 left-0 right-0 mx-auto w-fit bg-black text-white px-4 py-2 rounded-full text-[8px] font-black uppercase tracking-[0.3em] shadow-xl"
                    >
                      Subscription Successful
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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
