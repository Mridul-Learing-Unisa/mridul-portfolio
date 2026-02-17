"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  depth: number;
  phase: number;
  speed: number;
};

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;
    
    const ctx = context;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const stars: Star[] = Array.from({ length: 220 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1 + 0.4,
      vx: (Math.random() - 0.5) * 0.03,
      vy: (Math.random() - 0.5) * 0.03,
      depth: Math.random() * 0.6 + 0.2,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.02 + 0.005,
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    function draw() {
      ctx.clearRect(0, 0, width, height);

      const parallaxX = (mouseX - width / 2) * 0.04;
      const parallaxY = (mouseY - height / 2) * 0.04;

      for (const s of stars) {
        // drift
        s.x += s.vx;
        s.y += s.vy;

        // wrap edges
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        // twinkle
        s.phase += s.speed;
        const glow = 0.5 + Math.sin(s.phase) * 0.5;

        const x = s.x + parallaxX * s.depth;
        const y = s.y + parallaxY * s.depth;

        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, Math.PI * 2);

        ctx.shadowBlur = 14 * glow;
        ctx.shadowColor = "rgba(255,255,255,0.9)";
        ctx.fillStyle = `rgba(255,255,255,${0.5 + glow * 0.5})`;
        ctx.fill();
      }

      requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

return (
  <canvas
    ref={canvasRef}
    className="fixed inset-0 z-0 pointer-events-none"
  />
);
}
