"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";

const ALIGN_OPTIONS = [
  "items-start",
  "items-end",
  "items-center",
  "items-baseline",
  "items-stretch",
] as const;

export function AlignDemo() {
  const [align, setAlign] = useState<string>("items-center");

  const code = `<div class="flex flex-row ${align} gap-2 h-32 border border-slate-200">
  <div class="rounded bg-violet-500/20 p-2">A</div>
  <div class="rounded bg-amber-500/20 py-6 p-2">B</div>
  <div class="rounded bg-emerald-500/20 p-2">C</div>
</div>`;

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/50">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          align-items (eje transversal)
        </h3>
        <div className="flex flex-wrap gap-2">
          {ALIGN_OPTIONS.map((opt) => (
            <button
              key={opt}
              onClick={() => setAlign(opt)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                align === opt ? "bg-violet-500 text-white" : "bg-slate-100 dark:bg-slate-800"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Resultado (alturas distintas para ver alineación)
        </h3>
        <div
          className={`flex h-32 flex-row gap-2 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-4 dark:border-slate-600 dark:bg-slate-800/30 ${
            align === "items-start"
              ? "items-start"
              : align === "items-end"
                ? "items-end"
                : align === "items-center"
                  ? "items-center"
                  : align === "items-baseline"
                    ? "items-baseline"
                    : "items-stretch"
          }`}
        >
          <div className="rounded bg-violet-500/20 p-2 font-medium">A</div>
          <div className="rounded bg-amber-500/20 py-6 p-2 font-medium">B</div>
          <div className="rounded bg-emerald-500/20 p-2 font-medium">C</div>
        </div>
      </div>

      <CodeBlock title="Código generado" code={code} />
    </div>
  );
}
