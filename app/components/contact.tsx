"use client";

import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { useSiteUI } from "@/components/ui-provider";
import { contactLinks, site } from "@/lib/content";

export function Contact() {
  const { openResume } = useSiteUI();

  return (
    <Section id="contact" num="09" label="Contact" contentSpan={9}>
      <Reveal>
        <h2 className="text-[48px] md:text-[80px] leading-[1.1] md:leading-[1] tracking-[-0.03em] md:tracking-[-0.04em] font-bold mb-8 break-words">
          Let&apos;s build something worth talking about.
        </h2>

        <div className="font-mono text-mono text-mid flex flex-wrap gap-4 mb-10">
          {site.taglineChip.map((c, i) => (
            <span key={c} className="flex items-center gap-4">
              {i > 0 && <span className="text-faint">•</span>}
              <span>{c}</span>
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-6 mb-12">
          {contactLinks.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target={l.label === "Email" ? undefined : "_blank"}
              rel={l.label === "Email" ? undefined : "noopener noreferrer"}
              className="text-body-md text-ink border-b border-ink pb-0.5 hover:text-mid hover:border-mid transition-colors"
            >
              {l.label} ↗
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
          <a
            href="mailto:aaqibabdullah2006@gmail.com"
            className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] px-8 py-4 bg-ink text-canvas hover:bg-mid transition-colors text-center"
          >
            Get in Touch
          </a>
          <button
            onClick={openResume}
            className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] px-8 py-4 border border-ink text-ink hover:bg-paper transition-colors text-center"
          >
            Download Resume
          </button>
        </div>
      </Reveal>
    </Section>
  );
}