"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";

export function FlexWrapDemo() {
  const [wrap, setWrap] = useState(true);

  const wrapClass = wrap ? "flex-wrap" : "flex-nowrap";
  const code = `<div class="flex flex-row ${wrapClass} gap-4 max-w-md">
  ${Array.from({ length: 8 }, (_, i) => `  <div class="rounded-lg bg-violet-500/20 p-4 min-w-[80px]">${i + 1}</div>`).join("\n")}
</div>`;

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/50">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Ajuste al ancho del contenedor
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => setWrap(true)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              wrap ? "bg-violet-500 text-white" : "bg-slate-100 dark:bg-slate-800"
            }`}
          >
            flex-wrap
          </button>
          <button
            onClick={() => setWrap(false)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              !wrap ? "bg-violet-500 text-white" : "bg-slate-100 dark:bg-slate-800"
            }`}
          >
            flex-nowrap
          </button>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Resultado (contenedor con max-width)
        </h3>
        <div
          className={`flex max-w-md flex-row gap-4 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-4 dark:border-slate-600 dark:bg-slate-800/30 ${
            wrap ? "flex-wrap" : "flex-nowrap"
          }`}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="min-w-[80px] rounded-lg bg-violet-500/20 p-4 text-center font-medium"
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
