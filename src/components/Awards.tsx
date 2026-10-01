import { awards } from "@/data/portfolio";

export default function Awards() {
  return (
    <section id="awards" className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-300">Proof of shipping</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Competitions are useful when they lead to real systems.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">A compact record of competitive engineering work — without turning the portfolio into a trophy wall.</p>
        </div>

        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {awards.map(([name, result]) => (
            <div key={name} className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-center">
              <p className="text-base font-medium text-white">{name}</p>
              <p className="text-sm text-zinc-400 sm:text-right">{result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
