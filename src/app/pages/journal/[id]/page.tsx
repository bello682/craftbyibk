import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Clock,
  Globe,
  Share2,
  Bookmark,
} from "lucide-react";
import { motion } from "framer-motion";

// async function getGNews(topic: string, isRelated = false) {
//   const API_KEY = "e60fb84821105b73ed1403addf5a6489";

//   // If searching for specific ID, we use q, otherwise we use general luxury fashion
//   const query = isRelated
//     ? encodeURIComponent("luxury craftsmanship fashion design")
//     : encodeURIComponent(topic);

//   const url = `https://gnews.io/api/v4/search?q=${query}&lang=en&max=${isRelated ? 6 : 1}&apikey=${API_KEY}`;

//   const res = await fetch(url, { next: { revalidate: 3600 } });
//   if (!res.ok) return null;
//   return res.json();
// }

async function getGNews(topic: string, isRelated = false) {
  const API_KEY =
    process.env.NEXT_PUBLIC_API_KEY || "e60fb84821105b73ed1403addf5a6489";

  // Simplify the query so it's guaranteed to get results
  const query = isRelated
    ? encodeURIComponent("luxury fashion")
    : encodeURIComponent(topic);

  // from GNews API
  const url = `https://gnews.io/api/v4/search?q=${query}&lang=en&max=${isRelated ? 6 : 1}&apikey=${API_KEY}`;

  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) return null;
  return res.json();
}

const placeholderArticles = [
  {
    title: "The Evolution of Minimalist Design",
    source: { name: "Vogue" },
    url: "#",
    image:
      "https://i.pinimg.com/736x/f8/7d/17/f87d1790cec66ddf278222b16dc2a767.jpg",
    publishedAt: new Date().toISOString(),
  },
  {
    title: "Sustainable Luxury in 2026",
    source: { name: "Forbes" },
    url: "#",
    image:
      "https://i.pinimg.com/1200x/fc/00/40/fc00403993a01f56c0307d0b38e5e746.jpg",
    publishedAt: new Date().toISOString(),
  },
  {
    title: "Artisanal Craftsmanship Trends",
    source: { name: "GQ" },
    url: "#",
    image:
      "https://i.pinimg.com/736x/f8/7d/17/f87d1790cec66ddf278222b16dc2a767.jpg",
    publishedAt: new Date().toISOString(),
  },
];

export default async function JournalDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  if (!id) return null;

  const displayTitle = id.replace(/-/g, " ");

  // Fetch the specific article data and related news in parallel
  const [mainData, relatedData] = await Promise.all([
    getGNews(displayTitle),
    getGNews("", true),
  ]);

  const mainArticle = mainData?.articles?.[0];
  const relatedArticles = relatedData?.articles || [];

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* EDITORIAL HEADER SECTION */}
        <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
          <Link
            href="/pages/journal"
            className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] mb-12 hover:text-zinc-400 transition-colors"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Journal
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-8">
                <span className="bg-black text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  {mainArticle?.source.name || "Editorial"}
                </span>
                <span className="text-zinc-400 text-[9px] font-bold uppercase tracking-[0.2em]">
                  {mainArticle
                    ? new Date(mainArticle.publishedAt).toLocaleDateString(
                        "en-US",
                        { month: "long", day: "numeric", year: "numeric" },
                      )
                    : "OCT 2026"}
                </span>
              </div>

              <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                {mainArticle?.title || displayTitle}
              </h1>

              <p className="text-xl md:text-2xl text-zinc-500 font-medium leading-relaxed italic mb-10 border-l-4 border-zinc-100 pl-6">
                {mainArticle?.description ||
                  "Exploring the intersection of timeless craftsmanship and modern luxury in the global fashion landscape."}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-row lg:flex-col justify-end items-end gap-4">
              <button className="p-4 border border-zinc-100 rounded-full hover:bg-black hover:text-white transition-all">
                <Share2 size={20} />
              </button>
              <button className="p-4 border border-zinc-100 rounded-full hover:bg-black hover:text-white transition-all">
                <Bookmark size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* MAIN FEATURE IMAGE */}
        <section className="w-full h-[70vh] relative mb-24 overflow-hidden">
          <Image
            src={
              mainArticle?.image ||
              "https://i.pinimg.com/1200x/fc/00/40/fc00403993a01f56c0307d0b38e5e746.jpg"
            }
            alt="Hero Image"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20" />
        </section>

        {/* LONG-FORM CONTENT SIMULATION */}
        <section className="px-6 md:px-16 max-w-[900px] mx-auto mb-40">
          <div className="prose prose-zinc lg:prose-xl max-w-none">
            <p className="text-lg leading-relaxed text-zinc-700 mb-8">
              The evolution of the industry has brought us to a pivotal moment
              where the digital and the artisanal must coexist. In this deep
              dive, we look at how leaders in the space are redefining what it
              means to create "value" in a world of instant gratification.
            </p>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-6 mt-12">
              The Shift Toward Permanence
            </h2>
            <p className="text-lg leading-relaxed text-zinc-700 mb-8">
              Reliability and durability are no longer just technical
              specifications; they are the new luxury. As consumers move away
              from "fast-everything," the focus returns to the source—where
              materials are born and how they are handled by human hands.
            </p>
            <blockquote className="text-2xl font-bold italic border-y border-zinc-100 py-10 my-12 text-center">
              "True luxury is not about the price tag, but about the time
              invested in the creation of an object."
            </blockquote>
            <p className="text-lg leading-relaxed text-zinc-700 mb-12">
              For more in-depth analysis and the full technical breakdown, you
              can access the original report provided by our global partners.
            </p>

            <a
              href={mainArticle?.url || "#"}
              target="_blank"
              className="inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all"
            >
              Read Full Source Article <ExternalLink size={14} />
            </a>
          </div>
        </section>

        <hr className="border-zinc-100 mb-24" />

        {/* RELATED NEWS GRID */}
        <section className="px-6 md:px-16 max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Related
              </h2>
              <p className="text-zinc-400 text-[10px] uppercase tracking-[0.3em] font-bold">
                Insights from the global circuit
              </p>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {relatedArticles.map((article: any, index: number) => (
              <a
                href={article.url}
                key={index}
                target="_blank"
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/5] bg-zinc-50 rounded-[30px] overflow-hidden mb-8">
                  <Image
                    src={
                      article.image ||
                      "https://i.pinimg.com/736x/f8/7d/17/f87d1790cec66ddf278222b16dc2a767.jpg"
                    }
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Globe size={10} /> {article.source.name}
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={12} className="text-zinc-300" />
                  <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight leading-tight group-hover:text-zinc-500 transition-colors">
                  {article.title}
                </h3>
              </a>
            ))}
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {(relatedArticles.length > 0
              ? relatedArticles
              : placeholderArticles
            ).map((article: any, index: number) => (
              <a
                href={article.url}
                key={index}
                target="_blank"
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/5] bg-zinc-50 rounded-[30px] overflow-hidden mb-8">
                  <Image
                    src={
                      article.image ||
                      "https://i.pinimg.com/736x/f8/7d/17/f87d1790cec66ddf278222b16dc2a767.jpg"
                    }
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Globe size={10} /> {article.source?.name || "Global News"}
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={12} className="text-zinc-300" />
                  <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight leading-tight group-hover:text-zinc-500 transition-colors">
                  {article.title}
                </h3>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
