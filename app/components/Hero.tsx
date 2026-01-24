"use client";

import { useEffect, useRef, useState } from "react";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex items-center bg-black text-white"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 lg:gap-12">

          {/* Profile Card */}
          <div
            className={`lg:w-1/2 lg:order-2 flex justify-center ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            <ProfileCard
              avatarUrl="/profile.jpg"
              className="scale-75 md:scale-90 lg:scale-100"
            />
          </div>

          {/* Text Content */}
          <div
            className={`lg:w-1/2 lg:order-1 text-center lg:text-left -mt-1 sm:-mt-3 lg:mt-0 ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 text-cyan-400">
              Welcome To My Portfolio
            </h1>

            <p className="text-base md:text-lg text-gray-300 mb-6">
              Saya adalah Fullstack Developer yang berfokus pada pengembangan
              aplikasi web modern, scalable, dan efisien.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="/cv/Ade-CV.pdf"
                download
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transition"
              >
                Download CV
              </a>

              <a
                href="https://wa.me/6285712455030"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-semibold transition"
              >
                Contact Me
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
