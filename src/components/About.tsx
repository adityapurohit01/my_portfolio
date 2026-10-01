import { capabilityGroups, experience } from "@/data/portfolio";

export default function About() {
  return (
    <>
      <section id="about" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-300">How I build</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">I care about the layer around the model.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">My strongest work sits where model behavior meets software engineering: state, tools, memory, retrieval, verification, failure recovery, and production APIs.</p>
            <p className="mt-5 text-base leading-7 text-zinc-500">The goal is not to make a model look intelligent in a demo. It is to make the overall system useful, inspectable, and increasingly reliable.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilityGroups.map((group) => (
              <div key={group.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">Experience</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Where I&apos;ve applied it.</h2>
          </div>
          <div className="space-y-4">
            {experience.map((item) => (
              <article key={item.company} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm text-cyan-300">{item.period}</p>
                  <p className="text-sm text-zinc-500">{item.company}</p>
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
                <p className="mt-3 max-w-3xl leading-7 text-zinc-400">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-violet-300">2026 — 2027</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">National Taiwan University</h3>
            <p className="mt-1 text-zinc-400">Exchange student · Taiwan</p>
            <p className="mt-4 leading-7 text-zinc-500">Advanced coursework and exposure to AI, machine learning, and AI systems in Taiwan.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-violet-300">2023 — 2027</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Bennett University</h3>
            <p className="mt-1 text-zinc-400">B.Tech · Computer Science</p>
            <p className="mt-4 leading-7 text-zinc-500">Focused on applied AI, machine learning, software engineering, and intelligent systems.</p>
          </div>
        </div>
      </section>
    </>
  );
}
