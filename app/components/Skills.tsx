export default function Skills() {
    const skills = [
  {
    name: "React",
    level: 90,
    icon: "devicon-react-original colored",
  },
  {
    name: "Next.js",
    level: 85,
    icon: "devicon-nextjs-original-wordmark text-white",
  },
  {
    name: "TypeScript",
    level: 80,
    icon: "devicon-typescript-plain colored",
  },
  {
    name: "Tailwind CSS",
    level: 95,
    icon: "devicon-tailwindcss-plain colored",
  },
  {
    name: "Node.js",
    level: 75,
    icon: "devicon-nodejs-plain colored",
  },
  {
    name: "Python",
    level: 70,
    icon: "devicon-python-plain colored",
  },
];


  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* BACKGROUND EFFECT — TETAP */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-magenta-500/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white animate-fadeInUp">
          Skill
        </h2>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/40 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 flex flex-col items-center justify-center
              hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500 animate-fadeInUp"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* RADIAL PROGRESS */}
              <div className="relative w-24 h-24 mb-4">
                <svg className="w-full h-full rotate-[-90deg]">
                  <circle
                    cx="48"
                    cy="48"
                    r="42"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-700"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="42"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 42}
                    strokeDashoffset={
                      2 * Math.PI * 42 -
                      (skill.level / 100) * 2 * Math.PI * 42
                    }
                    className="text-cyan-400 transition-all duration-1000 ease-out"
                  />
                </svg>

                {/* ICON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <i
                    className={`${skill.icon} text-3xl  group-hover:scale-110 transition-transform duration-300`}
                  ></i>
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-white font-semibold text-lg group-hover:text-cyan-300 transition-colors duration-300">
                {skill.name}
              </h3>

              {/* PERCENT */}
              <span className="mt-1 text-sm text-gray-400">
                {skill.level}% Proficiency
              </span>

              {/* GLOW LINE */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-400 group-hover:w-2/3 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
