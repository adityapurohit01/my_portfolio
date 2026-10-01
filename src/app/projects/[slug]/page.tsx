import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { projects } from "@/data/portfolio";

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

  return (
    <main className="min-h-screen bg-[#050507]">
      <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white">
          <ArrowLeft size={15} /> Back to projects
        </Link>

        <header className="pt-20">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">{project.eyebrow}</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">{project.title}</h1>
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/25">
              <Github size={15} /> GitHub
            </a>
          </div>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-zinc-300">{project.description}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400">{tech}</span>
            ))}
          </div>
        </header>

        <div className="mt-20 grid gap-16">
          <section>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">What I built</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.highlights.map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-base leading-7 text-zinc-300">{item}</div>
              ))}
            </div>
          </section>

          <section>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Architecture</p>
            <div className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-5 sm:p-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {project.architecture.map((step, index) => (
                  <div key={step} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cyan-300/10 text-xs font-semibold text-cyan-200">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-zinc-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Engineering decisions</p>
            <div className="mt-6 space-y-4">
              {project.decisions.map((item) => (
                <div key={item.problem} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                  <p className="text-sm font-semibold text-white">{item.problem}</p>
                  <p className="mt-3 leading-7 text-zinc-400">{item.decision}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Next engineering step</p>
            <div className="mt-6 rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.04] p-6 sm:p-8">
              <ul className="space-y-3 text-zinc-300">
                {project.next.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-200">
            <ArrowLeft size={15} /> Explore other projects
          </Link>
        </div>
      </div>
    </main>
  );
}
