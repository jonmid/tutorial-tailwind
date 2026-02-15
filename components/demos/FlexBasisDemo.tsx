"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";

const BASIS_OPTIONS = [
  { value: "basis-0", label: "0" },
  { value: "basis-1/4", label: "1/4" },
  { value: "basis-1/3", label: "1/3" },
  { value: "basis-1/2", label: "1/2" },
  { value: "basis-auto", label: "auto" },
];

export function FlexBasisDemo() {
  const [basis, setBasis] = useState<string>("basis-1/3");

  const code = `<div class="flex flex-row gap-4">
  <div class="${basis} rounded-lg bg-violet-500/20 p-4">1</div>
  <div class="${basis} rounded-lg bg-amber-500/20 p-4">2</div>
  <div class="${basis} rounded-lg bg-emerald-500/20 p-4">3</div>
</div>`;

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/50">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          basis-? (tamaño base)
        </h3>
        <div className="flex flex-wrap gap-2">
          {BASIS_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setBasis(opt.value)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                basis === opt.value ? "bg-violet-500 text-white" : "bg-slate-100 dark:bg-slate-800"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Resultado (flex flex-row)
        </h3>
        <div className="flex flex-row gap-4 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-4 dark:border-slate-600 dark:bg-slate-800/30">
          <div
            className={`rounded-lg p-4 font-medium ${
              basis === "basis-0"
                ? "basis-0"
                : basis === "basis-1/4"
                  ? "basis-1/4"
                  : basis === "basis-1/3"
                    ? "basis-1/3"
                    : basis === "basis-1/2"
                      ? "basis-1/2"
                      : "basis-auto"
            } bg-violet-500/20`}
          >
            1
          </div>
          <div
            className={`rounded-lg p-4 font-medium ${
              basis === "basis-0"
                ? "basis-0"
                : basis === "basis-1/4"
                  ? "basis-1/4"
                  : basis === "basis-1/3"
                    ? "basis-1/3"
                    : basis === "basis-1/2"
                      ? "basis-1/2"
                      : "basis-auto"
            } bg-amber-500/20`}
          >
            2
          </div>
          <div
            className={`rounded-lg p-4 font-medium ${
              basis === "basis-0"
                ? "basis-0"
                : basis === "basis-1/4"
                  ? "basis-1/4"
                  : basis === "basis-1/3"
                    ? "basis-1/3"
                    : basis === "basis-1/2"
                      ? "basis-1/2"
                      : "basis-auto"
            } bg-emerald-500/20`}
          >
            3
          </div>
        </div>
      </div>

      <CodeBlock title="Código generado" code={code} />
    </div>
  );
}
