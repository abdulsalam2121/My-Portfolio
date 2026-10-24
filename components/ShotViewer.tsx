"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { BrowserFrame } from "./BrowserFrame";
import type { Shot } from "@/lib/data";

export function ShotViewer({ shots, url, onDark = false }: { shots: Shot[]; url: string; onDark?: boolean }) {
  const [i, setI] = useState(0);
  const [zoom, setZoom] = useState(false);
  const s = shots[i];

  const go = useCallback((d: number) => setI((v) => (v + d + shots.length) % shots.length), [shots.length]);

  useEffect(() => {
    if (!zoom) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(false);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", key);
      document.body.style.overflow = "";
    };
  }, [zoom, go]);

  const pill = (active: boolean) =>
    onDark
      ? active
        ? "bg-white text-[#14152a]"
        : "bg-white/12 text-white/85 hover:bg-white/20"
      : active
        ? "bg-ink text-bg"
        : "bg-surface-2 text-muted hover:text-ink";

  return (
    <div>
      <BrowserFrame url={url}>
        <motion.div
          className="relative overflow-hidden bg-white"
          animate={{ aspectRatio: s.w / s.h }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence initial={false}>
            <motion.button
              key={s.src}
              type="button"
              onClick={() => setZoom(true)}
              aria-label={`Enlarge screenshot: ${s.caption}`}
              className="group absolute inset-0 block cursor-zoom-in"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
            >
              <Image src={s.src} alt={s.caption} fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
              <span className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full bg-black/65 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                <Maximize2 size={15} />
              </span>
            </motion.button>
          </AnimatePresence>
        </motion.div>
      </BrowserFrame>

      <div className="mt-4 flex items-center gap-3">
        <div className="no-scrollbar flex flex-1 gap-2 overflow-x-auto pb-1">
          {shots.map((sh, n) => (
            <button
              key={sh.src}
              onClick={() => setI(n)}
              aria-pressed={n === i}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-[13px] font-medium transition ${pill(n === i)}`}
            >
              {sh.caption}
            </button>
          ))}
        </div>
        <div className="hidden shrink-0 gap-1.5 sm:flex">
          {[-1, 1].map((d) => (
            <button
              key={d}
              onClick={() => go(d)}
              aria-label={d < 0 ? "Previous screenshot" : "Next screenshot"}
              className={`grid size-9 place-items-center rounded-full transition ${pill(false)}`}
            >
              {d < 0 ? <ChevronLeft size={17} /> : <ChevronRight size={17} />}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {zoom && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={s.caption}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoom(false)}
          >
            <button
              aria-label="Close"
              className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
              onClick={() => setZoom(false)}
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.96, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              className="w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={s.src}
                alt={s.caption}
                width={s.w}
                height={s.h}
                sizes="100vw"
                className="h-auto max-h-[80vh] w-full rounded-xl object-contain"
              />
              <p className="mt-4 text-center text-sm text-white/80">
                {s.caption} · {i + 1} / {shots.length}
              </p>
            </motion.div>
            <div className="mt-2 flex gap-2" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => go(-1)} aria-label="Previous" className="grid size-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25">
                <ChevronLeft />
              </button>
              <button onClick={() => go(1)} aria-label="Next" className="grid size-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25">
                <ChevronRight />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
