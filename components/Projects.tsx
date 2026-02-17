"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import {
  Camera,
  Brain,
  BarChart3,
} from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 max-w-6xl mx-auto px-6"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-400 mb-3">
          Selected Work
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-rose-400">
          Projects I’m Proud Of
        </h2>

        <div className="mt-4 h-[2px] w-20 bg-gradient-to-r from-rose-400 to-cyan-400 rounded-full" />
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <ProjectCard
          title="On-Camera Whiteboard"
          tech="Python · OpenCV · MediaPipe"
          icon={Camera}
          description="A real-time computer vision system that digitizes physical whiteboard drawings using hand gesture recognition."
        />

        <ProjectCard
          title="Chess Puzzle Solver"
          tech="Python · Minimax · Alpha-Beta"
          icon={Brain}
          description="A chess engine that solves tactical puzzles using optimized search, pruning, and board evaluation."
        />

        <ProjectCard
          title="CO₂ Emission Predictor"
          tech="Machine Learning · Python"
          icon={BarChart3}
          description="Linear regression implemented from scratch with gradient descent on real-world environmental data."
        />
      </div>
    </section>
  );
}
