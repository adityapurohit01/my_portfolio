"use client";

import { useEffect, useState } from "react";

const lines = [
  "$ ai-builder run --task \"add retry handling\"",
  "[planner] decomposing task into 3 file changes",
  "[state] PLANNING -> APPROVAL",
  "[approval] patch approved",
  "[tool] write_file(src/retry.ts)",
  "[tool] terminal npm test",
  "[verify] FAIL · 1 assertion",
  "[recovery] preserving failure context",
  "[agent] patching retry boundary",
  "[verify] PASS · build + tests",
];

export default function LiveTerminal() {
  const [visible, setVisible] = useState(2);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVisible((value) => (value >= lines.length ? 2 : value + 1));
    }, 800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="rounded-2xl border border-white/10 bg-[#070709] shadow-2xl shadow-black/30">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-zinc-700" />
          <span className="h-2 w-2 rounded-full bg-zinc-700" />
          <span className="h-2 w-2 rounded-full bg-zinc-700" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">representative trace</span>
      </div>
      <div className="space-y-2 p-4 font-mono text-[11px] leading-5 sm:text-xs">
        {lines.slice(0, visible).map((line, index) => (
          <div key={index} className={line.includes("PASS") ? "text-cyan-300" : line.includes("FAIL") ? "text-zinc-300" : "text-zinc-500"}>
            {line}
          </div>
        ))}
        <div className="text-zinc-700">▌</div>
      </div>
    </div>
  );
}
