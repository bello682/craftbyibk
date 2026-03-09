// // "use client";

// // import { useState, useEffect } from "react";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Menu, X, ShoppingBag, Search, User, Hammer } from "lucide-react";

// // const navLinks = [
// //   { name: "Home", href: "/" },
// //   { name: "Shop", href: "/pages/shop" },
// //   { name: "Collections", href: "/pages/collections" },
// //   { name: "About", href: "/pages/about" },
// // ];

// // export function Navbar() {
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const pathname = usePathname();

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 50);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <>
// //       <header
// //         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
// //           isScrolled
// //             ? "bg-white/90 backdrop-blur-md shadow-sm"
// //             : "bg-transparent"
// //         }`}
// //       >
// //         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// //           <div className="flex h-20 items-center justify-between">
// //             {/* Logo */}
// //             {/* <Link href="/" className="flex items-center">
// //               <motion.div
// //                 initial={{ opacity: 0, x: -20 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 className="flex items-baseline gap-0.5"
// //               >
// //                 <span className="font-display text-2xl font-bold tracking-tight text-black">
// //                   CRAFT
// //                 </span>
// //                 <span className="font-display text-2xl font-light tracking-tight text-black">
// //                   _BY
// //                 </span>
// //                 <span className="font-display text-2xl font-bold tracking-tight text-black">
// //                   IBK
// //                 </span>
// //               </motion.div>
// //             </Link> */}

// //             <Link href="/" className="flex items-center">
// //               <motion.div
// //                 initial={{ opacity: 0, x: -20 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 className="flex items-center"
// //               >
// //                 <span className="font-display text-2xl font-bold tracking-tight text-black">
// //                   CRAFT
// //                 </span>

// //                 {/* CONTAINER FOR THE FADED SHADOW EFFECT */}
// //                 <span className="relative font-display text-2xl font-light tracking-tight text-black flex items-center">
// //                   {/* THE FADED ANIMATED ICON (The Shadow) */}
// //                   <motion.div
// //                     animate={{
// //                       rotate: [0, 10, -10, 0],
// //                       scale: [1, 1.1, 1.1, 1],
// //                       opacity: [0.1, 0.15, 0.15, 0.1],
// //                     }}
// //                     transition={{
// //                       repeat: Infinity,
// //                       duration: 5,
// //                       ease: "easeInOut",
// //                     }}
// //                     className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none"
// //                   >
// //                     <div className="w-12 h-12 bg-zinc-400 rounded-full blur-xl absolute opacity-30" />
// //                     <Hammer size={40} className="text-black" />
// //                   </motion.div>
// //                   _BY
// //                 </span>

// //                 <span className="font-display text-2xl font-bold tracking-tight text-black ml-1">
// //                   IBK
// //                 </span>
// //               </motion.div>
// //             </Link>

// //             {/* Desktop Navigation */}
// //             <nav className="hidden md:flex items-center gap-8">
// //               {navLinks.map((link) => (
// //                 <Link
// //                   key={link.name}
// //                   href={link.href}
// //                   className={`text-sm font-medium transition-colors hover:text-black/70 relative group ${
// //                     pathname === link.href ? "text-black" : "text-black/60"
// //                   }`}
// //                 >
// //                   {link.name}
// //                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
// //                 </Link>
// //               ))}
// //             </nav>

// //             {/* Actions */}
// //             <div className="flex items-center gap-4">
// //               {/* <button className="p-2 hover:bg-secondary rounded-full transition-colors">
// //                 <Search className="h-5 w-5" />
// //               </button>
// //               <button className="hidden sm:block p-2 hover:bg-secondary rounded-full transition-colors">
// //                 <User className="h-5 w-5" />
// //               </button> */}
// //               {/* <button className="p-2 hover:bg-secondary rounded-full transition-colors relative cursor-pointer">
// //                 <ShoppingBag className="h-5 w-5" />
// //                 <span className="absolute -top-1 -right-1 h-4 w-4 bg-black text-white text-[10px] flex items-center justify-center rounded-full">
// //                   0
// //                 </span>
// //               </button> */}

