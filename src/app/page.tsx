import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import ThreeBackground from "@/components/ThreeBackground";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ThreeBackground />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Awards />
      <Contact />

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 mt-20 flex justify-center text-center relative z-10">
        <div className="glass-panel px-8 py-6 rounded-3xl relative overflow-hidden backdrop-blur-md bg-white/5 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          <p className="text-gray-300 text-sm">© 2026 Aditya Purohit. Built with Next.js, Tailwind, & Framer Motion.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-neon-cyan/80 text-xs font-medium">
            <span>Liquid Glass UI</span>
            <span>•</span>
            <span>Claymorphism</span>
            <span>•</span>
            <span>WebGL</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
