const rows = [
  {
    system: "AI Builder",
    eval: "State transition assertions",
    value: "IMPLEMENTED",
    method: "explicit state machine + guarded transitions",
    next: "expand regression coverage",
  },
  {
    system: "AI Builder",
    eval: "Build / test verification",
    value: "IMPLEMENTED",
    method: "execute generated code, inspect failures, iterate",
    next: "publish task benchmark",
  },
  {
    system: "AI Builder",
    eval: "Recovery loop",
    value: "IMPLEMENTED",
    method: "preserve failure context → patch → verify",
    next: "measure recovery rate",
  },
  {
    system: "IntelliForm",
    eval: "Framework-aware coverage",
    value: "IMPLEMENTED",
    method: "React / Vue / Angular / vanilla handling",
    next: "expand unseen fixtures",
  },
  {
    system: "IntelliForm",
    eval: "Post-interaction verification",
    value: "IMPLEMENTED",
    method: "assert application state after browser actions",
    next: "publish precision / recall",
  },
  {
    system: "Cross-system",
    eval: "Deterministic + qualitative evals",
    value: "READY",
    method: "assertions + LLM judge rubric + human spot checks",
    next: "publish calibrated benchmark results",
  },
];

export default function SystemsEvalMatrix() {
  const completed = rows.filter((row) => row.value === "IMPLEMENTED" || row.value === "READY").length;
  return (
    <section className="border-y border-white/10 bg-[#060608]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-300">/evals</p>
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-cyan-300">
                {completed}/{rows.length} systems checks live
              </span>
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Evaluation is part of the system.</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">
              Reliability checks are built into the systems themselves. The remaining work is publishing broader benchmark numbers, not adding basic verification from scratch.
            </p>
          </div>
          <div className="font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-700 sm:text-[9px] sm:tracking-[0.18em]">
            assertions · verification · judge rubric · telemetry
          </div>
        </div>

        <div className="mt-7 hidden overflow-hidden rounded-2xl border border-white/10 sm:block">
          <div className="min-w-[760px]">
            <div className="grid grid-cols-[1fr_1.2fr_0.9fr_1.3fr_1.3fr] border-b border-white/10 bg-white/[0.02] px-5 py-3 font-mono text-[9px] uppercase tracking-wider text-zinc-700">
              <span>system</span><span>evaluation</span><span>state</span><span>method</span><span>next</span>
            </div>
            {rows.map((row) => (
              <div key={row.system + row.eval} className="grid grid-cols-[1fr_1.2fr_0.9fr_1.3fr_1.3fr] border-b border-white/10 bg-[#08080a] px-5 py-4 last:border-0">
                <span className="font-mono text-[10px] text-zinc-400">{row.system}</span>
                <span className="text-xs text-zinc-500">{row.eval}</span>
                <span className="font-mono text-[10px] text-cyan-300">{row.value}</span>
                <span className="text-xs text-zinc-600">{row.method}</span>
                <span className="text-xs text-zinc-700">{row.next}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 space-y-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:hidden">
          {rows.map((row) => (
            <article key={row.system + row.eval} className="bg-[#08080a] p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-zinc-700">{row.system}</div>
                  <h3 className="mt-1 text-sm font-medium text-zinc-200">{row.eval}</h3>
                </div>
                <span className="shrink-0 font-mono text-[9px] text-cyan-300">{row.value}</span>
              </div>
              <div className="mt-4 grid gap-3 border-t border-white/10 pt-3">
                <div>
                  <div className="font-mono text-[8px] uppercase tracking-wider text-zinc-700">method</div>
                  <div className="mt-1 text-xs leading-5 text-zinc-500">{row.method}</div>
                </div>
                <div>
                  <div className="font-mono text-[8px] uppercase tracking-wider text-zinc-700">next</div>
                  <div className="mt-1 text-xs leading-5 text-zinc-600">{row.next}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
