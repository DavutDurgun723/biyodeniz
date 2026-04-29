"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: EASE },
  }),
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="iletisim" ref={ref} className="py-28 bg-[#FAFAF8] relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#005088_0%,_transparent_60%)] opacity-[0.05]"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div className="flex flex-col gap-7">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0}
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-2 text-[#0da882] bg-[#11CAA0]/10 border border-[#11CAA0]/25 text-xs font-semibold px-4 py-2 rounded-full"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 3l5 4 5-4M1 3h10v7H1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
              </svg>
              İletişim
            </motion.div>

            <motion.h2
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.1}
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-extrabold text-[#0f1f35] leading-tight tracking-tight"
            >
              Birlikte{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005088] to-[#11CAA0]">
                Değiştirelim
              </span>
            </motion.h2>

            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.2}
              variants={fadeUp}
              className="text-lg text-slate-500 leading-relaxed"
            >
              Sürdürülebilir ambalaj çözümleri için iş birliklerine açığız.
              Geleceği birlikte inşa edelim.
            </motion.p>

            {/* Contact cards */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.3}
              variants={fadeUp}
              className="flex flex-col gap-4"
            >
              {[
                {
                  label: "Yatırımcı İlişkileri",
                  desc: "Yatırım fırsatlarını görüşmek için ulaşın",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 14L8 9l3 3 5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  color: "text-[#005088] bg-[#005088]/8",
                },
                {
                  label: "İş Geliştirme",
                  desc: "Sektörel iş birlikleri ve ortaklıklar",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M4 9h10M9 4v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  ),
                  color: "text-[#0da882] bg-[#11CAA0]/10",
                },
                {
                  label: "Akademik İş Birliği",
                  desc: "Araştırma ve Ar-Ge projeleri için",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M4 15c1-2 3-3 5-3s4 1 5 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  ),
                  color: "text-[#005088] bg-[#005088]/8",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 bg-white border border-slate-100 rounded-xl px-5 py-4"
                >
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#0f1f35]">{item.label}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.35}
            variants={fadeUp}
            className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl shadow-slate-100/80"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#11CAA0]/12 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M8 16l5 5 11-11" stroke="#11CAA0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0f1f35]">Mesajınız Alındı!</h3>
                <p className="text-slate-500 text-sm">En kısa sürede size geri dönüş yapacağız.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h3 className="text-xl font-bold text-[#0f1f35] mb-1">Mesaj Gönderin</h3>
                  <p className="text-sm text-slate-500">Tüm alanları doldurun, size ulaşalım.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600">Ad Soyad</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Adınız"
                      className="bg-[#FAFAF8] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#11CAA0] focus:ring-2 focus:ring-[#11CAA0]/15 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600">E-posta</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="ornek@sirket.com"
                      className="bg-[#FAFAF8] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#11CAA0] focus:ring-2 focus:ring-[#11CAA0]/15 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-600">Şirket / Kurum</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Şirket adı (opsiyonel)"
                    className="bg-[#FAFAF8] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#11CAA0] focus:ring-2 focus:ring-[#11CAA0]/15 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-600">Konu</label>
                  <select name="subject" className="bg-[#FAFAF8] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#11CAA0] focus:ring-2 focus:ring-[#11CAA0]/15 transition-all">
                    <option>Yatırım Görüşmesi</option>
                    <option>İş Birliği Teklifi</option>
                    <option>Akademik İş Birliği</option>
                    <option>Medya & Basın</option>
                    <option>Diğer</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-600">Mesajınız</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Projenizi, iş birliği fikrinizi veya sorunuzu kısaca açıklayın..."
                    className="bg-[#FAFAF8] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#11CAA0] focus:ring-2 focus:ring-[#11CAA0]/15 transition-all resize-none"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#005088] hover:bg-[#003d6b] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-95 shadow-lg shadow-[#005088]/20"
                >
                  {loading ? "Gönderiliyor…" : "Mesaj Gönder"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
