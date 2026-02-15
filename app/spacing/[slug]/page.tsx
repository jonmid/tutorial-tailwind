import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { SpacingDemo } from "@/components/demos";
import { spacingContent } from "@/lib/content";

const DEMOS: Record<string, React.ComponentType> = {
  "padding-margin": SpacingDemo,
};

export async function generateStaticParams() {
  return spacingContent.pages.map((p) => ({ slug: p.slug }));
}

export default async function SpacingSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = spacingContent.pages.find((p) => p.slug === slug);
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
