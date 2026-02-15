"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import {
  siteConfig,
  gridContent,
  flexContent,
  positioningContent,
  responsiveContent,
  spacingContent,
  colorsContent,
  typographyContent,
} from "@/lib/content";

const sectionLinks: {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}[] = [
  { href: "/", label: siteConfig.nav.home },
  {
    href: "/grid",
    label: siteConfig.nav.grid,
    children: gridContent.pages.map((p) => ({ href: `/grid/${p.slug}`, label: p.title })),
  },
  {
    href: "/flex",
    label: siteConfig.nav.flex,
    children: flexContent.pages.map((p) => ({ href: `/flex/${p.slug}`, label: p.title })),
  },
  {
    href: "/positioning",
    label: siteConfig.nav.positioning,
    children: positioningContent.pages.map((p) => ({
      href: `/positioning/${p.slug}`,
      label: p.title,
    })),
  },
  {
    href: "/responsive",
    label: siteConfig.nav.responsive,
    children: responsiveContent.pages.map((p) => ({
      href: `/responsive/${p.slug}`,
      label: p.title,
    })),
  },
  {
    href: "/spacing",
    label: siteConfig.nav.spacing,
    children: spacingContent.pages.map((p) => ({ href: `/spacing/${p.slug}`, label: p.title })),
  },
  {
    href: "/colors",
    label: siteConfig.nav.colors,
    children: colorsContent.pages.map((p) => ({ href: `/colors/${p.slug}`, label: p.title })),
  },
  {
    href: "/typography",
    label: siteConfig.nav.typography,
    children: typographyContent.pages.map((p) => ({
      href: `/typography/${p.slug}`,
      label: p.title,
    })),
  },
];

function NavItem({
  href,
  label,
  children: subLinks,
}: {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}) {
  const pathname = usePathname();
  const isSectionActive =
    subLinks && (pathname === href || subLinks.some((c) => pathname === c.href));

  return (
    <div className="space-y-0.5">
      <Link
        href={href}
        className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
          pathname === href
            ? "bg-violet-500/15 text-violet-700 dark:text-violet-300"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
        }`}
      >
        {label}
      </Link>
      {subLinks && isSectionActive && (
        <ul className="ml-3 space-y-0.5 border-l border-slate-200 pl-2 dark:border-slate-700">
          {subLinks.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className={`block rounded py-1.5 pl-2 text-sm transition-colors ${
                  pathname === child.href
                    ? "border-l-2 border-violet-500 bg-violet-500/10 font-medium text-violet-700 dark:text-violet-300 -ml-px pl-[calc(0.5rem+2px)]"
                    : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const THEME_KEY = "theme";

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useLayoutEffect(() => {
    const isDark =
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", next === "dark");
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (_) {}
    }
  };

  return { theme, toggleTheme };
}

export function NavSidebar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-900/80">
      <div className="flex h-14 items-center justify-between gap-2 border-b border-slate-200 px-4 dark:border-slate-800">
        <span className="text-lg font-bold tracking-tight text-violet-600 dark:text-violet-400">
          {siteConfig.name}
        </span>
        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          title={theme === "dark" ? "Modo claro" : "Modo oscuro"}
        >
          {theme === "dark" ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {sectionLinks.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            label={item.label}
            children={item.children}
          />
        ))}
      </nav>
    </aside>
  );
}
