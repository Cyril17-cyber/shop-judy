import { notFound } from "next/navigation";
import { categories, slugify } from "@/components/Dummydata";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ category: string, subcategory: string }>;
}) {
  // await params because layout is async
  const resolvedParams = await params;
  const { category, subcategory } = resolvedParams;

  const foundCategory = categories.find(
    (cat) => slugify(cat.name) === category.toLowerCase()
  );
  if (!foundCategory) notFound();

  const foundSub = foundCategory.subCategories.find(
    (s) => slugify(s.name) === subcategory.toLowerCase()
  );
  if (!foundSub) notFound();

  return <>{children}</>;
}
