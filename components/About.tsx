"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 max-w-7xl mx-auto px-6 overflow-hidden"
    >
      {/* HORIZONTAL EDGE GLOWS */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top edge — rose */}
        <div
          className="absolute top-0 left-0 w-full h-[160px]
                     bg-gradient-to-b from-rose-400/15 to-transparent
                     blur-[120px]"
        />

        {/* Bottom edge — cyan */}
        <div
          className="absolute bottom-0 left-0 w-full h-[160px]
                     bg-gradient-to-t from-cyan-400/15 to-transparent
                     blur-[120px]"
        />
      </div>

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-24 relative z-10"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-400 mb-3">
          About
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-rose-400">
          A Bit About Me
        </h2>

        <div className="mt-4 h-[2px] w-24 bg-gradient-to-r from-rose-400 to-cyan-400 rounded-full" />
      </motion.div>

      {/* PHOTO + TEXT */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[420px_1fr] gap-12 items-start">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-rose-400 to-cyan-400">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-400/15 to-cyan-400/15 blur-xl" />
            <div className="relative w-[420px] h-[420px] rounded-3xl overflow-hidden bg-neutral-900">
              <img
                src="/me.jpg"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* ONE-PARAGRAPH TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-neutral-300 text-lg leading-relaxed"
        >
          <p>
            <br></br>
            I’m a second-year international{" "}
            <span className="text-cyan-400 font-medium">
              Computer Science 
            </span>{" "}
            student at the Adelaide University with a long standing interest in
            computers and how complex systems are built and reasoned about. Long
            before university, I spent years experimenting with{" "}
            <span className="text-rose-400">video editing</span>,{" "}
            <span className="text-rose-400">graphic design</span>, and{" "}
            <span className="text-rose-400">audio production</span>, which shaped
            the way I think about software today, as something to understand
            deeply rather than treat as a black box. Outside of coursework, I
            enjoy{" "}
            <span className="text-cyan-400">chess</span> and solving{" "}
            <span className="text-cyan-400">Rubik’s cubes</span>; chess in
            particular has influenced how I approach algorithms and search,
            leading me to build a{" "}
            <span className="text-rose-400">chess puzzle solver</span> as a
            personal project. I’m also actively involved in{" "}
            <span className="text-cyan-400">
              competitive programming
            </span>{" "}
            through the Adelaide Competitive Programming Club (ACPC), where I
            serve on the committee. In 2025, my team placed in the{" "}
            <span className="text-rose-400">top 10</span> at AUCPL, an experience
            that reinforced the value of clear thinking, efficiency, and
            correctness under pressure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
