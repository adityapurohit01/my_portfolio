"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star } from "lucide-react";
import LottieAnimation from "./LottieAnimation";

const awardsInfo = [
  {
    title: "International Agentic AI Hackathon Winner",
    organization: "University of Derby (UK)",
    icon: <Trophy className="w-6 h-6 text-neon-cyan" />,
  },
  {
    title: "Global CyberAI Hackathon Winner",
    organization: "Ulster University (UK)",
    icon: <Trophy className="w-6 h-6 text-neon-purple" />,
  },
  {
    title: "Smart India Hackathon 2024 Winner",
    organization: "Government of India",
    icon: <Award className="w-6 h-6 text-neon-pink" />,
  },
  {
    title: "Smart India Hackathon 2025 Winner",
    organization: "Government of India",
    icon: <Award className="w-6 h-6 text-neon-cyan" />,
  },
  {
    title: "Student Innovation Excellence Award 2025",
    organization: "Times Now Education Summit",
    icon: <Star className="w-6 h-6 text-yellow-400" />,
  },
  {
    title: "Microsoft AI Innovate 2025 – 1st Runner Up",
    organization: "Microsoft",
    icon: <Medal className="w-6 h-6 text-gray-300" />,
  },
  {
    title: "Smart BU Hackathon Top 1.75%",
    organization: "Bennett University",
    icon: <Medal className="w-6 h-6 text-neon-purple" />,
  },
];

export default function Awards() {
  return (
    <section id="awards" className="relative pt-24 pb-12 z-10 w-full max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <div className="glass-panel inline-block p-8 rounded-3xl relative overflow-hidden backdrop-blur-md bg-white/5 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-center gap-4">
            <LottieAnimation src="/data-analysis.json" className="w-16 h-16 md:w-20 md:h-20" />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                Hackathons & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">Awards</span>
              </h2>
              <p className="text-gray-300 max-w-2xl">
                Recognitions for building innovative, production-ready AI systems at national and international levels.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awardsInfo.map((award, index) => (
          <motion.div
            key={award.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-panel p-6 rounded-2xl flex items-start gap-4 transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(255,0,127,0.15)] bg-white/5 backdrop-blur-md border-white/10 hover:border-neon-pink/30 group"
          >
            <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-neon-pink/30 transition-colors">
              {award.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-neon-pink transition-colors">
                {award.title}
              </h3>
              <p className="text-sm text-gray-400 font-medium tracking-wide">
                {award.organization}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
