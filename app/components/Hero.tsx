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
    <section ref={sectionRef} id="hero" className="min-h-screen flex items-center bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">

          <div className={`lg:w-1/2 lg:order-2 flex justify-center mb-8 lg:mb-0 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}>
            <ProfileCard
              avatarUrl="/profile.jpg"
              className="scale-75 md:scale-90 lg:scale-100"
            />
          </div>

          <div className={`lg:w-1/2 lg:order-1 text-center lg:text-left ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-cyan-400">
              Selamat Datang di Portofolio Saya
            </h1>
            <p className="text-lg text-gray-300">
              Saya adalah web developer yang fokus pada UI modern & interaktif.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
