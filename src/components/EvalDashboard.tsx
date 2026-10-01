type Metric = {
  metric: string;
  value: string;
  note: string;
};

export default function EvalDashboard({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((item) => {
        const pending = /not |pending|needs /i.test(item.value);
        return (
          <div key={item.metric} className="bg-[#08080a] p-5">
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-700">{item.metric}</div>
            <div className={"mt-3 font-mono text-xl tracking-tight " + (pending ? "text-zinc-500" : "text-cyan-300")}>{item.value}</div>
            <p className="mt-2 text-xs leading-5 text-zinc-600">{item.note}</p>
          </div>
        );
      })}
    </div>
  );
}
