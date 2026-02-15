import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import {
  ResponsiveBreakpointsDemo,
  ResponsiveLayoutDemo,
  ResponsiveVisibilityDemo,
} from "@/components/demos";
import { getResponsivePage, responsiveContent } from "@/lib/content";

const DEMOS: Record<string, React.ComponentType> = {
  breakpoints: ResponsiveBreakpointsDemo,
  "responsive-layout": ResponsiveLayoutDemo,
  visibility: ResponsiveVisibilityDemo,
};

export async function generateStaticParams() {
  return responsiveContent.pages.map((p) => ({ slug: p.slug }));
}

export default async function ResponsiveSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getResponsivePage(slug as Parameters<typeof getResponsivePage>[0]);
  if (!page) notFound();

  const Demo = DEMOS[slug];
  if (!Demo) notFound();

  return (
    <PageShell
      title={page.title}
      description={page.description}
      classes={page.classes}
    >
      <Demo />
    </PageShell>
  );
}
