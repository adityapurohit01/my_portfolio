import Image from "next/image";
import Link from "next/link";
import LiveTerminal from "@/components/LiveTerminal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 hero-grid opacity-60" aria-hidden="true" />
      <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-cyan-400/8 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[790px] max-w-7xl items-center gap-14 px-6 py-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
            <span className="text-cyan-300">/aditya</span>
            <span>AI engineer</span>
            <span>systems</span>
            <span className="text-zinc-700">v2026.10</span>
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Building AI systems that survive contact with reality.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Autonomous agents, AI developer tools, multimodal retrieval, browser automation, and the engineering layer around the model.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="#projects" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200">Inspect systems</Link>
            <a href="https://github.com/adityapurohit01" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-200">GitHub</a>
            <a href="/Aditya_purohit_2026.pdf" download className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20">Resume</a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-4">
            <div className="bg-[#08080a] p-4"><div className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">location</div><div className="mt-1 text-sm text-white">Taiwan</div></div>
            <div className="bg-[#08080a] p-4"><div className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">current</div><div className="mt-1 text-sm text-white">NTU</div></div>
            <div className="bg-[#08080a] p-4"><div className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">work</div><div className="mt-1 text-sm text-white">Info Edge</div></div>
            <div className="bg-[#08080a] p-4"><div className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">wins</div><div className="mt-1 text-sm text-white">4×</div></div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-[88px_1fr] gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-3">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-950">
              <Image src="/ADI.jpg" alt="Aditya Purohit" width={176} height={220} className="aspect-[4/5] w-full object-cover" priority />
            </div>
            <div className="p-2">
              <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">operator</div>
              <div className="mt-2 text-lg font-medium text-white">Aditya Purohit</div>
              <div className="mt-2 text-sm leading-6 text-zinc-500">AI systems, agents, retrieval, automation.</div>
              <div className="mt-4 flex flex-wrap gap-2 font-mono text-[10px] text-zinc-500">
                <span className="rounded border border-white/10 px-2 py-1">Python</span>
                <span className="rounded border border-white/10 px-2 py-1">TS</span>
                <span className="rounded border border-white/10 px-2 py-1">RAG</span>
                <span className="rounded border border-white/10 px-2 py-1">Agents</span>
              </div>
            </div>
          </div>
          <LiveTerminal />
        </div>
      </div>
    </section>
  );
}
