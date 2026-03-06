"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9999]"
      animate={{ opacity: visible ? 1 : 0 }}
    >
      {/* Main glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          left: position.x - 250,
          top: position.y - 250,
          background: "radial-gradient(circle, rgba(0,243,255,0.06) 0%, rgba(157,78,221,0.03) 40%, transparent 70%)",
          transition: "left 0.15s ease-out, top 0.15s ease-out",
        }}
      />
      {/* Inner dot */}
      <div
        className="absolute w-4 h-4 rounded-full pointer-events-none mix-blend-screen"
        style={{
          left: position.x - 8,
          top: position.y - 8,
          background: "radial-gradient(circle, rgba(0,243,255,0.5) 0%, transparent 70%)",
          transition: "left 0.05s ease-out, top 0.05s ease-out",
        }}
      />
    </motion.div>
  );
}
