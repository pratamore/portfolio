export default function Projects() {
  const projects = [
    {
      title: 'Proyek Web E-commerce',
      description: 'Platform e-commerce lengkap dengan fitur keranjang belanja dan pembayaran.',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center',
      demo: '#',
      github: '#',
    },
    {
      title: 'Aplikasi Mobile Task Manager',
      description: 'Aplikasi untuk mengelola tugas harian dengan notifikasi dan sinkronisasi cloud.',
      tech: ['React Native', 'Firebase'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop&crop=center',
      demo: '#',
      github: '#',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interaktif untuk visualisasi data bisnis dengan grafik real-time.',
      tech: ['Next.js', 'D3.js', 'PostgreSQL'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center',
      demo: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-magenta-500/5 via-transparent to-cyan-500/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white animate-fadeInUp">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-magenta-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-magenta-500/30 group animate-fadeInUp"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.demo}
                    className="flex-1 bg-cyan-500 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-400 transition-colors duration-300 text-center"
                  >
                    <i className="fas fa-external-link-alt mr-1"></i>Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors duration-300 text-center"
                  >
                    <i className="fab fa-github mr-1"></i>Code
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-magenta-500/20 to-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium border border-magenta-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-cyan-400 hover:text-magenta-400 font-semibold transition-all duration-300 hover:translate-x-1 group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                >
                  Lihat Detail
                  <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
