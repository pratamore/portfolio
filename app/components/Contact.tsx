"use client";

import { useState } from "react";
import DOMPurify from "dompurify";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:agungputra2820@gmail.com?subject=Halo%20Agung&body=Halo%20saya%20tertarik%20dengan%20portfolio%20Anda",
      icon: "fas fa-envelope",
      bgColor: "bg-cyan-500",
      hoverBg: "hover:bg-cyan-600",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/6285712455030?text=Halo%20Agung%2C%20saya%20ingin%20menghubungi%20Anda",
      icon: "fab fa-whatsapp",
      bgColor: "bg-green-500",
      hoverBg: "hover:bg-green-600",
    },
    {
      name: "GitHub",
      href: "https://github.com/pratamore",
      icon: "fab fa-github",
      bgColor: "bg-gray-800",
      hoverBg: "hover:bg-black",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/___yntkts_0",
      icon: "fab fa-instagram",
      bgColor: "bg-pink-500",
      hoverBg: "hover:bg-pink-600",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setAlert(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // 🛑 Honeypot anti bot
    if (formData.get("company")) {
      setLoading(false);
      return;
    }

    // 🔐 SANITIZE INPUT (ANTI XSS)
    const cleanData = new FormData();
    cleanData.append(
      "name",
      DOMPurify.sanitize(String(formData.get("name") || ""))
    );
    cleanData.append(
      "email",
      DOMPurify.sanitize(String(formData.get("email") || ""))
    );
    cleanData.append(
      "message",
      DOMPurify.sanitize(String(formData.get("message") || ""))
    );

    try {
      const response = await fetch("https://formspree.io/f/xdanzdbr", {
        method: "POST",
        body: cleanData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setAlert({
          type: "success",
          message: "Pesan berhasil dikirim. Terima kasih! 🚀",
        });
        form.reset();
      } else {
        setAlert({
          type: "error",
          message: "Gagal mengirim pesan. Silakan coba lagi.",
        });
      }
    } catch {
      setAlert({
        type: "error",
        message: "Terjadi kesalahan jaringan. Periksa koneksi Anda.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-magenta-500/5 via-transparent to-cyan-500/5"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Contact Me
        </h2>

        {/* SOCIAL LINKS */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.bgColor} ${link.hoverBg} p-4 rounded-full transition-all duration-500 hover:scale-110`}
            >
              <i className={`${link.icon} text-white text-xl`} />
            </a>
          ))}
        </div>

        {/* ALERT */}
        {alert && (
          <div
            className={`max-w-md mx-auto mb-6 rounded-xl border p-4 text-left
              ${
                alert.type === "success"
                  ? "bg-green-500/10 border-green-500 text-green-400"
                  : "bg-red-500/10 border-red-500 text-red-400"
              }`}
          >
            <button
              onClick={() => setAlert(null)}
              className="float-right text-white/60 hover:text-white"
            >
              ✕
            </button>
            <p className="font-medium">{alert.message}</p>
          </div>
        )}

        {/* FORM */}
        <div className="max-w-md mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
            <h3 className="text-lg font-semibold text-white mb-4">
              Kirim Pesan
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* HONEYPOT (HIDDEN) */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <input
                type="text"
                name="name"
                required
                placeholder="Nama Anda"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email Anda"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white"
              />

              <textarea
                name="message"
                rows={4}
                required
                placeholder="Pesan Anda"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-magenta-500 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
              >
                {loading ? "Mengirim..." : "Kirim Pesan"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
