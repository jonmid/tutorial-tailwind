import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import {
  FlexBasisDemo,
  FlexRowReverseDemo,
  FlexColDemo,
  FlexWrapDemo,
  OrderDemo,
} from "@/components/demos";
import { getFlexPage, flexContent } from "@/lib/content";

const DEMOS: Record<string, React.ComponentType> = {
  "flex-basis": FlexBasisDemo,
  "flex-row-reverse": FlexRowReverseDemo,
  "flex-col": FlexColDemo,
  "flex-wrap": FlexWrapDemo,
  order: OrderDemo,
};

export async function generateStaticParams() {
  return flexContent.pages.map((p) => ({ slug: p.slug }));
}

export default async function FlexSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getFlexPage(slug as Parameters<typeof getFlexPage>[0]);
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
