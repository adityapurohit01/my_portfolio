"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import LottieAnimation from "./LottieAnimation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with pre-filled fields
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.open(`mailto:adityapurohit839@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 z-10 w-full max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <div className="glass-panel inline-block p-8 rounded-3xl relative overflow-hidden backdrop-blur-md bg-white/5 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-center gap-4">
            <LottieAnimation src="/coding-animation.json" className="w-16 h-16 md:w-20 md:h-20" />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Touch</span>
              </h2>
              <p className="text-gray-300 max-w-2xl">
                Interested in collaborating on AI projects, hackathons, or just want to connect? Let's talk.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 rounded-3xl relative overflow-hidden backdrop-blur-md bg-white/5 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 focus:shadow-[0_0_20px_rgba(0,243,255,0.1)] transition-all"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 focus:shadow-[0_0_20px_rgba(0,243,255,0.1)] transition-all"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 focus:shadow-[0_0_20px_rgba(0,243,255,0.1)] transition-all resize-none"
              placeholder="Let's build something amazing together..."
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full clay-btn px-8 py-4 font-semibold text-white hover:text-neon-cyan transition-colors flex items-center justify-center gap-2"
          >
            <Send size={18} />
            {submitted ? "Opening Email ✓" : "Send Message"}
          </motion.button>
        </motion.form>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <a
            href="mailto:adityapurohit839@gmail.com"
            className="glass-panel p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(0,243,255,0.15)] bg-white/5 backdrop-blur-md border-white/10 hover:border-neon-cyan/30 group block"
          >
            <div className="p-4 rounded-2xl bg-neon-cyan/10 border border-neon-cyan/20 group-hover:bg-neon-cyan/20 transition-colors">
              <Mail className="w-6 h-6 text-neon-cyan" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">Email</h3>
              <p className="text-sm text-gray-400">adityapurohit839@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/aditya-purohit-04a3a3233/"
            target="_blank"
            rel="noreferrer"
            className="glass-panel p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(0,243,255,0.15)] bg-white/5 backdrop-blur-md border-white/10 hover:border-neon-cyan/30 group block"
          >
            <div className="p-4 rounded-2xl bg-neon-purple/10 border border-neon-purple/20 group-hover:bg-neon-purple/20 transition-colors">
              <Linkedin className="w-6 h-6 text-neon-purple" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-neon-purple transition-colors">LinkedIn</h3>
              <p className="text-sm text-gray-400">Connect with me</p>
            </div>
          </a>

          <a
            href="https://github.com/adityapurohit01"
            target="_blank"
            rel="noreferrer"
            className="glass-panel p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(0,243,255,0.15)] bg-white/5 backdrop-blur-md border-white/10 hover:border-neon-cyan/30 group block"
          >
            <div className="p-4 rounded-2xl bg-neon-pink/10 border border-neon-pink/20 group-hover:bg-neon-pink/20 transition-colors">
              <Github className="w-6 h-6 text-neon-pink" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-neon-pink transition-colors">GitHub</h3>
              <p className="text-sm text-gray-400">View my open-source work</p>
            </div>
          </a>

          <div className="glass-panel p-6 rounded-2xl bg-white/5 backdrop-blur-md border-white/10 text-center">
            <p className="text-gray-400 text-sm">Based in</p>
            <p className="text-white font-bold text-lg">India 🇮🇳</p>
            <p className="text-gray-400 text-xs mt-1">Bennett University — B.Tech CS (2023–2027)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
