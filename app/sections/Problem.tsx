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

const problems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7v10l10 5 10-5V7L12 2z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M12 22V12M2 7l10 5 10-5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Petrol Bağımlılığı",
    description:
      "Plastik üretimi, sınırlı ve riskli bir kaynak olan petrole bağımlılık nedeniyle ekonomik ve stratejik sorunlar yaratıyor.",
    color: "text-[#005088]",
    bg: "bg-[#005088]/8",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M8 12c1-3 5-5 8-3M9 16c2-1 5-1 6 1"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Çevre & Sağlık Tehdidi",
    description:
      "Plastikler biyolojik olarak parçalanmadığı için mikroplastik yoluyla çevre ve insan sağlığına ciddi zararlar veriyor.",
    color: "text-[#e05a1a]",
    bg: "bg-[#e05a1a]/8",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 18c3-6 8-10 13-8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M3 12c3-4 7-6 11-5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M3 6c2-2 5-3 8-2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Ekolojik Kirlilik",
    description:
      "Marmara Denizi'nde poyraz etkisiyle karaya vuran kırmızı yosunlar; kötü koku ve görüntü kirliliğine sebep oluyor.",
    color: "text-[#0da882]",
    bg: "bg-[#11CAA0]/10",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problem" ref={ref} className="py-28 bg-[#FAFAF8] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#005088]/5 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-[#e05a1a] bg-[#e05a1a]/8 border border-[#e05a1a]/20 text-xs font-semibold px-4 py-2 rounded-full mb-5"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <circle cx="6" cy="6" r="6" />
            </svg>
            Küresel Sorun
          </motion.div>

          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.1}
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-extrabold text-[#0f1f35] leading-tight tracking-tight mb-5"
          >
            Plastik Krizi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e05a1a] to-[#e08a1a]">
              Büyüyor
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.2}
            variants={fadeUp}
            className="text-lg text-slate-500 leading-relaxed"
          >
            Plastik üretimi sınırlı petrol kaynaklarına bağımlılığı artırırken
            çevre ve insan sağlığı için ciddi tehditler oluşturuyor. Plastikler
            doğada birikirken, Marmara&apos;nın yosunları da çevresel yük
            olmaya devam ediyor.
          </motion.p>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — problem cards */}
          <div className="flex flex-col gap-5">
            {problems.map((problem, i) => (
              <motion.div
                key={problem.title}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={0.3 + i * 0.12}
                variants={fadeUp}
                className="group flex gap-5 bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${problem.bg} ${problem.color} flex items-center justify-center shrink-0`}
                >
                  {problem.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#0f1f35] mb-1.5">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — stat highlight + image */}
          <div className="flex flex-col gap-6">
            {/* Big stat */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.45}
              variants={fadeUp}
              className="bg-gradient-to-br from-[#005088] to-[#003d6b] text-white rounded-3xl p-8"
            >
              <p className="text-sm font-medium text-white/70 mb-1">
                Küresel plastik kirliliğinin
              </p>
              <p className="text-7xl font-extrabold tracking-tight mb-3">
                %40
              </p>
              <p className="text-base font-medium text-white/90">
                tek başına <span className="text-[#11CAA0] font-bold">ambalaj</span> kaynaklıdır.
              </p>
              <div className="mt-6 pt-6 border-t border-white/15 flex gap-8">
                <div>
                  <p className="text-2xl font-extrabold">3.36M</p>
                  <p className="text-xs text-white/60 mt-0.5">
                    potansiyel biyoplastik ambalaj
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold">10.7t</p>
                  <p className="text-xs text-white/60 mt-0.5">
                    agar ile üretilebilir
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.55}
              variants={fadeUp}
              className="relative h-56 rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80&auto=format&fit=crop"
                alt="Deniz kirliliği"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f35]/60 via-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="text-white text-sm font-medium">
                  Marmara Denizi&apos;nde kırmızı yosun sorunu
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
