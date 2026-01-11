"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const menu = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skill" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* 🔥 ANIMATED BACKGROUND */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className={`
          absolute inset-0
          transition-all duration-500
          ${
            scrolled
              ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
              : "bg-black/40 backdrop-blur-md"
          }
        `}
      />

      <div className="relative bg-[#0B272F] w-full mx-auto px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl font-extrabold text-white tracking-wide"
        >
          Agung
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-semibold">
          {menu.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="group relative"
            >
              <Link
                href={item.href}
                className="text-white/80 transition group-hover:text-white"
              >
                {item.label}
              </Link>

              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
              <span className="absolute -inset-2 rounded-lg opacity-0 blur-lg bg-cyan-400/20 transition group-hover:opacity-100 pointer-events-none" />
            </motion.li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
  animate={open ? "open" : "closed"}
  variants={{
    open: { height: "auto", opacity: 1 },
    closed: { height: 0, opacity: 0 },
  }}
  transition={{ duration: 0.4, ease: "easeInOut" }}
  className="md:hidden overflow-hidden z-40 relative"
>
  <div className="bg-[#0B272F] border-t border-white/10">
    {menu.map((item) => (
      <Link
        key={item.label}
        href={item.href}
        onClick={() => setOpen(false)}
        className="
          block px-6 py-4
          text-center text-lg font-semibold
          text-white
          hover:bg-white/10
          transition
        "
      >
        {item.label}
      </Link>
    ))}
  </div>
</motion.div>

    </motion.nav>
  );
}
