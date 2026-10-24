"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/lib/data";

const links = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const home = usePathname() === "/";

  useEffect(() => {
    const on = () => {
      setScrolled(window.scrollY > 24);
      if (!home) return;
      const y = window.scrollY + window.innerHeight * 0.35;
      let cur = "";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= y) cur = l.id;
      }
      setActive(cur);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [home]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <div
        data-scrolled={scrolled}
        className={`glass mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-3 sm:px-4 ${
          scrolled ? "py-1.5" : "py-2.5"
        } ${open ? "!rounded-3xl" : ""}`}
      >
        <Link href="/" className="flex items-center gap-2.5 pl-1 font-medium tracking-tight" onClick={() => setOpen(false)}>
          <span className="grid size-8 place-items-center rounded-full bg-grad font-mono text-[11px] font-semibold shadow-[0_0_0_4px_color-mix(in_srgb,var(--accent)_20%,transparent)]">
            AS
          </span>
          <span className="hidden sm:inline">{profile.short}</span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm md:flex" aria-label="Primary">
          {links.map((l) => {
            const on = active === l.id;
            return (
              <Link
                key={l.id}
                href={`/#${l.id}`}
                aria-current={on ? "true" : undefined}
                className={`rounded-full px-4 py-2 font-medium transition ${
                  on
                    ? "bg-ink/10 text-ink shadow-[inset_0_1px_0_color-mix(in_srgb,#fff_25%,transparent)]"
                    : "text-ink/70 hover:bg-ink/5 hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1 rounded-full bg-ink px-4 py-2 text-sm font-medium text-bg transition hover:bg-accent hover:text-bg sm:inline-flex"
          >
            Résumé <ArrowUpRight size={14} />
          </a>
          <button
            className="grid size-9 place-items-center rounded-full border border-line md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.id}
              href={`/#${l.id}`}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3 text-lg last:border-0"
            >
              {l.label}
            </Link>
          ))}
          <a href={profile.cv} target="_blank" rel="noreferrer" className="block pt-3 text-lg text-accent">
            Résumé ↗
          </a>
        </div>
      )}
    </header>
  );
}
