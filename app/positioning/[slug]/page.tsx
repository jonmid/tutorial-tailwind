import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { JustifyDemo, AlignDemo, PlaceDemo } from "@/components/demos";
import { getPositioningPage, positioningContent } from "@/lib/content";

const DEMOS: Record<string, React.ComponentType> = {
  justify: JustifyDemo,
  align: AlignDemo,
  place: PlaceDemo,
};

export async function generateStaticParams() {
  return positioningContent.pages.map((p) => ({ slug: p.slug }));
}

export default async function PositioningSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPositioningPage(slug as Parameters<typeof getPositioningPage>[0]);
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
