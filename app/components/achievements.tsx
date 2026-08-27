import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { achievements, research, LINK_PENDING } from "@/lib/content";

export function Achievements() {
  return (
    <Section id="achievements" num="08" label="Achievements" tone="paper">
      <Reveal>
        <SectionHeading title="A few things worth noting." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {achievements.items.map((a) => (
            <div key={a.title} className="border border-line bg-canvas p-6">
              <h3 className="text-headline-md text-ink mb-2">{a.title}</h3>
              <p className="text-body-md text-mid">{a.detail}</p>
            </div>
          ))}
        </div>

        <h4 className="font-mono text-mono text-mid uppercase tracking-[0.2em] mb-4">
          Certifications
        </h4>
        <div className="flex flex-col gap-3">
          {achievements.certifications.map((c) => {
            const pending = c.status === "pending" || c.url === LINK_PENDING;
            return (
              <div key={c.name} className="flex items-center justify-between gap-4 border-b border-line pb-3">
                <span className="text-body-md">{c.name}</span>
                {pending ? (
<span className="font-mono text-[10px] uppercase tracking-widest text-mid shrink-0">
                      Link pending
                    </span>
                ) : (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] uppercase tracking-widest text-ink underline underline-offset-4 decoration-1 hover:decoration-mid transition-colors shrink-0"
                  >
                    View ↗
                  </a>
                )}
              </div>
            );
          })}
        </div>
        <p className="text-body-md text-mid mt-6">
          Published research — second author,{" "}
          <span className="text-ink">{research.venue}</span>, May 2026.{" "}
          <a href="#research" className="text-ink underline underline-offset-4 hover:text-mid">
            See Research →
          </a>
        </p>
      </Reveal>
    </Section>
  );
}