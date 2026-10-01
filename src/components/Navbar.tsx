"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Menu, X, Download } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Awards", "#awards"],
  ["Contact", "#contact"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/55 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <Link href="/" className="text-sm font-semibold tracking-[0.2em] text-white">AP</Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-sm text-zinc-400 transition hover:text-white">{label}</Link>)}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <a href="https://github.com/adityapurohit01" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-zinc-400 transition hover:text-white"><Github size={17} /></a>
          <a href="https://www.linkedin.com/in/aditya-purohit-04a3a3233/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-zinc-400 transition hover:text-white"><Linkedin size={17} /></a>
          <a href="mailto:adityapurohit839@gmail.com" aria-label="Email" className="text-zinc-400 transition hover:text-white"><Mail size={17} /></a>
          <a href="/Aditya_purohit_2026.pdf" download className="ml-1 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-cyan-200"><Download size={13} /> Resume</a>
        </div>
        <button type="button" className="rounded-full border border-white/10 p-2 text-zinc-300 md:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 mt-2 rounded-3xl border border-white/10 bg-black/90 p-5 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="grid gap-2">
            {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-zinc-300 hover:bg-white/[0.06] hover:text-white">{label}</Link>)}
            <a href="/Aditya_purohit_2026.pdf" download className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black"><Download size={15} /> Download resume</a>
          </div>
        </div>
      )}
    </header>
  );
}
