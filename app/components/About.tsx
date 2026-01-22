"use client";

import { useState, useEffect, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-magenta-500/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* ================= MOBILE IMAGE ================= */}
          <div
            className={`w-full flex justify-center mb-12 lg:hidden ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
            style={{ animationDelay: "800ms" }}
          >
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-magenta-500/20 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/20">
                <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-cyan-400/30">
                  <img
                    src="/foto.jpg"
                    alt="Agung Putra"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* ping */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full"></div>
            </div>
          </div>

          {/* ================= TEXT ================= */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-cyan-400 text-center lg:text-left ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
            >
              About Me
            </h2>

            <p
              className={`text-base md:text-lg text-gray-300 mb-6 leading-relaxed text-center lg:text-left ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: "200ms" }}
            >
              Saya adalah seorang pengembang web full-stack yang passionate dengan
              pengalaman lebih dari 5 tahun dalam menciptakan aplikasi web yang
              inovatif dan user-friendly. Saya ahli dalam teknologi modern seperti
              React, Next.js, dan Node.js.
            </p>

            <p
              className={`text-base md:text-lg text-gray-300 mb-8 leading-relaxed text-center lg:text-left ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: "400ms" }}
            >
              Saya percaya bahwa desain yang baik harus diimbangi dengan
              fungsionalitas yang kuat. Saya selalu berusaha untuk belajar hal
              baru dan mengikuti tren terbaru dalam dunia teknologi.
            </p>

            <div
              className={`grid grid-cols-3 gap-4 md:gap-8 ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: "600ms" }}
            >
              <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
                  50+
                </div>
                <div className="text-xs md:text-sm text-gray-300">
                  Proyek Selesai
                </div>
              </div>

              <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
                  5+
                </div>
                <div className="text-xs md:text-sm text-gray-300">
                  Tahun Pengalaman
                </div>
              </div>

              <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
                  100%
                </div>
                <div className="text-xs md:text-sm text-gray-300">
                  Kepuasan Klien
                </div>
              </div>
            </div>
          </div>

          {/* ================= DESKTOP IMAGE ================= */}
          <div
            className={`hidden lg:flex lg:w-1/2 lg:pl-12 justify-center ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
            style={{ animationDelay: "800ms" }}
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-magenta-500/20 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/20">
                <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-cyan-400/30">
                  <img
                    src="/foto.jpg"
                    alt="Agung Putra"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
