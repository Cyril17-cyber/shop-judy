import { categories, slugify } from "@/components/Dummydata";
import { notFound } from "next/navigation";
import ClientCategoryPage from "./ClientCategoryPage";

export default function Page({ params }: { params: { category: string } }) {
  const { category } = params;

  // Validate category using slugify
  const foundCategory = categories.find(
    (cat) => slugify(cat.name) === category.toLowerCase()
  );

  if (!foundCategory) notFound();

  return <ClientCategoryPage category={foundCategory} />;
}
