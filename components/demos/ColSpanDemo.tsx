"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";

const SPAN_OPTIONS = [1, 2, 3, 4] as const;

export function ColSpanDemo() {
  const [span1, setSpan1] = useState<number>(1);
  const [span2, setSpan2] = useState<number>(2);
  const [span3, setSpan3] = useState<number>(1);

  const code = `<div class="grid grid-cols-4 gap-4">
  <div class="col-span-${span1} rounded-lg bg-amber-500/20 p-4">1 (col-span-${span1})</div>
  <div class="col-span-${span2} rounded-lg bg-violet-500/20 p-4">2 (col-span-${span2})</div>
  <div class="col-span-${span3} rounded-lg bg-emerald-500/20 p-4">3 (col-span-${span3})</div>
</div>`;

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/50">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Col-span por elemento
        </h3>
        <div className="flex flex-wrap gap-6">
          {[
            { label: "Elemento 1", value: span1, setter: setSpan1 },
            { label: "Elemento 2", value: span2, setter: setSpan2 },
            { label: "Elemento 3", value: span3, setter: setSpan3 },
          ].map(({ label, value, setter }) => (
            <div key={label}>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                {label}
              </label>
              <div className="flex gap-2">
                {SPAN_OPTIONS.map((n) => (
                  <button
                    key={n}
                    onClick={() => setter(n)}
                    className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                      value === n
                        ? "bg-violet-500 text-white"
                        : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                    }`}
                  >
                    col-span-{n}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Resultado (grid de 4 columnas)
        </h3>
        <div className="grid grid-cols-4 gap-4 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-4 dark:border-slate-600 dark:bg-slate-800/30">
          <div
            className={`rounded-lg bg-amber-500/20 p-4 text-center font-medium ${
              span1 === 1 ? "col-span-1" : span1 === 2 ? "col-span-2" : span1 === 3 ? "col-span-3" : "col-span-4"
            }`}
          >
            1
          </div>
          <div
            className={`rounded-lg bg-violet-500/20 p-4 text-center font-medium ${
              span2 === 1 ? "col-span-1" : span2 === 2 ? "col-span-2" : span2 === 3 ? "col-span-3" : "col-span-4"
            }`}
          >
            2
          </div>
          <div
            className={`rounded-lg bg-emerald-500/20 p-4 text-center font-medium ${
              span3 === 1 ? "col-span-1" : span3 === 2 ? "col-span-2" : span3 === 3 ? "col-span-3" : "col-span-4"
            }`}
          >
            3
          </div>
        </div>
      </div>

      <CodeBlock title="Código generado" code={code} />
    </div>
  );
}
