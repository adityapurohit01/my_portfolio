import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-cyan-300/[0.04] p-8 sm:p-12">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">Let&apos;s build</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">Building something technically difficult?</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">I&apos;m interested in AI engineering, research, startups, developer tools, and difficult systems problems.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:adityapurohit839@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"><Mail size={16} /> Email</a>
            <a href="https://www.linkedin.com/in/aditya-purohit-04a3a3233/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/25"><Linkedin size={16} /> LinkedIn</a>
            <a href="https://github.com/adityapurohit01" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/25"><Github size={16} /> GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
