import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_EMAIL ?? "biyodeniz@ytu.edu.tr";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "E-posta servisi yapılandırılmamış" }, { status: 503 });
  }
  const resend = new Resend(apiKey);

  try {
    const body = await req.json();
    const { name, email, company, subject, message } = body as {
      name: string;
      email: string;
      company?: string;
      subject: string;
      message: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Eksik alanlar" }, { status: 400 });
    }

    await resend.emails.send({
      from: "BiyoDeniz <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `[BiyoDeniz] ${subject} — ${name}`,
      text: [
        `Ad Soyad: ${name}`,
        `E-posta: ${email}`,
        company ? `Şirket/Kurum: ${company}` : null,
        `Konu: ${subject}`,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Gönderim hatası" }, { status: 500 });
  }
}
