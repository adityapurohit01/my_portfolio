"use client";

import { useEffect, useState } from "react";

const states = ["IDLE", "PLANNING", "APPROVAL", "CODING", "VERIFYING", "ITERATING"];

export default function AgentStateBar() {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % states.length);
    }, 1500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="rounded-xl border border-white/10 bg-[#08080a] p-4">
      <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-zinc-600">
        <span>agent_state</span>
        <span className="text-cyan-300">live simulation</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {states.map((state, itemIndex) => (
          <div
            key={state}
            className={
              "rounded-lg border px-3 py-2 font-mono text-xs transition " +
              (itemIndex === index
                ? "border-cyan-300/50 bg-cyan-300/10 text-cyan-200"
                : itemIndex < index
                  ? "border-white/10 bg-white/[0.03] text-zinc-300"
                  : "border-white/5 text-zinc-600")
            }
          >
            {state}
          </div>
        ))}
      </div>
    </div>
  );
}
