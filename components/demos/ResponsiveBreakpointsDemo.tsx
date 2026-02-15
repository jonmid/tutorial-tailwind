"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";

const VIEWPORTS = [
  { id: "xs", width: 400, label: "Móvil (400px)", breakpoint: "—" },
  { id: "sm", width: 640, label: "sm (640px)", breakpoint: "sm" },
  { id: "md", width: 768, label: "md (768px)", breakpoint: "md" },
  { id: "lg", width: 1024, label: "lg (1024px)", breakpoint: "lg" },
  { id: "xl", width: 1280, label: "xl (1280px)", breakpoint: "xl" },
  { id: "2xl", width: 1536, label: "2xl (1536px)", breakpoint: "2xl" },
] as const;

export function ResponsiveBreakpointsDemo() {
  const [viewport, setViewport] = useState<(typeof VIEWPORTS)[number]>(VIEWPORTS[0]);

  const code = `<div class="text-sm text-slate-600 md:text-base md:text-violet-600 lg:text-lg lg:text-emerald-600">
  Este texto cambia de tamaño y color según el breakpoint.
</div>
<!-- Breakpoints: sm≥640px, md≥768px, lg≥1024px, xl≥1280px, 2xl≥1536px -->`;

  const activeBreakpoint =
    viewport.width >= 1536
      ? "2xl"
      : viewport.width >= 1280
        ? "xl"
        : viewport.width >= 1024
          ? "lg"
          : viewport.width >= 768
            ? "md"
            : viewport.width >= 640
              ? "sm"
              : "—";

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/50">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Simula el ancho del viewport
        </h3>
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
          Elige un ancho para ver qué breakpoint está activo y cómo se aplican las clases
          responsive (sm:, md:, lg:, etc.).
        </p>
        <div className="flex flex-wrap gap-2">
          {VIEWPORTS.map((v) => (
            <button
              key={v.id}
              onClick={() => setViewport(v)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                viewport.id === v.id
                  ? "bg-violet-500 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Vista previa (ancho: {viewport.width}px) — Breakpoint activo:{" "}
          <span className="text-violet-600 dark:text-violet-400">{activeBreakpoint}</span>
        </h3>
        <div
          className="overflow-hidden rounded-xl border-2 border-dashed border-slate-300 bg-slate-100 dark:border-slate-600 dark:bg-slate-800/50"
          style={{ maxWidth: viewport.width }}
        >
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
            <div
              className={
                viewport.width >= 1536
                  ? "text-xl font-bold text-rose-600"
                  : viewport.width >= 1280
                    ? "text-lg font-semibold text-rose-500"
                    : viewport.width >= 1024
                      ? "text-lg font-semibold text-emerald-600"
                      : viewport.width >= 768
                        ? "text-base font-medium text-violet-600"
                        : viewport.width >= 640
                          ? "text-base text-amber-600"
                          : "text-sm text-slate-600"
              }
            >
              Este texto cambia de tamaño y color según el breakpoint activo.
            </div>
            <p className="mt-2 text-xs text-slate-400">
              Simulando {viewport.width}px → breakpoint activo: {activeBreakpoint}. En producción
              estas clases usarían sm:, md:, lg:, etc.
            </p>
          </div>
        </div>
      </div>

      <CodeBlock title="Código (las clases con prefijo se aplican cuando el viewport ≥ ese breakpoint)" code={code} />
    </div>
  );
}
