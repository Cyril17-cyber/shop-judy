import styles from "@/app/Landing.module.css";
import Link from "next/link";
import { SubCategoryType, slugify } from "./Dummydata";

export default function GridCard({
  heading,
  category,
  items,
}: {
  heading: string;
  category: string;
  items: SubCategoryType[];
}) {
  return (
    <div className="bg-white py-3 px-5 flex flex-col items-start justify-between">
      <h1 className="font-bold text-lg mb-2">{heading}</h1>
      <div
        className={`grid grid-cols-2 gap-x-2 gap-y-4 ${styles.imageList}  mb-5`}
      >
        {items.map((item, id) => (
          <Link href={`/${slugify(category)}/${slugify(item.name)}`} key={id}>
            <img src={item.image} alt={item.name} className="" />
            <p className="text-xs font-medium mt-1">{item.name}</p>
          </Link>
        ))}
      </div>
      <Link
        href={`/${slugify(category)}`}
        className="text-blue-500"
      >
        Explore More
      </Link>
    </div>
  );
}
