import { capabilityGroups, experience } from "@/data/portfolio";

export default function About() {
  return (
    <>
      <section id="about" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
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
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {capabilityGroups.map((group) => (
              <div key={group.title} className="bg-[#08080a] p-6">
                <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-300">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => <span key={item} className="rounded border border-white/10 px-2 py-1.5 font-mono text-[9px] text-zinc-600">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-cyan-300">/experience</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Where I&apos;ve applied it.</h2>
          </div>
          <div className="space-y-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {experience.map((item) => (
              <article key={item.company} className="bg-[#08080a] p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-wider">
                  <p className="text-cyan-300">{item.period}</p>
                  <p className="text-zinc-700">{item.company}</p>
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
                <p className="mt-3 max-w-3xl leading-7 text-zinc-500">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          <div className="bg-[#08080a] p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">2026 — 2027</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">National Taiwan University</h3>
            <p className="mt-1 text-zinc-500">Exchange student · Taiwan</p>
            <p className="mt-4 leading-7 text-zinc-600">Advanced coursework and exposure to AI, machine learning, and AI systems in Taiwan.</p>
          </div>
          <div className="bg-[#08080a] p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">2023 — 2027</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Bennett University</h3>
            <p className="mt-1 text-zinc-500">B.Tech · Computer Science</p>
            <p className="mt-4 leading-7 text-zinc-600">Focused on applied AI, machine learning, software engineering, and intelligent systems.</p>
          </div>
        </div>
      </section>
    </>
  );
}
