import Intro from "@/components/Intro";
import Nav from "@/components/Nav";
import Effects from "@/components/Effects";
import ContactForm from "@/components/ContactForm";
import { contacts, photo, projects, skills } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Intro />
      <Nav />

      <main>
        <section id="home">
          <div className="meta mono">
            <span>Teknik Informatika</span><span>Pengembangan Web</span><span>Keamanan Siber</span><span>Indonesia</span>
          </div>
          <h1 className="h1 disp">
            <span className="l rv">Halo, Saya</span>
            <span className="l rv d1">Agung.</span>
            <span className="l rv d2">Seorang Web Development.</span>
          </h1>
          <div className="sub rv d3">
            <p>Mahasiswa Teknik Informatika yang gemar membuat situs web, mengutak-atik sistem Linux, dan mempelajari cara menjaganya tetap aman.</p>
            <div className="cta">
              <a href="#projects" className="btn p">Lihat karya</a>
              <a href="#contact" className="btn">Hubungi saya</a>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="sh mono rv"><span>01 / Profil</span><span>Pencipta digital — Indonesia</span></div>
          <div className="ab">
            <figure className="pf rv">
              {photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photo} alt="Foto Agung" />
              ) : (
                <div className="fb" aria-hidden="true">A°</div>
              )}
              <figcaption className="cap mono"><span>Agung</span><span>2026</span></figcaption>
            </figure>
            <div className="rv d1">
              <h2 className="disp">Belajar sambil membangun.</h2>
              <p>Saya Agung, mahasiswa Teknik Informatika. Awalnya hanya penasaran bagaimana halaman web bekerja, kini hampir semua yang saya pelajari saya wujudkan menjadi proyek nyata.</p>
              <p>Saya nyaman mengerjakan tampilan depan serta PHP &amp; MySQL, sedang mendalami Next.js, dan sering menghabiskan waktu di terminal untuk mempelajari keamanan siber.</p>
              <div className="facts mono">
                <div><span>Fokus</span><span>Web, tampilan depan, keamanan</span></div>
                <div><span>Sedang dipelajari</span><span>Next.js, Linux</span></div>
                <div><span>Lokasi</span><span>Indonesia</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="sh mono rv"><span>02 / Keahlian</span><span>Alat yang saya gunakan</span></div>
          <ul className="sk rv">
            {skills.map((s, i) => (
              <li key={s}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <span className="t">{s}</span>
                <span className="a" aria-hidden="true">↗</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects">
          <div className="sh mono rv"><span>03 / Proyek</span><span>Karya pilihan</span></div>
          <div className="pg">
            {projects.map((p, i) => (
              <article key={p.title} className={`pc rv d${i}`}>
                <div className="im">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={`Pratinjau proyek ${p.title}`} loading="lazy" />
                </div>
                <div className="bd">
                  <div className="row mono"><span>{p.tag}</span><span>{p.year}</span></div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <div className="sh mono rv"><span>04 / Kontak</span><span>Terbuka untuk proyek</span></div>
          <div className="ct">
            <div className="rv">
              <h2 className="disp">Mari bekerja sama.</h2>
              <ul>
                {contacts.map((c) => (
                  <li key={c.label}>
                    <a href={c.href} {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>
                      <span className="mono">{c.label}</span><span>{c.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="mono">
        <b>AGUNG°</b><span>Portofolio / 2026</span><span>© 2026 Agung — Indonesia</span>
      </footer>
      <Effects />
    </>
  );
}
