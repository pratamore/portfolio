"use client";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Intro() {
  const [v, setV] = useState(0);
  const [out, setOut] = useState(false);
  const [gone, setGone] = useState(false);
  const done = useRef(false);

  const finish = useCallback(() => {
    if (done.current) return;
    done.current = true;
    setV(100);
    setOut(true);
    setTimeout(() => {
      setGone(true);
      document.body.classList.remove("lock");
    }, 900);
  }, []);

  useEffect(() => {
    document.body.classList.add("lock");
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      if (done.current) return;
      const p = Math.min(1, (now - t0) / 2400);
      setV(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(finish, 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [finish]);

  if (gone) return null;

  return (
    <div id="intro" className={out ? "out" : ""} aria-hidden="true">
      <div className="tl">AGUNG°</div>
      <div className="tr mono" style={{ color: "var(--tx)" }}>Portofolio / 2026</div>
      <button id="skip" className="mono" type="button" onClick={finish}>Lewati</button>
      <div className="st disp">
        <span className="ln-w"><span>Halo.</span></span>
        <span className="ln-w"><span>Saya Agung.</span></span>
        <span className="ln-w"><span>Web Developer.</span></span>
      </div>
      <div className="bt">
        <span className="mono" style={{ color: "var(--tx)" }}>
          Mahasiswa Teknik Informatika<br />Membangun web yang rapi &amp; fungsional
        </span>
        <span id="cnt">{String(v).padStart(3, "0")}</span>
      </div>
      <div className="bar" style={{ transform: `scaleX(${v / 100})` }} />
    </div>
  );
}
