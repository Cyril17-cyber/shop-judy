import { categories, slugify } from "@/components/Dummydata";
import { notFound } from "next/navigation";
import ClientCategoryPage from "./ClientCategoryPage";

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  // await params because layout is async
  const resolvedParams = await params;
  const { category } = resolvedParams;

  // Validate category using slugify
  const foundCategory = categories.find(
    (cat) => slugify(cat.name) === category.toLowerCase()
  );

  if (!foundCategory) notFound();

  return <ClientCategoryPage category={foundCategory} />;
}
