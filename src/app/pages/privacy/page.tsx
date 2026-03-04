"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-40 pb-20">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">
          Privacy <span className="text-zinc-300">Policy</span>
        </h1>

        <div className="space-y-12 text-zinc-600 leading-relaxed font-medium">
          <section>
            <h2 className="text-black font-black uppercase tracking-widest text-sm mb-4">
              1. Overview
            </h2>
            <p>
              At Craft_ByIbk, we value the permanence of your privacy as much as
              our craftsmanship. This policy explains how we collect and use
              your data when you visit our studio.
            </p>
          </section>

          <section className="bg-zinc-50 p-8 rounded-[30px] border border-zinc-100 text-black">
            <h2 className="font-black uppercase tracking-widest text-sm mb-4">
              2. Advertising & Cookies (Required for AdSense)
            </h2>
            <p className="text-sm">
              We use third-party advertising companies to serve ads when you
              visit our website. These companies may use information about your
              visits to this and other websites in order to provide
              advertisements about goods and services of interest to you.
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-xs uppercase font-bold tracking-tight">
              <li>
                Google, as a third-party vendor, uses cookies to serve ads on
                your site.
              </li>
              <li>
                Users may opt out of personalized advertising by visiting Google
                Ad Settings.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-black font-black uppercase tracking-widest text-sm mb-4">
              3. Data Collection
            </h2>
            <p>
              We only collect information necessary to process your bespoke
              commissions and improve your shopping experience, such as your
              name and inquiry details via WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-black font-black uppercase tracking-widest text-sm mb-4">
              4. Contact
            </h2>
            <p>
              For any questions regarding your data, contact us at:{" "}
              <span className="text-black font-bold">
                hello@craft_byibk.com
              </span>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
