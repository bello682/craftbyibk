"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, X, Clock, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { subscribeToNewsletter } from "@/lib/store/redux/adminSlice";

const fallbackPosts = [
  {
    id: "art-of-stitching",
    title: "The Art of Hand-Stitching: Why We Refuse Machines",
    category: "Process",
    date: "OCT 12",
    excerpt:
      "In an era of mass production, we double down on the slow, deliberate pace of the saddle stitch.",
    image:
      "https://i.pinimg.com/736x/f8/7d/17/f87d1790cec66ddf278222b16dc2a767.jpg",
  },
  {
    id: "lagos-leather",
    title: "Sourcing Full-Grain Leather in the Heart of Lagos",
    category: "Sustainability",
    date: "SEP 28",
    excerpt:
      "Exploring the local tanneries that provide the foundation for every Craft_ByIbk piece.",
    image:
      "https://i.pinimg.com/1200x/fc/00/40/fc00403993a01f56c0307d0b38e5e746.jpg",
  },
  {
    id: "minimalism-lifestyle",
    title: "Minimalism as a Lifestyle: Choosing Quality Over Quantity",
    category: "Philosophy",
    date: "AUG 15",
    excerpt:
      "How a single well-crafted bag can replace a closet full of temporary fashion.",
    image:
      "https://i.pinimg.com/736x/f8/7d/17/f87d1790cec66ddf278222b16dc2a767.jpg",
  },
];

