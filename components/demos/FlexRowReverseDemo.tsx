"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";

export function FlexRowReverseDemo() {
  const [reverse, setReverse] = useState(false);

  const dirClass = reverse ? "flex-row-reverse" : "flex-row";
  const code = `<div class="flex ${dirClass} gap-4">
  <div class="rounded-lg bg-violet-500/20 p-4">1</div>
  <div class="rounded-lg bg-amber-500/20 p-4">2</div>
  <div class="rounded-lg bg-emerald-500/20 p-4">3</div>
</div>`;

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/50">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Dirección
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => setReverse(false)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              !reverse ? "bg-violet-500 text-white" : "bg-slate-100 dark:bg-slate-800"
            }`}
          >
            flex-row
          </button>
          <button
            onClick={() => setReverse(true)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              reverse ? "bg-violet-500 text-white" : "bg-slate-100 dark:bg-slate-800"
            }`}
          >
            flex-row-reverse
          </button>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Resultado
        </h3>
        <div
          className={`flex gap-4 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-4 dark:border-slate-600 dark:bg-slate-800/30 ${
            reverse ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="rounded-lg bg-violet-500/20 p-4 font-medium">1</div>
          <div className="rounded-lg bg-amber-500/20 p-4 font-medium">2</div>
          <div className="rounded-lg bg-emerald-500/20 p-4 font-medium">3</div>
        </div>
      </div>

      <CodeBlock title="Código generado" code={code} />
    </div>
  );
}
