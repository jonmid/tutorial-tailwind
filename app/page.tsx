import Link from "next/link";
import { homeContent } from "@/lib/content";

const gradientCards = [
  "from-violet-500/20 to-fuchsia-500/20",
  "from-amber-500/20 to-orange-500/20",
  "from-emerald-500/20 to-teal-500/20",
  "from-rose-500/20 to-pink-500/20",
  "from-cyan-500/20 to-blue-500/20",
  "from-indigo-500/20 to-violet-500/20",
  "from-orange-500/20 to-amber-500/20",
];

export default function Home() {
  return (
    <div className="min-h-full">
      <div className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-violet-500/10 via-white to-fuchsia-500/10 dark:border-slate-800 dark:from-violet-500/20 dark:via-slate-900 dark:to-fuchsia-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.15),transparent)]" />
        <div className="relative px-8 py-16 sm:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
            {homeContent.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            {homeContent.subtitle}
          </p>
          <p className="mt-2 max-w-2xl text-slate-500 dark:text-slate-500">
            {homeContent.description}
          </p>
        </div>
      </div>

      <div className="grid gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3">
        {homeContent.sections.map((section, i) => (
          <Link
            key={section.id}
            href={section.href}
            className={`group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/10 dark:border-slate-700/80 dark:bg-slate-900/50 dark:hover:border-violet-500/50 dark:hover:shadow-violet-500/5 ${gradientCards[i % gradientCards.length]} bg-gradient-to-br`}
          >
            <div className="absolute inset-0 rounded-2xl bg-white/80 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-slate-900/80" />
            <div className="relative">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                {section.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {section.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-violet-600 dark:text-violet-400">
                Explorar
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