export default function JournalPage() {
  const dispatch = useDispatch<any>();
  const [emailValue, setEmailValue] = useState("");
  const [posts, setPosts] = useState(fallbackPosts);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const { newsletterLoading, error } = useSelector((state: any) => state.admin);

  // Error Handling Effect
  useEffect(() => {
    if (error) {
      setToast({ message: error, type: "error" });
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    const fetchJournalData = async () => {
      const API_KEY =
        process.env.NEXT_PUBLIC_API_KEY || "e60fb84821105b73ed1403addf5a6489";

      try {
        // Fetch 10 articles to populate the sidebar as well
        // const response = await fetch(
        //   `https://gnews.io/api/v4/search?q=luxury+leather+fashion&lang=en&max=10&apikey=${API_KEY}`,
        // );
        // Broader query to get a full list of 10 (the max allowed on Free)
        const response = await fetch(
          `https://gnews.io/api/v4/search?q=luxury+OR+fashion+OR+leather+OR+artisanal&lang=en&max=10&apikey=${API_KEY}`,
        );
        const data = await response.json();

        if (data.articles) {
          const formatted = data.articles.map((article: any) => ({
            id: article.title
              .replace(/[^\w\s-]/g, "")
              .replace(/\s+/g, "-")
              .toLowerCase(),
            title: article.title,
            category: "GLOBAL INSIGHT",
            date: new Date(article.publishedAt)
              .toLocaleDateString("en-US", { month: "short", day: "numeric" })
              .toUpperCase(),
            excerpt: article.description,
            image: article.image,
          }));
          // setPosts(formatted);
          // This combines API results with your 3 brand posts to ensure the list is long
          setPosts([...formatted, ...fallbackPosts]);
        }
      } catch (err) {
        console.warn("API Fetch failed, using fallback.");
      } finally {
        setLoading(false);
      }
    };
    fetchJournalData();
  }, []);

  // const handleSubscribe = async (e: any) => {
  //   e.preventDefault();
  //   if (!emailValue) return;
  //   dispatch(subscribeToNewsletter(emailValue));
  // };
  const handleSubscribe = async (e: any) => {
    e.preventDefault();
    if (!emailValue) return;

    const result = await dispatch(subscribeToNewsletter(emailValue));

    // ONLY clear field and show success if the action actually succeeded
    if (subscribeToNewsletter.fulfilled.match(result)) {
      setToast({ message: "WELCOME TO THE INNER CIRCLE.", type: "success" });
      setEmailValue(""); // Clear input
      setTimeout(() => setToast(null), 4000);
    }
    // If it fails, the 'error' useEffect above handles the error toast
    // and the emailValue remains in the input field.
  };

  return (
    <div
      className={`min-h-screen bg-white text-black ${isSidebarOpen ? "overflow-hidden" : ""}`}
    >
      <Navbar />

      {/* SIDEBAR OVERLAY */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] cursor-crosshair"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-8 border-b border-zinc-100 flex justify-between items-center">
                <div>
                  <h2 className="font-black uppercase text-2xl tracking-tighter">
                    The Archive
                  </h2>
                  <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest">
                    Extended Journal Entries
                  </p>
                </div>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center hover:bg-black hover:text-white transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-4">
                {posts.map((post, idx) => (
                  <Link
                    key={idx}
                    href={`/pages/journal/${post.id}`}
                    className="group flex gap-4 p-4 rounded-3xl hover:bg-zinc-50 transition-all border border-transparent hover:border-zinc-100"
                  >
                    <div className="relative w-20 h-20 shrink-0 rounded-2xl overflow-hidden bg-zinc-100">
                      <Image
                        src={post.image}
                        alt=""
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-[8px] font-black text-zinc-400 mb-1">
                        <Clock size={10} /> {post.date}
                      </div>
                      <h3 className="text-sm font-black uppercase leading-tight group-hover:text-zinc-600 line-clamp-2">
                        {post.title}
                      </h3>
                    </div>
                    <div className="ml-auto flex items-center">
                      <ChevronRight
                        size={16}
                        className="text-zinc-200 group-hover:text-black transition-colors"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <main className="pt-32 pb-20 px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(50px,12vw,180px)] font-black uppercase tracking-tighter leading-[0.8]"
          >
            THE <br /> <span className="text-zinc-200">JOURNAL.</span>
          </motion.h1>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="group flex items-center gap-4 bg-zinc-900 text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all"
          >
            View More News
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/40 transition-all">
              <ChevronRight size={14} />
            </div>
          </button>
        </header>

        {/* FEATURED POST (posts[0]) */}
        <section className="mb-32">
          <Link
            href={`/pages/journal/${posts[0]?.id}`}
            className="group cursor-pointer"
          >
            <div className="relative w-full h-[60vh] bg-zinc-100 rounded-[40px] md:rounded-[60px] overflow-hidden mb-8">
              <Image
                src={posts[0]?.image}
                alt="Featured"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute top-10 left-10 bg-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest z-20">
                {posts[0]?.category}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter max-w-2xl group-hover:text-zinc-500 transition-colors line-clamp-2">
                {posts[0]?.title}
              </h2>
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-zinc-400 font-bold">
                  {posts[0]?.date}
                </span>
                <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* SECONDARY GRID (posts 1 and 2) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {posts.slice(1, 3).map((post, idx) => (
            <Link
              href={`/pages/journal/${post.id}`}
              key={idx}
              className="group"
            >
              <div className="relative aspect-[16/10] bg-zinc-50 rounded-[30px] overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="flex gap-6">
                <span className="text-[10px] font-black uppercase tracking-tighter vertical-text border-r border-zinc-200 pr-4 h-fit">
                  {post.date}
                </span>
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
                    {post.category}
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight leading-tight group-hover:text-zinc-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-zinc-500 text-sm max-w-sm line-clamp-3">
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
          <form
            onSubmit={handleSubscribe}
            className="w-full max-w-md flex border-b border-black py-2"
          >
            <input
              type="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              placeholder="EMAIL ADDRESS"
              className="bg-transparent flex-1 outline-none text-xs font-bold tracking-widest uppercase"
            />
            <button
              type="submit"
              className="text-[10px] font-black uppercase tracking-[0.3em]"
            >
              {newsletterLoading ? "Sending..." : "Subscribe"}
            </button>
          </form>
        </section>
      </main>
      <Footer />
      {/* TOAST NOTIFICATION */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className={`fixed bottom-10 left-1/2 z-[100] px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl ${
              toast.type === "success"
                ? "bg-black text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
