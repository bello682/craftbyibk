"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
        {/* BIG HEADER */}
        <section className="mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(50px,15vw,180px)] font-black uppercase tracking-tighter leading-[0.8] mb-12"
          >
            GET IN <br />
            <span className="text-zinc-200">TOUCH.</span>
          </motion.h1>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LEFT: CONTACT INFO */}
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">
                Collaborations
              </h4>
              <Link
                href="mailto:hello@craftbyibk.com"
                className="group flex items-center gap-4 text-2xl md:text-4xl font-bold hover:text-zinc-500 transition-colors"
              >
                hello@craftbyibk.com
                <ArrowUpRight
                  className="text-zinc-300 group-hover:text-black transition-colors"
                  size={32}
                />
              </Link>
            </div>

            <div className="flex flex-col gap-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">
                Support & Sales
              </h4>
              <Link
                href="tel:+23400000000"
                className="text-2xl md:text-4xl font-bold hover:text-zinc-500 transition-colors"
              >
                +234 (0) 812 345 6789
              </Link>
            </div>

            <div className="flex flex-col gap-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">
                Studio Address
              </h4>
              <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed max-w-sm font-medium">
                12 Artisanal Way, <br />
                Lekki Phase 1, Lagos, <br />
                Nigeria.
              </p>
            </div>
          </div>

          {/* RIGHT: CLEAN FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-50 rounded-[40px] p-8 md:p-12 shadow-sm"
          >
            <form
              className="flex flex-col gap-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="bg-transparent border-b border-zinc-200 py-4 focus:border-black outline-none transition-colors text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-transparent border-b border-zinc-200 py-4 focus:border-black outline-none transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">
                  Subject
                </label>
                <select className="bg-transparent border-b border-zinc-200 py-4 focus:border-black outline-none transition-colors text-sm appearance-none cursor-pointer">
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Custom Commission</option>
                  <option>Press</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="bg-transparent border-b border-zinc-200 py-4 focus:border-black outline-none transition-colors text-sm resize-none"
                ></textarea>
              </div>

              <button className="bg-black text-white w-full py-6 mt-4 font-black uppercase tracking-widest text-xs hover:bg-zinc-800 transition-all rounded-full flex items-center justify-center gap-2">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Helper Link Component if not already imported
function Link({ href, children, className, target }: any) {
  return (
    <a href={href} target={target} className={className}>
      {children}
    </a>
  );
}
