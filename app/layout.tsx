import type { Metadata } from "next";
import { Roboto, Montserrat, PT_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { FooterNew } from "@/components/FooterNew";

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"], 
  variable: "--font-roboto" 
});

const montserrat = Montserrat({ 
  weight: ['600', '700', '800'],
  subsets: ["latin"], 
  variable: "--font-montserrat" 
});

const ptMono = PT_Mono({ 
  weight: ['400'],
  subsets: ["latin"], 
  variable: "--font-pt-mono" 
});

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
    <html lang="en" className={`${roboto.variable} ${montserrat.variable} ${ptMono.variable}`}>
      <body className="antialiased font-sans">
        <Header />
        <div className="pt-16 md:pt-20">
          {children}
        </div>
        <FooterNew />
      </body>
    </html>
  );
}
