import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { ColorsDemo } from "@/components/demos";
import { colorsContent } from "@/lib/content";

const DEMOS: Record<string, React.ComponentType> = {
  basics: ColorsDemo,
};

export async function generateStaticParams() {
  return colorsContent.pages.map((p) => ({ slug: p.slug }));
}

export default async function ColorsSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = colorsContent.pages.find((p) => p.slug === slug);
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
