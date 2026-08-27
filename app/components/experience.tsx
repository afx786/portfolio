import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { experience, openIdeaWork, LINK_PENDING } from "@/lib/content";

export function Experience() {
  return (
    <Section id="experience" num="02" label="Experience" tone="paper">
      <Reveal>
        <SectionHeading title="Work that ships — and ships to production." />

        <div className="relative border-l border-line pl-8 ml-1">
          {/* Timeline node */}
          <span
            className="absolute -left-[5px] top-2 w-[6px] h-[6px] bg-ink outline outline-4 outline-paper"
            aria-hidden="true"
          />

          {experience.map((role, i) => (
            <div key={role.org} className={i < experience.length - 1 ? "pb-16" : ""}>
              <div className="font-mono text-mono text-mid mb-2">{role.dates}</div>
              <h3 className="text-headline-md text-ink">
                {role.role} — {role.org}
              </h3>
              <div className="text-body-md text-mid mt-1 mb-4">{role.kind}</div>
              <p className="text-body-md text-mid mb-4 max-w-2xl">{role.description}</p>

              {role.org === "OpenIdea" && (
                <div className="mt-6 mb-6 border border-line bg-surface-low p-5">
                  <div className="font-semibold tracking-tight text-headline-sm mb-3">
                    {role.role} — {role.org}
                  </div>
                  <ul className="flex flex-col gap-2 text-body-md text-mid">
                    {openIdeaWork.map((item, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-faint select-none">—</span>
                        <span>
                          <span className="font-semibold">{item.title}</span>
                          {" — "}
                          {item.framing}
                          {item.link && (item.link.status === "pending" || item.link.url === LINK_PENDING) ? (
                            <span className="font-mono text-[10px] uppercase tracking-widest text-mid ml-1">[Link pending]</span>
                          ) : item.link ? (
                            <a
                              href={item.link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono text-[10px] uppercase tracking-widest text-ink hover:text-mid underline underline-offset-4 decoration-1 hover:decoration-mid transition-colors ml-1"
                            >
                              ↗
                            </a>
                          ) : null}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {role.org === "FnF Coliving" && (
                <div className="mt-4 mb-6 border border-line bg-surface-low p-5">
                  <div className="font-semibold tracking-tight text-headline-sm mb-1.5">
                    {role.role} — {role.org}
                  </div>
                  <p className="text-body-md text-mid mb-3">{role.description}</p>
                  <ul className="flex flex-col gap-1.5 text-body-md text-mid">
                    {(role.details ?? []).map((b, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-faint select-none">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}