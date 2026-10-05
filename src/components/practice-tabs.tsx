"use client";

import { useState } from "react";

type Tab = {
  id: string;
  label: string;
  title: string;
  items: { title: string; body: string }[];
};

export function PracticeTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.id ?? "");

  return (
    <div className="border-t border-gray-100 pt-6">
      <div className="no-print -mx-1 flex snap-x gap-1 overflow-x-auto border-b border-gray-200 px-1">
        {tabs.map((tab) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              aria-selected={selected}
              role="tab"
              className={`border-b-2 px-4 py-3 text-xs font-semibold whitespace-nowrap transition-all sm:text-sm ${
                selected
                  ? "border-brand-light-blue text-brand-dark-blue"
                  : "border-transparent text-gray-500 hover:text-brand-dark-blue"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab) => {
        const selected = tab.id === active;
        return (
          <div
            key={tab.id}
            role="tabpanel"
            className={`tab-pane space-y-4 py-6 ${selected ? "" : "hidden"}`}
          >
            <h3 className="text-base font-bold text-gray-800">{tab.title}</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {tab.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-brand-gold/20 bg-brand-cream p-4"
                >
                  <h4 className="mb-1 text-sm font-semibold text-brand-light-blue">{item.title}</h4>
                  <p className="text-xs leading-relaxed text-gray-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
