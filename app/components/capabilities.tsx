import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { capabilities } from "@/lib/content";

const glyphs: Record<string, string> = {
  neurology: "✦",
  database: "▤",
  code_blocks: "</>",
  view_quilt: "▦",
  science: "◍",
};

export function Capabilities() {
  return (
    <Section id="capabilities" num="07" label="Capabilities" tone="ink" contentSpan={9}>
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {capabilities.map((group) => (
            <div key={group.title}>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-line/40">
                <span
                  className="flex items-center justify-center w-9 h-9 border border-line/40 text-canvas font-mono text-[15px]"
                  aria-hidden="true"
                >
                  {glyphs[group.icon] ?? "◍"}
                </span>
                <h4 className="text-headline-md text-canvas">{group.title}</h4>
              </div>
              <ul className="flex flex-col gap-3 text-body-md text-faint">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-line/60 select-none">—</span>
                    <span>{item}</span>
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