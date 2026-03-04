"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-40 pb-20">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">
          Terms of <span className="text-zinc-300">Service</span>
        </h1>

        <div className="space-y-12 text-zinc-600 leading-relaxed font-medium">
          <section>
            <h2 className="text-black font-black uppercase tracking-widest text-sm mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the Craft_ByIbk studio website, you agree to be bound
              by these terms. Our services are provided "as is," focused on the
              delivery of premium handcrafted goods.
            </p>
          </section>

          <section className="bg-zinc-900 p-8 rounded-[30px] text-white">
            <h2 className="font-black uppercase tracking-widest text-sm mb-4">
              2. Bespoke Commissions
            </h2>
            <p className="text-sm opacity-80">
              Every piece is hand-stitched. Due to the nature of leather and
              artisanal craft, slight variations in texture and color are not
              defects but marks of authenticity. Bespoke orders are final once
              production begins.
            </p>
          </section>

          <section>
            <h2 className="text-black font-black uppercase tracking-widest text-sm mb-4">
              3. Intellectual Property
            </h2>
            <p>
              All designs, photography, and branding on this site are the
              exclusive property of Craft_ByIbk. Reproduction of our "Objects of
              Permanence" designs without written consent is strictly
              prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-black font-black uppercase tracking-widest text-sm mb-4">
              4. WhatsApp Transactions
            </h2>
            <p>
              While we display prices in the studio, final acquisition and
              custom detailing happen via our official WhatsApp channel. This
              ensures a personalized, high-touch experience for every client.
            </p>
          </section>

          <section>
            <h2 className="text-black font-black uppercase tracking-widest text-sm mb-4">
              5. Limitation of Liability
            </h2>
            <p>
              Craft_ByIbk is not liable for indirect or consequential damages
              arising from the use of our products. Our total liability is
              limited to the purchase price of the specific item.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
