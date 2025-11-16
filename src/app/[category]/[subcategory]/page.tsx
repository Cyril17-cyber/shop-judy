import { categories, slugify } from "@/components/Dummydata";
import { notFound } from "next/navigation";
import ClientSubCategoryPage from "./ClientSubCategoryPage";
import { use } from "react";

export default async function Page({
  params,
}: {
  params: { category: string; subcategory: string }; // keep it a normal object
}) {
  const { category, subcategory } = await params; // unwrap the promise

  // Validate category
  const foundCategory = categories.find(
    (cat) => slugify(cat.name) === category?.toLowerCase()
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
