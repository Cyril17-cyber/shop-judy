import { categories, slugify } from "@/components/Dummydata";
import { notFound } from "next/navigation";
import ClientCategoryPage from "./ClientCategoryPage";

export default async function Page({
  params,
}: {
  params: any; // let Next.js handle the exact type
}) {
  const { category } = await params;

  const foundCategory = categories.find(
    (cat) => slugify(cat.name) === category?.toLowerCase()
  );

  if (!foundCategory) notFound();

  return <ClientCategoryPage category={foundCategory} />;
}
