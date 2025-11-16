import { notFound } from "next/navigation";
import { categories, slugify } from "@/components/Dummydata";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}) {
  // await params because layout is async
  const resolvedParams = await params;
  const { category } = resolvedParams;

  const foundCategory = categories.find(
    (cat) => slugify(cat.name) === category.toLowerCase()
  );

  if (!foundCategory) notFound();

  return <>{children}</>;
}
