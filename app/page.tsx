"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Intro from "../components/Intro";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <Intro onDone={() => setShowIntro(false)} />}

      {!showIntro && (
        <main>
          <Hero />
          <Projects />
          <About />
          <TechStack/>
          <Contact/>
        </main>
      )}
    </>
  );
}
