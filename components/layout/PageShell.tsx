import { ReactNode } from "react";

interface PageShellProps {
  title: string;
  description: string;
  children: ReactNode;
  classes?: readonly { name: string; description: string }[];
}

export function PageShell({ title, description, children, classes }: PageShellProps) {
  return (
    <div className="min-h-full flex flex-col">
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-900/95">
        <div className="px-8 py-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            {title}
          </h1>
          <p className="mt-1 text-slate-600 dark:text-slate-400">{description}</p>
          {classes && classes.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {classes.map((c) => (
                <li
                  key={c.name}
                  className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-mono text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  title={c.description}
                >
                  {c.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
