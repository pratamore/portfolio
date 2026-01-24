"use client";

import React, { useRef, useEffect, useState } from "react";

/* =======================
   TYPES
======================= */
interface ProfileCardProps {
  avatarUrl: string;
  className?: string;
}

/* =======================
   CONFIG
======================= */
const CARD_SIZE = "clamp(240px, 55vw, 320px)";

export default function ProfileCard({
  avatarUrl,
  className = "",
}: ProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  /* =======================
     MOBILE DETECT
  ======================= */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* =======================
     DESKTOP HOVER (SMOOTH)
  ======================= */
  useEffect(() => {
    if (isMobile) return;

    const wrapper = wrapperRef.current;
    const card = cardRef.current;
    if (!wrapper || !card) return;

    let rafId: number;

    const move = (e: PointerEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const r = wrapper.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;

        card.style.transform = `
          rotateX(${y * -10}deg)
          rotateY(${x * 10}deg)
          scale(1.03)
        `;
      });
    };

    const reset = () => {
      card.style.transform =
        "rotateX(0deg) rotateY(0deg) scale(1)";
    };

    wrapper.addEventListener("pointermove", move);
    wrapper.addEventListener("pointerleave", reset);

    return () => {
      wrapper.removeEventListener("pointermove", move);
      wrapper.removeEventListener("pointerleave", reset);
      cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  /* =======================
     MOBILE GYRO (SMOOTH)
  ======================= */
  useEffect(() => {
    if (!isMobile) return;

    const card = cardRef.current;
    if (!card) return;

    let rafId: number;

    const handleOrientation = (e: DeviceOrientationEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const gamma = e.gamma ?? 0;
        const beta = e.beta ?? 0;

        card.style.transform = `
          rotateX(${beta * -0.08}deg)
          rotateY(${gamma * 0.08}deg)
          scale(1.02)
        `;
      });
    };

    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
      cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  /* =======================
     RENDER
  ======================= */
  return (
    <div
      ref={wrapperRef}
      className={`relative flex items-center justify-center ${className}`}
      style={{ perspective: "1200px" }}
    >
      {/* Glow */}
      <div
        className="absolute -z-10 rounded-full blur-3xl"
        style={{
          width: CARD_SIZE,
          height: CARD_SIZE,
          background:
            "radial-gradient(circle, rgba(34,211,238,0.45), transparent 70%)",
        }}
      />

      {/* Card */}
      <div
        ref={cardRef}
        className="relative transition-transform duration-300 ease-out"
        style={{
          width: CARD_SIZE,
          height: CARD_SIZE,
          borderRadius: "50%",
          transformStyle: "preserve-3d",
          background: "#020617",
          boxShadow:
            "0 0 40px rgba(34,211,238,0.5), 0 0 90px rgba(56,189,248,0.3)",
        }}
      >
        <img
          src={avatarUrl}
          alt="Profile"
          className="absolute inset-0 w-full h-full object-cover rounded-full"
          style={{ transform: "translateZ(40px)" }}
        />
      </div>
    </div>
  );
}
