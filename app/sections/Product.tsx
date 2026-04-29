"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: EASE },
  }),
};

const features = [
  {
    title: "Doğal & Çevre Dostu",
    desc: "Ham maddesi kırmızı deniz yosunundan elde edilen agardır. Hiçbir sentetik kimyasal içermez.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M5 17c2-5 7-9 12-8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M4 12c2-3 6-5 10-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M4 7c2-2 5-2 7-1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    color: "text-[#11CAA0]",
    bg: "bg-[#11CAA0]/10",
  },
  {
    title: "Dayanıklı & İşlevsel",
    desc: "Sitrik asit çapraz bağı ve kitosan katkısıyla suya karşı direnç ve antibakteriyel özellik kazandırılmıştır.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3L4 7v6l7 4 7-4V7L11 3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "text-[#005088]",
    bg: "bg-[#005088]/8",
  },
  {
    title: "Hızla Çözünür",
    desc: "Doğada kısa sürede tamamen parçalanır. Mikroplastik bırakmaz, ekosisteme zarar vermez.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 13c1 1 3 1.5 5 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M14 8c-1-1.5-4-1.5-5 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    color: "text-[#0da882]",
    bg: "bg-[#11CAA0]/10",
  },
  {
    title: "Yerli Üretim",
    desc: "Hammadde Türkiye'nin kıyılarından temin edilir. İthalata bağımlılığı azaltır, katma değer yaratır.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4 11h14M11 4c-2 3-2 10 0 14M11 4c2 3 2 10 0 14" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    color: "text-[#005088]",
    bg: "bg-[#005088]/8",
  },
];

const tests = [
  "Çekme Testi",
  "Su Buharı Geçirgenliği",
  "Antibakteriyellik",
  "Biyobozunurluk",
];

export default function Product() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ürün" ref={ref} className="py-28 bg-[#FAFAF8] relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 w-[600px] h-[400px] rounded-full bg-[#005088]/5 blur-3xl translate-x-1/3"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-[#005088] bg-[#005088]/8 border border-[#005088]/20 text-xs font-semibold px-4 py-2 rounded-full mb-5"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1L2 3.5v5L6 11l4-2.5v-5L6 1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            </svg>
            Ürün
          </motion.div>

          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.1}
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-extrabold text-[#0f1f35] leading-tight tracking-tight mb-5"
          >
            %100{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005088] to-[#11CAA0]">
              Biyobozunur
            </span>{" "}
            Ambalaj
          </motion.h2>

          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.2}
            variants={fadeUp}
            className="text-lg text-slate-500 leading-relaxed"
          >
            Geliştirdiğimiz biyoplastikler; kıyafet, kozmetik ve gelecekte suda
            çözünebilen ambalaj çözümleri sunmayı hedefliyor.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.3 + i * 0.1}
              variants={fadeUp}
              className="group bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-11 h-11 rounded-xl ${f.bg} ${f.color} flex items-center justify-center mb-4`}>
                {f.icon}
              </div>
              <h3 className="font-bold text-[#0f1f35] mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip — image + tests */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* R&D highlight */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.7}
            variants={fadeUp}
            className="bg-gradient-to-br from-[#005088] to-[#003d6b] rounded-3xl p-8 text-white"
          >
            <p className="text-sm font-medium text-white/70 mb-2">Ar-Ge İlerlemesi</p>
            <p className="text-5xl font-extrabold mb-1">10<span className="text-[#11CAA0]">+</span></p>
            <p className="text-base font-medium text-white/90 mb-6">optimize edilmiş biyoplastik reçetesi</p>
            <div className="flex flex-wrap gap-2">
              {tests.map((t) => (
                <span
                  key={t}
                  className="bg-white/12 border border-white/15 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="text-xs text-white/50 mt-4">
              Danışman: Prof. Dr. Cem Bülent Üstündağ · YTÜ
            </p>
          </motion.div>

          {/* Lab image */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.8}
            variants={fadeUp}
            className="relative h-72 lg:h-full min-h-64 rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&q=85&auto=format&fit=crop"
              alt="Profesyonel laboratuvar"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f35]/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <p className="text-white font-semibold text-sm">YTÜ Ar-Ge Laboratuvarı</p>
              <span className="bg-[#11CAA0] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                Aktif
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
