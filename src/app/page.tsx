import { Navbar } from "../components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "../components/Marquee";
import CategoryGrid from "../components/CategoryGrid";
import ProductCollection from "@/components/ProductCollection";
import BlackFeatureSection from "@/components/BlackFeatureSection";
import BigTextDivider from "@/components/BigTextDivider";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      {/* 1. Fixed Navigation as requested [cite: 13] */}
      <Navbar />

      <main className="pt-20">
        {" "}
        {/* Offset for the fixed navbar */}
        {/* 2. Massive Hero Section following the image [cite: 14] */}
        <Hero />
        {/* 3. Scrolling Brand Ticker [cite: 15] */}
        <Marquee />
        {/* 4. Asymmetric Category Grid [cite: 16] */}
        <CategoryGrid />
        {/* We will add "Our Collection" next [cite: 17] */}
        <ProductCollection />
        {/* This is the new component we created for the product grid */}
        <BigTextDivider />
        {/* This is the new component we created for the product grid */}
        <BlackFeatureSection />
        <PromoBanner />
      </main>

      {/* <footer className="py-20 bg-black text-white text-center">
        <footer className="py-20 bg-black text-white text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold">
            CraftByIbk © {new Date().getFullYear()} — Artisanal Excellence
          </p>
        </footer>
      </footer> */}
      <Footer />
    </div>
  );
}
