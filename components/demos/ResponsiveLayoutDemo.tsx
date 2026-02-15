"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";

const VIEWPORTS = [
  { id: "mobile", width: 380, label: "Móvil" },
  { id: "tablet", width: 768, label: "Tablet" },
  { id: "desktop", width: 1200, label: "Desktop" },
] as const;

export function ResponsiveLayoutDemo() {
  const [viewport, setViewport] = useState<(typeof VIEWPORTS)[number]>(VIEWPORTS[0]);
  const [layout, setLayout] = useState<"grid" | "flex">("grid");

  const code =
    layout === "grid"
      ? `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="rounded-lg bg-violet-500/20 p-4">1</div>
  <div class="rounded-lg bg-amber-500/20 p-4">2</div>
  <div class="rounded-lg bg-emerald-500/20 p-4">3</div>
</div>`
      : `<div class="flex flex-col md:flex-row gap-4">
  <div class="rounded-lg bg-violet-500/20 p-4 flex-1">1</div>
  <div class="rounded-lg bg-amber-500/20 p-4 flex-1">2</div>
  <div class="rounded-lg bg-emerald-500/20 p-4 flex-1">3</div>
</div>`;

  const isMd = viewport.width >= 768;
  const isLg = viewport.width >= 1024;

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/50">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Tipo de layout y ancho simulado
        </h3>
        <div className="flex flex-wrap gap-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Viewport
            </label>
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
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Layout
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setLayout("grid")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  layout === "grid" ? "bg-violet-500 text-white" : "bg-slate-100 dark:bg-slate-800"
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setLayout("flex")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  layout === "flex" ? "bg-violet-500 text-white" : "bg-slate-100 dark:bg-slate-800"
                }`}
              >
                Flex
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Resultado ({viewport.width}px →{" "}
          {!isMd ? "1 columna" : !isLg ? "2 columnas" : "3 columnas"}
          {layout === "flex" && (isMd ? " en fila" : " en columna")})
        </h3>
        <div
          className="overflow-hidden rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 dark:border-slate-600 dark:bg-slate-800/30"
          style={{ maxWidth: viewport.width }}
        >
          {layout === "grid" ? (
            <div
              className={`grid gap-4 p-4 ${
                !isMd ? "grid-cols-1" : !isLg ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              <div className="rounded-lg bg-violet-500/20 p-4 text-center font-medium">1</div>
              <div className="rounded-lg bg-amber-500/20 p-4 text-center font-medium">2</div>
              <div className="rounded-lg bg-emerald-500/20 p-4 text-center font-medium">3</div>
            </div>
          ) : (
            <div
              className={`flex gap-4 p-4 ${
                isMd ? "flex-row" : "flex-col"
              }`}
            >
              <div className="flex-1 rounded-lg bg-violet-500/20 p-4 text-center font-medium">1</div>
              <div className="flex-1 rounded-lg bg-amber-500/20 p-4 text-center font-medium">2</div>
              <div className="flex-1 rounded-lg bg-emerald-500/20 p-4 text-center font-medium">3</div>
            </div>
          )}
        </div>
      </div>

      <CodeBlock title="Código generado" code={code} />
    </div>
  );
}
