"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-black">
      {/* GLOW TOP */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-32 w-[80%] blur-3xl opacity-40 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Agung Putra
            </h3>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Fullstack Web Developer yang fokus membangun website modern,
              responsif, dan scalable dengan teknologi terbaru.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>
                <Link href="#home" className="hover:text-cyan-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-cyan-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-cyan-400 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">
              Connect
            </h4>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                className="rounded-xl bg-white/5 p-3 text-white/70 hover:text-cyan-400 hover:bg-white/10 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                className="rounded-xl bg-white/5 p-3 text-white/70 hover:text-cyan-400 hover:bg-white/10 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                className="rounded-xl bg-white/5 p-3 text-white/70 hover:text-cyan-400 hover:bg-white/10 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:your@email.com"
                className="rounded-xl bg-white/5 p-3 text-white/70 hover:text-cyan-400 hover:bg-white/10 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Agung Putra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
