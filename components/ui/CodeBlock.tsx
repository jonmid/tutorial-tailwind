"use client";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = "html", title }: CodeBlockProps) {
  return (
    <div className="rounded-xl border border-slate-200/80 bg-slate-900 shadow-lg overflow-hidden dark:border-slate-700">
      {title && (
        <div className="border-b border-slate-700/80 bg-slate-800/80 px-4 py-2 text-sm font-medium text-slate-300">
          {title}
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-sm">
        <code className="font-mono text-slate-100">{code}</code>
      </pre>
    </div>
  );
}
