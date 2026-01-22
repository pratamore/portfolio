"use client";

import { useState, useEffect, useRef } from "react";
import ProfileCard from "./ProfileCard";

export default function Hero() {
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
    <section ref={sectionRef} id="hero" className="min-h-screen flex items-center bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className={`lg:w-1/2 lg:order-2 flex justify-center mb-8 lg:mb-0 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <ProfileCard className="scale-60 md:scale-80 lg:scale-100" />
          </div>
          <div className={`lg:w-1/2 lg:order-1 text-center lg:text-left ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-cyan-400">
              Selamat Datang di Portofolio Saya
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300">
              Saya adalah seorang pengembang web yang passionate dan kreatif.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
              <a
                href="#about"
                className="inline-block bg-cyan-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-cyan-400 transition-all duration-300 text-center"
              >
                Tentang Saya
              </a>
              <a
                href="#projects"
                className="inline-block border-2 border-magenta-500 text-magenta-400 px-6 py-3 rounded-full font-semibold hover:bg-magenta-500 hover:text-black transition-all duration-300 text-center"
              >
                Lihat Proyek
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
