'use client';

import { useEffect, useRef } from 'react';

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: { x: number; y: number; z: number }[] = [];
    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((width * height) / 2500); // 3D density
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: (Math.random() - 0.5) * width * 2,
          y: (Math.random() - 0.5) * height * 2,
          z: Math.random() * width, // depth
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const speed = 1.0; // speed of moving forward
      const focalLength = width; // determines FOV

      stars.forEach((star) => {
        // move star closer
        star.z -= speed;

        // if behind camera, reset far away
        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
          star.z = width;
        }

        // Project 3D to 2D
        const px = centerX + star.x * (focalLength / star.z);
        const py = centerY + star.y * (focalLength / star.z);

        // Calculate size based on depth (closer = bigger)
        const size = Math.max(0.1, (focalLength / star.z) * 1.5);
        
        // Calculate opacity (closer = brighter, too far = dim)
        let alpha = 1 - (star.z / width);
        // Fade in slightly further away
        if (alpha < 0) alpha = 0;

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        
        // Add a slight blueish/amber tint to larger stars
        ctx.fillStyle = size > 2.5 ? `rgba(250, 219, 95, ${alpha})` : `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none w-full h-full opacity-60"
    />
  );
}
