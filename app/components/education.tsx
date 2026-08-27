import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { education } from "@/lib/content";

export function Education() {
  return (
    <Section id="education" num="06" label="Education" tone="paper">
      <Reveal>
        <SectionHeading title="Education" />
        <h3 className="text-headline-lg text-ink tracking-tight mb-2">{education.institution}</h3>
        <p className="text-body-lg text-mid mb-1">
          {education.degree} — {education.specialization}
        </p>
        <p className="font-mono text-mono text-mid mb-8">{education.dates}</p>

        <div className="flex flex-wrap gap-3">
          <span className="inline-block border border-line bg-canvas px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-mid">
            {education.status}
          </span>
          <span className="inline-block border border-line bg-canvas px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-mid">
            Greater Noida, India
          </span>
        </div>
      </Reveal>
    </Section>
  );
}