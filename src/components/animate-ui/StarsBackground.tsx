"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

const STAR_COUNT = 40;

function seeded(i: number, min: number, max: number) {
  const t = Math.sin(i * 12.9898) * 43758.5453;
  const f = t - Math.floor(t);
  return min + f * (max - min);
}

export function StarsBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  if (!mounted) {
    return <div className="pointer-events-none fixed inset-0 overflow-hidden" />;
  }

  const stars = Array.from({ length: STAR_COUNT }, (_, i) => ({
    id: i,
    x: seeded(i, 0, 100),
    y: seeded(i + 1, 0, 100),
    size: seeded(i + 2, 1, 2.5),
    duration: seeded(i + 3, 2, 5),
    delay: seeded(i + 4, 0, 2),
  }));

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
