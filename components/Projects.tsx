"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="py-32 max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold mb-16"
      >
        Selected Work
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <ProjectCard
          title="On-Camera Whiteboard"
          tech="Python · OpenCV · MediaPipe"
          description="A real-time computer vision system that digitizes physical whiteboard drawings using hand gesture recognition."
        />

        <ProjectCard
          title="Chess Puzzle Solver"
          tech="Python · Minimax · Alpha-Beta"
          description="A chess engine solving tactical puzzles using optimized search, pruning, and board evaluation."
        />

        <ProjectCard
          title="CO₂ Emission Predictor"
          tech="Machine Learning · Python"
          description="Linear regression implemented from scratch with gradient descent on real-world environmental data."
        />
      </div>
    </section>
  );
}
