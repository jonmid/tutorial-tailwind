import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { TypographyDemo } from "@/components/demos";
import { typographyContent } from "@/lib/content";

const DEMOS: Record<string, React.ComponentType> = {
  basics: TypographyDemo,
};

export async function generateStaticParams() {
  return typographyContent.pages.map((p) => ({ slug: p.slug }));
}

export default async function TypographySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = typographyContent.pages.find((p) => p.slug === slug);
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
