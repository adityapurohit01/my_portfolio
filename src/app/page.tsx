import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 text-sm text-zinc-400 sm:grid-cols-4 lg:px-8">
          <div><span className="text-white">01</span> Build the system</div>
          <div><span className="text-white">02</span> Make failure visible</div>
          <div><span className="text-white">03</span> Measure what matters</div>
          <div><span className="text-white">04</span> Ship the result</div>
        </div>
      </section>
      <Projects />
      <About />
      <Awards />
      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Currently building</p><h3 className="mt-3 text-xl font-semibold text-white">Autonomous AI systems</h3><p className="mt-3 leading-7 text-zinc-400">Exploring agents that can plan, execute, verify, remember, and recover across long-running tasks.</p></div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">What I write about</p><h3 className="mt-3 text-xl font-semibold text-white">AI engineering</h3><p className="mt-3 leading-7 text-zinc-400">Agents, retrieval, evaluation, multimodal systems, and the engineering decisions around them.</p></div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Open to</p><h3 className="mt-3 text-xl font-semibold text-white">Hard problems</h3><p className="mt-3 leading-7 text-zinc-400">AI engineering, research, early-stage startups, and developer tools.</p></div>
        </div>
      </section>
      <Contact />
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Aditya Purohit</p>
          <div className="flex gap-5"><Link href="#projects" className="hover:text-white">Projects</Link><Link href="#experience" className="hover:text-white">Experience</Link><Link href="#contact" className="hover:text-white">Contact</Link></div>
        </div>
      </footer>
    </main>
  );
}
