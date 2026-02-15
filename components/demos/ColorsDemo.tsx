"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";

const COLOR_OPTIONS = [
  "slate",
  "violet",
  "amber",
  "emerald",
  "rose",
  "cyan",
] as const;
const SHADES = [400, 500, 600] as const;

export function ColorsDemo() {
  const [color, setColor] = useState<string>("violet");
  const [shade, setShade] = useState<number>(500);

  const bgClass = `bg-${color}-${shade}`;
  const textClass = `text-${color}-${shade}`;
  const code = `<div class="${bgClass} text-white p-4 rounded-lg">Fondo: ${bgClass}</div>
<div class="${textClass} font-bold">Texto: ${textClass}</div>`;

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/50">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Color y tono
        </h3>
        <div className="flex flex-wrap gap-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Color (bg-? / text-?)
            </label>
            <div className="flex flex-wrap gap-2">
              {COLOR_OPTIONS.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium capitalize text-white transition-opacity ${
                    color === c ? "ring-2 ring-offset-2 ring-violet-500" : ""
                  } ${
                    c === "slate"
                      ? "bg-slate-500"
                      : c === "violet"
                        ? "bg-violet-500"
                        : c === "amber"
                          ? "bg-amber-500"
                          : c === "emerald"
                            ? "bg-emerald-500"
                            : c === "rose"
                              ? "bg-rose-500"
                              : "bg-cyan-500"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Tono (400, 500, 600)
            </label>
            <div className="flex gap-2">
              {SHADES.map((s) => (
                <button
                  key={s}
                  onClick={() => setShade(s)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    shade === s ? "bg-violet-500 text-white" : "bg-slate-100 dark:bg-slate-800"
                  }`}
                >
                  {s}
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
        <div className="flex flex-wrap gap-6">
          <div
            className={`rounded-xl p-6 text-white ${
              color === "slate"
                ? shade === 400
                  ? "bg-slate-400"
                  : shade === 500
                    ? "bg-slate-500"
                    : "bg-slate-600"
                : color === "violet"
                  ? shade === 400
                    ? "bg-violet-400"
                    : shade === 500
                      ? "bg-violet-500"
                      : "bg-violet-600"
                  : color === "amber"
                    ? shade === 400
                      ? "bg-amber-400"
                      : shade === 500
                        ? "bg-amber-500"
                        : "bg-amber-600"
                    : color === "emerald"
                      ? shade === 400
                        ? "bg-emerald-400"
                        : shade === 500
                          ? "bg-emerald-500"
                          : "bg-emerald-600"
                      : color === "rose"
                        ? shade === 400
                          ? "bg-rose-400"
                          : shade === 500
                            ? "bg-rose-500"
                            : "bg-rose-600"
                        : shade === 400
                          ? "bg-cyan-400"
                          : shade === 500
                            ? "bg-cyan-500"
                            : "bg-cyan-600"
            }`}
          >
            bg-{color}-{shade}
          </div>
          <div
            className={`rounded-xl border-2 border-dashed p-6 font-bold ${
              color === "slate"
                ? shade === 400
                  ? "text-slate-400"
                  : shade === 500
                    ? "text-slate-500"
                    : "text-slate-600"
                : color === "violet"
                  ? shade === 400
                    ? "text-violet-400"
                    : shade === 500
                      ? "text-violet-500"
                      : "text-violet-600"
                  : color === "amber"
                    ? shade === 400
                      ? "text-amber-400"
                      : shade === 500
                        ? "text-amber-500"
                        : "text-amber-600"
                    : color === "emerald"
                      ? shade === 400
                        ? "text-emerald-400"
                        : shade === 500
                          ? "text-emerald-500"
                          : "text-emerald-600"
                      : color === "rose"
                        ? shade === 400
                          ? "text-rose-400"
                          : shade === 500
                            ? "text-rose-500"
                            : "text-rose-600"
                        : shade === 400
                          ? "text-cyan-400"
                          : shade === 500
                            ? "text-cyan-500"
                            : "text-cyan-600"
            }`}
          >
            text-{color}-{shade}
          </div>
        </div>
      </div>

      <CodeBlock title="Código generado" code={code} />
    </div>
  );
}
