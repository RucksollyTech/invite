"use client";
import confetti from "canvas-confetti";
import { useEffect } from "react";

export default function CelebrationEffect() {
  useEffect(() => {
    // Burst from both sides
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      // Left side
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      // Right side
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return null; 
}
