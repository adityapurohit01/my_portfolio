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
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">Selected work</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Five projects. One theme: systems, not demos.</h2>
        <p className="mt-5 text-lg leading-8 text-zinc-400">I&apos;d rather show how a system works, what trade-offs it makes, and how it fails than list a long stack of libraries.</p>
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={filter === item
              ? "rounded-full border border-cyan-300/50 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200 transition"
              : "rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400 transition hover:border-white/25 hover:text-white"}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {filtered.map((project, index) => (
          <article
            key={project.slug}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.05] ${index === 0 && filter === "All" ? "lg:col-span-2" : ""}`}
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/10" aria-hidden="true" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">{project.eyebrow}</span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500">{project.status}</span>
              </div>
              <h3 className="mt-5 text-3xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-300">{project.oneLiner}</p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {project.highlights.slice(0, 4).map((highlight) => (
                  <div key={highlight} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-zinc-400">{highlight}</div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300">{tech}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-200">Technical case study <ArrowUpRight size={15} /></Link>
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/25"><Github size={15} /> GitHub</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
