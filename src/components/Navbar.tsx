"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, Menu, X, Download } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 flex justify-between items-center"
      >
        <div className="glass-panel px-4 md:px-6 py-3 rounded-full flex items-center justify-between w-full max-w-7xl mx-auto backdrop-blur-md bg-white/5 border-white/10">
          <Link href="/" className="text-xl font-bold shimmer-text">
            AP
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="hover:text-neon-cyan transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <a href="/Aditya_purohit_2026.pdf" download className="hidden md:inline-flex items-center gap-2 clay-btn px-4 py-2 text-xs font-semibold text-neon-cyan hover:text-white transition-colors" aria-label="Download Resume">
              <Download size={14} /> Resume
            </a>
            <div className="hidden md:flex space-x-4">
              <a href="https://github.com/adityapurohit01" target="_blank" rel="noreferrer" className="hover:text-neon-cyan transition-colors" aria-label="GitHub Profile">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/aditya-purohit-04a3a3233/" target="_blank" rel="noreferrer" className="hover:text-neon-cyan transition-colors" aria-label="LinkedIn Profile">
                <Linkedin size={20} />
              </a>
              <a href="mailto:adityapurohit839@gmail.com" className="hover:text-neon-cyan transition-colors" aria-label="Send Email">
                <Mail size={20} />
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button 
              onClick={() => setMobileOpen(!mobileOpen)} 
              className="md:hidden p-2 hover:text-neon-cyan transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-24 px-6 bg-[#050510]/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col space-y-6 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-bold hover:text-neon-cyan transition-colors block py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="pt-4"
              >
                <a href="/Aditya_purohit_2026.pdf" download className="inline-flex items-center gap-2 clay-btn px-8 py-3 text-sm font-semibold text-neon-cyan" aria-label="Download Resume">
                  <Download size={16} /> Download Resume
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center space-x-6 pt-4"
              >
                <a href="https://github.com/adityapurohit01" target="_blank" rel="noreferrer" className="hover:text-neon-cyan transition-colors" aria-label="GitHub Profile">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/aditya-purohit-04a3a3233/" target="_blank" rel="noreferrer" className="hover:text-neon-cyan transition-colors" aria-label="LinkedIn Profile">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:adityapurohit839@gmail.com" className="hover:text-neon-cyan transition-colors" aria-label="Send Email">
                  <Mail size={24} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
