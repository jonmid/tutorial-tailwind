"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";

export function RowSpanDemo() {
  const [spanA, setSpanA] = useState<number>(2);
  const [spanB, setSpanB] = useState<number>(1);

  const code = `<div class="grid grid-cols-3 grid-rows-3 gap-4">
  <div class="row-span-${spanA} col-span-1 rounded-lg bg-violet-500/20 p-4">A (row-span-${spanA})</div>
  <div class="row-span-${spanB} rounded-lg bg-amber-500/20 p-4">B</div>
  <div class="rounded-lg bg-emerald-500/20 p-4">C</div>
  ...
</div>`;

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/50">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          row-span del elemento A
        </h3>
        <div className="flex gap-2">
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              onClick={() => setSpanA(n)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                spanA === n ? "bg-violet-500 text-white" : "bg-slate-100 dark:bg-slate-800"
              }`}
            >
              row-span-{n}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Resultado
        </h3>
        <div className="grid grid-cols-3 grid-rows-3 gap-4 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-4 dark:border-slate-600 dark:bg-slate-800/30">
          <div
            className={`rounded-lg bg-violet-500/20 p-4 text-center font-medium ${
              spanA === 1 ? "row-span-1" : spanA === 2 ? "row-span-2" : "row-span-3"
            } flex items-center justify-center`}
          >
            A
          </div>
          <div className="rounded-lg bg-amber-500/20 p-4 text-center font-medium">B</div>
          <div className="rounded-lg bg-emerald-500/20 p-4 text-center font-medium">C</div>
          <div className="rounded-lg bg-rose-500/20 p-4 text-center font-medium">D</div>
          <div className="rounded-lg bg-cyan-500/20 p-4 text-center font-medium">E</div>
          <div className="rounded-lg bg-orange-500/20 p-4 text-center font-medium">F</div>
        </div>
      </div>

      <CodeBlock title="Código generado" code={code} />
    </div>
  );
}
