import Image from "next/image";
import Link from "next/link";
import LiveTerminal from "@/components/LiveTerminal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 hero-grid opacity-60" aria-hidden="true" />
      <div className="absolute -top-40 left-1/3 h-80 w-80 rounded-full bg-cyan-400/[0.06] blur-3xl sm:h-96 sm:w-96" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-4 py-24 sm:min-h-[720px] sm:gap-14 sm:px-6 sm:py-28 lg:min-h-[790px] lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="min-w-0">
          <div className="mb-5 flex flex-wrap items-center gap-x-2.5 gap-y-2 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500 sm:text-[11px] sm:tracking-[0.2em]">
            <span className="text-cyan-300">/aditya</span>
            <span>AI engineer</span>
            <span>systems</span>
            <span className="text-zinc-700">v2026.10</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Building AI systems that survive contact with reality.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:mt-8 sm:text-xl sm:leading-8">
            Autonomous agents, AI developer tools, multimodal retrieval, browser automation, and the engineering layer around the model.
          </p>

          <div className="mt-8 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:flex-wrap">
            <Link href="#projects" className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200 sm:w-auto">
              Inspect systems
            </Link>
            <a href="https://github.com/adityapurohit01" target="_blank" rel="noreferrer" className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-200 sm:w-auto">
              GitHub
            </a>
            <a href="/Aditya_purohit_2026.pdf" download className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 sm:w-auto">
              Resume
            </a>
          </div>

          <div className="mt-9 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:mt-12 sm:grid-cols-4">
            <div className="bg-[#08080a] p-3.5 sm:p-4"><div className="font-mono text-[9px] uppercase tracking-wider text-zinc-600">location</div><div className="mt-1 text-sm text-white">Taiwan</div></div>
            <div className="bg-[#08080a] p-3.5 sm:p-4"><div className="font-mono text-[9px] uppercase tracking-wider text-zinc-600">current</div><div className="mt-1 text-sm text-white">NTU</div></div>
            <div className="bg-[#08080a] p-3.5 sm:p-4"><div className="font-mono text-[9px] uppercase tracking-wider text-zinc-600">work</div><div className="mt-1 text-sm text-white">Info Edge</div></div>
            <div className="bg-[#08080a] p-3.5 sm:p-4"><div className="font-mono text-[9px] uppercase tracking-wider text-zinc-600">wins</div><div className="mt-1 text-sm text-white">4×</div></div>
          </div>
        </div>

        <div className="min-w-0 space-y-4">
          <div className="grid grid-cols-[72px_minmax(0,1fr)] items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-3 sm:grid-cols-[88px_minmax(0,1fr)]">
            <div className="relative aspect-[4/5] w-full max-w-[88px] self-start overflow-hidden rounded-xl border border-white/10 bg-zinc-950">
              <Image
                src="/ADI.jpg"
                alt="Aditya Purohit"
                fill
                sizes="(max-width: 640px) 72px, 88px"
                className="object-cover object-[50%_16%]"
                priority
              />
            </div>
            <div className="min-w-0 p-1.5 sm:p-2">
              <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">operator</div>
              <div className="mt-2 truncate text-base font-medium text-white sm:text-lg">Aditya Purohit</div>
              <div className="mt-2 text-xs leading-5 text-zinc-500 sm:text-sm sm:leading-6">AI systems, agents, retrieval, automation.</div>
              <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[9px] text-zinc-500 sm:mt-4 sm:text-[10px]">
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
