import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import SystemsEvalMatrix from "@/components/SystemsEvalMatrix";
import Experience from "@/components/Experience";

const systemPrinciples = [
  ["01", "system", "architecture"],
  ["02", "evals", "metrics"],
  ["03", "trade-offs", "constraints"],
  ["04", "failure", "modes"],
] as const;

{/* sync: production */}
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <SystemsEvalMatrix />
      <section className="border-y border-white/10 bg-[#070709]">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden px-6 text-sm sm:grid-cols-4 lg:px-8">
          {systemPrinciples.map(([n, a, b]) => (
            <div key={n} className="border-x border-white/10 bg-[#070709] px-5 py-4 font-mono">
              <span className="text-cyan-300">{n}</span>
              <span className="ml-3 text-zinc-300">{a}</span>
              <span className="ml-2 text-zinc-700">/ {b}</span>
            </div>
          ))}
        </div>
      </section>
      <Projects />
      <Experience />
      <About />
      <Awards />
      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          <div className="bg-[#08080a] p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">currently building</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Autonomous AI systems</h3>
            <p className="mt-3 leading-7 text-zinc-500">Agents that plan, execute, verify, remember, and recover across long-running tasks.</p>
          </div>
          <div className="bg-[#08080a] p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">writing</p>
            <h3 className="mt-3 text-xl font-semibold text-white">AI engineering</h3>
            <p className="mt-3 leading-7 text-zinc-500">Agents, retrieval, evaluation, multimodal systems, and the engineering decisions around them.</p>
          </div>
          <div className="bg-[#08080a] p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">open to</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Hard problems</h3>
            <p className="mt-3 leading-7 text-zinc-500">AI engineering, research, early-stage startups, and developer tools.</p>
          </div>
        </div>
      </section>
      <Contact />
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="font-mono text-xs">© 2026 Aditya Purohit</p>
          <div className="flex gap-5 font-mono text-xs">
            <Link href="#projects" className="hover:text-white">Projects</Link>
            <Link href="#experience" className="hover:text-white">Experience</Link>
            <Link href="#contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
