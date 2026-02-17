"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const bootMessages = [
  "Initializing systems",
  "Loading core modules",
  "Starting runtime",
  "Booting Mridul",
];

export default function Intro({ onDone }: { onDone: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Cycle text until the last message
    const textTimer = setInterval(() => {
      setIndex((i) => {
        if (i === bootMessages.length - 1) return i; // stop at "Booting Mridul"
        return i + 1;
      });
    }, 600);

    // Longer total duration so final text is readable
    const doneTimer = setTimeout(onDone, 5000);

    return () => {
      clearInterval(textTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[2px]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center gap-6 w-[360px]">
        {/* Boot text */}
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm tracking-widest text-neutral-400 uppercase"
        >
          {bootMessages[index]}
          <span className="opacity-70">…</span>
        </motion.span>

        {/* Loader */}
        <div className="relative w-full h-[3px] bg-neutral-700 overflow-hidden rounded-full">
          <motion.div
            className="absolute left-0 top-0 h-full w-1/3 bg-cyan-400"
            animate={{ x: ["-100%", "300%"] }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
