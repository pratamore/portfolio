export const EMAIL = "agungputra2820@email.com"; // Ganti dengan email aslimu

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skill" },
  { href: "#projects", label: "Project" },
  { href: "#contact", label: "Contact" },
];

export const photo: string | null = null; // contoh: "/foto.jpg"

export const skills = [
  "HTML / CSS", "JavaScript", "PHP", "MySQL",
  "Next.js", "Git / GitHub", "Linux", "Keamanan Siber",
];

export const projects = [
  {
    title: "Portofolio Pribadi",
    tag: "Pengembangan web",
    year: "2026",
    desc: "Situs portofolio responsif dengan animasi intro dan tata letak tipografi besar.",
    image: "/projects/project-01.svg",
  },
  {
    title: "Sistem Kasir",
    tag: "PHP / MySQL",
    year: "2026",
    desc: "Aplikasi kasir untuk mencatat pesanan, menghitung total, dan memproses pembayaran.",
    image: "/projects/project-02.svg",
  },
  {
    title: "Lab Keamanan Siber",
    tag: "Keamanan / Linux / Web",
    year: "2026",
    desc: "Lingkungan latihan untuk memindai layanan dan menemukan celah pada aplikasi web.",
    image: "/projects/project-03.svg",
  },
];

export const contacts = [
  { label: "Email", text: EMAIL, href: `mailto:${EMAIL}` },
  { label: "GitHub", text: "https://github.com/pratamore", href: "https://github.com/pratamore" },
  { label: "LinkedIn", text: "linkedin.com/in/agung", href: "https://linkedin.com/" },
];
