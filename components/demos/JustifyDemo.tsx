"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";

const JUSTIFY_OPTIONS = [
  "justify-start",
  "justify-end",
  "justify-center",
  "justify-between",
  "justify-around",
  "justify-evenly",
] as const;

export function JustifyDemo() {
  const [justify, setJustify] = useState<string>("justify-center");

  const code = `<div class="flex flex-row ${justify} gap-2 h-32 border border-slate-200">
  <div class="rounded bg-violet-500/20 p-2">1</div>
  <div class="rounded bg-amber-500/20 p-2">2</div>
  <div class="rounded bg-emerald-500/20 p-2">3</div>
</div>`;

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/50">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          justify-content (eje principal)
        </h3>
        <div className="flex flex-wrap gap-2">
          {JUSTIFY_OPTIONS.map((opt) => (
            <button
              key={opt}
              onClick={() => setJustify(opt)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                justify === opt ? "bg-violet-500 text-white" : "bg-slate-100 dark:bg-slate-800"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Resultado
        </h3>
        <div
          className={`flex h-32 flex-row gap-2 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-4 dark:border-slate-600 dark:bg-slate-800/30 ${
            justify === "justify-start"
              ? "justify-start"
              : justify === "justify-end"
                ? "justify-end"
                : justify === "justify-center"
                  ? "justify-center"
                  : justify === "justify-between"
                    ? "justify-between"
                    : justify === "justify-around"
                      ? "justify-around"
                      : "justify-evenly"
          }`}
        >
          <div className="rounded bg-violet-500/20 p-2 font-medium">1</div>
          <div className="rounded bg-amber-500/20 p-2 font-medium">2</div>
          <div className="rounded bg-emerald-500/20 p-2 font-medium">3</div>
        </div>
      </div>

      <CodeBlock title="Código generado" code={code} />
    </div>
  );
}
