import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/providers/ModalProvider";
import { ReduxProvider } from "@/components/providers/ReduxProvider";
import Script from "next/script"; // Import this for Ads

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 1. Fixes the metadataBase terminal warning
  metadataBase: new URL("https://craftbyibk.vercel.app"),

  title: "CRAFT_BYIBK | Artisanal Handcrafted Masterpieces",
  description:
    "Explore exclusive handcrafted luxury designs and accessories made with precision.",
  openGraph: {
    title: "CRAFT_BYIBK",
    description: "Artisanal Handcrafted Masterpieces Made in Lagos",
    url: "https://craftbyibk.vercel.app/", // Replace with your actual URL
    siteName: "CRAFT_BYIBK",
    images: [
      {
        url: "/meta.png", // Or relative '/meta.svg'
        width: 1200,
        height: 630,
        alt: "CRAFT_BYIBK Logo and Branding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRAFT_BYIBK",
    description: "Artisanal Handcrafted Masterpieces",
    images: ["/meta.png"], // Or relative '/meta.svg'
  },

  icons: {
    icon: "images/meta.png", // Correct: starts from the folder inside public
    shortcut: "images/meta.png",
    apple: "images/meta.png",
  },

  other: {
    "google-adsense-account": "ca-pub-3730534578729256",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3730534578729256"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <ReduxProvider>
          <ModalProvider>{children}</ModalProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
