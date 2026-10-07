"use client";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const so = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("main section").forEach((s) => so.observe(s));
    return () => so.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => {
      removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <>
      <nav aria-label="Navigasi utama">
        <a href="#home" className="mark">A<i>°</i> / AGUNG</a>
        <ul className="links">
          {navItems.map((n) => (
            <li key={n.href}>
              <a href={n.href} className={active === n.href.slice(1) ? "act" : ""}>{n.label}</a>
            </li>
          ))}
        </ul>
        <span className="avail mono">Tersedia</span>
        <button
          className="burger mono"
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Tutup" : "Menu"}
        </button>
      </nav>

      <div id="menu" className={open ? "open" : ""} aria-label="Menu seluler">
        {navItems.map((n, i) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
            <span>{String(i).padStart(2, "0")}</span>{n.label}
          </a>
        ))}
      </div>
    </>
  );
}
