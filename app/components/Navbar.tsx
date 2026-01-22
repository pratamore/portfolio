"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black shadow-lg shadow-cyan-500/20 z-50 border-b border-cyan-500/30 overflow-hidden transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* LOGO (KEMBALI) */}
        <div className="text-2xl font-bold text-sky-400">
          AGUNG
        </div>

        {/* DESKTOP MENU (TETAP) */}
        <div className="hidden md:flex space-x-4">
          {[
            ["hero", "Home"],
            ["about", "About"],
            ["skills", "Skill"],
            ["projects", "Projects"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-white font-semibold hover:text-cyan-400 hover:bg-cyan-400/10 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              {label}
            </button>
          ))}
        </div>

        {/* HAMBURGER */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-cyan-400 focus:outline-none drop-shadow-[0_0_5px_rgba(156,163,175,0.5)] transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU — DI DALAM NAVBAR */}
      <div
        className={`md:hidden bg-gray-900/95 backdrop-blur-md border-t border-cyan-500/30 transition-all duration-300
        ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 py-4 space-y-1">
          {[
            ["hero", "Home", "fa-home"],
            ["about", "About", "fa-user"],
            ["skills", "Skill", "fa-code"],
            ["projects", "Project", "fa-project-diagram"],
            ["contact", "Contact", "fa-envelope"],
          ].map(([id, label, icon]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="font-semibold block w-full text-left text-white
              hover:text-cyan-400 hover:bg-cyan-400/10
              px-4 py-3 rounded-lg
              transition-all duration-300
              hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <i className={`fas ${icon} mr-3`}></i>
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
