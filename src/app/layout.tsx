import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya Purohit | AI Systems Engineer",
  description: "Portfolio of Aditya Purohit, Applied AI Engineer scaling complete ML pipelines, multi-modal systems, and autonomous agents.",
  keywords: ["AI Engineer", "Machine Learning", "Portfolio", "Aditya Purohit", "Deep Learning", "RAG", "LLM", "Computer Vision"],
  authors: [{ name: "Aditya Purohit" }],
  openGraph: {
    title: "Aditya Purohit | AI Systems Engineer",
    description: "Applied AI Engineer specializing in end-to-end ML pipelines, Multi-modal RAG systems, and autonomous AI agents. Multiple national & international hackathon winner.",
    type: "website",
    locale: "en_US",
    siteName: "Aditya Purohit Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Purohit | AI Systems Engineer",
    description: "Applied AI Engineer specializing in end-to-end ML pipelines, Multi-modal RAG systems, and autonomous AI agents.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#050510] text-gray-100 antialiased selection:bg-neon-cyan/30 selection:text-neon-cyan overflow-x-hidden min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
