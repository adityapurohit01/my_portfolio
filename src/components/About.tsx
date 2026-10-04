import { capabilityGroups } from "@/data/portfolio";

export default function About() {
  return (
    <>
      <section id="about" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-cyan-300">/how-i-build</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">I engineer the boundary around the model.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">LLM output is a probabilistic component inside a deterministic software system. I separate model calls from state transitions, tool execution, persistence, and verification so important side effects have observable boundaries.</p>
            <p className="mt-5 text-base leading-7 text-zinc-600">Long-running systems need explicit state, bounded context, recoverable failures, provenance, telemetry, and evaluation. The design question is simple: what happens when the model is wrong, slow, inconsistent, or operating on stale context?</p>
            <div className="mt-7 overflow-hidden rounded-xl border border-white/10 bg-black/40 p-5 font-mono text-[10px] leading-6 text-zinc-500">
              <div>MODEL</div>
              <div>↓</div>
              <div>CONTEXT BOUNDARY</div>
              <div>↓</div>
              <div>STATE TRANSITION</div>
              <div>↓</div>
              <div>TOOL / SIDE EFFECT</div>
              <div>↓</div>
              <div>OBSERVATION → VERIFICATION</div>
              <div>↓</div>
              <div>RECOVERY OR COMMIT → TELEMETRY</div>
            </div>
          </div>
          <div className="self-start overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid sm:grid-cols-2">
            {capabilityGroups.map((group) => (
              <div key={group.title} className="min-h-0 bg-[#08080a] p-5 sm:p-5">
                <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-300">{group.title}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => <span key={item} className="rounded border border-white/10 bg-white/[0.015] px-2 py-1.5 font-mono text-[9px] text-zinc-500 transition hover:border-cyan-300/20 hover:text-zinc-300">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
