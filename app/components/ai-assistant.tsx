"use client";

import { useEffect, useRef, useState } from "react";
import { aiSuggestions as defaultSuggestions } from "@/lib/content";
import { tracks, type TrackId } from "@/lib/tracks";

interface Message {
  role: "user" | "ai";
  text: string;
  refs?: { id: string; type: string; section: string }[];
}

export function AIAssistant({ track = "unified" as TrackId }: { track?: TrackId }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const trackConfig = tracks[track];
  const suggestions = trackConfig?.aiSuggestions ?? defaultSuggestions;
  const placeholder = trackConfig?.aiPlaceholder ?? "Type your question...";

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, loading]);

  const ask = async (question: string) => {
    const q = question.trim();
    if (!q || loading) return;
    setError(false);
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q }),
      });
      if (!res.ok) throw new Error("bad status");
      const data = await res.json();
      setMessages((m) => [
        ...m,
        { role: "ai", text: data.answer, refs: data.references ?? [] },
      ]);
    } catch {
      setError(true);
      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text: "I couldn't reach the knowledge service just now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  return (
    <div
      id="ask-ai"
      className="w-full max-w-xl bg-canvas border border-line p-1 text-left"
      role="region"
      aria-label="Ask Aaqib AI"
    >
      <div className="flex items-center justify-between border-b border-line-soft px-4 py-3 bg-surface-low">
        <div className="flex items-center gap-3">
          <span className="text-mid text-[15px]" aria-hidden="true">
            ✦
          </span>
          <div className="font-mono text-mono uppercase tracking-[0.2em] text-mid">
            ASK AAQIB AI
          </div>
        </div>
        <div className="font-mono text-[10px] text-mid uppercase tracking-[0.2em] hidden md:block">
          Based on verified portfolio
        </div>
      </div>

      <div className="p-4 flex flex-col">
        <div ref={scrollRef} className="flex-grow overflow-y-auto max-h-[300px] mb-4 pr-2 flex flex-col gap-3">
          {messages.length === 0 && !loading && (
            <div className="text-body-md">
              <span className="font-semibold">What would you like to know?</span>
              <span className="ai-cursor ml-1" aria-hidden="true" />
            </div>
          )}
          {messages.map((m, i) =>
            m.role === "user" ? (
              <div key={i} className="self-end max-w-[85%] bg-ink text-canvas px-3 py-2 text-body-md">
                {m.text}
              </div>
            ) : (
              <div key={i} className="self-start max-w-[90%] text-body-md">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-mid mb-1">
                  ASK AAQIB AI
                </div>
                <p className="whitespace-pre-wrap">{m.text}</p>
                {m.refs && m.refs.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {m.refs.map((r) => (
                      <span
                        key={r.id}
                        className="font-mono text-[10px] uppercase tracking-widest text-mid border border-line px-1.5 py-0.5"
                      >
                        {r.type} · {r.section}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )
          )}
          {loading && (
            <div className="self-start text-body-md">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-mid mb-1">
                ASK AAQIB AI
              </div>
              <span className="ai-cursor" aria-hidden="true" />
            </div>
          )}
        </div>

        <form
          className="relative w-full mb-4"
          onSubmit={(e) => {
            e.preventDefault();
            ask(input);
          }}
        >
          <label htmlFor="ai-input" className="sr-only">
            Ask a question about Aaqib
          </label>
          <input
            id="ai-input"
            ref={inputRef}
            className="w-full bg-transparent border-0 border-b border-ink focus:outline-none focus:border-b-2 text-body-md px-0 py-2 placeholder:text-faint"
            placeholder={placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            aria-label="Send question"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-ink hover:text-mid"
            disabled={loading}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </form>

        {error && (
          <p className="text-[13px] text-mid mb-2" role="alert">
            The knowledge service is temporarily unavailable.
          </p>
        )}

        <div className="flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => ask(s)}
              disabled={loading}
              className="font-mono text-[11px] px-2 py-1 border border-line text-mid hover:text-ink hover:border-ink transition-colors disabled:opacity-50"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}