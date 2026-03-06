"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Suspense } from "react";
import { Download } from "lucide-react";
import dynamic from "next/dynamic";

const TechGlobe = dynamic(() => import("./TechGlobe"), {
  ssr: false,
  loading: () => <div className="w-full max-w-[450px] aspect-square animate-pulse bg-white/5 rounded-full mx-auto" />,
});

// Staggered letter animation
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.3 },
  },
};
const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const greeting = "Hi, I'm ";
  const name = "Aditya Purohit";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-neon-cyan/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="clay-card inline-block px-4 py-2 text-sm text-neon-cyan font-semibold tracking-wider mb-4"
          >
            AI SYSTEMS ENGINEER
          </motion.div>
          
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden backdrop-blur-md bg-white/5 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            {/* Staggered Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              {greeting.split("").map((char, i) => (
                <motion.span key={`g-${i}`} variants={letter}>
                  {char}
                </motion.span>
              ))}
              <br className="md:hidden" />
              {name.split("").map((char, i) => (
                <motion.span
                  key={`n-${i}`}
                  variants={letter}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-base md:text-lg text-gray-300 max-w-lg mb-8"
            >
              Applied Artificial Intelligence Engineer specializing in building end-to-end AI pipelines, Multi-modal RAG systems, and autonomous AI agents.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="#projects" className="clay-btn px-8 py-3 font-medium text-white hover:text-neon-cyan inline-block text-center transition-colors">
                View Projects
              </a>
              <a href="#contact" className="glass-panel px-8 py-3 font-medium text-white hover:bg-white/10 transition-colors rounded-2xl inline-block text-center border-white/20">
                Contact Me
              </a>
              <a href="/Aditya_purohit_2026.pdf" download className="inline-flex items-center gap-2 glass-panel px-6 py-3 font-medium text-neon-cyan hover:bg-white/10 transition-colors rounded-2xl text-center border-white/20">
                <Download size={16} /> Resume
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center items-center h-[350px] md:h-[500px]"
        >
          {/* Glowing Neural Network Globe Background */}
          <div className="absolute z-10 w-full max-w-[350px] md:max-w-[500px] aspect-square opacity-60">
            <TechGlobe />
          </div>

          {/* Centered Circular Profile Picture */}
          <motion.div 
             whileHover={{ scale: 1.05 }}
             transition={{ type: "spring", stiffness: 300, damping: 20 }}
             className="relative z-20 float"
          >
             {/* Pulsing rings */}
             <div className="absolute inset-0 rounded-full border border-neon-cyan/50 animate-[ping_3s_linear_infinite]" />
             <div className="absolute inset-[-20px] rounded-full border border-neon-purple/30 animate-[ping_4s_linear_infinite]" />
             
             <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[4px] border-white/10 glow-pulse glass-panel relative">
                <Image 
                    src="/ADI.jpg" 
                    alt="Aditya Purohit — AI Systems Engineer" 
                    fill
                    className="object-cover"
                    priority
                />
             </div>
          </motion.div>
          
        </motion.div>

      </div>
    </section>
  );
}
