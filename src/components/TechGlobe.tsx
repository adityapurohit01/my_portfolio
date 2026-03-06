"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useRef, useMemo } from "react";
import * as THREE from "three";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
});

export default function TechGlobe() {
  const globeRef = useRef<any>(null);
  const [mounted, setMounted] = useState(false);
  const [size, setSize] = useState(450);

  useEffect(() => {
    setMounted(true);
    const updateSize = () => {
      const w = window.innerWidth;
      if (w < 480) setSize(280);
      else if (w < 768) setSize(350);
      else setSize(450);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const gData = [
    { text: "Python", lat: 34, lng: -100, size: 2.5, color: "#00f3ff" },
    { text: "PyTorch", lat: 50, lng: -0, size: 2.8, color: "#9d4edd" },
    { text: "LLMs", lat: -25, lng: 130, size: 3.0, color: "#ff007f" },
    { text: "RAG", lat: 40, lng: 116, size: 2.7, color: "#00f3ff" },
    { text: "YOLO", lat: -10, lng: -50, size: 2.2, color: "#9d4edd" },
    { text: "C++", lat: 60, lng: 100, size: 2.4, color: "#ff007f" },
    { text: "FastAPI", lat: 20, lng: 80, size: 2.5, color: "#00f3ff" },
    { text: "ML", lat: 10, lng: -20, size: 2.9, color: "#9d4edd" },
    { text: "Deep Learning", lat: -40, lng: -60, size: 2.8, color: "#ff007f" },
    { text: "Computer Vision", lat: 30, lng: 40, size: 2.6, color: "#00f3ff" },
    { text: "NLP", lat: -15, lng: 20, size: 2.3, color: "#9d4edd" },
    { text: "Agents", lat: 55, lng: -60, size: 2.6, color: "#ff007f" },
  ];

  const globeMaterial = useMemo(() => {
    return new THREE.MeshPhongMaterial({
      color: "#0a0a0a",
      emissive: "#00f3ff",
      emissiveIntensity: 0.08,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
  }, []);

  if (!mounted) {
    return <div className="w-full max-w-[450px] aspect-square animate-pulse bg-white/5 rounded-full mx-auto" />;
  }

  return (
    <div className="w-full h-full flex justify-center items-center cursor-move">
      <Globe
        ref={globeRef}
        height={size}
        width={size}
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        atmosphereColor="#00f3ff"
        atmosphereAltitude={0.25}
        globeMaterial={globeMaterial}
        labelsData={gData}
        labelLat={(d: any) => d.lat}
        labelLng={(d: any) => d.lng}
        labelText={(d: any) => d.text}
        labelSize={(d: any) => d.size}
        labelColor={(d: any) => d.color}
        labelDotRadius={0.5}
        labelAltitude={0.01}
        onGlobeReady={() => {
          if (globeRef.current) {
            globeRef.current.controls().autoRotate = true;
            globeRef.current.controls().autoRotateSpeed = 1.2;
            globeRef.current.controls().enableZoom = false;
          }
        }}
      />
    </div>
  );
}
