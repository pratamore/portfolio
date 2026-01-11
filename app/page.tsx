"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";

// =======================
// Dynamic Imports
// =======================
const TextType = dynamic(() => import("./components/text/TextType"), { ssr: false });
const ShinyText = dynamic(() => import("./components/text/ShinyText"), { ssr: false });
const ScrollVelocity = dynamic(() => import("./components/text/ScrollVelocity"), { ssr: false });
const ProfileCard = dynamic(() => import("./components/items/ProfileCard"), { ssr: false });
const SplitText = dynamic(() => import("./components/text/SplitText"), { ssr: false });
const TiltedCard = dynamic(() => import("./components/items/TiltedCard"), { ssr: false });
const SkillsSection = dynamic(() => import("./components/items/SkillsSection"), { ssr: false });
const PortfolioCard = dynamic(() => import("./components/items/PortfolioCard"), { ssr: false });
const ContactSection = dynamic(() => import("./components/ContactSection"), { ssr: false });
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });
const SectionReveal = dynamic(
  () => import("./components/SectionReveal"),
  { ssr: false }
);


export default function Home() {
  const textTypeArray = useMemo(
    () => ["Saya Agung Putra", "Welcome To My Website"],
    []
  );

  return (
    <>
      {/* ================= GLOBAL STYLE ================= */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          display: none;
        }
        html {
          scrollbar-width: none;
        }
      `}</style>

      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#020B1C]">
        <div className="absolute top-0 left-0 h-full w-6 bg-gradient-to-r from-[#0F77FF] to-transparent blur-3xl" />
        <div className="absolute top-0 right-0 h-full w-6 bg-gradient-to-l from-[#0F77FF] to-transparent blur-3xl" />
      </div>

      {/* ================= MAIN WRAPPER ================= */}
      <main className="relative z-10 overflow-x-hidden">

        {/* ================= NAVBAR ================= */}
        <nav className="fixed top-0 left-0 z-30 h-16 w-full]" />

        {/* ================= HERO ================= */}
        <section id="home" className="pt-32 pb-40">
          <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* PROFILE CARD */}
            <div className="order-1 md:order-2 flex justify-center">
              <ProfileCard
                avatarUrl="/profile.jpg"
                name="Agung Putra Ramadhan"
                title="Fullstack Web Developer"
                handle="___yntkts_0"
              />
            </div>

            {/* HERO TEXT */}
            <SectionReveal>
            <div className="order-2 md:order-1 text-center md:text-left">
              <h2 className="mb-2 text-2xl font-semibold text-[#CBFF4D] md:pl-16">
                Halo Semuanya,
              </h2>

              <TextType
                text={textTypeArray}
                typingSpeed={100}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                className="md:pl-16 text-4xl font-extrabold"
              />

              <div className="mt-6 md:pl-16">
                <ShinyText
                  text="Fullstack Web Developer yang senang membangun website modern, cepat, dan user-friendly."
                  speed={2}
                  color="#D8C99B"
                  shineColor="#BBCDE5"
                  className="text-lg font-semibold"
                />
              </div>
              

              <div className="mt-10 md:pl-16">
                <button className="rounded-3xl bg-[#ABDADC] px-10 py-3 font-semibold text-black transition hover:bg-[#06BA63]">
                  Download CV
                </button>
              </div>
            </div>
            </SectionReveal>
          </div>
        </section>
        

        {/* ================= SCROLL TEXT ================= */}
        <section className="h-56 md:h-96">
          <ScrollVelocity texts={["Welcome To My Website", "Scroll Down"]} />
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="py-32 px-6">
          <div className="mx-auto max-w-5xl rounded-2xl border border-indigo-400/30 bg-white/5 p-10 md:p-16 backdrop-blur-xl shadow-[0_0_40px_rgba(99,102,241,0.45)]">

            <h1 className="mb-16 text-center text-5xl font-extrabold text-white">
              About
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-14">
              <TiltedCard
                imageSrc="/foto.jpg"
                altText="Agung Putra"
                captionText="Agung Putra"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="260px"
                imageWidth="260px"
              />

              <SplitText
                text="Saya adalah Fullstack Web Developer dengan minat besar dalam membangun aplikasi web modern, efisien, dan scalable. Saya terbiasa mengerjakan pengembangan end-to-end mulai dari UI/UX hingga backend, API, autentikasi, serta database. Fokus utama saya adalah performa, pengalaman pengguna, dan clean code."
                className="text-white text-base md:text-lg font-medium"
                splitType="chars"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                duration={0.3}
              />
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skill" className="relative py-32 px-6">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-20 blur-3xl" />
          <h1 className="relative z-10 mb-16 text-center text-6xl font-extrabold text-white">
            Skill
          </h1>
          <SkillsSection />
        </section>

        {/* ================= PORTFOLIO ================= */}
        <section id="portfolio" className="py-32 px-6">
          <h1 className="mb-16 text-center text-5xl font-extrabold text-white">
            Portfolio Terpilih
          </h1>

          <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <PortfolioCard
              title="Landing Page Modern"
              description="Website landing page responsive dan interaktif."
              image="/portfolio/landing.jpg"
              tech={["Next.js", "Tailwind", "Framer Motion"]}
              url="https://example.com"
            />
            <PortfolioCard
              title="Dashboard Admin"
              description="Dashboard dengan chart dan autentikasi."
              image="/portfolio/dashboard.jpg"
              tech={["React", "Chart.js", "Tailwind"]}
              url="https://example.com"
            />
            <PortfolioCard
              title="Portfolio Pribadi"
              description="Website portfolio personal modern."
              image="/portfolio/portfolio.jpg"
              tech={["Next.js", "TypeScript", "Tailwind"]}
              url="https://example.com"
            />
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="py-32">
          <ContactSection />
        </section>

        {/* ================= FOOTER ================= */}
        <Footer />
      </main>
    </>
  );
}
