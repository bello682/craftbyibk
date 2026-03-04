// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, ShoppingBag, Search, User, Hammer } from "lucide-react";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "Shop", href: "/pages/shop" },
//   { name: "Collections", href: "/pages/collections" },
//   { name: "About", href: "/pages/about" },
// ];

// export function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled
//             ? "bg-white/90 backdrop-blur-md shadow-sm"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex h-20 items-center justify-between">
//             {/* Logo */}
//             {/* <Link href="/" className="flex items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="flex items-baseline gap-0.5"
//               >
//                 <span className="font-display text-2xl font-bold tracking-tight text-black">
//                   CRAFT
//                 </span>
//                 <span className="font-display text-2xl font-light tracking-tight text-black">
//                   _BY
//                 </span>
//                 <span className="font-display text-2xl font-bold tracking-tight text-black">
//                   IBK
//                 </span>
//               </motion.div>
//             </Link> */}

//             <Link href="/" className="flex items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="flex items-center"
//               >
//                 <span className="font-display text-2xl font-bold tracking-tight text-black">
//                   CRAFT
//                 </span>

//                 {/* CONTAINER FOR THE FADED SHADOW EFFECT */}
//                 <span className="relative font-display text-2xl font-light tracking-tight text-black flex items-center">
//                   {/* THE FADED ANIMATED ICON (The Shadow) */}
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
//               {/* <button className="p-2 hover:bg-secondary rounded-full transition-colors">
//                 <Search className="h-5 w-5" />
//               </button>
//               <button className="hidden sm:block p-2 hover:bg-secondary rounded-full transition-colors">
//                 <User className="h-5 w-5" />
//               </button> */}
//               {/* <button className="p-2 hover:bg-secondary rounded-full transition-colors relative cursor-pointer">
//                 <ShoppingBag className="h-5 w-5" />
//                 <span className="absolute -top-1 -right-1 h-4 w-4 bg-black text-white text-[10px] flex items-center justify-center rounded-full">
//                   0
//                 </span>
//               </button> */}

//               {/* Mobile Menu Button */}
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
//             className="fixed inset-0 z-40 bg-white pt-20 md:hidden"
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
import { Menu, X, ShoppingBag, Search, User, Hammer } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications } from "../lib/store/redux/adminSlice"; // Adjust path
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
    // Fetch live notifications on mount
    dispatch(getNotifications() as any);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);
  // The logic: Only offset if there are notifications AND the user hasn't closed the banner
  const isOffset = notifications && notifications.length > 0 && showBanner;

  // Check if we should offset the navbar because of the banner
  const hasNotifications = notifications && notifications.length > 0;

  return (
    <>
      {/* <TopBanner notifications={notifications} onClose={setShowBanner} /> */}

      <AnimatePresence>
        {isOffset && (
          <TopBanner
            notifications={notifications}
            onClose={setShowBanner} // Pass the setter function
          />
        )}
      </AnimatePresence>

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
        style={{ top: isOffset ? "40px" : "0px" }} // Dynamic inline style for instant snap-back
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center"
              >
                <span className="font-display text-2xl font-bold tracking-tight text-black">
                  CRAFT
                </span>
                <span className="relative font-display text-2xl font-light tracking-tight text-black flex items-center">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1.1, 1],
                      opacity: [0.1, 0.15, 0.15, 0.1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none"
                  >
                    <div className="w-12 h-12 bg-zinc-400 rounded-full blur-xl absolute opacity-30" />
                    <Hammer size={40} className="text-black" />
                  </motion.div>
                  _BY
                </span>
                <span className="font-display text-2xl font-bold tracking-tight text-black ml-1">
                  IBK
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-black/70 relative group ${
                    pathname === link.href ? "text-black" : "text-black/60"
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                className="md:hidden p-2 hover:bg-secondary rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 z-40 bg-white md:hidden ${hasNotifications ? "pt-30" : "pt-20"}`}
          >
            <nav className="flex flex-col items-center gap-8 p-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
