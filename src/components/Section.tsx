// /components/Section.tsx
import style from "@/app/Landing.module.css";
import { ReactNode } from "react";

interface Props {
  title: string;
  seeAllHref?: string;
  children: ReactNode;
}

export default function Section({ title, seeAllHref, children }: Props) {
  return (
    <section className="my-8 container mx-auto px-4 lg:px-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {seeAllHref && (
          <a
            href={seeAllHref}
            className={`${style.redColor} text-sm  hover:underline`}
          >
            See All
          </a>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {children}
      </div>
    </section>
  );
}
