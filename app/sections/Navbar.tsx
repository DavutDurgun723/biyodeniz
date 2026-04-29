"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const { scrollY } = useScroll();
  const shadow = useTransform(
    scrollY,
    [0, 60],
    ["0 0 0 0 rgba(0,0,0,0)", "0 2px 24px 0 rgba(0,80,136,0.10)"]
  );
  const bg = useTransform(
    scrollY,
    [0, 60],
    ["rgba(250,250,248,0)", "rgba(250,250,248,0.97)"]
  );

  return (
    <motion.nav
      style={{ backgroundColor: bg, boxShadow: shadow }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-md shrink-0">
            <Image src="/logo2.jpeg" alt="BiyoDeniz logo" fill className="object-cover" />
          </div>
          <span className="font-bold text-[#005088] text-xl tracking-tight">
            Biyo<span className="text-[#11CAA0]">Deniz</span>
          </span>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Problem", "Çözüm", "Ürün", "Vizyon", "Ekip"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 hover:text-[#005088] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#iletisim"
          className="hidden md:flex items-center gap-2 bg-[#005088] hover:bg-[#003d6b] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
        >
          İletişime Geç
        </a>
      </div>
    </motion.nav>
  );
}
