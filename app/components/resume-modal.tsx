"use client";

import { useEffect } from "react";
import { useSiteUI } from "@/components/ui-provider";
import { resumeOptions, LINK_PENDING } from "@/lib/content";

export function ResumeModal() {
  const { resumeOpen, closeResume } = useSiteUI();

  useEffect(() => {
    if (!resumeOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeResume();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [resumeOpen, closeResume]);

  if (!resumeOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Select a resume"
    >
      <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={closeResume} />
      <div className="relative z-10 w-full max-w-2xl bg-canvas border border-line">
        <div className="flex items-center justify-between border-b border-line px-5 py-3 bg-surface-low">
          <div className="font-mono text-mono uppercase tracking-[0.2em] text-mid">
            SELECT RESUME
          </div>
          <button
            onClick={closeResume}
            aria-label="Close"
            className="p-1 text-mid hover:text-ink"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <div className="p-5">
          <p className="text-body-md text-mid mb-5">
            Three role-specific resumes — pick the one that matches the role you&apos;re hiring for.
          </p>
          <div className="flex flex-col gap-4">
            {resumeOptions.map((r) => {
              const pending = r.url === LINK_PENDING;
              return (
                <div key={r.title} className="border border-line p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex-1">
                    <div className="font-bold tracking-tight">{r.title}</div>
                    <p className="text-body-md text-mid mt-1">{r.description}</p>
                  </div>
                  {pending ? (
                    <span className="font-mono text-mono text-faint uppercase tracking-widest text-[11px] shrink-0 border border-line px-4 py-2 opacity-60 cursor-not-allowed">
                      COMING SOON
                    </span>
                  ) : (
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-2 border border-ink text-ink hover:bg-ink hover:text-canvas transition-colors shrink-0"
                    >
                      VIEW RESUME
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}