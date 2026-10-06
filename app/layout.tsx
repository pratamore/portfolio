import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-grotesk", display: "swap" });
const mono = Space_Mono({ subsets: ["latin"], weight: "400", variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Agung — Portofolio 2026",
  description: "Portofolio Agung, mahasiswa Teknik Informatika, web developer dan digital creator.",
};

export const viewport: Viewport = { themeColor: "#080808" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}>
      <body>
        <noscript>
          <style>{`.rv{opacity:1!important;transform:none!important}#intro{display:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
