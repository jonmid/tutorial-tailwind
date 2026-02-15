"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";

const VIEWPORTS = [
  { id: "mobile", width: 400, label: "Móvil (< 768px)" },
  { id: "desktop", width: 900, label: "Desktop (≥ 768px)" },
] as const;

export function ResponsiveVisibilityDemo() {
  const [viewport, setViewport] = useState<(typeof VIEWPORTS)[number]>(VIEWPORTS[0]);
  const isMd = viewport.width >= 768;

  const code = `<!-- Solo visible en móvil (oculto desde md) -->
<div class="block md:hidden rounded-lg bg-violet-500/20 p-4">
  Solo móvil
</div>

<!-- Solo visible en desktop (oculto en móvil) -->
<div class="hidden md:block rounded-lg bg-amber-500/20 p-4">
  Solo desktop (md+)
</div>`;

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/50">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Simula viewport móvil o desktop
        </h3>
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
          <strong>hidden md:block</strong> = oculto por defecto, visible desde 768px.{" "}
          <strong>block md:hidden</strong> = visible por defecto, oculto desde 768px.
        </p>
        <div className="flex gap-2">
          {VIEWPORTS.map((v) => (
            <button
              key={v.id}
              onClick={() => setViewport(v)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                viewport.id === v.id
                  ? "bg-violet-500 text-white"
                  : "bg-slate-100 dark:bg-slate-800"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Resultado ({isMd ? "md activo" : "móvil"})
        </h3>
        <div
          className="overflow-hidden rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-4 dark:border-slate-600 dark:bg-slate-800/30"
          style={{ maxWidth: viewport.width }}
        >
          <div className="space-y-3">
            <div
              className={`rounded-lg p-4 font-medium bg-violet-500/20 ${
                isMd ? "hidden" : "block"
              }`}
            >
              Solo móvil <span className="text-xs opacity-80">(block md:hidden)</span>
            </div>
            <div
              className={`rounded-lg p-4 font-medium bg-amber-500/20 ${
                isMd ? "block" : "hidden"
              }`}
            >
              Solo desktop (md+) <span className="text-xs opacity-80">(hidden md:block)</span>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Simulando {viewport.width}px: {isMd ? "md activo → se muestra “Solo desktop”." : "&lt; 768px → se muestra “Solo móvil”."}
          </p>
        </div>
      </div>

      <CodeBlock title="Código generado" code={code} />
    </div>
  );
}
