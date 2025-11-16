import { categories, slugify } from "@/components/Dummydata";
import { notFound } from "next/navigation";
import ClientCategoryPage from "./ClientCategoryPage";

export default async function Page({
  params,
}: {
  params: { category: string }; // Note: non-promise
}) {
  const { category } = await params;

  const foundCategory = categories.find(
    (cat) => slugify(cat.name) === category?.toLowerCase()
  );

  if (!foundCategory) notFound();

  return <ClientCategoryPage category={foundCategory} />;
}
