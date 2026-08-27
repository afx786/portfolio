"use client";

import { useEffect, useState } from "react";
import { useSiteUI } from "@/components/ui-provider";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "leadership", label: "Leadership" },
  { id: "work", label: "Work" },
  { id: "research", label: "Research" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function useVisitorCount() {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/visitor", { method: "GET" });
        if (!res.ok) return;
        const data = await res.json();
        if (!cancelled && typeof data.count === "number") setCount(data.count);
      } catch {
        /* offline — leave hidden */
      }
    })();
    return () => { cancelled = true; };
  }, []);
  return count;
}

export function Nav() {
  const { openResume } = useSiteUI();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const visitorCount = useVisitorCount();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToAI = () => {
    setMenuOpen(false);
    document.getElementById("ask-ai")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-canvas/80 backdrop-blur-md border-b transition-colors ${
          scrolled ? "border-line" : "border-transparent"
        }`}
      >
        <nav className="max-w-[1280px] mx-auto px-6 md:px-16 flex items-center justify-between h-16" aria-label="Primary">
          <a href="#top" className="font-bold tracking-tighter text-[19px]">
            AAQIB&nbsp;ABDULLAH
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="text-body-md text-mid hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={openResume}
              className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-2 border border-ink text-ink hover:bg-ink hover:text-canvas transition-colors"
            >
              Resume
            </button>
            <button
              onClick={scrollToAI}
              className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-2 bg-ink text-canvas hover:bg-mid transition-colors"
            >
              Ask AI
            </button>
            {visitorCount !== null && (
              <span
                className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-2 border border-line text-mid select-none"
                aria-label={`${visitorCount.toLocaleString("en-US")} portfolio visits`}
              >
                ◉ {visitorCount.toLocaleString("en-US")}{" "}
                <span className="hidden xl:inline">VISITS</span>
              </span>
            )}
          </div>

          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3 7h18M3 12h18M3 17h18" />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-canvas flex flex-col lg:hidden">
          <div className="flex-1 overflow-y-auto pt-24 px-6">
            <div className="flex flex-col gap-1">
              {links.map((l, i) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-4 py-3 border-b border-line-soft"
                >
                  <span className="font-mono text-mono text-mid">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-3xl font-semibold tracking-tight">{l.label}</span>
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3 mt-10">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  openResume();
                }}
                className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-3 border border-ink text-ink"
              >
                Resume
              </button>
              <button
                onClick={scrollToAI}
                className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-3 bg-ink text-canvas"
              >
                Ask AI
              </button>
              {visitorCount !== null && (
                <div
                  className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-3 border border-line text-mid"
                  aria-label={`${visitorCount.toLocaleString("en-US")} portfolio visits`}
                >
                  ◉ {visitorCount.toLocaleString("en-US")} VISITS
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}