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

const benefits = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 10c2-3 6-5 9-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M4 14c2-2 5-3 8-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="10" cy="7" r="2" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    text: "Petrol bazlı plastiklere bağımlılığı azaltıyoruz",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.7" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "Doğaya zarar vermeyen alternatifler sunuyoruz",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3c-4 0-7 3-7 7s3 7 7 7 7-3 7-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M14 3l3 3-3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "Deniz ekosistemine ekonomik değer katıyoruz",
  },
];

export default function Solution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cozum" ref={ref} className="py-28 bg-white relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-[500px] h-[500px] rounded-full bg-[#11CAA0]/6 blur-3xl -translate-x-1/2 -translate-y-1/4"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative hidden lg:block"
          >
            {/* Main image */}
            <div className="relative w-full aspect-square max-w-md rounded-3xl overflow-hidden shadow-2xl shadow-[#11CAA0]/15">
              <Image
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=85&auto=format&fit=crop"
                alt="Laboratuvar araştırması"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#11CAA0]/20 via-transparent to-[#005088]/30" />
            </div>

            {/* Second image — offset */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl shadow-black/15 border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1559825481-12a05cc00344?w=400&q=80&auto=format&fit=crop"
                alt="Biyoplastik ambalaj"
                fill
                className="object-cover"
              />
            </div>

            {/* Pill badge */}
            <div className="absolute top-6 -right-6 bg-white rounded-2xl shadow-xl px-4 py-3 border border-slate-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#11CAA0]/15 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 9c1.5-3 5-5 9-3" stroke="#11CAA0" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M3 13c2-2 5-2 7-1" stroke="#11CAA0" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-[#0f1f35]">Agar Bazlı</p>
                <p className="text-xs text-slate-500">Kırmızı deniz yosunu</p>
              </div>
            </div>
          </motion.div>

          {/* Right — text */}
          <div className="flex flex-col gap-7">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.1}
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-2 text-[#0da882] bg-[#11CAA0]/10 border border-[#11CAA0]/25 text-xs font-semibold px-4 py-2 rounded-full"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6c1.5-3 5-5 8-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M1 9c2-2 4-2 6-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Doğadan Gelen Çözüm
            </motion.div>

            <motion.h2
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.2}
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-extrabold text-[#0f1f35] leading-tight tracking-tight"
            >
              Atıktan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#11CAA0] to-[#005088]">
                Biyoplastik
              </span>
            </motion.h2>

            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.3}
              variants={fadeUp}
              className="text-lg text-slate-500 leading-relaxed"
            >
              BiyoDeniz olarak kırmızı deniz yosunlarından elde edilen{" "}
              <strong className="text-slate-700">agar</strong> ile tamamen
              biyobozunur ambalajlar üretiyoruz. Kıyıya vuran yosunları ekonomik
              değere dönüştürüyoruz.
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.4}
              variants={fadeUp}
              className="flex flex-col gap-3.5"
            >
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={0.4 + i * 0.1}
                  variants={fadeUp}
                  className="flex items-start gap-3.5 bg-[#FAFAF8] border border-slate-100 rounded-xl px-4 py-3.5 hover:border-[#11CAA0]/40 hover:bg-[#11CAA0]/5 transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#11CAA0]/12 text-[#11CAA0] flex items-center justify-center shrink-0">
                    {b.icon}
                  </div>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed mt-0.5">
                    {b.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Process steps */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.7}
              variants={fadeUp}
              className="flex gap-0 pt-2"
            >
              {[
                { step: "01", label: "Yosun Toplama", color: "bg-[#11CAA0]" },
                { step: "02", label: "Agar Üretimi", color: "bg-[#005088]" },
                { step: "03", label: "Biyoplastik", color: "bg-[#0da882]" },
              ].map((s, i) => (
                <div key={s.step} className="flex items-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className={`w-9 h-9 rounded-full ${s.color} flex items-center justify-center text-white text-xs font-bold`}>
                      {s.step}
                    </div>
                    <span className="text-xs text-slate-500 font-medium whitespace-nowrap">{s.label}</span>
                  </div>
                  {i < 2 && (
                    <div className="w-10 h-px bg-gradient-to-r from-[#11CAA0]/50 to-[#005088]/50 mx-2 mb-5" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
