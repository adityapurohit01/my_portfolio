"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projects as projectData } from "@/data/portfolio";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Agents", "Automation", "RAG", "Multimodal"];

  const filtered = projectData.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Agents") return ["AI Builder", "Agentic Dating"].includes(project.title);
    if (filter === "Automation") return project.title === "IntelliForm";
    if (filter === "RAG") return ["Hierarchical Math RAG", "Med-Le"].includes(project.title);
    if (filter === "Multimodal") return ["Hierarchical Math RAG", "Med-Le"].includes(project.title);
    return true;
  });

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
      <div className="max-w-3xl">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-cyan-300">/selected-work</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Systems, not demos.</h2>
        <p className="mt-5 text-lg leading-8 text-zinc-500">The portfolio is a workbench: inspect architecture, evaluation state, trade-offs, failure modes, and source.</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={filter === item
              ? "rounded-lg border border-cyan-300/35 bg-cyan-300/[0.08] px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-cyan-200"
              : "rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-zinc-600 transition hover:border-white/20 hover:text-zinc-300"}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-2">
        {filtered.map((project, index) => (
          <article key={project.slug} className={"group relative overflow-hidden bg-[#08080a] p-6 transition hover:bg-[#0a0a0c] " + (index === 0 && filter === "All" ? "lg:col-span-2" : "")}>
            <div className="absolute inset-y-0 right-0 w-1/2 translate-x-1/3 bg-cyan-300/[0.02] blur-3xl transition group-hover:bg-cyan-300/[0.04]" aria-hidden="true" />

            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300/80">{project.eyebrow}</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-700">{project.status}</span>
              </div>

              <div className="mt-5 flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-400">{project.oneLiner}</p>
                </div>
                <div className="hidden rounded-lg border border-white/10 bg-black/30 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-zinc-700 sm:block">sys.{String(index + 1).padStart(2, "0")}</div>
              </div>

              <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2">
                {project.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                  <div key={highlight} className="bg-[#08080a] p-4 text-xs leading-6 text-zinc-600">
                    <span className="mr-2 font-mono text-[9px] text-zinc-700">0{highlightIndex + 1}</span>
                    {highlight}
                  </div>
                ))}
                <div className="bg-cyan-300/[0.025] p-4 text-xs leading-6 text-zinc-500">
                  <span className="mr-2 font-mono text-[9px] text-cyan-300/80">LIMIT</span>
                  <span className="text-zinc-300">{project.failureModes[0].failure}</span>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded border border-white/10 px-2 py-1 font-mono text-[9px] text-zinc-600">{tech}</span>
                ))}
              </div>

              <div className="relative mt-7 flex flex-wrap gap-2">
                <Link href={"/projects/" + project.slug} className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-black transition hover:bg-cyan-200">Inspect system <ArrowUpRight size={14} /></Link>
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-300 transition hover:border-cyan-300/25 hover:text-white"><Github size={14} /> source</a>
              </div>

              <div className="pointer-events-none absolute inset-x-4 bottom-20 translate-y-3 rounded-xl border border-cyan-300/10 bg-black/90 p-4 font-mono text-[9px] leading-5 text-zinc-600 opacity-0 backdrop-blur-xl transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="mb-2 flex items-center justify-between text-[9px] uppercase tracking-wider">
                  <span className="text-cyan-300/70">wire surface</span>
                  <span className="text-zinc-700">representative</span>
                </div>
                {project.trace.payload.split("\n").slice(0, 7).map((line, lineIndex) => <div key={lineIndex}>{line}</div>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
