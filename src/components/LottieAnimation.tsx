"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface LottieAnimationProps {
  src: string;
  className?: string;
}

export default function LottieAnimation({ src, className = "w-56 h-56 md:w-72 md:h-72" }: LottieAnimationProps) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(src)
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(() => {});
  }, [src]);

  if (!animationData) {
    return (
      <div className={`${className} animate-pulse bg-white/5 rounded-2xl`} />
    );
  }

  return (
    <div className={className}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        className="w-full h-full"
      />
    </div>
  );
}
