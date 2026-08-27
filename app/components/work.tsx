import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { projects, LINK_PENDING } from "@/lib/content";

function Tag({ children }: { children: string }) {
  return (
    <span className="font-mono text-[11px] px-3 py-1 bg-surface-low border border-line text-mid">
      {children}
    </span>
  );
}

function ProjectLinks({
  links,
}: {
  links: { label: string; url: string; status: "real" | "pending" }[];
}) {
  if (links.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {links.map((l) => {
        const pending = l.status === "pending" || l.url === LINK_PENDING;
        return pending ? (
          <span
            key={l.label}
            className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-2 border border-line text-mid"
          >
            {l.label} · pending
          </span>
        ) : (
          <a
            key={l.label}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-2 border border-ink text-ink hover:bg-ink hover:text-canvas transition-colors"
          >
            {l.label} ↗
          </a>
        );
      })}
    </div>
  );
}

export function Work() {
  const featured = projects.find((p) => p.featured)!;
  const primary = projects.filter((p) => p.tier === "primary" && !p.featured);
  const secondary = projects.filter((p) => p.tier === "secondary");

  return (
    <Section id="work" num="04" label="Selected Work" contentSpan={9}>
      {/* Featured — Pyramids */}
      <Reveal>
        <div className="w-full border border-line bg-canvas">
          <div className="p-8 md:p-12">
            <span className="inline-block bg-surface-low px-3 py-1 border border-line font-mono text-mono text-mid uppercase tracking-[0.2em] mb-6">
              Featured Project
            </span>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-8">
                <h3 className="text-headline-lg text-ink mb-4">
                  {featured.index} · {featured.title}
                </h3>
                <p className="text-body-lg text-mid mb-6 max-w-3xl">{featured.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
              <div className="md:col-span-4">
                <div className="font-mono text-[11px] uppercase tracking-widest text-mid mb-2">
                  Status
                </div>
                <p className="text-body-md mb-6">{featured.status}</p>
                <ProjectLinks links={featured.links} />
              </div>
            </div>
            <ul className="mt-8 border-t border-line-soft pt-6 flex flex-col gap-2 text-body-md text-mid">
              {featured.highlights.map((h, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-faint select-none">—</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {/* Primary tier */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {primary.map((p, idx) => (
          <Reveal key={p.index} delay={idx * 60}>
            <div className="border border-line bg-canvas p-8 h-full flex flex-col group">
              <div className="font-mono text-[11px] text-mid uppercase tracking-widest mb-3">
                {p.index} · {p.category}
              </div>
              <h3 className="text-headline-md text-ink mb-1.5 group-hover:underline decoration-1 underline-offset-4">
                {p.title}
              </h3>
              <div className="font-mono text-[11px] uppercase tracking-widest text-mid mb-4">
                {p.status}
              </div>
              <p className="text-body-md text-mid mb-4">{p.description}</p>
              <ul className="flex flex-col gap-1.5 text-body-md text-mid flex-1">
                {p.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-faint select-none">—</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-5">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <ProjectLinks links={p.links} />
            </div>
          </Reveal>
        ))}
      </div>

      {/* Secondary tier */}
      <div className="mt-6">
        <div className="font-mono text-[11px] text-mid uppercase tracking-widest mb-4">
          Secondary
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondary.map((p, idx) => (
            <Reveal key={p.index} delay={idx * 60}>
              <div className="border border-line-soft bg-surface-low p-6 h-full flex flex-col">
                <div className="font-mono text-[11px] text-mid uppercase tracking-widest mb-3">
                  {p.index} · {p.category}
                </div>
                <h3 className="text-headline-md text-ink mb-1.5">{p.title}</h3>
                <p className="text-body-md text-mid mb-4">{p.description}</p>
                <ul className="flex flex-col gap-1.5 text-body-md text-mid flex-1">
                  {p.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-faint select-none">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <ProjectLinks links={p.links} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}