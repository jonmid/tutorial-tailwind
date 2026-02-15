"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";

const PLACE_OPTIONS = [
  "place-content-center",
  "place-content-start",
  "place-content-end",
  "place-content-between",
  "place-content-around",
  "place-content-stretch",
] as const;

export function PlaceDemo() {
  const [place, setPlace] = useState<string>("place-content-center");

  const code = `<div class="grid grid-cols-2 grid-rows-2 ${place} h-48 gap-2 border border-slate-200">
  <div class="rounded bg-violet-500/20 p-2">1</div>
  <div class="rounded bg-amber-500/20 p-2">2</div>
  <div class="rounded bg-emerald-500/20 p-2">3</div>
  <div class="rounded bg-rose-500/20 p-2">4</div>
</div>`;

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/50">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          place-content (justify + align)
        </h3>
        <div className="flex flex-wrap gap-2">
          {PLACE_OPTIONS.map((opt) => (
            <button
              key={opt}
              onClick={() => setPlace(opt)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                place === opt ? "bg-violet-500 text-white" : "bg-slate-100 dark:bg-slate-800"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Resultado (grid 2x2)
        </h3>
        <div
          className={`grid h-48 grid-cols-2 grid-rows-2 gap-2 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-4 dark:border-slate-600 dark:bg-slate-800/30 ${
            place === "place-content-center"
              ? "place-content-center"
              : place === "place-content-start"
                ? "place-content-start"
                : place === "place-content-end"
                  ? "place-content-end"
                  : place === "place-content-between"
                    ? "place-content-between"
                    : place === "place-content-around"
                      ? "place-content-around"
                      : "place-content-stretch"
          }`}
        >
          <div className="rounded bg-violet-500/20 p-2 font-medium">1</div>
          <div className="rounded bg-amber-500/20 p-2 font-medium">2</div>
          <div className="rounded bg-emerald-500/20 p-2 font-medium">3</div>
          <div className="rounded bg-rose-500/20 p-2 font-medium">4</div>
        </div>
      </div>

      <CodeBlock title="Código generado" code={code} />
    </div>
  );
}
