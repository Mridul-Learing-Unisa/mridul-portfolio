"use client";

import { motion } from "framer-motion";

export default function Hamburger({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="fixed top-8 left-8 z-[60]"
    >
      <motion.div
        className="flex flex-col gap-2"
        animate={open ? "open" : "closed"}
      >
        <motion.span
          className="block w-8 h-[2px] bg-white"
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 8 },
          }}
        />
        <motion.span
          className="block w-8 h-[2px] bg-white"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.span
          className="block w-8 h-[2px] bg-white"
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -8 },
          }}
        />
      </motion.div>
    </button>
  );
}
