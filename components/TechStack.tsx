"use client";

import { motion } from "framer-motion";

const stacks = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: "python" },
      { name: "C++", icon: "cplusplus" },
      { name: "Java", icon: "java" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "SQL", icon: "mysql" },
      { name: "MS SQL", icon: "microsoftsqlserver" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
  },
  {
    title: "Machine Learning & Vision",
    items: [
      { name: "NumPy", icon: "numpy" },
      { name: "Pandas", icon: "pandas" },
      { name: "OpenCV", icon: "opencv" },
      { name: "scikit-learn", icon: "scikitlearn" },
      { name: "MediaPipe", icon: "google" },
      { name: "Streamlit", icon: "streamlit" },
    ],
  },
  {
    title: "Tools & Systems",
    items: [
      { name: "Git", icon: "git" },
      { name: "VS Code", icon: "vscode" },
      { name: "Visual Studio", icon: "visualstudio" },
      { name: "Docker", icon: "docker" },
      { name: "Linux", icon: "linux" },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="relative py-24 max-w-7xl mx-auto px-6 overflow-hidden"
    >
      {/* Edge glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-[-120px] left-0 w-full h-[220px]
                     bg-gradient-to-r from-cyan-400/10 via-transparent to-cyan-400/10
                     blur-[140px]"
        />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-14 relative z-10"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-400 mb-3">
          Tech
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-rose-400">
          Tools & Technologies
        </h2>

        <div className="mt-4 h-[2px] w-24 bg-gradient-to-r from-rose-400 to-cyan-400 rounded-full" />
      </motion.div>

      {/* Grid — FIXED */}
        <div
        className="
            relative z-10
            grid grid-cols-1
            md:grid-cols-2
            gap-10
        "
        >
        {stacks.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="
              rounded-3xl
              border border-white/10
              bg-neutral-900/60 backdrop-blur
              p-7
              hover:border-rose-400/40
              hover:-translate-y-1
              transition-all
            "
          >
            <h3 className="text-lg font-medium text-cyan-400 mb-8">
              {group.title}
            </h3>

            <div className="grid grid-cols-3 gap-y-8 gap-x-4">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="
                    group flex flex-col items-center gap-2
                    text-neutral-400
                    hover:text-rose-400
                    transition
                  "
                >
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.icon}/${item.icon}-original.svg`}
                    alt={item.name}
                    className="
                      w-11 h-11
                      opacity-75
                      group-hover:opacity-100
                      transition
                    "
                  />
                  <span className="text-xs tracking-wide text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
