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
   UTILS
======================= */
const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

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
     DESKTOP SMOOTH HOVER
  ======================= */
  useEffect(() => {
    if (isMobile) return;

    const card = cardRef.current;
    const wrapper = wrapperRef.current;
    if (!card || !wrapper) return;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let rafId: number;

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.08);
      currentY = lerp(currentY, targetY, 0.08);

      card.style.transform = `
        rotateX(${currentY}deg)
        rotateY(${currentX}deg)
        scale(1.03)
      `;

      rafId = requestAnimationFrame(animate);
    };

    animate();

    const move = (e: PointerEvent) => {
      const r = wrapper.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;

      targetX = x * 14;
      targetY = -y * 14;

      wrapper.style.setProperty("--px", `${x + 0.5}`);
      wrapper.style.setProperty("--py", `${y + 0.5}`);
    };

    const reset = () => {
      targetX = 0;
      targetY = 0;
    };

    wrapper.addEventListener("pointermove", move);
    wrapper.addEventListener("pointerleave", reset);

    return () => {
      cancelAnimationFrame(rafId);
      wrapper.removeEventListener("pointermove", move);
      wrapper.removeEventListener("pointerleave", reset);
    };
  }, [isMobile]);

  /* =======================
     MOBILE GYRO (SMOOTH)
  ======================= */
  useEffect(() => {
    if (!isMobile) return;

    const card = cardRef.current;
    const wrapper = wrapperRef.current;
    if (!card || !wrapper) return;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let rafId: number;

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.05);
      currentY = lerp(currentY, targetY, 0.05);

      card.style.transform = `
        rotateX(${currentY}deg)
        rotateY(${currentX}deg)
        scale(1.03)
      `;

      rafId = requestAnimationFrame(animate);
    };

    animate();

    const handleOrientation = (e: DeviceOrientationEvent) => {
      const gamma = e.gamma ?? 0;
      const beta = e.beta ?? 0;

      targetX = gamma * 0.12;
      targetY = -beta * 0.12;

      wrapper.style.setProperty("--px", `${gamma / 90 + 0.5}`);
      wrapper.style.setProperty("--py", `${beta / 180 + 0.5}`);
    };

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
      cancelAnimationFrame(rafId);
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
      className={`relative flex items-center justify-center min-h-[300px] pt-10 ${className}`}
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
          transform: `scale(${hovered || isMobile ? 1.1 : 0.75})`,
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
        className="relative grid place-items-center will-change-transform"
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
