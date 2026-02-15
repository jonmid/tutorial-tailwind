import Link from "next/link";
import { positioningContent } from "@/lib/content";

export default function PositioningIndexPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">
        {positioningContent.title}
      </h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        {positioningContent.description}
      </p>
      <div className="mt-6 rounded-xl border border-violet-200 bg-violet-50/50 p-4 dark:border-violet-800 dark:bg-violet-950/30">
        <p className="text-sm text-slate-700 dark:text-slate-300">
          <strong>Justify:</strong> {positioningContent.intro.justify}
        </p>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          <strong>Align:</strong> {positioningContent.intro.align}
        </p>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          <strong>Place:</strong> {positioningContent.intro.place}
        </p>
      </div>
      <ul className="mt-8 space-y-3">
        {positioningContent.pages.map((page) => (
          <li key={page.slug}>
            <Link
              href={`/positioning/${page.slug}`}
              className="block rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-violet-300 hover:bg-violet-50/50 dark:border-slate-700 dark:bg-slate-900/50 dark:hover:border-violet-500/50 dark:hover:bg-violet-500/10"
            >
              <span className="font-medium text-slate-900 dark:text-slate-100">
                {page.title}
              </span>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {page.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
