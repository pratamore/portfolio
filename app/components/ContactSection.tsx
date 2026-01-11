"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  function validate() {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!form.email.trim()) newErrors.email = "Email wajib diisi";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Format email tidak valid";
    if (!form.message.trim()) newErrors.message = "Pesan wajib diisi";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/xdanzdbr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        alert("Pesan berhasil dikirim ✉️");
        setForm({ name: "", email: "", message: "" }); // reset form
        setErrors({}); // reset errors
      } else {
        alert("Gagal mengirim pesan ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan, coba lagi ❌");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-500/10 via-transparent to-cyan-400/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl p-8"
      >
        {/* Title */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold text-white">Contact Me</h2>
          <p className="mt-3 text-zinc-400">
            Hubungi saya melalui form atau kontak cepat
          </p>
        </div>

        {/* Quick Contact */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href="https://wa.me/6285712455030"
            target="_blank"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition hover:scale-[1.03] hover:border-green-400"
          >
            <FaWhatsapp className="text-3xl text-green-400" />
            <div>
              <p className="font-semibold">WhatsApp</p>
              <p className="text-sm text-zinc-400">Chat langsung & cepat</p>
            </div>
          </a>

          <a
            href="https://instagram.com/___yntkts_0"
            target="_blank"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition hover:scale-[1.03] hover:border-pink-400"
          >
            <FaInstagram className="text-3xl text-pink-400" />
            <div>
              <p className="font-semibold">Instagram</p>
              <p className="text-sm text-zinc-400">DM via Instagram</p>
            </div>
          </a>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <input
              name="name"
              placeholder="Nama"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              rows={4}
              placeholder="Pesan"
              value={form.message}
              onChange={handleChange}
              className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-pink-400"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 py-3 font-bold text-black transition hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Mengirim..." : "Kirim Pesan"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
