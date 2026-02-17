"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center">
      <div className="max-w-4xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-semibold"
        >
          I build systems that{" "}
          <span className="text-cyan-400">think</span>,{" "}
          <span className="text-cyan-400">see</span>, and{" "}
          <span className="text-cyan-400">solve</span>.
        </motion.h1>

        <p className="mt-6 text-neutral-400">
          Computer Science · Competitive Programming · ML & CV
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <MagneticButton>View Projects</MagneticButton>
          <MagneticButton variant="ghost">About Me</MagneticButton>
        </div>
      </div>
    </section>
  );
}
