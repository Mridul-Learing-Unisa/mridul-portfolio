"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type ProjectCardProps = {
  title: string;
  tech: string;
  description: string;
  icon: LucideIcon;
};

export default function ProjectCard({
  title,
  tech,
  description,
  icon: Icon,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="
        relative rounded-3xl
        border border-white/10
        bg-neutral-900/60 backdrop-blur
        p-8
        hover:border-rose-400/40
        transition-all
      "
    >
      {/* ICON — FULL WIDTH, CENTERED */}
      <div className="mb-8 flex justify-center">
        <div
          className="
            relative flex items-center justify-center
            w-20 h-20 rounded-2xl
            bg-gradient-to-br from-rose-400/20 to-cyan-400/20
            text-rose-400
          "
        >
          {/* soft glow */}
          <div
            className="
              absolute inset-0 rounded-2xl
              bg-gradient-to-br from-rose-400/30 to-cyan-400/30
              blur-xl
              opacity-60
            "
          />
          <Icon size={40} className="relative z-10" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-2 text-center">
        {title}
      </h3>

      {/* Tech */}
      <p className="text-sm text-cyan-400 mb-4 text-center">
        {tech}
      </p>

      {/* Description */}
      <p className="text-neutral-400 leading-relaxed text-sm text-center">
        {description}
      </p>
    </motion.div>
  );
}
