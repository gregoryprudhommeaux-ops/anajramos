import type { InquiryKey } from "@/content/types";

const inquiries = new Set<InquiryKey>(["search", "collaboration", "talent", "other"]);

type ErrorKey = "name" | "company" | "email" | "location" | "inquiry" | "description" | "consent";

function text(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, errors: { generic: "generic" } }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ ok: false, errors: { generic: "generic" } }, { status: 400 });
  }

  const input = body as Record<string, unknown>;
  if (text(input.website, 200)) {
    return Response.json({ ok: true });
  }

  const name = text(input.name, 120);
  const company = text(input.company, 160);
  const email = text(input.email, 160);
  const location = text(input.location, 120);
  const inquiry = text(input.inquiry, 40);
  const description = text(input.description, 2000);
  const timing = text(input.timing, 160);
  const consent = input.consent === true;

  const errors: Partial<Record<ErrorKey, ErrorKey>> = {};
  if (name.length < 2) errors.name = "name";
  if (company.length < 2) errors.company = "company";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "email";
  if (location.length < 2) errors.location = "location";
  if (!inquiries.has(inquiry as InquiryKey)) errors.inquiry = "inquiry";
  if (description.length < 20) errors.description = "description";
  if (!consent) errors.consent = "consent";

  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, errors }, { status: 400 });
  }

  void timing;
  return Response.json({ ok: true, delivery: "local-preview" });
}
