import { CatToggle } from "@/components/cat-toggle";
import { VisitorBadge } from "@/components/visitor-badge";
import { contactLinks, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-canvas border-t border-line">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 md:px-16 py-8 max-w-[1280px] mx-auto">
        <div className="font-bold tracking-tighter">{site.name}</div>
        <div className="flex flex-wrap justify-center gap-6">
          {contactLinks.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target={l.label === "Email" ? undefined : "_blank"}
              rel={l.label === "Email" ? undefined : "noopener noreferrer"}
              className="font-mono text-mono text-mid hover:text-ink underline underline-offset-4 decoration-1 hover:decoration-ink transition-colors"
            >
              {l.label} ↗
            </a>
          ))}
          <CatToggle />
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="font-mono text-mono text-mid">
            © 2026 {site.name}. BUILT WITH PRECISION.
          </div>
          <VisitorBadge />
        </div>
      </div>
    </footer>
  );
}