// //               {/* Mobile Menu Button */}
// //               <button
// //                 className="md:hidden p-2 hover:bg-secondary rounded-full transition-colors"
// //                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //               >
// //                 {isMobileMenuOpen ? (
// //                   <X className="h-5 w-5" />
// //                 ) : (
// //                   <Menu className="h-5 w-5" />
// //                 )}
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Mobile Menu */}
// //       <AnimatePresence>
// //         {isMobileMenuOpen && (
// //           <motion.div
// //             initial={{ opacity: 0, y: -20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -20 }}
// //             className="fixed inset-0 z-40 bg-white pt-20 md:hidden"
// //           >
// //             <nav className="flex flex-col items-center gap-8 p-8">
// //               {navLinks.map((link) => (
// //                 <Link
// //                   key={link.name}
// //                   href={link.href}
// //                   onClick={() => setIsMobileMenuOpen(false)}
// //                   className="text-2xl font-display font-medium"
// //                 >
// //                   {link.name}
// //                 </Link>
// //               ))}
// //             </nav>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // }

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, ShoppingBag, Search, User, Hammer } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { getNotifications } from "../lib/store/redux/adminSlice"; // Adjust path
// import TopBanner from "./TopBanner";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "Shop", href: "/pages/shop" },
//   { name: "Collections", href: "/pages/collections" },
//   { name: "About", href: "/pages/about" },
// ];

// export function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [showBanner, setShowBanner] = useState(true);
//   const pathname = usePathname();

//   const dispatch = useDispatch();
//   const { notifications } = useSelector((state: any) => state.admin);

//   useEffect(() => {
//     // Fetch live notifications on mount
//     dispatch(getNotifications() as any);

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [dispatch]);
//   // The logic: Only offset if there are notifications AND the user hasn't closed the banner
//   const isOffset = notifications && notifications.length > 0 && showBanner;

//   // Check if we should offset the navbar because of the banner
//   const hasNotifications = notifications && notifications.length > 0;

//   return (
//     <>
//       {/* <TopBanner notifications={notifications} onClose={setShowBanner} /> */}

//       <AnimatePresence>
//         {isOffset && (
//           <TopBanner
//             notifications={notifications}
//             onClose={setShowBanner} // Pass the setter function
//           />
//         )}
//       </AnimatePresence>

//       <header
//         className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
//           isScrolled
//             ? "bg-white/90 backdrop-blur-md shadow-sm"
//             : "bg-transparent"
//         }`}
//         style={{ top: isOffset ? "40px" : "0px" }} // Dynamic inline style for instant snap-back
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex h-20 items-center justify-between">
//             {/* Logo */}
//             <Link href="/" className="flex items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="flex items-center"
//               >
//                 <span className="font-display text-2xl font-bold tracking-tight text-black">
//                   CRAFT
//                 </span>
//                 <span className="relative font-display text-2xl font-light tracking-tight text-black flex items-center">
//                   <motion.div
//                     animate={{
//                       rotate: [0, 10, -10, 0],
//                       scale: [1, 1.1, 1.1, 1],
//                       opacity: [0.1, 0.15, 0.15, 0.1],
//                     }}
//                     transition={{
//                       repeat: Infinity,
//                       duration: 5,
//                       ease: "easeInOut",
//                     }}
//                     className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none"
//                   >
//                     <div className="w-12 h-12 bg-zinc-400 rounded-full blur-xl absolute opacity-30" />
//                     <Hammer size={40} className="text-black" />
//                   </motion.div>
//                   _BY
//                 </span>
//                 <span className="font-display text-2xl font-bold tracking-tight text-black ml-1">
//                   IBK
//                 </span>
//               </motion.div>
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center gap-8">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className={`text-sm font-medium transition-colors hover:text-black/70 relative group ${
//                     pathname === link.href ? "text-black" : "text-black/60"
//                   }`}
//                 >
//                   {link.name}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
//                 </Link>
//               ))}
//             </nav>

