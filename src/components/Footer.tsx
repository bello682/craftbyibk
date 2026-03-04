// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import {
//   Instagram,
//   Twitter,
//   Facebook,
//   Linkedin,
//   Youtube,
//   MessageCircle,
// } from "lucide-react";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   const footerLinks = {
//     shop: [
//       { name: "All Collections", href: "/shop" },
//       { name: "Handmade", href: "/shop/handmade" },
//       { name: "Signature", href: "/shop/signature" },
//       { name: "Limited Edition", href: "/shop/limited" },
//     ],
//     company: [
//       { name: "Our Story", href: "/about" },
//       { name: "Craftsmanship", href: "/craftsmanship" },
//       { name: "Sustainability", href: "/sustainability" },
//       { name: "Journal", href: "/journal" },
//     ],
//     support: [
//       { name: "Shipping", href: "/support/shipping" },
//       { name: "Returns", href: "/support/returns" },
//       { name: "Care Guide", href: "/support/care" },
//       { name: "Contact", href: "/contact" },
//     ],
//   };

//   const socials = [
//     { icon: <Facebook size={14} />, href: "https://facebook.com/craft_byibk" },
//     { icon: <Instagram size={14} />, href: "https://instagram.com/craft_byibk" },
//     { icon: <Twitter size={14} />, href: "https://twitter.com/craft_byibk" },
//     { icon: <Youtube size={14} />, href: "https://youtube.com/craft_byibk" },
//     { icon: <MessageCircle size={14} />, href: "https://wa.me/yournumber" },
//   ];

//   return (
//     <footer className="relative bg-black text-white pt-20 pb-10 px-6 md:px-16 border-t border-zinc-900 overflow-hidden">
//       {/* THE BIG FADED IBK - Background Layer */}
//       <div className="absolute -bottom-[10%] left-0 w-full pointer-events-none select-none z-0">
//         <h1 className="text-[28vw] font-black leading-none uppercase tracking-tighter text-zinc-900/40">
//           CRAFT_BYIBK
//         </h1>
//         {/* The fade overlay to make it sink into the background toward the right */}
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black w-full h-full" />
//       </div>

//       <div className="max-w-[1440px] mx-auto relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
//           {/* Brand Column */}
//           <div className="flex flex-col gap-6">
//             <h2 className="text-2xl font-black tracking-tighter uppercase">
//               CRAFT BY IBK
//             </h2>
//             <p className="text-zinc-500 text-[10px] md:text-xs leading-relaxed uppercase tracking-widest max-w-[240px]">
//               Elevating the standard of artisanal leather goods. Each piece is a
//               testament to the patient art of hand-crafting.
//             </p>

//             {/* Real Social Links */}
//             <div className="flex gap-3 mt-2">
//               {socials.map((social, idx) => (
//                 <Link
//                   key={idx}
//                   href={social.href}
//                   target="_blank"
//                   className="w-8 h-8 bg-zinc-900 flex items-center justify-center text-zinc-500 hover:bg-white hover:text-black transition-all rounded-sm"
//                 >
//                   {social.icon}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Links: Shop */}
//           <div>
//             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-white">
//               Shop
//             </h4>
//             <ul className="flex flex-col gap-4">
//               {footerLinks.shop.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="text-zinc-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Links: Company */}
//           <div>
//             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-white">
//               Company
//             </h4>
//             <ul className="flex flex-col gap-4">
//               {footerLinks.company.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="text-zinc-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Links: Support */}
//           <div>
//             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-white">
//               Support
//             </h4>
//             <ul className="flex flex-col gap-4">
//               {footerLinks.support.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="text-zinc-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
//           <p className="text-zinc-600 text-[9px] uppercase tracking-[0.3em]">
//             © {currentYear} CRAFT BY IBK. ALL RIGHTS RESERVED.
//           </p>
//           <div className="flex gap-8">
//             <Link
//               href="/privacy"
//               className="text-zinc-600 hover:text-zinc-400 text-[9px] uppercase tracking-[0.3em]"
//             >
//               Privacy
//             </Link>
//             <Link
//               href="/terms"
//               className="text-zinc-600 hover:text-zinc-400 text-[9px] uppercase tracking-[0.3em]"
//             >
//               Terms
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: "All Collections", href: "/pages/collections" }, // Existing
      { name: "Handmade", href: "/pages/handmade" }, // Pointed to main shop for now
      { name: "Signature", href: "/pages/signature" }, // Pointed to main shop for now
      { name: "Limited Edition", href: "/pages/limited" }, // Pointed to main shop for now
    ],
    company: [
      { name: "Our Story", href: "/pages/about" }, // Built
      { name: "Craftsmanship", href: "/pages/craftsmanship" }, // Built
      { name: "Sustainability", href: "/pages/sustainability" }, // Built
      { name: "Journal", href: "/pages/journal" }, // Built
    ],
    support: [
      { name: "Shipping", href: "/pages/support" }, // Pointed to contact until page is built
      { name: "Returns", href: "/pages/support" }, // Pointed to contact until page is built
      { name: "Care Guide", href: "/pages/careguide" }, // Pointed to journal for now (Blog post style)
      { name: "Contact", href: "/pages/contact" }, // Built
    ],
  };

  const socials = [
    { icon: <Facebook size={14} />, href: "https://facebook.com/craft_byibk" },
    {
      icon: <Instagram size={14} />,
      href: "https://instagram.com/craft_byibk",
    },
    { icon: <Twitter size={14} />, href: "https://twitter.com/craft_byibk" },
    { icon: <Youtube size={14} />, href: "https://youtube.com/craft_byibk" },
    { icon: <MessageCircle size={14} />, href: "https://wa.me/2348123456789" }, // Added a placeholder Lagos number format
  ];

  return (
    <footer className="relative bg-black text-white pt-20 pb-10 px-6 md:px-16 border-t border-zinc-900 overflow-hidden">
      {/* THE BIG FADED IBK - Background Layer */}
      <div className="absolute -bottom-[10%] left-0 w-full pointer-events-none select-none z-0">
        <h1 className="text-[28vw] font-black leading-none uppercase tracking-tighter text-zinc-900/40">
          CRAFT_BYIBK
        </h1>
        {/* The fade overlay to make it sink into the background toward the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black w-full h-full" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-black tracking-tighter uppercase">
              CRAFT_BYIBK
            </h2>
            <p className="text-zinc-500 text-[10px] md:text-xs leading-relaxed uppercase tracking-widest max-w-[240px]">
              Elevating the standard of artisanal leather goods. Each piece is a
              testament to the patient art of hand-crafting.
            </p>

            {/* Real Social Links */}
            <div className="flex gap-3 mt-2">
              {socials.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="w-8 h-8 bg-zinc-900 flex items-center justify-center text-zinc-500 hover:bg-white hover:text-black transition-all rounded-sm"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links: Shop */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-white">
              Shop
            </h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Company */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-white">
              Company
            </h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Support */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-white">
              Support
            </h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[9px] uppercase tracking-[0.3em]">
            © {currentYear} CRAFT_BYIBK. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <Link
              href="/pages/privacy"
              className="text-zinc-600 hover:text-zinc-400 text-[9px] uppercase tracking-[0.3em]"
            >
              Privacy
            </Link>
            <Link
              href="/pages/terms"
              className="text-zinc-600 hover:text-zinc-400 text-[9px] uppercase tracking-[0.3em]"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
