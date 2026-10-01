"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Command, Download, Menu, X } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Awards", "#awards"],
  ["Contact", "#contact"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const openPalette = () => {
    setOpen(false);
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true }));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2.5 py-3 sm:px-4 sm:py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-xl border border-white/10 bg-black/80 px-2.5 py-2 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-3">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 px-1.5 font-mono text-[11px] text-white sm:gap-3 sm:px-2 sm:text-xs"
          onClick={() => setOpen(false)}
        >
          <span className="text-cyan-300">AP</span>
          <span className="hidden text-zinc-600 xs:inline">/</span>
          <span className="hidden text-zinc-500 sm:inline">workbench</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.slice(0, 4).map(([label, href]) => (
            <Link key={href} href={href} className="rounded-lg px-3 py-2 text-xs text-zinc-500 transition hover:bg-white/[0.04] hover:text-zinc-200">
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-0.5 sm:gap-1">
          <button
            type="button"
            onClick={openPalette}
            className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-2 font-mono text-[10px] text-zinc-500 transition hover:border-cyan-300/25 hover:text-cyan-200 sm:inline-flex"
            aria-label="Open command palette"
          >
            <Command size={12} /> K
          </button>
          <a href="https://github.com/adityapurohit01" target="_blank" rel="noreferrer" aria-label="GitHub" className="hidden rounded-lg p-2 text-zinc-500 transition hover:bg-white/[0.04] hover:text-white sm:block">
            <Github size={15} />
          </a>
          <a href="https://www.linkedin.com/in/aditya-purohit-04a3a3233/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hidden rounded-lg p-2 text-zinc-500 transition hover:bg-white/[0.04] hover:text-white md:block">
            <Linkedin size={15} />
          </a>
          <a href="mailto:adityapurohit839@gmail.com" aria-label="Email" className="hidden rounded-lg p-2 text-zinc-500 transition hover:bg-white/[0.04] hover:text-white md:block">
            <Mail size={15} />
          </a>
          <a href="/Aditya_purohit_2026.pdf" download className="hidden items-center gap-2 rounded-lg bg-white px-3 py-2 text-[10px] font-semibold text-black transition hover:bg-cyan-200 sm:inline-flex">
            <Download size={12} /> Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-zinc-300 transition hover:border-cyan-300/25 hover:text-cyan-200 md:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-[#08080a]/98 p-3 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="grid gap-1">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3.5 text-sm text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
              >
                {label}
              </Link>
            ))}
            <button
              type="button"
              onClick={openPalette}
              className="flex min-h-12 items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-left text-sm text-zinc-300"
            >
              <span className="flex items-center gap-2"><Command size={15} /> Command palette</span>
              <span className="font-mono text-[10px] text-zinc-600">⌘K</span>
            </button>
            <div className="mt-1 grid grid-cols-2 gap-2">
              <a href="/Aditya_purohit_2026.pdf" download className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white text-sm font-semibold text-black">
                <Download size={15} /> Resume
              </a>
              <a href="https://github.com/adityapurohit01" target="_blank" rel="noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 text-sm text-zinc-300">
                <Github size={15} /> GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
