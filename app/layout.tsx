import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "DeFi-BIAN Framework | Bridge CeFi to DeFi",
  description: "A comprehensive framework mapping traditional banking service domains (BIAN) to decentralized finance protocols. Built by Marlena DeHart.",
  keywords: ["DeFi", "BIAN", "blockchain", "banking", "fintech", "Web3", "cryptocurrency", "architecture"],
  authors: [{ name: "Marlena DeHart" }],
  openGraph: {
    title: "DeFi-BIAN Framework",
    description: "Bridge centralized and decentralized finance with structured architecture analysis",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
