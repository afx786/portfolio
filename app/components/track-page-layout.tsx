"use client";

import { SiteUIProvider } from "@/components/ui-provider";
import { Nav } from "@/components/nav";
import { TrackSelector } from "@/components/track-selector";
import { Experience } from "@/components/experience";
import { Leadership } from "@/components/leadership";
import { Research } from "@/components/research";
import { Education } from "@/components/education";
import { Capabilities } from "@/components/capabilities";
import { Achievements } from "@/components/achievements";
import { Contact } from "@/components/contact";
import { AIAssistant } from "@/components/ai-assistant";
import { Footer } from "@/components/footer";
import { ResumeModal } from "@/components/resume-modal";
import { CursorCat } from "@/components/cursor-cat";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import type { TrackConfig } from "@/lib/tracks";
import { projects, LINK_PENDING } from "@/lib/content";

function FeaturedWorkCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <Reveal>
      <div className="border border-line bg-canvas p-6 md:p-8">
        <div className="font-mono text-[11px] text-mid uppercase tracking-widest mb-2">
          {p.index} · {p.category}
        </div>
        <h3 className="text-headline-md text-ink mb-2">{p.title}</h3>
        <div className="font-mono text-[11px] uppercase tracking-widest text-mid mb-3">
          {p.status}
        </div>
        <p className="text-body-md text-mid mb-4">{p.description}</p>
        <ul className="flex flex-col gap-1.5 text-body-md text-mid mb-4">
          {p.highlights.map((h, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-faint select-none">—</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mb-4">
          {p.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2 py-0.5 bg-surface-low border border-line text-mid"
            >
              {t}
            </span>
          ))}
        </div>
        {p.links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {p.links.map((l) => {
              const pending = l.status === "pending" || l.url === LINK_PENDING;
              return pending ? (
                <span
                  key={l.label}
                  className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 border border-line text-mid"
                >
                  {l.label} · pending
                </span>
              ) : (
                <a
                  key={l.label}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 border border-ink text-ink hover:bg-ink hover:text-canvas transition-colors"
                >
                  {l.label} ↗
                </a>
              );
            })}
          </div>
        )}
      </div>
    </Reveal>
  );
}

export function TrackPageLayout({ track }: { track: TrackConfig }) {
  const featuredProjects = track.featuredWork
    .map((idx) => projects.find((p) => p.index === idx))
    .filter(Boolean) as (typeof projects)[number][];

  const sectionNums = { work: "01", experience: "02", research: "03", leadership: "03", education: "04", capabilities: "05", achievements: "06", contact: "07" };

  return (
    <SiteUIProvider>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        {/* Hero */}
        <section className="min-h-[60vh] flex flex-col items-start justify-center text-left px-6 md:px-16 pt-20 pb-16 max-w-[1280px] mx-auto relative grid-bg">
          <div className="w-full md:w-2/3 flex flex-col items-start relative z-10 border-l border-line pl-8 md:pl-16 py-8">
            <div className="font-mono text-mono text-mid uppercase tracking-[0.3em] mb-6">
              {track.label}
            </div>
            <h1 className="text-[48px] md:text-[80px] leading-[1.1] md:leading-[1] tracking-[-0.03em] md:tracking-[-0.04em] font-bold mb-8 max-w-4xl [overflow-wrap:anywhere]">
              {track.heroStatement}
            </h1>
            <p className="text-body-lg text-mid max-w-2xl mb-8">
              {track.heroSubline}
            </p>
            <TrackSelector compact />
          </div>
        </section>

        {/* Featured Work */}
        <Section id="work" num={sectionNums.work} label="Featured Work" contentSpan={9}>
          <div className="flex flex-col gap-6">
            {featuredProjects.map((p) => (
              <FeaturedWorkCard key={p.index} p={p} />
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Experience />

        {/* Research — emphasized on data track */}
        {track.researchEmphasis && <Research />}

        {/* Leadership — emphasized on product track */}
        {track.leadershipEmphasis && <Leadership />}

        {/* Education */}
        <Education />

        {/* Capabilities */}
        <Capabilities />

        {/* Achievements */}
        <Achievements />

        {/* Contact */}
        <Contact />

        {/* AI Assistant — track-aware */}
        <Section id="ask-ai" num="" label="Ask Aaqib">
          <AIAssistant track={track.id} />
        </Section>
      </main>
      <Footer />
      <ResumeModal />
      <CursorCat />
      <div className="noise-overlay" aria-hidden="true" />
    </SiteUIProvider>
  );
}
