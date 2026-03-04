"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Droplets, Sun, Wind, ShieldCheck } from "lucide-react";
import Image from "next/image";

const careSteps = [
  {
    icon: <Droplets size={24} />,
    title: "Moisture Control",
    desc: "If your piece gets wet, pat it dry immediately with a soft, lint-free cloth. Allow it to air dry naturally away from artificial heat sources.",
  },
  {
    icon: <Sun size={24} />,
    title: "Light & Heat",
    desc: "Prolonged exposure to direct sunlight or high heat can dry out the natural oils in the leather, leading to cracking or fading.",
  },
  {
    icon: <Wind size={24} />,
    title: "Storage",
    desc: "When not in use, store your bag in the provided cotton dust bag. Stuff it lightly with acid-free tissue paper to maintain its silhouette.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Conditioning",
    desc: "Apply a high-quality leather cream every 6 months. Test on a small, inconspicuous area first as natural leather will darken slightly.",
  },
];

export default function CareGuidePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
        {/* HERO SECTION */}
        <section className="mb-32">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(50px,12vw,160px)] font-black uppercase tracking-tighter leading-[0.8] mb-12"
          >
            THE <br />
            <span className="text-zinc-200">CARE GUIDE.</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl uppercase tracking-tight">
            A Craft_ByIbk piece is designed to age with you. Proper care ensures
            the leather develops a rich patina and remains a staple of your
            wardrobe for decades to come.
          </p>
        </section>

        {/* GUIDELINES GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mb-32">
          {careSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-8 group"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-500">
                {step.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tighter">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-widest max-w-md">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* PATINA EDUCATION SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 bg-zinc-900 text-white rounded-[50px] overflow-hidden">
          <div className="p-12 md:p-24 flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
              THE BEAUTY <br /> OF PATINA.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed uppercase tracking-widest mb-8">
              Natural leather is a living material. Over time, it will absorb
              oils from your hands and exposure to the elements, creating a
              darker, glossier finish unique to your journey. This is not a
              defect; it is the mark of authenticity.
            </p>
            <div className="flex gap-4">
              <div className="flex-1 border-t border-zinc-700 pt-4">
                <p className="text-[10px] font-black uppercase text-zinc-500 mb-2">
                  Day 1
                </p>
                <p className="text-xs font-bold uppercase">Matte & Pale</p>
              </div>
              <div className="flex-1 border-t border-zinc-700 pt-4">
                <p className="text-[10px] font-black uppercase text-zinc-500 mb-2">
                  Year 2
                </p>
                <p className="text-xs font-bold uppercase">Rich & Deep</p>
              </div>
            </div>
          </div>
          {/* <div className="h-[400px] lg:h-auto bg-zinc-800 relative">
            <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-black uppercase tracking-[2em] text-xs transform rotate-90">
              Aging Process
            </div>
            Replace with Image showing old vs new leather
          </div> */}
          <div className="h-[400px] lg:h-auto bg-zinc-800 relative group overflow-hidden">
            {/* The Patina Comparison Image */}
            <Image
              src="https://i.pinimg.com/1200x/3d/dd/cb/3dddcb24096bf058a3b625c73a63c141.jpg?auto=compress&cs=tinysrgb&w=1600"
              alt="Leather Patina Aging Process"
              fill
              className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
              unoptimized
            />

            <div className="absolute inset-0 flex items-center justify-center text-zinc-300 font-black uppercase tracking-[2em] text-xs transform rotate-90 pointer-events-none z-10">
              Aging Process
            </div>
          </div>
        </section>

        {/* QUICK TIPS */}
        <section className="border-t border-zinc-100 pt-20 flex flex-col items-center text-center">
          <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-12">
            Artisan Tips
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            <div className="space-y-4">
              <p className="text-4xl font-black italic">NO.</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Never use alcohol-based cleaners or baby wipes.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-4xl font-black italic">YES.</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Use a dedicated horsehair brush for dusting.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-4xl font-black italic">STOP.</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Don't over-condition. Once every 6 months is plenty.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
