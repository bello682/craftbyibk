// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { ModalProvider } from "@/components/providers/ModalProvider";
// import { ReduxProvider } from "@/components/providers/ReduxProvider"; // Import here

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "CraftByIbk | Objects of Permanence",
//   description: "Minimalist essentials designed for every occasion.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//         suppressHydrationWarning={true}
//       >
//         <ReduxProvider>
//           <ModalProvider>{children}</ModalProvider>
//         </ReduxProvider>
//       </body>
//     </html>
//   );
// }

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
  title: "Craft_ByIbk | Objects of Permanence",
  description: "Minimalist essentials designed for every occasion.",
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
