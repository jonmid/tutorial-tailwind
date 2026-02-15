"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";

const ITEMS = [
  { id: "a", label: "A", defaultOrder: 1 },
  { id: "b", label: "B", defaultOrder: 2 },
  { id: "c", label: "C", defaultOrder: 3 },
];

export function OrderDemo() {
  const [orders, setOrders] = useState<Record<string, number>>({
    a: 1,
    b: 2,
    c: 3,
  });

  const updateOrder = (id: string, order: number) => {
    setOrders((prev) => ({ ...prev, [id]: order }));
  };

  const code = `<div class="flex flex-row gap-4">
  <div class="order-${orders.a} rounded-lg bg-violet-500/20 p-4">A</div>
  <div class="order-${orders.b} rounded-lg bg-amber-500/20 p-4">B</div>
  <div class="order-${orders.c} rounded-lg bg-emerald-500/20 p-4">C</div>
</div>`;

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/50">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          order por elemento (1, 2, 3)
        </h3>
        <div className="flex flex-wrap gap-6">
          {ITEMS.map((item) => (
            <div key={item.id}>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                {item.label}
              </label>
              <div className="flex gap-2">
                {[1, 2, 3].map((n) => (
                  <button
                    key={n}
                    onClick={() => updateOrder(item.id, n)}
                    className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                      orders[item.id] === n ? "bg-violet-500 text-white" : "bg-slate-100 dark:bg-slate-800"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Resultado
        </h3>
        <div className="flex flex-row gap-4 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-4 dark:border-slate-600 dark:bg-slate-800/30">
          <div
            className={`rounded-lg bg-violet-500/20 p-4 font-medium ${
              orders.a === 1 ? "order-1" : orders.a === 2 ? "order-2" : "order-3"
            }`}
          >
            A
          </div>
          <div
            className={`rounded-lg bg-amber-500/20 p-4 font-medium ${
              orders.b === 1 ? "order-1" : orders.b === 2 ? "order-2" : "order-3"
            }`}
          >
            B
          </div>
          <div
            className={`rounded-lg bg-emerald-500/20 p-4 font-medium ${
              orders.c === 1 ? "order-1" : orders.c === 2 ? "order-2" : "order-3"
            }`}
          >
            C
          </div>
        </div>
      </div>

      <CodeBlock title="Código generado" code={code} />
    </div>
  );
}
