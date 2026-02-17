"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Hamburger from "./Hamburger";
import MenuOverlay from "./MenuOverlay";

export default function Menu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <Hamburger open={open} onClick={() => setOpen((v) => !v)} />

      <AnimatePresence>
        {open && <MenuOverlay onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
