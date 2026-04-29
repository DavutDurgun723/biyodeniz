"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: "seaweed" | "bubble" | "leaf";
  color: string;
  rotate: number;
  drift: number;
}

function SeaweedShape({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size * 2.2} viewBox="0 0 20 44" fill="none">
      <path
        d="M10 42C10 42 4 36 6 28C8 20 14 18 12 10C10 4 6 2 6 2"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M10 32C10 32 15 28 14 22"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M9 20C9 20 5 16 6 11"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

function BubbleShape({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle
        cx="10"
        cy="10"
        r="8"
        stroke={color}
        strokeWidth="1.5"
        fill={color}
        fillOpacity="0.08"
      />
      <circle cx="7" cy="7" r="2" fill={color} fillOpacity="0.25" />
    </svg>
  );
}

function LeafShape({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        d="M10 18C10 18 2 14 2 7C2 3 6 1 10 2C14 1 18 3 18 7C18 14 10 18 10 18Z"
        fill={color}
        fillOpacity="0.15"
        stroke={color}
        strokeWidth="1.2"
      />
      <path d="M10 18C10 18 10 10 10 2" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export default function FloatingParticles() {
  const particles = useMemo<Particle[]>(() => {
    const colors = ["#11CAA0", "#005088", "#0da882", "#11CAA0cc", "#005088aa"];
    const types: Particle["type"][] = ["seaweed", "bubble", "leaf", "bubble", "seaweed", "leaf"];
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: 5 + (i * 5.5) % 92,
      size: 10 + (i % 3) * 7,
      duration: 8 + (i % 5) * 3,
      delay: (i * 0.7) % 7,
      opacity: 0.18 + (i % 4) * 0.07,
      type: types[i % types.length],
      color: colors[i % colors.length],
      rotate: (i % 2 === 0 ? 1 : -1) * (15 + (i % 3) * 10),
      drift: (i % 2 === 0 ? 1 : -1) * (20 + (i % 4) * 12),
    }));
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bottom-0"
          style={{ left: `${p.x}%`, opacity: p.opacity }}
          initial={{ y: "100%", rotate: 0, x: 0 }}
          animate={{
            y: [
              "100%",
              `${-10 - Math.random() * 20}vh`,
            ],
            rotate: [0, p.rotate, -p.rotate * 0.5, p.rotate * 0.3],
            x: [0, p.drift, -p.drift * 0.6, p.drift * 0.4],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            repeatDelay: 1 + (p.id % 3),
            ease: "easeInOut",
          }}
        >
          {p.type === "seaweed" && <SeaweedShape size={p.size} color={p.color} />}
          {p.type === "bubble" && <BubbleShape size={p.size} color={p.color} />}
          {p.type === "leaf" && <LeafShape size={p.size} color={p.color} />}
        </motion.div>
      ))}
    </div>
  );
}
