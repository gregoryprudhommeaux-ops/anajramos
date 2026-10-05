"use client";

import { useEffect, useState } from "react";

export function CopyButton({
  text,
  label,
  copiedLabel,
  className,
}: {
  text: string;
  label: string;
  copiedLabel: string;
  className?: string;
}) {
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 3000);
    return () => window.clearTimeout(timer);
  }, [toast]);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setToast(`${copiedLabel}: ${text}`);
    } catch {
      const tempInput = document.createElement("input");
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      setToast(`${copiedLabel}: ${text}`);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={onCopy}
        aria-label={label}
        className={className}
      >
        {text}
      </button>
      <div
        role="status"
        className={`no-print fixed right-5 bottom-5 z-50 flex items-center gap-3 rounded-lg bg-brand-dark-blue px-6 py-3 text-white shadow-2xl transition-all duration-500 ${
          toast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-20 opacity-0"
        }`}
      >
        <span className="text-brand-gold">✓</span>
        <span className="text-sm font-medium">{toast}</span>
      </div>
    </>
  );
}
