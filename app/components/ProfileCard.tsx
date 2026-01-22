"use client";

import React, { useRef, useEffect, useState } from "react";

/* =======================
   CONFIG
======================= */
const CARD_SIZE = "clamp(260px, 60vw, 340px)";
const CARD_RADIUS = "50%";

/* =======================
   COMPONENT
======================= */
export default function ProfileCardCircleHolo({
  avatarUrl = "/profile.jpg",
  name = "Agung Putra",
  title = "Web Developer",
  enableRingGlow = true,
  minimalOnMobile = true
}: {
  avatarUrl: string;
  name?: string;
  title?: string;
  enableRingGlow?: boolean;
  minimalOnMobile?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(false);

  /* =======================
     MOBILE DETECT
  ======================= */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* =======================
     POINTER EFFECT
  ======================= */
  useEffect(() => {
    const card = cardRef.current;
    const wrapper = wrapperRef.current;
    if (!card || !wrapper) return;

    const move = (e: PointerEvent) => {
      const r = wrapper.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;

      wrapper.style.setProperty("--px", `${x}`);
      wrapper.style.setProperty("--py", `${y}`);

      card.style.transform = `
        rotateX(${(y - 0.5) * -14}deg)
        rotateY(${(x - 0.5) * 14}deg)
        scale(1.02)
      `;
    };

    const reset = () => {
      wrapper.style.setProperty("--px", "0.5");
      wrapper.style.setProperty("--py", "0.5");
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    };

    wrapper.addEventListener("pointermove", move);
    wrapper.addEventListener("pointerleave", reset);

    return () => {
      wrapper.removeEventListener("pointermove", move);
      wrapper.removeEventListener("pointerleave", reset);
    };
  }, []);

  const hideText = minimalOnMobile && isMobile;

  /* =======================
     RENDER
  ======================= */
  return (
    <div
      ref={wrapperRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center justify-center min-h-[420px]"
      style={{ perspective: "1200px" }}
    >
      {/* === SHADOW FOLLOW CURSOR === */}
      <div
        className="absolute -z-10 rounded-full blur-3xl transition-all duration-500 ease-out"
        style={{
          width: CARD_SIZE,
          height: CARD_SIZE,
          background: `
            radial-gradient(
              circle at calc(var(--px,0.5)*100%) calc(var(--py,0.5)*100%),
              rgba(34,211,238,0.45),
              rgba(99,102,241,0.25),
              transparent 70%
            )
          `,
          transform: `
            translateX(calc((var(--px,0.5) - 0.5) * 40px))
            translateY(calc((var(--py,0.5) - 0.5) * 40px))
            scale(${hovered ? 1.15 : 0.7})
          `,
          opacity: hovered ? 1 : 0.55
        }}
      />

      {/* === RING GLOW === */}
      {enableRingGlow && (
        <div
          className="absolute rounded-full blur-3xl animate-spin-slow"
          style={{
            width: CARD_SIZE,
            height: CARD_SIZE,
            background:
              "conic-gradient(#67e8f9,#38bdf8,#818cf8,#67e8f9)",
            opacity: 0.6
          }}
        />
      )}

      {/* === CARD === */}
      <div
        ref={cardRef}
        className="relative grid place-items-center transition-transform duration-300 ease-out"
        style={{
          width: CARD_SIZE,
          height: CARD_SIZE,
          borderRadius: CARD_RADIUS,
          transformStyle: "preserve-3d",
          background: "rgba(5,135,158,1)",
          boxShadow: `
            0 0 40px rgba(103,232,249,0.6),
            0 0 90px rgba(56,189,248,0.35)
          `
        }}
      >
        {/* === INNER GLASS === */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: CARD_RADIUS,
            background:
              "linear-gradient(145deg,rgba(255,255,255,0.18),rgba(255,255,255,0.02))",
            backdropFilter: "blur(30px)"
          }}
        />

        {/* === SHINE === */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: CARD_RADIUS,
            background: `
              radial-gradient(
                circle at calc(var(--px,0.5)*100%) calc(var(--py,0.5)*100%),
                rgba(255,255,255,0.45),
                transparent 65%
              )
            `,
            mixBlendMode: "color-dodge"
          }}
        />

        {/* === GLARE === */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: CARD_RADIUS,
            background: `
              radial-gradient(
                circle at calc(var(--px,0.5)*100%) calc(var(--py,0.5)*100%),
                rgba(255,255,255,0.25),
                rgba(0,0,0,0.95) 75%
              )
            `,
            mixBlendMode: "overlay"
          }}
        />

        {/* === AVATAR === */}
        <img
          src={avatarUrl}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            borderRadius: CARD_RADIUS,
            transform: "translateZ(45px)"
          }}
        />

        {/* === INFO === */}
        {!hideText && (
          <div
            className="absolute bottom-5 px-4 py-2 bg-white/10 backdrop-blur-xl border border-cyan-300/20 rounded-full text-center"
            style={{
              transform: "translateZ(65px)",
              boxShadow: "0 0 25px rgba(103,232,249,0.6)"
            }}
          >
            <p className="text-white text-sm font-semibold">
              {name}
            </p>
            <p className="text-cyan-300 text-xs">
              {title}
            </p>
          </div>
        )}
      </div>

      {/* === STYLE === */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 14s linear infinite;
        }
      `}</style>
    </div>
  );
}
