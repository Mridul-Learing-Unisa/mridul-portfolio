"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Tech", href: "#tech" },
  { label: "Contact", href: "#contact" },
];

export default function MenuOverlay({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        fixed inset-0 z-40
        bg-black/80 backdrop-blur-xl
        flex items-center justify-center
      "
    >
      <ul className="space-y-10 text-center">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={onClose}
              className="
                text-5xl md:text-7xl font-semibold
                text-neutral-300
                hover:text-rose-400
                transition-colors
              "
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
