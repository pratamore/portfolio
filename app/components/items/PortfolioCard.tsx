"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  url?: string;
}

export default function PortfolioCard({
  title,
  description,
  image,
  tech,
  url,
}: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        group relative rounded-3xl p-[2px]
        scale-[0.95] sm:scale-100
        transition-transform
      "
    >
      {/* 🌈 Subtle RGB Border */}
      <div
        className="
          absolute inset-0 rounded-3xl
          bg-[conic-gradient(from_0deg,#6366F1,#22D3EE,#A855F7,#6366F1)]
          animate-spin-slow
          blur-md
          opacity-40
          transition-opacity
          group-hover:opacity-70
        "
      />

      {/* 🧊 Glass Card */}
      <div
        className="
          relative z-10 rounded-3xl
          p-4 sm:p-5
          border border-white/10
          bg-[#0B0F1A]/70
          backdrop-blur-xl
          shadow-[0_8px_30px_rgba(0,0,0,0.4)]
        "
      >
        {/* 🖼 Image */}
        <div className="relative h-44 sm:h-52 overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* ✨ Soft Shine */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-tr from-transparent via-white/10 to-transparent
              opacity-0
              transition-opacity duration-500
              group-hover:opacity-100
            "
          />
        </div>

        {/* 📄 Content */}
        <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
          <h3 className="text-lg sm:text-xl font-extrabold tracking-wide text-white">
            {title}
          </h3>

          <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
            {description}
          </p>

          {/* 🏷 Tech Stack */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="
                  rounded-full
                  border border-white/10
                  bg-white/5
                  px-2.5 py-0.5 sm:px-3 sm:py-1
                  text-[10px] sm:text-xs
                  text-white/80
                  backdrop-blur-md
                "
              >
                {item}
              </span>
            ))}
          </div>

          {/* 🔘 Button */}
          {url && (
            <Link
              href={url}
              target="_blank"
              className="
                inline-flex items-center gap-2
                rounded-full
                bg-gradient-to-r from-cyan-400 to-indigo-500
                px-4 py-1.5 sm:px-5 sm:py-2
                text-xs sm:text-sm
                font-bold text-black
                transition-all
                hover:scale-105
                hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]
              "
            >
              View Project →
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
