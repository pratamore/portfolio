"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  handle: string;
}

export default function ProfileCard({
  avatarUrl,
  name,
  title,
  handle,
}: ProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [bgPos, setBgPos] = useState({ x: 50, y: 50 });
  const [shadowX, setShadowX] = useState(0);

  const SENSITIVITY = 18;
  const SMOOTH = 0.18;
  const SHADOW_FORCE = 1.4;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glowRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const dx = x - cx;
    const dy = y - cy;

    const rotateX = (dy / cy) * -SENSITIVITY;
    const rotateY = (dx / cx) * SENSITIVITY;

    setRotate((p) => ({
      x: p.x + (rotateX - p.x) * SMOOTH,
      y: p.y + (rotateY - p.y) * SMOOTH,
    }));

    setBgPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });

    setShadowX(-rotateY * SHADOW_FORCE);

    glowRef.current.style.left = `${x}px`;
    glowRef.current.style.top = `${y}px`;
  };

  const reset = () => {
    setRotate({ x: 0, y: 0 });
    setBgPos({ x: 50, y: 50 });
    setShadowX(0);
  };

  return (
    <motion.div
      initial={{ x: 120, opacity: 0, scale: 0.95 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        className="relative w-[200px] h-[300px] md:w-[340px] md:h-[460px] rounded-3xl overflow-hidden"
        style={{
          transform: `perspective(1200px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          boxShadow: `
            ${shadowX}px 0 35px rgba(0,0,0,0.55),
            ${shadowX * 1.6}px 0 30px rgba(0,221,255,1)
          `,
        }}
      >
        {/* IMAGE */}
        <Image
          src={avatarUrl}
          alt={name}
          fill
          priority
          className="object-cover brightness-200 contrast-110 saturate-110"
        />

        {/* PARALLAX GRADIENT */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: `radial-gradient(circle at ${bgPos.x}% ${bgPos.y}%,
              rgba(99,102,241,0.18),
              rgba(34,211,238,0.12)
            )`,
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/25 z-[2]" />

        {/* CURSOR GLOW */}
        <div
          ref={glowRef}
          className="
            pointer-events-none absolute z-[3]
            h-52 w-52 -translate-x-1/2 -translate-y-1/2
            rounded-full blur-3xl opacity-35
            bg-gradient-to-r from-cyan-400 to-purple-500
          "
        />

        {/* TEXT */}
        <div className="relative z-[4] h-full flex flex-col justify-end p-6 text-white">
          <h3 className="text-sm md:text-2xl text-center font-bold drop-shadow">
            {name}
          </h3>

          <p className="text-xs md:text-sm text-center bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
            {title}
          </p>

          <p className="text-xs text-center text-white/80">@{handle}</p>

          <button
            className="
              mt-4 w-full rounded-xl py-2 text-sm font-semibold
              bg-gradient-to-r from-cyan-400 to-purple-500
              text-black hover:scale-105
              transition-transform duration-300
            "
          >
            Contact
          </button>
        </div>
      </div>
    </motion.div>
  );
}
