"use client";

import { motion, useMotionValue } from "framer-motion";

export default function MagneticButton({
  children,
  variant = "solid",
}: {
  children: React.ReactNode;
  variant?: "solid" | "ghost";
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.button
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.3);
        y.set((e.clientY - r.top - r.height / 2) * 0.3);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
      className={`px-8 py-4 rounded-full font-medium transition ${
        variant === "solid"
          ? "bg-cyan-400 text-black"
          : "border border-neutral-700 text-neutral-300"
      }`}
    >
      {children}
    </motion.button>
  );
}
