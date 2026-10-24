"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BrowserFrame, PhoneFrame } from "./BrowserFrame";
import { projects } from "@/lib/data";

const [loyalty, cover] = projects;

// all 16:10 so the frame never jumps
const slides = [
  { src: loyalty.shots[0].src, url: loyalty.liveLabel, alt: "LoyaltyPro landing page", mobile: loyalty.mobile.src },
  { src: cover.shots[0].src, url: cover.liveLabel, alt: "CoverCell landing page", mobile: cover.mobile.src },
  { src: cover.shots[1].src, url: cover.liveLabel, alt: "CoverCell plans and pricing", mobile: cover.mobile.src },
  { src: loyalty.shots[6].src, url: loyalty.liveLabel, alt: "LoyaltyPro features", mobile: loyalty.mobile.src },
];

export function HeroStage() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 3800);
    return () => clearInterval(t);
  }, [reduce]);

  const s = slides[i];
  return (
    <div className="relative">
      {/* colour wash behind the devices */}
      <div
        aria-hidden
        className="drift absolute -inset-6 -z-10 rounded-[3rem] opacity-80 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 30% 30%, color-mix(in srgb, var(--accent) 45%, transparent), transparent), radial-gradient(50% 50% at 80% 80%, #d6ff3c66, transparent)",
        }}
      />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <BrowserFrame url={s.url}>
          <div className="relative aspect-[16/10] bg-white">
            <AnimatePresence initial={false}>
              <motion.div
                key={s.src}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover object-top"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </BrowserFrame>
      </motion.div>

      <div className="float absolute -bottom-10 -right-2 hidden w-[24%] sm:block lg:-right-6">
        <PhoneFrame src={s.mobile} alt="Mobile view" />
      </div>

      <div className="float-slow absolute -left-3 top-10 hidden items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 shadow-[var(--shadow)] md:flex lg:-left-10">
        <span className="grid size-9 place-items-center rounded-full bg-[#dcfce7] text-sm font-bold text-[#15803d]">
          +
        </span>
        <div className="leading-tight">
          <p className="text-[13px] font-semibold">Cashback earned</p>
          <p className="text-xs text-muted">QR scanned · $0.30 credited</p>
        </div>
      </div>

      <div className="absolute -bottom-6 left-6 hidden items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2.5 text-[13px] font-medium shadow-[var(--shadow)] md:flex">
        <span className="live-dot size-2 rounded-full bg-[#22c55e]" />
        2 products live in production
      </div>

      <div className="mt-8 flex justify-center gap-2 sm:hidden">
        {slides.map((_, n) => (
          <span key={n} className={`h-1.5 rounded-full transition-all ${n === i ? "w-6 bg-accent" : "w-1.5 bg-line"}`} />
        ))}
      </div>
    </div>
  );
}
