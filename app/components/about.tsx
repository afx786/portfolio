import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/content";

export function About() {
  return (
    <Section id="about" num="01" label="About">
      <Reveal>
        <SectionHeading title={site.positioning} />
        <div className="flex flex-col gap-6 text-body-md text-mid max-w-2xl">
          <p>
            I&apos;m a final-year Computer Science (Data Science) undergraduate at Gautam Buddha
            University who works at the intersection of AI/ML, data, and product engineering.
          </p>
          <p>
            I build end-to-end systems under real constraints — from research and prototypes to
            production infrastructure — with software engineering as a strong underlying capability.
          </p>
        </div>
        <div className="mt-12 border border-line bg-surface-low p-4 max-w-2xl">
          <div className="font-mono text-mono uppercase tracking-[0.2em] text-mid mb-2">
            Principles
          </div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-ink flex flex-wrap gap-x-4 gap-y-2">
            <span>Rigorous engineering</span>
            <span className="text-faint select-none">·</span>
            <span>Proof over claims</span>
            <span className="text-faint select-none">·</span>
            <span>Data systems</span>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}