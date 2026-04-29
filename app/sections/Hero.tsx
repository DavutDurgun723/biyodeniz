"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FloatingParticles from "../components/FloatingParticles";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#FAFAF8]">
      {/* Background gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[680px] h-[680px] rounded-full bg-[#11CAA0]/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-40 w-[500px] h-[500px] rounded-full bg-[#005088]/8 blur-3xl" />
      </div>

      {/* Floating seaweed particles — özgün 21st.dev tarzı animasyon */}
      <FloatingParticles />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex-1 flex items-center pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left — Text */}
          <div className="flex flex-col gap-7">
            {/* Brand logo row */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="flex items-center gap-3"
            >
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-lg shrink-0">
                <Image src="/logo2.jpeg" alt="BiyoDeniz" fill className="object-cover" />
              </div>
              <div>
                <p className="font-extrabold text-[#005088] text-lg tracking-tight leading-none">
                  Biyo<span className="text-[#11CAA0]">Deniz</span>
                </p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Biyoteknoloji Girişimi</p>
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.1}
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-2 bg-[#11CAA0]/12 text-[#0da882] border border-[#11CAA0]/30 text-xs font-semibold px-4 py-2 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#11CAA0] animate-pulse" />
              YTÜ Ar-Ge · İstanbul
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#0f1f35]"
            >
              Denizden Gelen,{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#005088] to-[#11CAA0]">
                  Denizi Koruyan
                </span>
              </span>{" "}
              Ambalaj
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.35}
              variants={fadeUp}
              className="text-lg text-slate-500 leading-relaxed max-w-xl"
            >
              Kırmızı deniz yosunlarından elde edilen{" "}
              <strong className="text-slate-700 font-semibold">
                %100 biyobozunur ambalajlarla
              </strong>{" "}
              plastik kirliliğine sürdürülebilir çözüm.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.5}
              variants={fadeUp}
              className="flex flex-wrap gap-4 pt-1"
            >
              <a
                href="#cozum"
                className="group flex items-center gap-2.5 bg-[#005088] hover:bg-[#003d6b] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-lg shadow-[#005088]/25"
              >
                Projemizi Keşfet
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#iletisim"
                className="flex items-center gap-2 border-2 border-[#005088]/25 hover:border-[#005088] text-[#005088] font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-95 hover:bg-[#005088]/5"
              >
                Bizimle İletişime Geç
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.65}
              variants={fadeUp}
              className="flex flex-wrap gap-8 pt-4 border-t border-slate-200/80"
            >
              {[
                { value: "%100", label: "Biyobozunur" },
                { value: "10M+", label: "Potansiyel Ambalaj" },
                { value: "Yerli", label: "Üretim" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-extrabold text-[#005088]">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-[#005088]/15">
              {/* Kırmızı deniz yosunu — konuyla tam ilgili */}
              <Image
                src="/header.jpeg"
                alt="Deniz altında kırmızı yosun — BiyoDeniz'in ana hammaddesi"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003d6b]/50 via-transparent to-transparent" />

              {/* Görsel üzerinde etiket */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#11CAA0] animate-pulse" />
                <span className="text-xs font-bold text-[#0f1f35]">Kırmızı Deniz Yosunu</span>
              </div>
            </div>

            {/* Floating badge — sol alt */}
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5, ease: EASE }}
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl shadow-black/10 px-5 py-4 flex items-center gap-3 border border-slate-100"
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0">
                <Image src="/logo2.jpeg" alt="BiyoDeniz" fill className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0f1f35]">YTÜ Ar-Ge</p>
                <p className="text-xs text-slate-500">10+ biyoplastik reçetesi</p>
              </div>
            </motion.div>

            {/* Second floating badge — sağ üst */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5, ease: EASE }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl shadow-black/10 px-4 py-3 border border-slate-100"
            >
              <p className="text-xs font-semibold text-slate-500">Plastik Kirliliğinin</p>
              <p className="text-lg font-extrabold text-[#005088]">%40'ı</p>
              <p className="text-xs text-slate-400">ambalaj kaynaklı</p>
            </motion.div>

            {/* Pulsing ring decoration */}
            <motion.div
              className="absolute -right-8 top-1/3 w-16 h-16 rounded-full border-2 border-[#11CAA0]/30"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.15, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-8 top-1/3 w-16 h-16 rounded-full border-2 border-[#11CAA0]/20"
              animate={{ scale: [1, 1.7, 1], opacity: [0.4, 0.08, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-10 flex justify-center pb-10"
      >
        <div className="flex flex-col items-center gap-1.5 text-slate-400">
          <span className="text-xs font-medium tracking-widest uppercase">Keşfet</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
