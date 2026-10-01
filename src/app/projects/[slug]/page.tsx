import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import AgentStateBar from "@/components/AgentStateBar";
import TraceSnippet from "@/components/TraceSnippet";
import EvalDashboard from "@/components/EvalDashboard";
import IterationLog from "@/components/IterationLog";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found | Aditya Purohit" };

  return {
    title: project.title + " | Aditya Purohit",
    description: project.oneLiner,
    openGraph: {
      title: project.title + " | Aditya Purohit",
      description: project.oneLiner,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const isBuilder = project.slug === "ai-builder";

  return (
    <main className="min-h-screen bg-[#050507]">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <Link href="/#projects" className="inline-flex items-center gap-2 font-mono text-xs text-zinc-600 transition hover:text-white">
          <ArrowLeft size={14} /> /back-to-systems
        </Link>

        <header className="pt-20">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
            <span className="text-cyan-300">{project.status}</span>
            <span>·</span>
            <span>{project.eyebrow}</span>
          </div>

          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-7xl">{project.title}</h1>
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-xs text-white transition hover:border-cyan-300/30 hover:text-cyan-200">
              <Github size={14} /> source
            </a>
          </div>

          <p className="mt-7 max-w-4xl text-xl leading-9 text-zinc-300">{project.description}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((tech) => <span key={tech} className="rounded border border-white/10 px-2.5 py-1 font-mono text-[10px] text-zinc-500">{tech}</span>)}
          </div>
        </header>

        <div className="mt-16 space-y-20">
          <section>
            <SectionLabel>System Architecture</SectionLabel>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-7">
              <ArchitectureFlow steps={project.architecture} />
              {isBuilder && <div className="mt-6"><AgentStateBar /></div>}
            </div>
          </section>

          <section>
            <SectionLabel>Evals &amp; Metrics</SectionLabel>
            <div className="mt-5">
              <EvalDashboard metrics={project.evals} />
              <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-zinc-700">
                evaluation state is explicit; unmeasured values are not inferred or embellished
              </p>
            </div>
          </section>

          <section>
            <SectionLabel>Reusable Primitive</SectionLabel>
            <div className="mt-5 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.03] p-6">
              <p className="max-w-4xl text-base leading-8 text-zinc-400">{project.primitive}</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-zinc-700">
                abstraction boundary
              </p>
            </div>
          </section>

          <section>
            <SectionLabel>Trade-offs &amp; Constraints</SectionLabel>
            <div className="mt-5 space-y-3">
              {project.decisions.map((item, index) => (
                <div key={item.problem} className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:grid-cols-[64px_1fr] sm:p-6">
                  <div className="font-mono text-xs text-zinc-700">T{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.problem}</p>
                    <p className="mt-2 max-w-3xl leading-7 text-zinc-500">{item.decision}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionLabel>Trade-offs &amp; Iterations</SectionLabel>
            <div className="mt-5">
              <IterationLog items={project.iterations} />
            </div>
          </section>

          <section>
            <SectionLabel>Known Failure Modes</SectionLabel>
            <div className="mt-5 space-y-3">
              {project.failureModes.map((item) => (
                <div key={item.failure} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <div>
                      <p className="text-sm font-medium text-zinc-200">{item.failure}</p>
                      <p className="mt-2 leading-7 text-zinc-600"><span className="font-mono text-[10px] uppercase text-zinc-700">handling</span> {item.handling}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionLabel>Trace / Wire Surface</SectionLabel>
            <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <TraceSnippet title={project.trace.title} payload={project.trace.payload} />
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">why this exists</div>
                <p className="mt-4 leading-7 text-zinc-500">
                  A systems portfolio should expose the boundary between model output and application behavior. These traces are deliberately labeled as representative when they are not captured production logs.
                </p>
              </div>
            </div>
          </section>

          <section>
            <SectionLabel>What I Built</SectionLabel>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm leading-7 text-zinc-500">{item}</div>)}
            </div>
          </section>

          <section>
            <SectionLabel>Next Engineering Step</SectionLabel>
            <div className="mt-5 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.03] p-6">
              <ul className="space-y-3">
                {project.next.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-zinc-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-20 border-t border-white/10 py-10">
          <Link href="/#projects" className="inline-flex items-center gap-2 font-mono text-xs text-zinc-600 hover:text-white">
            <ArrowLeft size={14} /> inspect another system
          </Link>
        </div>
      </div>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">01 /</span>
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{children}</h2>
    </div>
  );
}
