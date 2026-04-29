"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer ref={ref} className="bg-[#0f1f35] text-white relative overflow-hidden">
      {/* Top wave */}
      <div aria-hidden className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-12 fill-[#FAFAF8]">
          <path d="M0,80 C300,20 900,60 1200,20 L1200,0 L0,0 Z" />
        </svg>
      </div>

      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-[#11CAA0]/5 blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#005088]/20 blur-3xl translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="grid md:grid-cols-4 gap-10 mb-16"
        >
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <a href="#" className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                <Image src="/logo2.jpeg" alt="BiyoDeniz logo" fill className="object-cover" />
              </div>
              <span className="font-bold text-white text-xl tracking-tight">
                Biyo<span className="text-[#11CAA0]">Deniz</span>
              </span>
            </a>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Kırmızı deniz yosunlarından üretilen %100 biyobozunur ambalajlarla
              plastik kirliliğine sürdürülebilir çözüm sunuyoruz.
            </p>
            <p className="text-xs text-[#11CAA0] font-medium italic">
              &ldquo;Denizden Üretiyoruz, Geleceği Koruyoruz&rdquo;
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Sayfalar</p>
            <div className="flex flex-col gap-2.5">
              {[
                ["Problem", "#problem"],
                ["Çözüm", "#cozum"],
                ["Ürün", "#ürün"],
                ["Vizyon", "#vizyon"],
                ["Ekip", "#ekip"],
                ["İletişim", "#iletisim"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-150"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Bilgi</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5 text-sm text-white/60">
                <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="6" r="3" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M7 2V1M7 11c-3 0-5-2-5-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                Yıldız Teknik Üniversitesi, İstanbul
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/60">
                <svg className="shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 3l6 4.5L13 3M1 3h12v9H1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                </svg>
                biyodeniz@ytu.edu.tr
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#11CAA0] animate-pulse" />
                <span className="text-xs text-[#11CAA0] font-medium">Yatırımcı görüşmelerine açık</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-xs text-white/40">
            © 2025 BiyoDeniz. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-white/30">
            Hacer Durgun & Cemre Sude Yıldız · YTÜ
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
