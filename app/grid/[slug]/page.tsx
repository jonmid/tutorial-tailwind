import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import {
  GridColsDemo,
  ColSpanDemo,
  ColStartEndDemo,
  GridRowsDemo,
  RowSpanDemo,
} from "@/components/demos";
import { getGridPage, gridContent } from "@/lib/content";

const DEMOS: Record<string, React.ComponentType> = {
  "grid-cols": GridColsDemo,
  "col-span": ColSpanDemo,
  "col-start-end": ColStartEndDemo,
  "grid-rows": GridRowsDemo,
  "row-span": RowSpanDemo,
};

export async function generateStaticParams() {
  return gridContent.pages.map((p) => ({ slug: p.slug }));
}

export default async function GridSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getGridPage(slug as "grid-cols" | "col-span" | "col-start-end" | "grid-rows" | "row-span");
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
