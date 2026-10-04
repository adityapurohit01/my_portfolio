export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
      <div className="mb-8">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-cyan-300">/education</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">My education.</h2>
      </div>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
        <article className="bg-[#08080a] p-7 sm:p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">2026 — 2027</p>
          <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">National Taiwan University</h3>
          <p className="mt-2 text-zinc-500">Exchange student · Taiwan</p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8">
            Advanced coursework and exposure to AI, machine learning, and AI systems in Taiwan.
          </p>
        </article>

        <article className="bg-[#08080a] p-7 sm:p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">2023 — 2027</p>
          <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">Bennett University</h3>
          <p className="mt-2 text-zinc-500">B.Tech · Computer Science</p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8">
            Focused on applied AI, machine learning, software engineering, and intelligent systems.
          </p>
        </article>
      </div>
    </section>
  );
}
