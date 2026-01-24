"use client";

import { useEffect, useRef, useState } from "react";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex items-center bg-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

          {/* Profile Card */}
          <div
            className={`lg:w-1/2 flex justify-center transition-all duration-700 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <ProfileCard />
          </div>

          {/* Text */}
          <div
            className={`lg:w-1/2 text-center lg:text-left transition-all duration-700 delay-150 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400 mb-4">
              Welcome To My Portfolio
            </h1>

            <p className="text-gray-300 text-lg mb-8">
              Saya adalah Fullstack Developer yang berfokus pada pengembangan
              aplikasi web modern, scalable, dan efisien.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/cv/Ade-CV.pdf"
                download
                className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-600 transition"
              >
                Download CV
              </a>

              <a
                href="https://wa.me/6285712455030"
                target="_blank"
                className="px-6 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition"
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
