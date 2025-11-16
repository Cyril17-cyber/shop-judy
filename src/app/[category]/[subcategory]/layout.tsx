import { notFound } from "next/navigation";
import { categories, slugify } from "@/components/Dummydata";
import { use } from "react";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any; // let Next.js handle the exact type
}) {
  const { category, subcategory } = await params; // unwrap the promise

  const foundCategory = categories.find(
    (cat) => slugify(cat.name) === category?.toLowerCase()
  );
  if (!foundCategory) notFound();

  const foundSub = foundCategory.subCategories.find(
    (s) => slugify(s.name) === subcategory?.toLowerCase()
  );
  if (!foundSub) notFound();

  return <>{children}</>;
}
