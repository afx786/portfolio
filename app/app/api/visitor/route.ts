import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const KEY = "aaqib_portfolio_visitors";
const COOKIE = "aaqib_portfolio_visitor";
const COOKIE_TTL = 60 * 60 * 24 * 30; // 30 days

// Non-persistent in-memory fallback for local dev when no store is configured.
const mem: { count: number } = { count: 0 };

async function getCount(): Promise<number> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (url && token) {
    try {
      const res = await fetch(`${url.replace(/\/$/, "")}/get/${KEY}`, {
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: 0 },
      });
      if (res.ok) {
        const json = await res.json();
        const n = Number(json?.result);
        return Number.isFinite(n) ? n : 0;
      }
    } catch {
      // fall through to memory
    }
  }
  return mem.count;
}

async function increment(): Promise<number> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (url && token) {
    try {
      const res = await fetch(`${url.replace(/\/$/, "")}/incr/${KEY}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const json = await res.json();
        const n = Number(json?.result);
        if (Number.isFinite(n)) return n;
      }
    } catch {
      // fall through
    }
  }
  mem.count += 1;
  return mem.count;
}

export async function GET(req: NextRequest) {
  const count = await getCount();
  const headers = new Headers();
  headers.set("Cache-Control", "no-store");
  if (!req.cookies.get(COOKIE)) {
    headers.set(
      "Set-Cookie",
      `${COOKIE}=1; Path=/; HttpOnly; SameSite=Lax; Max-Age=${COOKIE_TTL}`
    );
  }
  return NextResponse.json({ count, initialized: count > 0 }, { headers });
}

export async function POST(req: NextRequest) {
  const seen = !!req.cookies.get(COOKIE);
  let count = await getCount();
  if (!seen) {
    count = await increment();
  }
  const headers = new Headers();
  headers.set("Cache-Control", "no-store");
  if (!seen) {
    headers.set(
      "Set-Cookie",
      `${COOKIE}=1; Path=/; HttpOnly; SameSite=Lax; Max-Age=${COOKIE_TTL}`
    );
  }
  return NextResponse.json({ count, initialized: count > 0, counted: !seen }, { headers });
}