//             {/* Actions */}
//             <div className="flex items-center gap-4">
//               <button
//                 className="md:hidden p-2 hover:bg-secondary rounded-full transition-colors"
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               >
//                 {isMobileMenuOpen ? (
//                   <X className="h-5 w-5" />
//                 ) : (
//                   <Menu className="h-5 w-5" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className={`fixed inset-0 z-40 bg-white md:hidden ${hasNotifications ? "pt-30" : "pt-20"}`}
//           >
//             <nav className="flex flex-col items-center gap-8 p-8">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="text-2xl font-display font-medium"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Hammer, ArrowRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications } from "../lib/store/redux/adminSlice";
import TopBanner from "./TopBanner";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/pages/shop" },
  { name: "Collections", href: "/pages/collections" },
  { name: "About", href: "/pages/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const pathname = usePathname();

  const dispatch = useDispatch();
  const { notifications } = useSelector((state: any) => state.admin);

  useEffect(() => {
    dispatch(getNotifications() as any);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  const isOffset = notifications && notifications.length > 0 && showBanner;

  return (
    <>
      <AnimatePresence>
        {isOffset && (
          <TopBanner notifications={notifications} onClose={setShowBanner} />
        )}
      </AnimatePresence>

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-zinc-100 py-3"
            : "bg-transparent py-5"
        }`}
        style={{ top: isOffset ? "40px" : "0px" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="group relative z-[60]">
              <motion.div className="flex items-center space-x-1">
                <span className="font-display text-xl font-bold tracking-tighter text-black">
                  CRAFT
                </span>
                <span className="relative font-display text-xl font-light text-black flex items-center italic">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ repeat: Infinity, duration: 6 }}
                    className="absolute inset-0 flex items-center justify-center -z-10"
                  >
                    <Hammer size={32} className="text-zinc-400" />
                  </motion.div>
                  _BY
                </span>
                <span className="font-display text-xl font-bold tracking-tighter text-black">
                  IBK
                </span>
              </motion.div>
            </Link>

            {/* Desktop Nav - Architectural Minimalist */}
            <nav className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:opacity-50 relative ${
                    pathname === link.href
                      ? "text-black font-semibold"
                      : "text-zinc-500"
                  }`}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-black"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Side / Mobile Trigger */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative z-[60] p-2 -mr-2 group"
                aria-label="Toggle Menu"
              >
                <div className="flex flex-col items-end justify-center gap-1.5 w-6 h-6">
                  <motion.span
                    animate={
                      isMobileMenuOpen
                        ? { rotate: 45, y: 8 }
                        : { rotate: 0, y: 0 }
                    }
                    className="h-[1.5px] bg-black w-6"
                  />
                  <motion.span
                    animate={
                      isMobileMenuOpen
                        ? { opacity: 0, x: 10 }
                        : { opacity: 1, x: 0 }
                    }
                    className="h-[1.5px] w-4 bg-black"
                  />
                  <motion.span
                    // REMOVED 'w: 24' and replaced with dynamic Tailwind class below
                    animate={
                      isMobileMenuOpen
                        ? { rotate: -45, y: -8 }
                        : { rotate: 0, y: 0 }
                    }
                    className={`h-[1.5px] bg-black transition-all duration-300 ${
                      isMobileMenuOpen ? "w-6" : "w-3"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modern Slide-in Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop - slightly darker for better focus */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[58]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[90%] max-w-sm bg-white z-[59] shadow-2xl flex flex-col"
            >
              {/* 1. DRAWER HEADER */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-zinc-50">
                <div className="flex items-center space-x-1 scale-90 origin-left">
                  <span className="font-display text-lg font-bold tracking-tighter text-black">
                    CRAFT
                  </span>
                  <span className="font-display text-lg font-light italic text-black">
                    _BY
                  </span>
                  <span className="font-display text-lg font-bold tracking-tighter text-black">
                    IBK
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-zinc-50 rounded-full transition-colors"
                >
                  <X size={20} className="text-black" />
                </button>
              </div>

              {/* 2. MAIN NAVIGATION */}
              <div className="flex-1 px-10 pt-12">
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-10">
                  Navigation
                </p>
                <div className="space-y-7">
                  {navLinks.map((link, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      key={link.name}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-end justify-between"
                      >
                        <span
                          className={`text-4xl font-display tracking-tighter transition-all duration-300 ${
                            pathname === link.href
                              ? "text-black"
                              : "text-zinc-300 hover:text-zinc-500"
                          }`}
                        >
                          {link.name}
                        </span>
                        <div
                          className={`h-[1px] flex-1 mx-4 mb-2 transition-all duration-500 ${
                            pathname === link.href
                              ? "bg-black/10"
                              : "bg-transparent"
                          }`}
                        />
                        <ArrowRight
                          className={`mb-1 transition-all duration-300 ${
                            pathname === link.href
                              ? "text-black opacity-100"
                              : "opacity-0 -translate-x-2"
                          }`}
                          size={20}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 3. PRODUCTION-LEVEL FOOTER */}
              <div className="p-10 bg-zinc-50/50">
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-3">
                      Project Inquiries
                    </p>
                    <a
                      href="mailto:hello@craftbyibk.com"
                      className="text-lg font-medium hover:text-zinc-600 transition-colors"
                    >
                      hello@craftbyibk.com
                    </a>
                  </div>

                  <div className="flex gap-6 pt-4">
                    {["Instagram", "LinkedIn", "Twitter"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="text-[11px] uppercase tracking-widest text-black font-bold hover:opacity-50 transition-opacity"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
