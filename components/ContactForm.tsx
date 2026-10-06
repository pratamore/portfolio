"use client";
import { FormEvent, useState } from "react";
import { EMAIL } from "@/lib/content";

export default function ContactForm() {
  const [note, setNote] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `${d.get("message")}\n\n— ${d.get("name")} (${d.get("email")})`;
    location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(String(d.get("subject")))}&body=${encodeURIComponent(body)}`;
    setNote("Membuka aplikasi email…");
  };

  return (
    <form className="rv d1" onSubmit={onSubmit}>
      <label><span className="mono">Nama</span><input name="name" required autoComplete="name" /></label>
      <label><span className="mono">Email</span><input name="email" type="email" required autoComplete="email" /></label>
      <label><span className="mono">Subjek</span><input name="subject" required /></label>
      <label><span className="mono">Pesan</span><textarea name="message" required /></label>
      <button className="btn p" type="submit">Kirim pesan</button>
      <p className="note mono" role="status">{note}</p>
    </form>
  );
}
