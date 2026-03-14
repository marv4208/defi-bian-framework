import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { HeaderNew } from "@/components/HeaderNew";
import { FooterNew } from "@/components/FooterNew";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "DIAN Framework | Decentralized Integration Architecture Network",
  description: "Practical integration patterns for connecting traditional finance systems with DeFi protocols. Learn how CeFi integrates with DeFi using real-world case studies and technical implementations.",
  keywords: ["DeFi", "CeFi", "integration", "blockchain", "banking", "fintech", "Web3", "cryptocurrency", "architecture", "DIAN"],
  authors: [{ name: "Marlena DeHart" }],
  openGraph: {
    title: "DIAN Framework - Decentralized Integration Architecture Network",
    description: "Practical patterns for integrating traditional finance with DeFi protocols",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased font-sans flex flex-col min-h-screen">
        <HeaderNew />
        <div className="flex-grow">
          {children}
        </div>
        <FooterNew />
      </body>
    </html>
  );
}
