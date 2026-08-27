import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { roleTracks, capabilitiesUnderlying, site } from "@/lib/content";

export function WhereIFit() {
  return (
    <Section id="where-i-fit" num="08" label="Where I Fit">
      <Reveal>
        <SectionHeading title={site.positioning} />
        <div className="font-mono text-mono text-mid flex flex-wrap gap-4 mb-10">
          <span>AI/ML</span> <span className="text-faint">|</span>
          <span>DATA</span> <span className="text-faint">|</span>
          <span>PRODUCT</span> <span className="text-faint">|</span>
          <span>SOFTWARE (underlying)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roleTracks.map((track) => (
            <div key={track.index} className="border border-line p-8 bg-canvas">
              <div className="font-mono text-[11px] text-faint uppercase tracking-widest mb-3">
                {track.index}
              </div>
              <h3 className="text-headline-md text-ink mb-4">{track.title}</h3>
              <p className="text-body-md text-mid mb-6">{track.description}</p>
              <div className="mb-4">
                <h4 className="font-mono text-mono text-mid uppercase mb-2">Evidence</h4>
                <p className="text-body-md text-mid text-[15px]">{track.evidence}</p>
              </div>
              <div>
                <h4 className="font-mono text-mono text-mid uppercase mb-2">Resume</h4>
                <p className="text-body-md text-ink font-semibold">{track.resume}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-line bg-surface-low p-6">
          <h4 className="font-mono text-mono text-mid uppercase mb-3">{capabilitiesUnderlying.title}</h4>
          <p className="text-body-md text-mid mb-4">{capabilitiesUnderlying.text}</p>
          <div className="flex flex-wrap gap-2">
            {capabilitiesUnderlying.items.map((item) => (
              <span
                key={item}
                className="border border-line bg-canvas px-3 py-1.5 text-body-md text-mid text-[14px]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}