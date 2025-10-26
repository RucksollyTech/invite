"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function AnimatedButton() {
  const buttonRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            // Stop animation after 3 seconds
            setTimeout(() => setAnimate(false), 3000);
          }
        });
      },
      { threshold: 0.5 } // trigger when 50% of the button is visible
    );

    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);
  

  return (
    <Link
        href="https://t.me/+tnx-XVb-_GtjN2Q0"
        target="_blank"
        rel="noopener noreferrer"
    >
        <button
            onClick={()=>"https://t.me/+tnx-XVb-_GtjN2Q0"}
            ref={buttonRef}
            className={`relative bg-green-700 cursor-pointer text-white md:text-5xl text-xl font-extrabold md:py-6 py-4 md:px-8 px-5 rounded-2xl shadow-lg transition-all duration-300 hover:bg-green-800 ${
                animate ? "animate-celebrate" : ""
            }`}
        >
            Join Our Telegram Channel for free
        </button>
    </Link>
  );
}
