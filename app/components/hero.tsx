"use client";

import { useSiteUI } from "@/components/ui-provider";
import { AIAssistant } from "@/components/ai-assistant";
import { TrackSelector } from "@/components/track-selector";
import { site, currentStatus, education } from "@/lib/content";

export function Hero() {
  const { openResume } = useSiteUI();

  return (
    <section
      id="top"
      className="min-h-screen flex flex-col items-start justify-center text-left px-6 md:px-16 pt-8 pb-12 max-w-[1280px] mx-auto relative grid-bg"
    >
      {/* Meta */}
      <div className="absolute top-24 right-6 md:right-16 text-right z-20 hidden md:block w-1/3">
        <div className="font-mono text-mono text-mid uppercase tracking-[0.2em] mb-2 border-b border-line pb-2">
          Meta
        </div>
        <div className="font-mono text-mono text-mid flex flex-col items-end gap-2 text-[12px]">
          <div>SYS_ID: AAQ-2026</div>
          <div>LAST_UPDATE: 2026</div>
          <div>STATUS: ONLINE</div>
        </div>
      </div>

      <div className="w-full md:w-2/3 flex flex-col items-start relative z-10 border-l border-line pl-8 md:pl-16 py-4">
        <div className="font-mono text-mono text-mid uppercase tracking-[0.3em] mb-6">
          {site.name}
        </div>

        <div className="font-mono text-mono text-mid flex flex-wrap justify-start gap-3 mb-6 uppercase tracking-widest text-[13px]">
          {site.taglineChip.map((c, i) => (
            <span key={c} className="flex items-center gap-3">
              {i > 0 && <span className="text-faint">•</span>}
              <span>{c}</span>
            </span>
          ))}
        </div>

        {/* Career Track Selector — primary mode switch */}
        <div className="mb-8 w-full">
          <TrackSelector />
        </div>

        <h1 className="text-[48px] md:text-[80px] leading-[1.1] md:leading-[1] tracking-[-0.03em] md:tracking-[-0.04em] font-bold mb-8 max-w-4xl [overflow-wrap:anywhere]">
          {site.positioning}
        </h1>

        <p className="text-body-lg text-mid max-w-2xl mb-8">{site.subline}</p>

        {/* Current Status */}
        <div className="mb-8 border border-line bg-surface-low p-4 w-full max-w-xl">
          <div className="font-mono text-mono text-mid uppercase tracking-[0.2em] flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-ink block animate-pulse" aria-hidden="true" />
            {currentStatus.label}
          </div>
          <p className="text-body-md">
            <span className="font-semibold">{currentStatus.value}</span>
          </p>
          <p className="text-body-md text-mid mt-2">
            {education.status} {education.degree} ({education.specialization}) at {education.institution},{" "}
            {education.dates}.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <button
            onClick={openResume}
            className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] px-5 py-3 bg-ink text-canvas hover:bg-mid transition-colors"
          >
            Resume
          </button>
          <a
            href="#work"
            className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] px-5 py-3 border border-ink text-ink hover:bg-ink hover:text-canvas transition-colors"
          >
            View work
          </a>
        </div>

        {/* Integrated AI Assistant */}
        <AIAssistant />
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-mid">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll to explore</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="animate-bounce">
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}