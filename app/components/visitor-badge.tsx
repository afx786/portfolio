"use client";

import { useEffect, useState } from "react";
import { visitor } from "@/lib/content";

export function VisitorBadge() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/visitor", { method: "POST" });
        if (!res.ok) return;
        const data = await res.json();
        if (!cancelled && typeof data.count === "number") setCount(data.count);
      } catch {
        /* offline — leave badge hidden */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-mid">
      {visitor.label}: {count === null ? "…" : count.toLocaleString("en-US")}
    </div>
  );
}