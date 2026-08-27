"use client";

import { useSyncExternalStore } from "react";
import { getCatSnapshot, setCatEnabled, subscribeCat } from "@/components/cat-store";

export function CatToggle() {
  const enabled = useSyncExternalStore(subscribeCat, getCatSnapshot, () => true);

  return (
    <button
      onClick={() => setCatEnabled(!enabled)}
      className="font-mono text-[10px] uppercase tracking-[0.2em] text-mid hover:text-ink transition-colors"
      aria-pressed={!enabled}
    >
      {enabled ? "Mascot: on" : "Mascot: off"}
    </button>
  );
}