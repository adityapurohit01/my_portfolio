import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 hero-grid opacity-60" aria-hidden="true" />
      <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">AI Engineer · Builder · Systems</p>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">Building AI systems that do more than generate text.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            I build autonomous agents, AI developer tools, multimodal retrieval systems, and intelligent automation — from model calls to the infrastructure around them.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="#projects" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200">View selected work</Link>
            <a href="https://github.com/adityapurohit01" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:text-cyan-200">GitHub</a>
            <a href="/Aditya_purohit_2026.pdf" download className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-300/60 hover:text-violet-200">Resume</a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-400">
            <span>NTU Taiwan</span><span>Info Edge Ventures</span><span>DRDO</span><span>3× hackathon winner</span>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950">
              <Image src="/ADI.jpg" alt="Aditya Purohit" width={720} height={900} className="aspect-[4/5] w-full object-cover object-center" priority />
            </div>
            <div className="grid grid-cols-2 gap-3 p-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><p className="text-xs uppercase tracking-wider text-zinc-500">Focus</p><p className="mt-1 text-sm font-medium text-white">Agents + AI Infra</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><p className="text-xs uppercase tracking-wider text-zinc-500">Current</p><p className="mt-1 text-sm font-medium text-white">NTU Taiwan</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
