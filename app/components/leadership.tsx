import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { leadership } from "@/lib/content";

export function Leadership() {
  return (
    <Section id="leadership" num="03" label="Leadership">
      <Reveal>
        <SectionHeading title="Leadership isn't a title. It's ownership." />

        <div className="flex flex-col gap-12">
          {leadership.map((item) => (
            <div key={item.title + item.org} className="border-b border-line pb-8 last:border-0">
              <h3 className="text-headline-md text-ink">{item.title}</h3>
              <div className="font-mono text-mono text-mid uppercase mb-4 mt-1">
                {item.org} · {item.dates}
              </div>
              <p className="text-body-md text-mid mb-4">{item.description}</p>
              <ul className="flex flex-col gap-2 text-body-md text-mid">
                {item.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-faint select-none">—</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}