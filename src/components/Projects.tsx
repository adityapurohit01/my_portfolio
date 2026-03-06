"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import LottieAnimation from "./LottieAnimation";

// Animated counter component
function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();
          
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-neon-cyan">
        {prefix}{count}{suffix}
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Pravah",
    description: "AI system to dynamically optimize city traffic signals using Reinforcement Learning (PPO), YOLO, and FastAPI. Winner of SIH 2025.",
    award: "🏆 SIH 2025 Winner",
    tech: ["RL (PPO)", "YOLO", "OpenCV", "FastAPI", "LSTM"],
    github: "https://github.com/adityapurohit01/pravah",
    metrics: [
      { value: 50, suffix: "%", label: "Traffic Efficiency ↑" },
      { value: 10, suffix: "%", label: "CO₂ Emissions ↓" },
      { value: 26, suffix: "%", label: "Throughput ↑" },
    ],
  },
  {
    title: "Medi-Le",
    description: "Privacy-first local medical AI assistant. Ingests documents via PaddleOCR, searches via FAISS, and summarizes using Med-R1 8B LLM with AES-256 encryption.",
    award: "🚀 Active Development",
    tech: ["PaddleOCR", "FAISS", "FastAPI", "React", "Med-R1 8B"],
    github: "https://github.com/adityapurohit01/med-le",
    metrics: [
      { value: 256, suffix: "-bit", label: "AES Encryption" },
      { value: 8, suffix: "B", label: "LLM Parameters" },
    ],
  },
  {
    title: "MIRA",
    description: "Automated interviewer-candidate matching engine using Mistral-7B, SBERT/BERT embeddings and vector search. Winner of SIH 2024.",
    award: "🏆 SIH 2024 Winner",
    tech: ["Mistral-7B", "SBERT", "NLP", "Vector Search"],
    github: "#",
    metrics: [
      { value: 40, suffix: "%", label: "Screening Time ↓" },
      { value: 7, suffix: "B", label: "LLM Parameters" },
    ],
  },
  {
    title: "IVMS",
    description: "Intelligent Vehicle Monitoring System for real-time inference. Features ANPR and vehicle color classification using PyTorch, CLIP, and TrOCR.",
    award: "📊 Research Project",
    tech: ["PyTorch", "OpenCV", "EAST", "TrOCR", "CLIP"],
    github: "https://github.com/adityapurohit01/IVMS-Intelligent-Vehicle-Monitoring-System-",
    metrics: [
      { value: 30, suffix: "+", prefix: "", label: "FPS Inference" },
      { value: 95, suffix: "%+", label: "OCR Accuracy" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="glass-panel inline-block p-8 rounded-3xl relative overflow-hidden backdrop-blur-md bg-white/5 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-center gap-4">
              <LottieAnimation src="/ai-robot.json" className="w-16 h-16 md:w-20 md:h-20" />
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Projects</span></h2>
                <p className="text-gray-300 max-w-2xl">Showcasing end-to-end AI pipelines, award-winning architectures, and applied machine learning systems.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-panel p-8 rounded-3xl group relative overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(0,243,255,0.15)] bg-white/5 backdrop-blur-md border-white/10 hover:border-neon-cyan/30"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/0 to-neon-purple/0 group-hover:from-neon-cyan/10 group-hover:to-neon-purple/10 transition-colors duration-500 rounded-3xl -z-10" />
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                  <div className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple">
                    {project.award}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-neon-cyan/20 hover:text-neon-cyan transition-colors" aria-label={`${project.title} GitHub repository`}>
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Impact Metrics */}
              {project.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-white/5">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <AnimatedCounter value={metric.value} suffix={metric.suffix} prefix={metric.prefix || ""} />
                      <p className="text-xs text-gray-400 mt-1">{metric.label}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(tech => (
                  <span key={tech} className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-200 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
