import { ArrowUpRight, BookOpen, FileText } from "lucide-react";

export default function Research() {
  return (
    <section id="research" className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#08080a] p-7 sm:p-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-cyan-300">/research-and-publications</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Research, built for the real world.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-500">Peer-reviewed work exploring intelligent systems, predictive modeling, and practical AI applications.</p>
          </div>
          <div className="hidden h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/5 text-cyan-300 sm:flex">
            <BookOpen size={22} />
          </div>
        </div>

        <article className="mt-9 rounded-xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-emerald-300/20 bg-emerald-300/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300">Published</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">IEEE GCON 2026</span>
          </div>
          <h3 className="mt-5 max-w-4xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
            PRAVAH: A Multi-Layered Closed-Loop Architecture for Autonomous Traffic Signal Control and Predictive Traffic Management
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400">
            Research on an intelligent traffic-management architecture that combines predictive traffic insights with closed-loop signal control to support more adaptive and responsive urban mobility.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
            <a href="https://doi.org/10.1109/GCON69192.2026.11648278" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-cyan-200">
              <FileText size={14} /> Read published paper <ArrowUpRight size={14} />
            </a>
            <span className="font-mono text-[10px] text-zinc-600">DOI: 10.1109/GCON69192.2026.11648278</span>
          </div>
        </article>
      </div>
    </section>
  );
}
