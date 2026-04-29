"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: EASE },
  }),
};

function CountUp({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) =>
    suffix === "M+" ? v.toFixed(1) + suffix : Math.round(v) + suffix
  );
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, to, { duration, ease: "easeOut" });
    return controls.stop;
  }, [inView, motionVal, to, duration]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {rounded}
    </motion.span>
  );
}

const stats = [
  {
    id: "stat-agar-small",
    value: 10.7,
    suffix: "t",
    label: "agar ile",
    sub: "3.36 milyon kıyafet ambalajı üretilebilir",
    color: "text-[#005088]",
    bg: "bg-[#005088]/6",
  },
  {
    id: "stat-agar-large",
    value: 32,
    suffix: "t",
    label: "agar ile",
    sub: "10.04 milyon ambalaj üretilebilir",
    color: "text-[#11CAA0]",
    bg: "bg-[#11CAA0]/10",
  },
  {
    id: "stat-plastic",
    value: 40,
    suffix: "%",
    label: "plastik kirliliği",
    sub: "ambalajdan kaynaklanıyor",
    color: "text-[#e05a1a]",
    bg: "bg-[#e05a1a]/6",
  },
];

const valueProps = [
  {
    title: "Çevresel Yükü Azaltmak",
    desc: "Kıyıya vuran kırmızı yosunları kontrollü şekilde değerlendirerek ekosistem üzerindeki baskıyı azaltıyoruz.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.7" />
        <path d="M7 11c1-3 4-5 7-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M6 15c2-2 5-2 7-1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Ekonomik Değer Oluşturmak",
    desc: "Atık olarak görülen yosunlardan yüksek katma değerli agar ve biyoplastik üretiyoruz. Türkiye'nin ihracat potansiyelini artırıyoruz.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 17L8 11l4 3 4-6 3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="19" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Sürdürülebilir Üretim",
    desc: "Döngüsel ekonomi modeline uygun, yerel hammaddeye dayalı üretim sistemiyle petrole olan bağımlılığı kırıyoruz.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M5 11a6 6 0 016-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M17 11a6 6 0 01-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M5 11l-2-2 2-2M17 11l2 2-2 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Impact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="etki" ref={ref} className="py-28 bg-[#FAFAF8] relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#11CAA0]/5 blur-3xl"
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
              <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Etki & Özgün Değer
          </motion.div>

          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.1}
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-extrabold text-[#0f1f35] leading-tight tracking-tight mb-5"
          >
            Gerçek Etki,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005088] to-[#11CAA0]">
              Ölçülebilir Sonuçlar
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.2}
            variants={fadeUp}
            className="text-lg text-slate-500 leading-relaxed"
          >
            Doğru değerlendirme ile milyonlarca adet plastik ambalajın yerini
            biyoplastik ürünler alabilir. Bu hem çevresel hem ekonomik büyük bir
            dönüşüm anlamına gelir.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.id}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.3 + i * 0.12}
              variants={fadeUp}
              className={`${s.bg} border border-transparent rounded-2xl p-7 text-center hover:-translate-y-1 transition-transform duration-300`}
            >
              <p className={`text-5xl font-extrabold ${s.color} mb-1`}>
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="text-sm font-semibold text-slate-600 mt-1">{s.label}</p>
              <p className="text-xs text-slate-400 mt-0.5">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Value props */}
        <div className="grid md:grid-cols-3 gap-6">
          {valueProps.map((vp, i) => (
            <motion.div
              key={vp.title}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.55 + i * 0.1}
              variants={fadeUp}
              className="bg-white border border-slate-100 rounded-2xl p-7 hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#005088]/10 to-[#11CAA0]/10 text-[#005088] flex items-center justify-center mb-4">
                {vp.icon}
              </div>
              <h3 className="font-bold text-[#0f1f35] mb-2">{vp.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{vp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
