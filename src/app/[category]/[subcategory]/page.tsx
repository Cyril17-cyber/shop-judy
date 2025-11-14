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

export default function SubCategory({
  params: { category, subcategory },
}: {
  params: { category: string; subcategory: string };
}) {
  const router = useRouter();
  const navHeight = useAppSelector((state: any) => state.navHeight.value);
  const foundCategory = categories.find(
    (cat) => slugify(cat.name) === category.toLowerCase()
  );

  const foundSub = foundCategory?.subCategories.find(
    (sub) => slugify(sub.name) === subcategory.toLowerCase()
  );
  useEffect(() => {
    if (!foundSub) {
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
    <Link
      href={`/${foundCategory && slugify(foundCategory.name)}`}
      key={"2"}
      className={`${poppins.className} capitalize text-slate-950`}
    >
      {foundCategory && foundCategory.name}
    </Link>,
    <p key={"2"} className={`${poppins.className} capitalize`}>
      {foundSub && foundSub.name}
    </p>,
  ];

  return (
    <div className="px-5 py-3" style={{ marginTop: `${navHeight}px` }}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      {foundCategory && foundSub && (
        <section className="w-full mt-5">
          <h2 className="font-semibold capitalize text-xl">{foundSub.name}</h2>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {products
              .filter(
                (p) =>
                  p.category === foundCategory.name &&
                  p.subCategory === foundSub.name
              )
              .sort(() => 0.5 - Math.random())
              .slice(0, 6)
              .map((product, pId) => (
                <ProductCard item={product} key={pId} />
              ))}
          </section>
        </section>
      )}
    </div>
  );
}
