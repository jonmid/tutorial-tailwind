"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";

const COLS_OPTIONS = [1, 2, 3, 4] as const;
const GAP_OPTIONS = [0, 2, 4, 6, 8] as const;

export function GridColsDemo() {
  const [cols, setCols] = useState<number>(3);
  const [gap, setGap] = useState<number>(4);

  const gridClass = `grid grid-cols-${cols} ${gap > 0 ? `gap-${gap}` : ""}`.trim();
  const code = `<div class="${gridClass}">
  ${Array.from({ length: 6 }, (_, i) => `  <div class="rounded-lg bg-violet-500/20 p-4 text-center">${i + 1}</div>`).join("\n")}
</div>`;

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/50">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Controles
        </h3>
        <div className="flex flex-wrap gap-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Columnas (grid-cols-?)
            </label>
            <div className="flex gap-2">
              {COLS_OPTIONS.map((n) => (
                <button
                  key={n}
                  onClick={() => setCols(n)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    cols === n
                      ? "bg-violet-500 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Espacio (gap-?)
            </label>
            <div className="flex gap-2">
              {GAP_OPTIONS.map((n) => (
                <button
                  key={n}
                  onClick={() => setGap(n)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    gap === n
                      ? "bg-violet-500 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
                  }`}
                >
                  {n || "0"}
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
        <div
          className={`grid rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-4 dark:border-slate-600 dark:bg-slate-800/30 ${
            cols === 1 ? "grid-cols-1" : cols === 2 ? "grid-cols-2" : cols === 3 ? "grid-cols-3" : "grid-cols-4"
          } ${gap >= 2 ? `gap-${gap}` : gap === 0 ? "gap-0" : "gap-2"}`}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="rounded-lg bg-violet-500/20 p-4 text-center font-medium text-violet-800 dark:bg-violet-500/30 dark:text-violet-200"
            >
              {i}
            </div>
          ))}
        </div>
      </div>

      <div>
        <CodeBlock title="Código generado" code={code} />
      </div>
    </div>
  );
}
