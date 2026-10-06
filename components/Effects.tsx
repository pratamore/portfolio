"use client";
import { useEffect, useRef } from "react";

/** Kursor kustom + animasi reveal saat scroll. */
export default function Effects() {
  const cur = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));

    let cleanup = () => {};
    if (matchMedia("(hover:hover) and (pointer:fine)").matches) {
      document.documentElement.classList.add("cur");
      const c = cur.current!;
      const move = (e: MouseEvent) => { c.style.transform = `translate(${e.clientX}px,${e.clientY}px)`; };
      const over = (e: MouseEvent) =>
        c.classList.toggle("big", !!(e.target as Element).closest("a,button,.pc,input,textarea"));
      addEventListener("mousemove", move);
      document.addEventListener("mouseover", over);
      cleanup = () => {
        removeEventListener("mousemove", move);
        document.removeEventListener("mouseover", over);
        document.documentElement.classList.remove("cur");
      };
    }
    return () => { io.disconnect(); cleanup(); };
  }, []);

  return <div id="cur" ref={cur} />;
}
