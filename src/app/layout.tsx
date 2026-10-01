import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Aditya Purohit — AI Engineer & Builder",
  description: "Aditya Purohit builds autonomous AI systems, AI developer tools, multimodal retrieval systems, and intelligent automation.",
  keywords: ["Aditya Purohit", "AI Engineer", "AI Systems", "AI Agents", "RAG", "Multimodal AI", "Developer Tools", "Machine Learning"],
  authors: [{ name: "Aditya Purohit" }],
  creator: "Aditya Purohit",
  openGraph: {
    title: "Aditya Purohit — AI Engineer & Builder",
    description: "Building autonomous AI systems, AI developer tools, multimodal retrieval, and intelligent automation.",
    type: "website",
    locale: "en_US",
    siteName: "Aditya Purohit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Purohit — AI Engineer & Builder",
    description: "Building autonomous AI systems, AI developer tools, multimodal retrieval, and intelligent automation.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-[#050507] text-zinc-100"}>{children}</body>
    </html>
  );
}
