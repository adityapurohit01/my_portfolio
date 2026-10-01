type Props = {
  steps: string[];
};

export default function ArchitectureFlow({ steps }: Props) {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex min-w-max items-stretch gap-2">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <div className="w-40 rounded-xl border border-white/10 bg-[#08080a] p-4">
              <div className="font-mono text-[10px] uppercase tracking-wider text-cyan-300/80">node {String(index + 1).padStart(2, "0")}</div>
              <div className="mt-2 text-sm font-medium text-zinc-100">{step}</div>
            </div>
            {index < steps.length - 1 && <span className="font-mono text-xs text-zinc-600">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
