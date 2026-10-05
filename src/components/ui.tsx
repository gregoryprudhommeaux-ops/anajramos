import type { ReactNode } from "react";

export function DarkPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-brand-dark-blue text-white shadow-xl ${className}`}
    >
      <div className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full border border-brand-slate-blue/20" />
      <div className="pointer-events-none absolute top-12 right-12 h-32 w-32 rounded-full border border-brand-gold/10" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function CreamPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-brand-gold/30 bg-brand-cream p-8 sm:p-12 ${className}`}
    >
      <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand-gold/10" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function WhiteCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="mb-6 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold tracking-widest text-brand-gold uppercase">
      {children}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <DarkPanel className="mb-8 p-8 sm:p-12">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mb-4 max-w-4xl font-serif text-3xl leading-tight font-light tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className="max-w-3xl text-base leading-relaxed font-medium text-brand-ice-blue sm:text-xl">
        {lede}
      </p>
    </DarkPanel>
  );
}

export function GoldDotItem({ title, body }: { title?: string; body: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-gold" />
      <div>
        {title ? <h3 className="text-sm font-semibold text-gray-800">{title}</h3> : null}
        <p
          className={
            title
              ? "text-xs leading-relaxed text-gray-600"
              : "text-sm leading-relaxed text-gray-700"
          }
        >
          {body}
        </p>
      </div>
    </div>
  );
}
