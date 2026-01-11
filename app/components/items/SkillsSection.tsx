import SkillCard from "./SkillCard";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPhp, SiMysql } from "react-icons/si";

const skills = [
  {
    name: "Html",
    icon: FaHtml5,
    gradient: "from-orange-300 to-orange-500",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    gradient: "from-violet-300 to-rose-500",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    gradient: "from-orange-300 to-orange-500",
  },
  {
    name: "PHP",
    icon: SiPhp, // ✅ COMPONENT
    gradient: "from-purple-400 to-fuchsia-500",
  },
  {
    name: "MySQL",
    icon: SiMysql, // ✅ COMPONENT
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    gradient: "from-green-300 to-emerald-500",
  },
  {
    name: "React",
    icon: FaReact, // ✅ COMPONENT
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    gradient: "from-white to-gray-400",
  },
];

export default function SkillsSection() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  );
}
