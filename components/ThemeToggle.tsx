"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function toggleTheme() {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {}
  window.dispatchEvent(new Event("themechange"));
}

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const sync = () => setDark(document.documentElement.dataset.theme === "dark");
    sync();
    window.addEventListener("themechange", sync);
    return () => window.removeEventListener("themechange", sync);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
      className="grid size-9 place-items-center rounded-lg border border-line bg-surface text-muted transition hover:text-ink"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
