"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { useEffect, useMemo, useState } from "react";

const sentence =
  "I build software that’s fast, thoughtful, and hard to break.";

const highlights = ["fast", "thoughtful", "hard to break"];

export default function Hero() {
  const [length, setLength] = useState(0);

  // Precompute highlight character ranges
  const highlightRanges = useMemo(() => {
    const ranges: { start: number; end: number }[] = [];

    highlights.forEach((word) => {
      const start = sentence.indexOf(word);
      if (start !== -1) {
        ranges.push({ start, end: start + word.length });
      }
    });

    return ranges;
  }, []);

  // Typewriter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setLength((l) => {
        if (l >= sentence.length) {
          clearInterval(interval);
          return l;
        }
        return l + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Render typed characters with per-char coloring
  const renderTypedText = () => {
    const chars = sentence.slice(0, length).split("");

    return chars.map((char, index) => {
      const isHighlighted = highlightRanges.some(
        (r) => index >= r.start && index < r.end
      );

      return (
        <span
          key={index}
          className={isHighlighted ? "text-rose-400 font-medium" : ""}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating gradient orb */}
      <motion.div
        className="absolute w-[520px] h-[520px] rounded-full
                   bg-gradient-to-tr from-cyan-400/20 via-rose-400/10 to-purple-500/20
                   blur-3xl"
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400"
        >
          Hi, I’m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold tracking-tight"
        >
          Mridul <span className="text-cyan-400">Chopra</span>
        </motion.h1>

        {/* Typewriter with true rose typing */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-xl md:text-2xl text-neutral-300 min-h-[3rem]"
        >
          {renderTypedText()}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-lg text-neutral-400 leading-relaxed"
        >
          Computer Science student with a strong interest in competitive
          programming, machine learning focused on
          building reliable systems that actually solve real problems.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-12 flex justify-center gap-6"
        >
          <a href="#projects">
            <MagneticButton>View Projects</MagneticButton>
          </a>

          <a href="#about">
            <MagneticButton variant="ghost">About Me</MagneticButton>
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center text-neutral-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest mb-2 uppercase">
          Scroll
        </span>
        <div className="w-[2px] h-8 bg-neutral-500 rounded-full" />
      </motion.div>
    </section>
  );
}
