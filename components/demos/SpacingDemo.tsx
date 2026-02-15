"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";

const PADDING_OPTIONS = [0, 2, 4, 6, 8] as const;
const MARGIN_OPTIONS = [0, 2, 4, 6, "auto"] as const;

export function SpacingDemo() {
  const [padding, setPadding] = useState<number>(4);
  const [margin, setMargin] = useState<number | "auto">(4);

  const pClass = padding === 0 ? "p-0" : `p-${padding}`;
  const mClass = margin === "auto" ? "mx-auto" : margin === 0 ? "m-0" : `m-${margin}`;
  const code = `<div class="${mClass} ${pClass} rounded-lg border-2 border-violet-500 bg-violet-500/10 max-w-xs">
  Contenido con padding (${pClass}) y margin (${mClass})
</div>`;

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/50">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Controles
        </h3>
        <div className="flex flex-wrap gap-8">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Padding (p-?)
            </label>
            <div className="flex gap-2">
              {PADDING_OPTIONS.map((n) => (
                <button
                  key={n}
                  onClick={() => setPadding(n)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    padding === n ? "bg-violet-500 text-white" : "bg-slate-100 dark:bg-slate-800"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Margin (m-? / mx-auto)
            </label>
            <div className="flex gap-2">
              {(MARGIN_OPTIONS as readonly (number | "auto")[]).map((n) => (
                <button
                  key={String(n)}
                  onClick={() => setMargin(n)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    margin === n ? "bg-violet-500 text-white" : "bg-slate-100 dark:bg-slate-800"
                  }`}
                >
                  {n === "auto" ? "auto" : n}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Resultado
        </h3>
        <div className="rounded-xl border-2 border-dashed border-slate-300 bg-slate-100/50 p-8 dark:border-slate-600 dark:bg-slate-800/30">
          <div
            className={`max-w-xs rounded-lg border-2 border-violet-500 bg-violet-500/10 font-medium ${
              padding === 0 ? "p-0" : padding === 2 ? "p-2" : padding === 4 ? "p-4" : padding === 6 ? "p-6" : "p-8"
            } ${
              margin === "auto"
                ? "mx-auto"
                : margin === 0
                  ? "m-0"
                  : margin === 2
                    ? "m-2"
                    : margin === 4
                      ? "m-4"
                      : margin === 6
                        ? "m-6"
                        : "m-8"
            }`}
          >
            Contenido con padding y margin
          </div>
        </div>
      </div>

      <CodeBlock title="Código generado" code={code} />
    </div>
  );
}
