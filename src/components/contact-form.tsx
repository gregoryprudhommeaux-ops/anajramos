"use client";

import { getCopy } from "@/content";
import type { InquiryKey } from "@/content/types";
import { profile } from "@/lib/profile";
import type { Locale } from "@/lib/routes";
import { useState, type FormEvent, type ReactNode } from "react";

type FieldErrors = Partial<
  Record<"name" | "company" | "email" | "location" | "inquiry" | "description" | "consent" | "generic", string>
>;

const empty = {
  name: "",
  company: "",
  email: "",
  location: "",
  inquiry: "" as InquiryKey | "",
  description: "",
  timing: "",
  consent: false,
  website: "",
};

export function ContactForm({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).contact;
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);

  function update<K extends keyof typeof empty>(key: K, value: (typeof empty)[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined, generic: undefined }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, locale }),
      });
      const data = (await response.json()) as { ok?: boolean; errors?: Partial<Record<keyof FieldErrors, string>> };
      if (!response.ok || !data.ok) {
        const next: FieldErrors = {};
        for (const key of Object.keys(data.errors ?? {}) as (keyof FieldErrors)[]) {
          next[key] = key === "generic" ? copy.errors.generic : copy.errors[key];
        }
        setErrors(Object.keys(next).length > 0 ? next : { generic: copy.errors.generic });
        return;
      }
      setDone(true);
    } catch {
      setErrors({ generic: copy.errors.generic });
    } finally {
      setPending(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm sm:p-8" role="status">
        <h2 className="font-serif text-2xl text-brand-dark-blue">{copy.successTitle}</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600">{copy.successBody}</p>
        <a
          href={`mailto:${profile.inquiryEmail}`}
          className="mt-6 inline-flex rounded-full bg-brand-light-blue px-5 py-2.5 text-xs font-semibold text-white hover:bg-brand-dark-blue"
        >
          {copy.successDirect}
        </a>
        <button
          type="button"
          className="mt-4 block w-full text-xs font-semibold text-brand-slate-blue hover:text-brand-dark-blue"
          onClick={() => {
            setValues(empty);
            setDone(false);
          }}
        >
          {copy.another}
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-brand-charcoal outline-none transition-colors focus:border-brand-slate-blue";
  const labelClass = "mb-1.5 block text-xs font-semibold tracking-wider text-brand-slate-blue uppercase";

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label={copy.fields.name} error={errors.name} className={labelClass}>
          <input
            className={fieldClass}
            value={values.name}
            placeholder={copy.placeholders.name}
            autoComplete="name"
            onChange={(event) => update("name", event.target.value)}
          />
        </Field>
        <Field label={copy.fields.company} error={errors.company} className={labelClass}>
          <input
            className={fieldClass}
            value={values.company}
            placeholder={copy.placeholders.company}
            autoComplete="organization"
            onChange={(event) => update("company", event.target.value)}
          />
        </Field>
        <Field label={copy.fields.email} error={errors.email} className={labelClass}>
          <input
            className={fieldClass}
            type="email"
            value={values.email}
            placeholder={copy.placeholders.email}
            autoComplete="email"
            onChange={(event) => update("email", event.target.value)}
          />
        </Field>
        <Field label={copy.fields.location} error={errors.location} className={labelClass}>
          <input
            className={fieldClass}
            value={values.location}
            placeholder={copy.placeholders.location}
            autoComplete="country-name"
            onChange={(event) => update("location", event.target.value)}
          />
        </Field>
        <Field label={copy.fields.inquiry} error={errors.inquiry} className={`${labelClass} sm:col-span-2`}>
          <select
            className={fieldClass}
            value={values.inquiry}
            onChange={(event) => update("inquiry", event.target.value as InquiryKey)}
          >
            <option value="">{copy.fields.inquiry}</option>
            {copy.inquiryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label={copy.fields.description} error={errors.description} className={`${labelClass} sm:col-span-2`}>
          <textarea
            className={`${fieldClass} min-h-32 resize-y`}
            value={values.description}
            placeholder={copy.placeholders.description}
            onChange={(event) => update("description", event.target.value)}
          />
        </Field>
        <Field label={copy.fields.timing} className={`${labelClass} sm:col-span-2`}>
          <input
            className={fieldClass}
            value={values.timing}
            placeholder={copy.placeholders.timing}
            onChange={(event) => update("timing", event.target.value)}
          />
        </Field>
      </div>

      <label className="mt-4 flex items-start gap-3 text-sm text-gray-700">
        <input
          type="checkbox"
          checked={values.consent}
          onChange={(event) => update("consent", event.target.checked)}
          className="mt-1 h-4 w-4 accent-brand-light-blue"
        />
        <span>{copy.fields.consent}</span>
      </label>
      {errors.consent ? <p className="mt-1 text-xs text-red-800">{errors.consent}</p> : null}

      <div className="absolute -left-[9999px] h-0 overflow-hidden" aria-hidden>
        <label>
          Website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(event) => update("website", event.target.value)}
          />
        </label>
      </div>

      {errors.generic ? (
        <p className="mt-4 text-sm text-red-800" role="alert">
          {errors.generic}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 rounded-full bg-brand-light-blue px-5 py-2.5 text-xs font-semibold text-white shadow-md transition-all hover:bg-brand-dark-blue disabled:opacity-60"
      >
        {pending ? copy.sending : copy.submit}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <label className={className.includes("col-span") ? className : undefined}>
      <span className={className.replace(" sm:col-span-2", "")}>{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs font-medium normal-case text-red-800">{error}</span> : null}
    </label>
  );
}
