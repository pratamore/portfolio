"use client";

import React, { useRef, useEffect, useState } from "react";

/* =======================
   CONFIG
======================= */
const CARD_SIZE = "clamp(260px, 60vw, 340px)";
const CARD_RADIUS = "50%";

/* =======================
   TYPES
======================= */
interface ProfileCardCircleHoloProps {
  avatarUrl: string;
  name?: string;
  title?: string;
  enableRingGlow?: boolean;
  minimalOnMobile?: boolean;
  className?: string;
}

/* =======================
   COMPONENT
======================= */
export default function ProfileCardCircleHolo({
  avatarUrl,
  name = "Agung Putra",
  title = "Web Developer",
  enableRingGlow = true,
  minimalOnMobile = true,
  className = "",
}: ProfileCardCircleHoloProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(false);

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
     DESKTOP POINTER EFFECT
  ======================= */
  useEffect(() => {
    if (isMobile) return;

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
  }, [isMobile]);

  /* =======================
     MOBILE GYRO EFFECT 🔥
  ======================= */
  useEffect(() => {
    if (!isMobile) return;

    const card = cardRef.current;
    const wrapper = wrapperRef.current;
    if (!card || !wrapper) return;

    const handleOrientation = (e: DeviceOrientationEvent) => {
      const gamma = e.gamma ?? 0; // left-right (-90 to 90)
      const beta = e.beta ?? 0;   // front-back (-180 to 180)

      const x = Math.min(Math.max(gamma / 45 + 0.5, 0), 1);
      const y = Math.min(Math.max(beta / 90 + 0.5, 0), 1);

      wrapper.style.setProperty("--px", `${x}`);
      wrapper.style.setProperty("--py", `${y}`);

      card.style.transform = `
        rotateX(${beta * -0.15}deg)
        rotateY(${gamma * 0.15}deg)
        scale(1.02)
      `;
    };

    // iOS permission
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof (DeviceOrientationEvent as any).requestPermission === "function"
    ) {
      (DeviceOrientationEvent as any)
        .requestPermission()
        .then((res: string) => {
          if (res === "granted") {
            window.addEventListener("deviceorientation", handleOrientation);
          }
        });
    } else {
      window.addEventListener("deviceorientation", handleOrientation);
    }

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, [isMobile]);

  const hideText = minimalOnMobile && isMobile;

  /* =======================
     RENDER
  ======================= */
  return (
    <div
      ref={wrapperRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex items-center justify-center min-h-[420px] ${className}`}
      style={{ perspective: "1200px" }}
    >
      {/* SHADOW */}
      <div
        className="absolute -z-10 rounded-full blur-3xl transition-all duration-500"
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
          transform: `scale(${hovered || isMobile ? 1.1 : 0.7})`,
        }}
      />

      {/* RING */}
      {enableRingGlow && (
        <div
          className="absolute rounded-full blur-3xl animate-spin-slow"
          style={{
            width: CARD_SIZE,
            height: CARD_SIZE,
            background:
              "conic-gradient(#67e8f9,#38bdf8,#818cf8,#67e8f9)",
            opacity: 0.6,
          }}
        />
      )}

      {/* CARD */}
      <div
        ref={cardRef}
        className="relative grid place-items-center transition-transform duration-300"
        style={{
          width: CARD_SIZE,
          height: CARD_SIZE,
          borderRadius: CARD_RADIUS,
          transformStyle: "preserve-3d",
          background: "rgba(5,135,158,1)",
          boxShadow: `
            0 0 40px rgba(103,232,249,0.6),
            0 0 90px rgba(56,189,248,0.35)
          `,
        }}
      >
        <img
          src={avatarUrl}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            borderRadius: CARD_RADIUS,
            transform: "translateZ(45px)",
          }}
        />

        {!hideText && (
          <div
            className="absolute bottom-5 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-center"
            style={{ transform: "translateZ(65px)" }}
          >
            <p className="text-white text-sm font-semibold">{name}</p>
            <p className="text-cyan-300 text-xs">{title}</p>
          </div>
        )}
      </div>

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
