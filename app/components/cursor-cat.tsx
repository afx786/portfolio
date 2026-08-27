"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { getCatSnapshot, subscribeCat } from "@/components/cat-store";

export function CursorCat() {
  const innerRef = useRef<HTMLDivElement>(null);
  const enabled = useSyncExternalStore(subscribeCat, getCatSnapshot, () => true);

  useEffect(() => {
    if (!enabled) return;
    const inner = innerRef.current;
    if (!inner) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarse) return;

    let targetX = window.innerWidth - 160;
    let targetY = window.innerHeight - 140;
    let curX = targetX;
    let curY = targetY;
    let facing = 1;
    let lastX = targetX;
    let hovered = false;
    let lastMove = performance.now();
    let raf = 0;

    const onMouse = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      lastMove = performance.now();
    };

    const tick = (now: number) => {
      curX += (targetX - curX) * 0.14;
      curY += (targetY - curY) * 0.14;
      const dx = targetX - lastX;
      if (Math.abs(dx) > 1.5) facing = dx < 0 ? -1 : 1;
      lastX = targetX;

      const idle = now - lastMove > 2400;
      const at = document.elementFromPoint(targetX, targetY);
      const interactive = at?.closest("a, button, input, [role='button'], summary");
      hovered = !!interactive && !idle;

      inner.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-28px, -16px) scale(${facing}, 1)`;
      inner.classList.toggle("cat-idle", idle && !hovered);

      if (curX < 0) curX = 0;
      if (curY < 0) curY = 0;

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouse, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMouse);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 z-[70] pointer-events-none cat-layer" aria-hidden="true">
      <div ref={innerRef} className="absolute top-0 left-0 will-change-transform">
        <CatSvg />
      </div>
    </div>
  );
}

function CatSvg() {
  return (
    <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
      {/* tail */}
      <path
        d="M50 40c6-2 10-8 8-14"
        stroke="#151515"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* body */}
      <ellipse cx="34" cy="42" rx="16" ry="12" fill="#151515" />
      {/* ears */}
      <path d="M14 22 L20 8 L28 20 Z" fill="#151515" />
      <path d="M38 20 L46 8 L50 22 Z" fill="#151515" />
      {/* head */}
      <circle cx="31" cy="30" r="17" fill="#151515" />
      {/* inner ears */}
      <path d="M17 20 L20 12 L25 19 Z" fill="#ffffff" />
      <path d="M39 19 L44 12 L47 20 Z" fill="#ffffff" />
      {/* eyes */}
      <circle cx="25" cy="29" r="2.6" fill="#ffffff" />
      <circle cx="37" cy="29" r="2.6" fill="#ffffff" />
      {/* nose */}
      <path d="M31 34 l-2 2.5 h4 Z" fill="#ffffff" opacity="0.9" />
      {/* whiskers */}
      <g stroke="#151515" strokeWidth="1.3" strokeLinecap="round">
        <path d="M10 30 h6" />
        <path d="M8 34 h6" />
        <path d="M48 30 h6" />
        <path d="M50 34 h6" />
      </g>
    </svg>
  );
}