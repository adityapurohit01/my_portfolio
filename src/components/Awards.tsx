import { awards } from "@/data/portfolio";

export default function Awards() {
  return (
    <section id="awards" className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
      <div className="rounded-2xl border border-white/10 bg-[#08080a] p-7 sm:p-10">
        <div className="max-w-3xl">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-cyan-300">/proof-of-shipping</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Competitive work, kept as evidence.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-500">A compact record of competitive engineering work — not a trophy wall.</p>
        </div>
        <div className="mt-10 overflow-hidden rounded-xl border border-white/10">
          {awards.map(([name, result], index) => (
            <div key={name} className="grid gap-2 border-b border-white/10 px-5 py-4 last:border-0 sm:grid-cols-[48px_1fr_auto] sm:items-center">
              <span className="font-mono text-[10px] text-zinc-700">{String(index + 1).padStart(2, "0")}</span>
              <p className="text-sm font-medium text-white">{name}</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-600 sm:text-right">{result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
