const rows = [
  {
    system: "AI Builder",
    eval: "Coding tasks / pass@1",
    value: "PENDING",
    method: "deterministic tests + task harness",
    next: "SWE-bench Lite subset",
  },
  {
    system: "AI Builder",
    eval: "Tokens / successful task",
    value: "UNMEASURED",
    method: "provider usage telemetry",
    next: "capture prompt + tool + completion tokens",
  },
  {
    system: "AI Builder",
    eval: "P95 task latency",
    value: "UNMEASURED",
    method: "end-to-end wall clock",
    next: "100+ representative tasks",
  },
  {
    system: "IntelliForm",
    eval: "Field precision / recall",
    value: "PENDING",
    method: "deterministic labelled fixtures",
    next: "50+ unseen forms",
  },
  {
    system: "IntelliForm",
    eval: "Successful completion",
    value: "PENDING",
    method: "post-interaction assertions",
    next: "framework-spanning benchmark",
  },
  {
    system: "Cross-system",
    eval: "Qualitative behavior",
    value: "DESIGNED",
    method: "LLM-as-a-judge + human spot checks",
    next: "calibrated rubric + agreement report",
  },
];

export default function SystemsEvalMatrix() {
  return (
    <section className="border-y border-white/10 bg-[#060608]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-300">/evals</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Evaluation is part of the system.</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-600">
              Published numbers only appear after measurement. Until then, the dashboard shows the exact benchmark and instrumentation needed to produce them.
            </p>
          </div>
          <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-700">
            deterministic assertions · judge rubric · telemetry
          </div>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
          <div className="min-w-[760px]">
            <div className="grid grid-cols-[1fr_1.2fr_0.9fr_1.3fr_1.3fr] border-b border-white/10 bg-white/[0.02] px-5 py-3 font-mono text-[9px] uppercase tracking-wider text-zinc-700">
              <span>system</span><span>evaluation</span><span>state</span><span>method</span><span>next</span>
            </div>
            {rows.map((row) => (
              <div key={row.system + row.eval} className="grid grid-cols-[1fr_1.2fr_0.9fr_1.3fr_1.3fr] border-b border-white/10 bg-[#08080a] px-5 py-4 last:border-0">
                <span className="font-mono text-[10px] text-zinc-400">{row.system}</span>
                <span className="text-xs text-zinc-500">{row.eval}</span>
                <span className={row.value === "DESIGNED" ? "font-mono text-[10px] text-cyan-300" : "font-mono text-[10px] text-zinc-600"}>{row.value}</span>
                <span className="text-xs text-zinc-600">{row.method}</span>
                <span className="text-xs text-zinc-700">{row.next}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
