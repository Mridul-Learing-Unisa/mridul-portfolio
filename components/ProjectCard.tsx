"use client";

import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  tech,
  description,
}: {
  title: string;
  tech: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="relative p-8 rounded-2xl bg-neutral-900 border border-neutral-800"
    >
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-cyan-400/10 to-transparent" />

      <h3 className="text-xl font-semibold relative z-10">{title}</h3>
      <p className="text-sm text-cyan-400 mt-2 relative z-10">{tech}</p>
      <p className="text-neutral-400 mt-4 relative z-10">
        {description}
      </p>
    </motion.div>
  );
}
