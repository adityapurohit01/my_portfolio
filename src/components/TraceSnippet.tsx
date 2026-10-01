type Props = {
  title: string;
  payload: string;
};

export default function TraceSnippet({ title, payload }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#070709]">
      <div className="border-b border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-zinc-600">{title}</div>
      <pre className="overflow-x-auto p-4 font-mono text-xs leading-6 text-zinc-400"><code>{payload}</code></pre>
    </div>
  );
}
