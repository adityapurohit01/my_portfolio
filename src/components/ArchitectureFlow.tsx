type Props = {
  steps: string[];
};

export default function ArchitectureFlow({ steps }: Props) {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col gap-2 sm:min-w-max sm:flex-row sm:items-stretch sm:gap-2">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center gap-2 sm:flex-row">
            <div className="w-full rounded-xl border border-white/10 bg-[#08080a] p-3 sm:w-40 sm:p-4">
              <div className="font-mono text-[9px] uppercase tracking-wider text-cyan-300/80">node {String(index + 1).padStart(2, "0")}</div>
              <div className="mt-1.5 text-sm font-medium text-zinc-100">{step}</div>
            </div>
            {index < steps.length - 1 && (
              <span className="font-mono text-xs text-zinc-600 sm:rotate-0 rotate-90">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
