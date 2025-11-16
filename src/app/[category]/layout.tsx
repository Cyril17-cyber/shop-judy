import { notFound } from "next/navigation";
import { categories, slugify } from "@/components/Dummydata";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { category: string }; // keep it a normal object
}) {
  const { category } = await params; // unwrap the Promise internally

  if (!category) notFound();

  const foundCategory = categories.find(
    (cat) => slugify(cat.name) === category.toLowerCase()
  );

  if (!foundCategory) notFound();

  return <>{children}</>;
}
