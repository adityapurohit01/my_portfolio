"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Command, Search } from "lucide-react";

const commands = [
  { label: "Selected projects", hint: "P", href: "#projects" },
  { label: "Experience", hint: "E", href: "#experience" },
  { label: "Awards", hint: "A", href: "#awards" },
  { label: "Contact", hint: "C", href: "#contact" },
  { label: "AI Builder case study", hint: "1", href: "/projects/ai-builder" },
  { label: "IntelliForm case study", hint: "2", href: "/projects/intelliform" },
  { label: "Agentic Dating case study", hint: "3", href: "/projects/agentic-dating" },
  { label: "Hierarchical Math RAG case study", hint: "4", href: "/projects/hierarchical-math-rag" },
  { label: "Med-Le case study", hint: "5", href: "/projects/med-le" },
  { label: "GitHub", hint: "G", href: "https://github.com/adityapurohit01" },
  { label: "Resume", hint: "R", href: "/Aditya_purohit_2026.pdf" },
  { label: "Email", hint: "M", href: "mailto:adityapurohit839@gmail.com" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      if (isShortcut) {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const filtered = useMemo(
    () => commands.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  const go = (href: string) => {
    setOpen(false);
    if (href.startsWith("http") || href.startsWith("mailto:")) {
      window.open(href, href.startsWith("mailto:") ? "_self" : "_blank", href.startsWith("mailto:") ? undefined : "noopener,noreferrer");
      return;
    }
    window.location.href = href;
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 hidden items-center gap-2 rounded-xl border border-white/10 bg-black/80 px-3 py-2 font-mono text-xs text-zinc-400 shadow-2xl backdrop-blur-xl transition hover:border-cyan-300/30 hover:text-cyan-200 md:inline-flex"
        aria-label="Open command palette"
      >
        <Command size={13} />
        <span>⌘ K</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Command palette">
          <button type="button" className="absolute inset-0 cursor-default" onClick={() => setOpen(false)} aria-label="Close command palette" />
          <div className="relative mx-auto mt-[12vh] w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0c] shadow-2xl">
            <div className="flex items-center gap-3 border-b border-white/10 px-4">
              <Search size={16} className="text-zinc-500" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search the workbench..."
                className="h-14 flex-1 bg-transparent font-mono text-sm text-white outline-none placeholder:text-zinc-600"
              />
              <kbd className="rounded border border-white/10 px-2 py-1 font-mono text-[10px] text-zinc-500">ESC</kbd>
            </div>
            <div className="max-h-[55vh] overflow-y-auto p-2">
              {filtered.length === 0 && <p className="px-3 py-8 text-center font-mono text-xs text-zinc-600">No command matched.</p>}
              {filtered.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => go(item.href)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition hover:bg-white/[0.05]"
                >
                  <span className="text-sm text-zinc-200">{item.label}</span>
                  <span className="flex items-center gap-2">
                    <kbd className="rounded border border-white/10 px-2 py-1 font-mono text-[10px] text-zinc-600">{item.hint}</kbd>
                    <ArrowUpRight size={13} className="text-zinc-600" />
                  </span>
                </button>
              ))}
            </div>
            <div className="border-t border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-zinc-600">Aditya / portfolio workbench</div>
          </div>
        </div>
      )}
    </>
  );
}
