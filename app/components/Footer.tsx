"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-cyan-500/20">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-magenta-500/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* ================= TOP ================= */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">

          {/* BRAND */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-magenta-500 rounded-lg flex items-center justify-center mr-2 shadow-md">
                <span className="text-white text-base font-bold">A</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
                AGUNG
              </h3>
            </div>

            {/* Deskripsi: disingkat di mobile */}
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md mx-auto md:mx-0">
              Web developer fokus pada solusi modern & user-friendly.
            </p>

            {/* SOCIAL */}
            <div className="flex justify-center md:justify-start gap-3 mt-5">
              {[
                { icon: "fab fa-github", link: "https://github.com/pratamore" },
                { icon: "fab fa-whatsapp", link: "https://wa.me/6285712455030?text=Halo%20Agung%2C%20saya%20ingin%20menghubungi%20Anda" },
                { icon: "fas fa-envelope", link: "mailto:agungputra2820@gmail.com" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center
                             hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300"
                >
                  <i className={`${item.icon} text-gray-400 hover:text-cyan-400 text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS – HANYA DESKTOP */}
          <div className="hidden md:grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-4">
                Navigasi
              </h4>
              <ul className="space-y-2">
                {["Hero", "About", "Skills", "Projects"].map((item, i) => (
                  <li key={i}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-cyan-400 transition text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-4">
                Kontak
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href= "mailto:agungputra2820@gmail.com?subject=Halo%20Agung&body=Halo%20saya%20tertarik%20dengan%20portfolio%20Anda"
                    className="text-gray-400 hover:text-cyan-400 transition text-sm"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/6285712455030?text=Halo%20Agung%2C%20saya%20ingin%20menghubungi%20Anda"
                    target="_blank"
                    className="text-gray-400 hover:text-cyan-400 transition text-sm"
                  >
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/pratamore"
                    target="_blank"
                    className="text-gray-400 hover:text-cyan-400 transition text-sm"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-gray-800 mt-8 pt-4 text-center">
          <p className="text-gray-500 text-[10px] sm:text-xs">
            © {currentYear} • Built with Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
