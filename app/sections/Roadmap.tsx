"use client";

import { motion, useInView } from "framer-motion";
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

const stages = [
  {
    phase: "Aşama 1",
    sector: "Tekstil",
    title: "Çevre Dostu Şeffaf Ambalaj",
    desc: "Kıyafet sektörüne yönelik biyobozunur şeffaf ambalaj çözümleri. Plastik poşetin doğrudan alternatifi.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="5" y="8" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 8V6.5a4 4 0 018 0V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    color: "from-[#11CAA0] to-[#0da882]",
    status: "Geliştirme",
    statusColor: "text-[#0da882] bg-[#11CAA0]/10 border-[#11CAA0]/25",
  },
  {
    phase: "Aşama 2",
    sector: "Kozmetik",
    title: "Sürdürülebilir Paketleme",
    desc: "Kozmetik ürünler için estetik ve sürdürülebilir biyoplastik paketleme. Marka değerine katkı sağlar.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M9 5h8l2 4v12H7V9L9 5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M7 9h12" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="13" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    color: "from-[#005088] to-[#003d6b]",
    status: "Planlama",
    statusColor: "text-[#005088] bg-[#005088]/8 border-[#005088]/20",
  },
  {
    phase: "Aşama 3",
    sector: "İnovasyon",
    title: "Suda Çözünebilen Ambalaj",
    desc: "Su ile temas ettiğinde tamamen çözünen inovatif ambalajlar. Sıfır atık hedefine en yakın çözüm.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 4c-4 4-6 7-6 10a6 6 0 0012 0c0-3-2-6-6-10z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M10 17c0 1.7 1.3 3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: "from-[#0da882] to-[#005088]",
    status: "Vizyon",
    statusColor: "text-slate-500 bg-slate-100 border-slate-200",
  },
];

export default function Roadmap() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="vizyon" ref={ref} className="py-28 bg-white relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#11CAA0_0%,_transparent_60%)] opacity-[0.04]"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-[#0da882] bg-[#11CAA0]/10 border border-[#11CAA0]/25 text-xs font-semibold px-4 py-2 rounded-full mb-5"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Yol Haritası
          </motion.div>

          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.1}
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-extrabold text-[#0f1f35] leading-tight tracking-tight mb-5"
          >
            Sürdürülebilir Gelecek{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#11CAA0] to-[#005088]">
              İçin 3 Adım
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.2}
            variants={fadeUp}
            className="text-lg text-slate-500 leading-relaxed"
          >
            Amacımız, plastik kullanımını azaltarak döngüsel ekonomiye katkı
            sağlamak. Her adımda daha inovatif ve sürdürülebilir çözümler
            sunuyoruz.
          </motion.p>
        </div>

        {/* Timeline cards */}
        <div className="relative">
          {/* Connecting line */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-14 left-[calc(16.67%-2px)] right-[calc(16.67%-2px)] h-px bg-gradient-to-r from-[#11CAA0]/40 via-[#005088]/40 to-[#0da882]/40"
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.phase}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={0.3 + i * 0.15}
                variants={fadeUp}
                className="group relative flex flex-col"
              >
                {/* Icon circle */}
                <div className="flex justify-center mb-8 lg:mb-0 lg:absolute lg:-top-7 lg:left-1/2 lg:-translate-x-1/2">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stage.color} text-white flex items-center justify-center shadow-lg`}>
                    {stage.icon}
                  </div>
                </div>

                {/* Card */}
                <div className="bg-[#FAFAF8] border border-slate-100 rounded-2xl p-7 pt-8 lg:pt-14 group-hover:shadow-xl group-hover:shadow-slate-100 group-hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3 flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {stage.phase}
                    </span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${stage.statusColor}`}>
                      {stage.status}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-[#11CAA0] uppercase tracking-wider mb-1">
                      {stage.sector}
                    </p>
                    <h3 className="text-lg font-bold text-[#0f1f35] leading-snug">
                      {stage.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed">{stage.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.7}
          variants={fadeUp}
          className="mt-16 bg-gradient-to-r from-[#005088]/6 to-[#11CAA0]/6 border border-[#11CAA0]/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-[#0f1f35] font-semibold text-center sm:text-left">
            Döngüsel ekonomiye katkı sağlamak için birlikte çalışalım.
          </p>
          <a
            href="#iletisim"
            className="shrink-0 bg-[#005088] hover:bg-[#003d6b] text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:scale-[1.03]"
          >
            İş Birliği Yapalım
          </a>
        </motion.div>
      </div>
    </section>
  );
}
