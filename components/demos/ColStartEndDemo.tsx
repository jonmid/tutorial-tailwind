"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";

export function ColStartEndDemo() {
  const [start, setStart] = useState<number>(1);
  const [end, setEnd] = useState<number>(3);

  const code = `<div class="grid grid-cols-4 gap-4">
  <div class="col-start-${start} col-end-${end} rounded-lg bg-violet-500/20 p-4">
    col-start-${start} col-end-${end}
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/50">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Posición en la grid (líneas)
        </h3>
        <div className="flex flex-wrap gap-8">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              col-start-?
            </label>
            <select
              value={start}
              onChange={(e) => setStart(Number(e.target.value))}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              col-end-?
            </label>
            <select
              value={end}
              onChange={(e) => setEnd(Number(e.target.value))}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Resultado (grid de 4 columnas, líneas 1–5)
        </h3>
        <div className="grid grid-cols-4 gap-4 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-4 dark:border-slate-600 dark:bg-slate-800/30">
          <div
            className="rounded-lg bg-violet-500/30 p-4 text-center font-medium dark:bg-violet-500/40"
            style={{
              gridColumnStart: start,
              gridColumnEnd: end,
            }}
          >
            col-start-{start} col-end-{end}
          </div>
        </div>
      </div>

      <CodeBlock title="Código generado" code={code} />
    </div>
  );
}
