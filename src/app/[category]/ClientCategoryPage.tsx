"use client";
import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { slugify, products } from "@/components/Dummydata";
import { useAppSelector } from "@/lib/hooks";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function ClientCategoryPage({ category }: { category: any }) {
  const navHeight = useAppSelector((state: any) => state.navHeight.value);

  return (
    <div className="px-5 py-3" style={{ marginTop: `${navHeight}px` }}>
      {/* Breadcrumbs */}
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link href="/" className={poppins.className}>
          home
        </Link>

        <p className={poppins.className}>{category.name}</p>
      </Breadcrumbs>

      {/* Subcategories + products */}
      {category.subCategories.map((sub: any, id: number) => (
        <section key={id} className="w-full mt-5">
          <div className="w-full flex items-center justify-between mb-4">
            <h2 className="font-semibold capitalize text-xl">{sub.name}</h2>
            <Link
              className="text-sm font-semibold text-orange-500"
              href={`/${slugify(category.name)}/${slugify(sub.name)}`}
            >
              See All
            </Link>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {products
              .filter(
                (p) =>
                  p.category === category.name && p.subCategory === sub.name
              )
              .sort(() => 0.5 - Math.random())
              .slice(0, 6)
              .map((product, pId) => (
                <ProductCard item={product} key={pId} />
              ))}
          </section>
        </section>
      ))}
    </div>
  );
}
