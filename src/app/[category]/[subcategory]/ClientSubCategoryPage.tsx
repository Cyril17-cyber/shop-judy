"use client";
import { products, slugify } from "@/components/Dummydata";
import ProductCard from "@/components/ProductCard";
import { useAppSelector } from "@/lib/hooks";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function ClientSubCategoryPage({
  category,
  subcategory,
}: {
  category: any;
  subcategory: any;
}) {
  const navHeight = useAppSelector((state: any) => state.navHeight.value);

  const productList = products
    .filter(
      (p) => p.category === category.name && p.subCategory === subcategory.name
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  return (
    <div className="px-5 py-3" style={{ marginTop: `${navHeight}px` }}>
      {/* Breadcrumbs */}
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link href="/" className={poppins.className}>
          Home
        </Link>
        <Link href={`/${slugify(category.name)}`} className={poppins.className}>
          {category.name}
        </Link>
        <p className={poppins.className}>{subcategory.name}</p>
      </Breadcrumbs>

      {/* Product Grid */}
      <section className="w-full mt-5">
        <h2 className="font-semibold capitalize text-xl">{subcategory.name}</h2>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {productList.map((product, pId) => (
            <ProductCard item={product} key={pId} />
          ))}
        </section>
      </section>
    </div>
  );
}
