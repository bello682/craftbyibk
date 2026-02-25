"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Hand-Stitching: Why We Refuse Machines",
    category: "Process",
    date: "OCT 12",
    excerpt:
      "In an era of mass production, we double down on the slow, deliberate pace of the saddle stitch.",
    image:
      "https://i.pinimg.com/736x/f8/7d/17/f87d1790cec66ddf278222b16dc2a767.jpg", // Close-up Stitching
  },
  {
    id: 2,
    title: "Sourcing Full-Grain Leather in the Heart of Lagos",
    category: "Sustainability",
    date: "SEP 28",
    excerpt:
      "Exploring the local tanneries that provide the foundation for every CraftByIbk piece.",
    image:
      "https://i.pinimg.com/1200x/fc/00/40/fc00403993a01f56c0307d0b38e5e746.jpg", // Raw Hides
  },
  {
    id: 3,
    title: "Minimalism as a Lifestyle: Choosing Quality Over Quantity",
    category: "Philosophy",
    date: "AUG 15",
    excerpt:
      "How a single well-crafted bag can replace a closet full of temporary fashion.",
    image:
      "https://i.pinimg.com/736x/f8/7d/17/f87d1790cec66ddf278222b16dc2a767.jpg", // Clean Lifestyle
  },
];

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
        {/* HEADER */}
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(50px,15vw,180px)] font-black uppercase tracking-tighter leading-[0.8]"
          >
            THE <br />
            <span className="text-zinc-200">JOURNAL.</span>
          </motion.h1>
          <p className="max-w-xs text-zinc-500 text-[10px] uppercase tracking-[0.3em] leading-relaxed mb-4">
            Notes on craftsmanship, <br /> local industry, and the <br /> modern
            artisanal life.
          </p>
        </header>

        {/* FEATURED POST (LARGE) */}
        <section className="mb-32">
          <Link
            href={`/journal/${blogPosts[0].id}`}
            className="group cursor-pointer"
          >
            {/* <div className="relative w-full h-[60vh] bg-zinc-100 rounded-[40px] md:rounded-[60px] overflow-hidden mb-8">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-300 font-black uppercase tracking-widest text-3xl">
                Featured Story
              </div>
               <Image src="/path" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-10 left-10 bg-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
                {blogPosts[0].category}
              </div>
            </div> */}
            <div className="relative w-full h-[60vh] bg-zinc-100 rounded-[40px] md:rounded-[60px] overflow-hidden mb-8 group">
              {/* The Image you find */}
              <Image
                src="https://i.pinimg.com/1200x/81/13/f5/8113f53890a140dfb9e1b95b8215e715.jpg?auto=compress&cs=tinysrgb&w=1600"
                alt="Featured Story"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />

              {/* IMPORTANT: Dark overlay so your text is visible */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

              <div className="absolute inset-0 flex items-center justify-center text-white font-black uppercase tracking-widest text-3xl z-10 pointer-events-none">
                Featured Story
              </div>

              <div className="absolute top-10 left-10 bg-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest z-20">
                {blogPosts[0].category}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter max-w-2xl group-hover:text-zinc-500 transition-colors">
                {blogPosts[0].title}
              </h2>
              <div className="flex items-center gap-4">
                <span className="text-zinc-400 font-bold">
                  {blogPosts[0].date}
                </span>
                <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* SECONDARY GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {blogPosts.slice(1).map((post) => (
            <Link href={`/journal/${post.id}`} key={post.id} className="group">
              {/* <div className="relative aspect-[16/10] bg-zinc-50 rounded-[30px] overflow-hidden mb-8">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-200 font-black uppercase text-xl">
                  {post.image}
                </div>
                Image Component here
              </div> */}
              <div className="relative aspect-[16/10] bg-zinc-50 rounded-[30px] overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 flex items-center justify-center text-zinc-200 font-black uppercase text-xl bg-black/10">
                  {/* {post.category} */}
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-[10px] font-black uppercase tracking-tighter vertical-text border-r border-zinc-200 pr-4 h-fit">
                  {post.date}
                </span>
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
                    {post.category}
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-zinc-500 text-sm max-w-sm">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* NEWSLETTER CTA */}
        <section className="mt-40 py-24 border-y border-zinc-100 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
            JOIN THE <br /> INNER CIRCLE
          </h2>
          <p className="text-zinc-500 uppercase tracking-widest text-[10px] mb-12">
            Early access to drops and behind-the-scenes stories.
          </p>
          <div className="w-full max-w-md flex border-b border-black py-2">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="bg-transparent flex-1 outline-none text-xs font-bold tracking-widest uppercase"
            />
            <button className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-zinc-400 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
