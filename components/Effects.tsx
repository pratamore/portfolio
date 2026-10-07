"use client";

import { useEffect, useRef } from "react";

export default function Effects() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements = document.querySelectorAll(".rv");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    /* =========================================
       CUSTOM CURSOR
    ========================================= */

    const cursor = cursorRef.current;

    if (!cursor) {
      return () => {
        observer.disconnect();
      };
    }

    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    // Jangan aktifkan custom cursor di touchscreen
    if (!mediaQuery.matches) {
      return () => {
        observer.disconnect();
      };
    }

    document.documentElement.classList.add("cur");

    const handleMouseMove = (event: MouseEvent) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as Element | null;

      if (!target) return;

      const interactive = target.closest(
        "a, button, input, textarea, select, .pc"
      );

      if (interactive) {
        cursor.classList.add("big");
      } else {
        cursor.classList.remove("big");
      }
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    document.documentElement.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    /* =========================================
       CLEANUP
    ========================================= */

    return () => {
      observer.disconnect();

      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);

      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      document.documentElement.classList.remove("cur");
    };
  }, []);

  return <div id="cur" ref={cursorRef} aria-hidden="true" />;
}
