"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Command, Download } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Awards", "#awards"],
] as const;

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-xl border border-white/10 bg-black/75 px-3 py-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-3 px-2 font-mono text-xs text-white">
          <span className="text-cyan-300">AP</span>
          <span className="hidden text-zinc-600 sm:inline">/</span>
          <span className="hidden text-zinc-500 sm:inline">workbench</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-lg px-3 py-2 text-xs text-zinc-500 transition hover:bg-white/[0.04] hover:text-zinc-200">{label}</Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true }))}
            className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-2 font-mono text-[10px] text-zinc-500 transition hover:border-cyan-300/25 hover:text-cyan-200 sm:inline-flex"
            aria-label="Open command palette"
          >
            <Command size={12} /> K
          </button>
          <a href="https://github.com/adityapurohit01" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg p-2 text-zinc-500 transition hover:bg-white/[0.04] hover:text-white"><Github size={15} /></a>
          <a href="https://www.linkedin.com/in/aditya-purohit-04a3a3233/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hidden rounded-lg p-2 text-zinc-500 transition hover:bg-white/[0.04] hover:text-white sm:block"><Linkedin size={15} /></a>
          <a href="mailto:adityapurohit839@gmail.com" aria-label="Email" className="hidden rounded-lg p-2 text-zinc-500 transition hover:bg-white/[0.04] hover:text-white sm:block"><Mail size={15} /></a>
          <a href="/Aditya_purohit_2026.pdf" download className="ml-1 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-[10px] font-semibold text-black transition hover:bg-cyan-200"><Download size={12} /> Resume</a>
        </div>
      </nav>
    </header>
  );
}
