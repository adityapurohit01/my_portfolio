"use client";

import { motion } from "framer-motion";
import LottieAnimation from "./LottieAnimation";

const skills = [
    "Python", "C++", "JavaScript", "PyTorch", "TensorFlow",
    "Machine Learning", "Deep Learning", "LLMs", "RAG",
    "Computer Vision (YOLO/OpenCV)", "FastAPI", "MongoDB"
];

const timeline = [
    {
        year: "2026 - Present",
        role: "AI Engineer Intern",
        company: "Info Edge Ventures",
        description: "Engineering AI-powered venture intelligence workflows, including automated web crawling and document retrieval for FLC alerting, alongside central repository integrations and backend automation."
    },
    {
        year: "2025 - Present",
        role: "Project Intern",
        company: "DRDO — Recruitment Assessment Centre (RAC)",
        description: "Designing AI-driven recruitment automation workflows. Built semantic matching systems with embeddings and automated candidate shortlisting pipelines."
    },
    {
        year: "June 2025",
        role: "Tech Intern",
        company: "Formskart",
        description: "Developed an AI-based college recommendation system using ML and built a Streamlit application with MySQL analytics."
    },
    {
        year: "2023 - 2027",
        role: "B.Tech Computer Science",
        company: "Bennett University",
        description: "Focusing on Applied Artificial Intelligence, Neural Networks, and highly scalable inference systems."
    }
];

export default function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                <div className="grid md:grid-cols-2 gap-16">

                    {/* About & Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">System <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">Architecture</span> & Skills</h2>

                        <div className="mb-8">
                            <p className="text-gray-300 leading-relaxed mb-6">
                                I am a builder focused on <span className="text-neon-cyan font-semibold">Applied Artificial Intelligence</span>. I don't just train models; I engineer complete, end-to-end pipelines. From data ingestion and embedding extraction to vector databases and backend APIs.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                My current research interests involve Autonomous AI agents, multi-modal systems, and decision-making architectures.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, i) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="clay-card px-4 py-2 text-sm text-gray-200"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>

                        {/* Lottie Character */}
                        <div className="flex justify-center pt-6">
                            <LottieAnimation src="/developer-animation.json" className="w-48 h-48 md:w-56 md:h-56" />
                        </div>
                    </motion.div>

                    {/* Experience Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative pl-8 md:pl-0"
                        id="experience"
                    >
                        <h2 className="text-4xl font-bold mb-10 md:pl-12">Professional <span className="text-neon-cyan">Journey</span></h2>

                        <div className="space-y-10 md:pl-12 border-l-2 border-white/10 ml-4 md:ml-0 relative">
                            {timeline.map((item, index) => (
                                <div key={index} className="relative pl-8">
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-neon-cyan shadow-[0_0_10px_#00f3ff]" />

                                    <span className="text-neon-purple text-sm font-bold tracking-wider mb-1 block">{item.year}</span>
                                    <h3 className="text-2xl font-bold text-white mb-1">{item.role}</h3>
                                    <h4 className="text-lg text-gray-400 mb-3">{item.company}</h4>
                                    <p className="text-gray-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>


                </div>
            </div>
        </section>
    );
}
