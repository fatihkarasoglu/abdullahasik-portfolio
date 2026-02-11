import { NextRequest, NextResponse } from "next/server";

type VerifyPayload = {
  company?: string;
  elapsedMs?: number;
};

const RATE_LIMIT_WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

const ipStore = new Map<string, { count: number; windowStart: number }>();

function getClientIp(req: NextRequest) {
  const xff = req.headers.get("x-forwarded-for");
  if (!xff) return "unknown";
  return xff.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = ipStore.get(ip);

  if (!entry) {
    ipStore.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    ipStore.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) return true;

  entry.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }

  let payload: VerifyPayload;
  try {
    payload = (await req.json()) as VerifyPayload;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (payload.company && payload.company.trim().length > 0) {
    return NextResponse.json({ ok: false }, { status: 200 });
  }

  const elapsed = Number(payload.elapsedMs ?? 0);
  if (elapsed > 0 && elapsed < 2500) {
    return NextResponse.json({ ok: false }, { status: 200 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
