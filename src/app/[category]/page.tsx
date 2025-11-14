"use client";
import React from "react";
import { Poppins } from "next/font/google";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import { categories, slugify, products } from "@/components/Dummydata";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ProductCard from "@/components/ProductCard";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function Category({
  params: { category },
}: {
  params: { category: string };
}) {
  const router = useRouter();
  const navHeight = useAppSelector((state: any) => state.navHeight.value);
  // Check if the category exists
  const foundCategory = categories.find(
    (cat) => slugify(cat.name) === category.toLowerCase()
  );
  useEffect(() => {
    if (!foundCategory) {
      router.push("/404"); // manually redirect
    }
  }, [category]);

  const breadcrumbs = [
    <Link
      key={"1"}
      href="/"
      className={`${poppins.className} capitalize text-slate-950`}
    >
      home
    </Link>,
    <p key={"2"} className={`${poppins.className} capitalize`}>
      {foundCategory && foundCategory.name}
    </p>,
  ];
  return (
    <div className="px-5 py-3" style={{ marginTop: `${navHeight}px` }}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      {foundCategory &&
        foundCategory.subCategories.map((sub, id) => {
          return (
            <section key={id} className="w-full mt-5">
              <div className="w-full flex items-center justify-between mb-4">
                <h2 className="font-semibold capitalize text-xl">{sub.name}</h2>
                <Link
                  className="text-sm font-semibold text-orange-500"
                  href={`/${slugify(
                    foundCategory && foundCategory.name
                  )}/${slugify(sub.name)}`}
                >
                  See All
                </Link>
              </div>
              <section className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {products
                  .filter(
                    (p) =>
                      p.category === foundCategory.name &&
                      p.subCategory === sub.name
                  )
                  .sort(() => 0.5 - Math.random())
                  .slice(0, 6)
                  .map((product, pId) => (
                    <ProductCard item={product} key={pId} />
                  ))}
              </section>
            </section>
          );
        })}
    </div>
  );
}
