import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div>
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-cyan-300">/experience</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Where I've applied it.</h2>
          <p className="mt-5 max-w-md text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
            Engineering work where the systems on this site met real teams, constraints, and delivery.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/10">
          {experience.map((item, index) => {
            const [company, affiliation] = item.company.split(" · ");
            return (
              <article key={item.company + item.period} className="bg-[#08080a] p-5 sm:p-7">
                <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-8">
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300">
                      {company}
                    </div>
                    {affiliation && (
                      <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-cyan-300/60">
                        {affiliation}
                      </div>
                    )}
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{item.role}</h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">{item.detail}</p>
                  </div>
                  <div className="sm:pt-0.5 sm:text-right">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">{item.period}</span>
                  </div>
                </div>
                {index < experience.length - 1 && <div className="mt-7 border-b border-white/10" />}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
