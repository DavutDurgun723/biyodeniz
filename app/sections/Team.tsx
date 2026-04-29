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

const team = [
  {
    name: "Hacer Durgun",
    role: "Kurucu",
    dept: "YTÜ Kimya Mühendisliği Yüksek Lisans",
    focus: "Biyoplastik formülasyon & kimyasal analiz",
    image: "/hacer.png.png",
    initials: "HD",
    color: "from-[#005088] to-[#11CAA0]",
  },
  {
    name: "Cemre Sude Yıldız",
    role: "Kurucu",
    dept: "YTÜ Biyomühendislik",
    focus: "Biyomateryaller & süreç geliştirme",
    image: "/cemre.png.png",
    initials: "CSY",
    color: "from-[#11CAA0] to-[#005088]",
  },
  {
    name: "Prof. Dr. Cem Bülent Üstündağ",
    role: "Akademik Danışman",
    dept: "YTÜ",
    focus: "Biyoteknoloji & Ar-Ge danışmanlığı",
    image: "/prof.png.png",
    initials: "CBÜ",
    color: "from-[#003d6b] to-[#005088]",
  },
];

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ekip" ref={ref} className="py-28 bg-white relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#11CAA0]/6 blur-3xl translate-x-1/3 -translate-y-1/3"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-[#0da882] bg-[#11CAA0]/10 border border-[#11CAA0]/25 text-xs font-semibold px-4 py-2 rounded-full mb-5"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="4" cy="4" r="2.5" stroke="currentColor" strokeWidth="1.3" />
              <circle cx="9" cy="4" r="2.5" stroke="currentColor" strokeWidth="1.3" />
              <path d="M0 10c1-2 3-3 4-3M6 10c1-2 3-3 4-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            Ekip
          </motion.div>

          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.1}
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-extrabold text-[#0f1f35] leading-tight tracking-tight mb-5"
          >
            Bilimle{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005088] to-[#11CAA0]">
              Üreten
            </span>{" "}
            Bir Ekip
          </motion.h2>

          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.2}
            variants={fadeUp}
            className="text-lg text-slate-500 leading-relaxed"
          >
            BiyoDeniz, biyomühendislik ve kimya mühendisliği alanında çalışan
            genç araştırmacılar tarafından kurulmuştur. Akademik danışmanlık ve
            Ar-Ge çalışmalarıyla sürekli gelişmektedir.
          </motion.p>
        </div>

        {/* Team cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.3 + i * 0.15}
              variants={fadeUp}
              className="group bg-[#FAFAF8] border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Avatar area */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-20`} />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/85 backdrop-blur-sm text-[#005088] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col gap-2">
                <h3 className="font-bold text-[#0f1f35] text-base leading-snug">{member.name}</h3>
                <p className="text-xs font-semibold text-[#005088]">{member.dept}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{member.focus}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* University badge */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.7}
          variants={fadeUp}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-[#FAFAF8] border border-slate-200 rounded-2xl px-6 py-4">
            <div className="w-10 h-10 rounded-xl bg-[#005088] flex items-center justify-center text-white font-extrabold text-sm">
              YTÜ
            </div>
            <div>
              <p className="text-sm font-bold text-[#0f1f35]">Yıldız Teknik Üniversitesi</p>
              <p className="text-xs text-slate-500">Kimya & Biyomühendislik · İstanbul</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
