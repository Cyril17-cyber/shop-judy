import { categories, slugify } from "@/components/Dummydata";
import { notFound } from "next/navigation";
import ClientSubCategoryPage from "./ClientSubCategoryPage";

export default async function Page({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) {
  // await params because layout is async
  const resolvedParams = await params;
  const { category, subcategory } = resolvedParams;

  // Validate category
  const foundCategory = categories.find(
    (cat) => slugify(cat.name) === category.toLowerCase()
  );
  if (!foundCategory) notFound();

  // Validate subcategory
  const foundSub = foundCategory.subCategories.find(
    (sub) => slugify(sub.name) === subcategory.toLowerCase()
  );
  if (!foundSub) notFound();

  // Send validated data to client component
  return (
    <ClientSubCategoryPage category={foundCategory} subcategory={foundSub} />
  );
}
