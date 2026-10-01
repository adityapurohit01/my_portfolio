type Iteration = {
  attempt: string;
  issue: string;
  change: string;
  evidence: string;
};

export default function IterationLog({ items }: { items: Iteration[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <div className="hidden grid-cols-[90px_1.2fr_1.2fr_1fr] border-b border-white/10 bg-white/[0.02] px-5 py-3 font-mono text-[9px] uppercase tracking-wider text-zinc-700 sm:grid">
        <span>iteration</span><span>problem</span><span>change</span><span>evidence</span>
      </div>
      {items.map((item) => (
        <div key={item.attempt} className="grid gap-2 border-b border-white/10 bg-[#08080a] px-5 py-4 last:border-0 sm:grid-cols-[90px_1.2fr_1.2fr_1fr]">
          <span className="font-mono text-[10px] text-cyan-300">{item.attempt}</span>
          <span className="text-xs leading-6 text-zinc-500">{item.issue}</span>
          <span className="text-xs leading-6 text-zinc-400">{item.change}</span>
          <span className="text-xs leading-6 text-zinc-600">{item.evidence}</span>
        </div>
      ))}
    </div>
  );
}
