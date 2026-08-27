import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { research, LINK_PENDING } from "@/lib/content";

const topics = ["Machine Learning", "AI", "Human-AI Interaction", "Data Science", "Behavioral Research"];

export function Research() {
  return (
    <Section id="research" num="05" label="Research">
      <Reveal>
        <SectionHeading title="Research Papers / Publications" />
        <p className="text-body-lg text-mid mb-8">
          Research at the intersection of machine learning, human behavior, and data.
        </p>

        <div className="flex flex-wrap gap-4 mb-12 border-b border-line pb-6">
          {topics.map((t, i) => (
            <span key={t} className="flex items-center gap-4">
              {i > 0 && <span className="text-faint">•</span>}
              <span className="font-mono text-mono text-mid">{t}</span>
            </span>
          ))}
        </div>

        <div className="border border-line bg-canvas p-8 mb-6">
          <div className="flex justify-between items-start mb-6">
            <div className="min-w-0">
              <span className="inline-block bg-surface-low px-3 py-1 border border-line font-mono text-mono text-mid uppercase tracking-[0.2em] mb-3">
                Featured Research
              </span>
              <h3 className="text-headline-lg text-ink mb-2 max-w-3xl break-words">{research.title}</h3>
              <div className="font-mono text-mono text-mid flex flex-wrap gap-4">
                <span>Published · {research.venue}</span>
                <span>{research.detail}</span>
                <span>{research.position}</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2">
              <h4 className="font-mono text-mono text-mid mb-2 uppercase">Abstract</h4>
              <p className="text-body-md text-mid">{research.abstract}</p>
            </div>
            <div>
              <h4 className="font-mono text-mono text-mid mb-2 uppercase">Authors</h4>
              <p className="text-body-md text-mid mb-4">{research.authors}</p>
              <h4 className="font-mono text-mono text-mid mb-2 uppercase">Dataset</h4>
              <p className="text-body-md text-mid">Available on request.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 border-t border-line-soft pt-6">
            <div>
              <h4 className="font-mono text-mono text-mid mb-3 uppercase">Method</h4>
              <ul className="flex flex-col gap-2 text-body-md text-mid">
                {research.method.map((m, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-faint select-none">—</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-mono text-mid mb-3 uppercase">Results</h4>
              <ul className="flex flex-col gap-2 text-body-md text-mid">
                {research.results.map((r, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-faint select-none">—</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            {research.links.map((l) =>
              l.status === "pending" || l.url === LINK_PENDING ? (
                <span
                  key={l.label}
                  className="inline-block font-mono text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-2 border border-line text-mid"
                >
                  {l.label} · pending
                </span>
              ) : (
                <a
                  key={l.label}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-ink underline decoration-1 underline-offset-4 hover:decoration-mid transition-colors"
                >
                  Read Research
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </a>
              )
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}