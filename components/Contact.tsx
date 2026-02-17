"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 max-w-5xl mx-auto px-6 overflow-hidden"
    >
      {/* Wide bottom edge glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute bottom-[-120px] left-0 w-full h-[220px]
                     bg-gradient-to-r from-rose-400/10 via-transparent to-cyan-400/10
                     blur-[140px]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="relative z-10"
      >
        {/* Heading */}
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-400 mb-3">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-rose-400 mb-6">
          Let’s Connect
        </h2>

        <p className="text-neutral-400 text-lg max-w-2xl mb-12">
          Whether it’s internships, projects, competitive programming, or just a
          good technical conversation — I’m always happy to connect.
        </p>

        {/* Contact tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {/* GitHub */}
          <a
            href="https://github.com/Mridul-Learing-Unisa"
            target="_blank"
            className="group rounded-2xl border border-white/10 p-6
                       bg-neutral-900/60 backdrop-blur
                       hover:border-rose-400/40 hover:-translate-y-1
                       hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]
                       transition-all"
          >
            <div className="flex items-center gap-4">
              <Github className="w-6 h-6 text-cyan-400" />
              <div>
                <p className="text-sm text-neutral-400">GitHub</p>
                <p className="text-lg font-medium text-neutral-200">
                  Mridul-Learing-Unisa
                </p>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/mridul-chopra23"
            target="_blank"
            className="group rounded-2xl border border-white/10 p-6
                       bg-neutral-900/60 backdrop-blur
                       hover:border-rose-400/40 hover:-translate-y-1
                       hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]
                       transition-all"
          >
            <div className="flex items-center gap-4">
              <Linkedin className="w-6 h-6 text-cyan-400" />
              <div>
                <p className="text-sm text-neutral-400">LinkedIn</p>
                <p className="text-lg font-medium text-neutral-200">
                  mridul-chopra23
                </p>
              </div>
            </div>
          </a>

          {/* Email */}
          <div
            className="rounded-2xl border border-white/10 p-6
                       bg-neutral-900/60 backdrop-blur"
          >
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-rose-400" />
              <div>
                <p className="text-sm text-neutral-400">Email</p>
                <p className="text-lg font-medium text-neutral-200">
                  mridulchopra23@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div
            className="rounded-2xl border border-white/10 p-6
                       bg-neutral-900/60 backdrop-blur"
          >
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-rose-400" />
              <div>
                <p className="text-sm text-neutral-400">Phone</p>
                <p className="text-lg font-medium text-neutral-200">
                  +61 422 428 543
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resume CTA */}
        <a
          href="/Resume.pdf"
          download
          className="inline-flex items-center gap-3
                     px-9 py-4 rounded-full
                     bg-gradient-to-r from-rose-400 to-cyan-400
                     text-black font-medium
                     hover:scale-[1.04]
                     transition-transform"
        >
          <Download className="w-5 h-5" />
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}

