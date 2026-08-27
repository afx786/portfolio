"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { TrackId } from "@/lib/tracks";

const trackLinks: { id: TrackId; num: string; label: string; href: string }[] = [
  { id: "ai", num: "01", label: "AI / ML ENGINEER", href: "/ai" },
  { id: "data", num: "02", label: "DATA SCIENCE / ANALYTICS", href: "/data" },
  { id: "product", num: "03", label: "PRODUCT MANAGEMENT", href: "/product" },
];

export function TrackSelector({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const active = pathname.startsWith("/ai")
    ? "ai"
    : pathname.startsWith("/data")
      ? "data"
      : pathname.startsWith("/product")
        ? "product"
        : "unified";

  return (
    <div
      className="w-full border border-line"
      role="navigation"
      aria-label="Career tracks"
    >
      {!compact && (
        <div className="bg-ink px-5 py-3 md:px-6 md:py-3.5">
          <div className="font-mono text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] text-canvas">
            EXPLORE MY PROFILE
          </div>
        </div>
      )}
      <div
        className={`flex flex-col md:flex-row ${
          compact ? "" : ""
        }`}
        role="tablist"
        aria-label="Career track options"
      >
        {trackLinks.map((t, i) => {
          const isActive = active === t.id;
          return (
            <Link
              key={t.id}
              href={t.href}
              role="tab"
              aria-selected={isActive}
              aria-label={`${t.num} ${t.label}`}
              className={`group flex-1 flex items-center gap-3 md:gap-4 transition-colors ${
                compact
                  ? "px-4 py-3 md:px-5 md:py-3.5"
                  : "px-5 py-4 md:px-6 md:py-5"
              } ${
                i < trackLinks.length - 1 ? "border-b md:border-b-0 md:border-r border-line" : ""
              } ${
                isActive
                  ? "bg-ink text-canvas"
                  : "bg-canvas text-mid hover:bg-surface-low hover:text-ink"
              }`}
            >
              <span
                className={`font-mono text-[11px] md:text-[12px] font-bold tracking-[0.15em] ${
                  isActive ? "text-canvas" : "text-faint"
                }`}
              >
                {t.num}
              </span>
              <span
                className={`font-mono text-[12px] md:text-[13px] font-bold uppercase tracking-[0.12em] ${
                  isActive ? "text-canvas" : "text-ink group-hover:text-ink"
                }`}
              >
                {t.label}
              </span>
            </Link>
          );
        })}
        {active !== "unified" && (
          <Link
            href="/"
            className={`flex items-center justify-center gap-2 transition-colors ${
              compact
                ? "px-4 py-3 md:px-5 md:py-3.5"
                : "px-5 py-4 md:px-6 md:py-5"
            } border-t md:border-t-0 md:border-l border-line bg-canvas text-mid hover:bg-surface-low hover:text-ink`}
          >
            <span className="font-mono text-[12px] md:text-[13px] font-bold uppercase tracking-[0.12em]">
              ← ALL WORK
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
