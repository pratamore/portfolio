"use client";

import { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  gradient: string;
}

export default function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
    <div
      className="
        group relative
        w-[130px] h-[130px]
        rounded-xl
        border border-white/10
        bg-white/5 backdrop-blur-xl
        flex flex-col items-center justify-center gap-2
        transition-all duration-300
        hover:-translate-y-1 hover:scale-105
      "
    >
      {/* Glow */}
      <div
        className={`
          pointer-events-none absolute inset-0
          rounded-xl blur-xl opacity-0
          bg-gradient-to-r ${skill.gradient}
          transition duration-300
          group-hover:opacity-40
        `}
      />

      {/* Icon */}
      <Icon className="relative z-10 text-5xl text-white" />

      {/* Name */}
      <p className="relative z-10 text-xl font-semibold text-white text-center">
        {skill.name}
      </p>
    </div>
  );
}
