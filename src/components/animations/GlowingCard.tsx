"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ReactNode, MouseEvent } from "react";

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowingCard({
  children,
  className = "",
  glowColor = "rgba(201, 76, 76, 0.15)",
}: GlowingCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={`group relative rounded-xl border border-border bg-card/50 backdrop-blur overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              ${glowColor},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
