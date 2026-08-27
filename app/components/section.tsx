import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  num: string;
  label: string;
  tone?: "canvas" | "paper" | "ink";
  contentSpan?: 6 | 9 | 12;
  className?: string;
  children: ReactNode;
}

const tones = {
  canvas: "bg-canvas text-ink",
  paper: "bg-paper text-ink",
  ink: "bg-ink text-canvas",
};

const spans: Record<number, string> = {
  6: "md:col-span-6",
  9: "md:col-span-9",
  12: "md:col-span-12",
};

export function Section({
  id,
  num,
  label,
  tone = "canvas",
  contentSpan = 6,
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative px-6 md:px-16 py-[120px] md:py-[160px] border-t border-line/60 max-w-[1280px] mx-auto ${tones[tone]} ${className}`}
    >
      <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
        <div className="col-span-12 md:col-span-3">
          <div
            className={`font-mono text-mono-label uppercase tracking-[0.2em] ${
              tone === "ink" ? "text-faint" : "text-mid"
            }`}
          >
            {num} / {label}
          </div>
        </div>
        <div
          className={`col-span-12 ${spans[contentSpan]} border-l pl-8 min-w-0 ${
            tone === "ink" ? "border-line/40" : "border-line/60"
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  title,
  tone = "canvas",
  className = "",
}: {
  title: string;
  tone?: "canvas" | "paper" | "ink";
  className?: string;
}) {
  return (
    <h2
      className={`text-headline-lg tracking-tight leading-tight mb-12 ${
        tone === "ink" ? "text-canvas" : "text-ink"
      } ${className}`}
    >
      {title}
    </h2>
  );
}