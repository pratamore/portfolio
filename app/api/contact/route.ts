import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Data tidak lengkap" }), {
        status: 400,
      });
    }

    // Buat transporter nodemailer (gunakan Gmail/SMTP lain)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL, // email kamu
        pass: process.env.CONTACT_PASS,  // password / app password Gmail
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.CONTACT_EMAIL, // email tujuan
      subject: `Pesan dari ${name} via Portfolio`,
      text: message,
      html: `<p>${message}</p><p>From: ${name} - ${email}</p>`,
    };

    // Kirim email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email berhasil dikirim" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Gagal mengirim email" }), {
      status: 500,
    });
  }
}
