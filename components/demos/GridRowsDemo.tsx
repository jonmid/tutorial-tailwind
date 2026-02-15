"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";

const ROWS_OPTIONS = [2, 3, 4] as const;

export function GridRowsDemo() {
  const [rows, setRows] = useState<number>(3);
  const [flowCol, setFlowCol] = useState<boolean>(true);

  const flowClass = flowCol ? "grid-flow-col" : "";
  const code = `<div class="grid grid-rows-${rows} ${flowClass} gap-4">
  ${Array.from({ length: 6 }, (_, i) => `  <div class="rounded-lg bg-violet-500/20 p-4">${i + 1}</div>`).join("\n")}
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
              Filas (grid-rows-?)
            </label>
            <div className="flex gap-2">
              {ROWS_OPTIONS.map((n) => (
                <button
                  key={n}
                  onClick={() => setRows(n)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    rows === n ? "bg-violet-500 text-white" : "bg-slate-100 dark:bg-slate-800"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Dirección (grid-flow-col)
            </label>
            <button
              onClick={() => setFlowCol(!flowCol)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                flowCol ? "bg-violet-500 text-white" : "bg-slate-100 dark:bg-slate-800"
              }`}
            >
              {flowCol ? "grid-flow-col" : "grid-flow-row (por defecto)"}
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Resultado
        </h3>
        <div
          className={`grid gap-4 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-4 dark:border-slate-600 dark:bg-slate-800/30 ${
            rows === 2 ? "grid-rows-2" : rows === 3 ? "grid-rows-3" : "grid-rows-4"
          } ${flowCol ? "grid-flow-col" : ""}`}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="rounded-lg bg-violet-500/20 p-4 text-center font-medium dark:bg-violet-500/30"
            >
              {i}
            </div>
          ))}
        </div>
      </div>

      <CodeBlock title="Código generado" code={code} />
    </div>
  );
}
