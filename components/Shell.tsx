"use client";

import { ArrowUpRight, FolderKanban, History, LayoutDashboard, Mail, Menu, Search, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { CommandPalette } from "./CommandPalette";
import { ThemeToggle } from "./ThemeToggle";
import { profile, projects } from "@/lib/data";

const nav = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "experience", label: "Experience", icon: History },
  { id: "about", label: "About & skills", icon: User },
  { id: "contact", label: "Contact", icon: Mail },
];

function useScrollSpy(enabled: boolean) {
  const [active, setActive] = useState("overview");
  useEffect(() => {
    if (!enabled) return;
    const els = nav.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const on = () => {
      const y = window.scrollY + 140;
      let cur = els[0]?.id ?? "overview";
      for (const el of els) if (el.offsetTop <= y) cur = el.id;
      // pin the last item when the page bottoms out
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) cur = els[els.length - 1].id;
      setActive(cur);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, [enabled]);
  return active;
}

function SidebarBody({ active, onNav, home }: { active: string; onNav: (id: string) => void; home: boolean }) {
  return (
    <div className="flex h-full flex-col">
      <Link href="/" className="flex items-center gap-3 px-3 py-1" onClick={() => home && onNav("overview")}>
        <span className="grid size-9 place-items-center rounded-[10px] bg-accent text-sm font-bold text-accent-ink">AS</span>
        <span className="leading-tight">
          <span className="block text-[15px] font-semibold tracking-tight">{profile.short}</span>
          <span className="block text-xs text-muted">Portfolio</span>
        </span>
      </Link>

      <p className="mb-2 mt-8 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted">Workspace</p>
      <nav className="space-y-0.5">
        {nav.map((n) => {
          const on = active === n.id;
          return (
            <button
              key={n.id}
              onClick={() => onNav(n.id)}
              aria-current={on ? "page" : undefined}
              className={`group relative flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                on ? "bg-accent/10 text-ink" : "text-muted hover:bg-surface-2 hover:text-ink"
              }`}
            >
              {on && <span className="absolute -left-px top-2 h-[calc(100%-1rem)] w-[3px] rounded-full bg-accent" />}
              <n.icon size={17} className={on ? "text-accent" : ""} />
              {n.label}
            </button>
          );
        })}
      </nav>

      <p className="mb-2 mt-8 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted">Live products</p>
      <div className="space-y-0.5">
        {projects.map((p) => (
          <a
            key={p.slug}
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-surface-2 hover:text-ink"
          >
            <span className="live-dot size-2 shrink-0 rounded-full bg-ok" />
            <span className="flex-1 truncate">{p.liveLabel}</span>
            <ArrowUpRight size={14} />
          </a>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <div className="panel flex items-center gap-3 p-3">
          <Image src="/portrait.webp" alt="" width={80} height={100} className="size-10 rounded-lg object-cover object-top" />
          <div className="min-w-0 leading-tight">
            <p className="truncate text-sm font-semibold">{profile.name}</p>
            <p className="flex items-center gap-1.5 text-xs text-muted">
              <span className="size-1.5 rounded-full bg-ok" /> Open to work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Shell({ children, crumb }: { children: React.ReactNode; crumb?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const home = pathname === "/";
  const active = useScrollSpy(home);
  const [drawer, setDrawer] = useState(false);
  const [palette, setPalette] = useState(false);

  const goTo = useCallback(
    (id: string) => {
      setDrawer(false);
      if (home) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", `#${id}`);
      } else {
        router.push(`/#${id}`);
      }
    },
    [home, router],
  );

  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPalette((v) => !v);
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, []);

  const label = crumb ?? nav.find((n) => n.id === active)?.label ?? "Overview";
  const current = home ? active : "projects";

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[256px_1fr]">
      <aside className="sticky top-0 hidden h-screen border-r border-line bg-surface p-4 lg:block">
        <SidebarBody active={current} onNav={goTo} home={home} />
      </aside>

      <div className="min-w-0">
        <header className="sticky top-0 z-40 flex h-16 items-center gap-3 border-b border-line bg-bg/85 px-4 backdrop-blur-xl sm:px-8">
          <button
            className="grid size-9 place-items-center rounded-lg border border-line bg-surface lg:hidden"
            onClick={() => setDrawer(true)}
            aria-label="Open menu"
          >
            <Menu size={17} />
          </button>
          <p className="hidden items-center gap-2 text-sm text-muted sm:flex">
            <span>Portfolio</span>
            <span aria-hidden>/</span>
            <span className="font-medium text-ink">{label}</span>
          </p>

          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => setPalette(true)}
              className="flex h-9 items-center gap-2.5 rounded-lg border border-line bg-surface px-3 text-sm text-muted transition hover:text-ink sm:w-64"
              aria-label="Open command palette"
            >
              <Search size={15} />
              <span className="hidden flex-1 text-left sm:inline">Search…</span>
              <span className="kbd hidden sm:inline">Ctrl K</span>
            </button>
            <ThemeToggle />
            <button
              onClick={() => goTo("contact")}
              className="hidden h-9 items-center rounded-lg bg-accent px-4 text-sm font-semibold text-accent-ink transition hover:brightness-110 sm:inline-flex"
            >
              Hire me
            </button>
          </div>
        </header>

        <main className="mx-auto w-full max-w-5xl px-4 pb-16 pt-8 sm:px-8 sm:pt-10">{children}</main>
      </div>

      {drawer && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setDrawer(false)} />
          <aside className="absolute inset-y-0 left-0 w-72 border-r border-line bg-surface p-4">
            <button
              className="absolute right-3 top-3 grid size-8 place-items-center rounded-lg text-muted hover:bg-surface-2"
              onClick={() => setDrawer(false)}
              aria-label="Close menu"
            >
              <X size={17} />
            </button>
            <SidebarBody active={current} onNav={goTo} home={home} />
          </aside>
        </div>
      )}

      <CommandPalette open={palette} onClose={() => setPalette(false)} goTo={goTo} />
    </div>
  );
}
