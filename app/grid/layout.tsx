import Link from "next/link";
import { gridContent } from "@/lib/content";

export default function GridLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full flex flex-col">
      <div className="border-b border-slate-200 bg-white/95 px-8 py-4 dark:border-slate-800 dark:bg-slate-900/95">
        <Link
          href="/grid"
          className="text-sm font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400"
        >
          ← {gridContent.title}
        </Link>
      </div>
      {children}
    </div>
  );
}
