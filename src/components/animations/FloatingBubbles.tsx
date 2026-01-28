"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

export function FloatingBubbles({ count = 20 }: { count?: number }) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const newBubbles: Bubble[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 8 + 4,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 10,
    }));
    setBubbles(newBubbles);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-white/5 backdrop-blur-sm"
          style={{
            left: `${bubble.x}%`,
            width: bubble.size,
            height: bubble.size,
            bottom: -20,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(bubble.id) * 50],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
