"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";

const SIZE_OPTIONS = ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl"] as const;
const WEIGHT_OPTIONS = ["font-normal", "font-medium", "font-semibold", "font-bold"] as const;
const ALIGN_OPTIONS = ["text-left", "text-center", "text-right"] as const;

export function TypographyDemo() {
  const [size, setSize] = useState<string>("text-base");
  const [weight, setWeight] = useState<string>("font-normal");
  const [align, setAlign] = useState<string>("text-left");

  const code = `<p class="${size} ${weight} ${align}">
  El veloz murciélago hindú comía feliz cardillo y kiwi.
</p>`;

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/50">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Controles
        </h3>
        <div className="flex flex-wrap gap-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Tamaño (text-?)
            </label>
            <div className="flex flex-wrap gap-2">
              {SIZE_OPTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                    size === s ? "bg-violet-500 text-white" : "bg-slate-100 dark:bg-slate-800"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Peso (font-?)
            </label>
            <div className="flex flex-wrap gap-2">
              {WEIGHT_OPTIONS.map((w) => (
                <button
                  key={w}
                  onClick={() => setWeight(w)}
                  className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                    weight === w ? "bg-violet-500 text-white" : "bg-slate-100 dark:bg-slate-800"
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Alineación
            </label>
            <div className="flex gap-2">
              {ALIGN_OPTIONS.map((a) => (
                <button
                  key={a}
                  onClick={() => setAlign(a)}
                  className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                    align === a ? "bg-violet-500 text-white" : "bg-slate-100 dark:bg-slate-800"
                  }`}
                >
                  {a.replace("text-", "")}
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
        <p
          className={`rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-6 dark:border-slate-600 dark:bg-slate-800/30 ${
            size === "text-sm"
              ? "text-sm"
              : size === "text-base"
                ? "text-base"
                : size === "text-lg"
                  ? "text-lg"
                  : size === "text-xl"
                    ? "text-xl"
                    : "text-2xl"
          } ${
            weight === "font-normal"
              ? "font-normal"
              : weight === "font-medium"
                ? "font-medium"
                : weight === "font-semibold"
                  ? "font-semibold"
                  : "font-bold"
          } ${
            align === "text-left" ? "text-left" : align === "text-center" ? "text-center" : "text-right"
          }`}
        >
          El veloz murciélago hindú comía feliz cardillo y kiwi.
        </p>
      </div>

      <CodeBlock title="Código generado" code={code} />
    </div>
  );
}
