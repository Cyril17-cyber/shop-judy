// app/page.tsx
"use client";
import desktopCarousel1 from "@/app/public/carousel-desktop-1.jpg";
import desktopCarousel2 from "@/app/public/carousel-desktop-2.jpg";
import desktopCarousel4 from "@/app/public/carousel-desktop-4.jpg";
import mobileCarousel1 from "@/app/public/carousel-mobile-1.jpg";
import mobileCarousel2 from "@/app/public/carousel-mobile-2.jpg";
import mobileCarousel3 from "@/app/public/carousel-mobile-3.jpg";
import mobileCarousel4 from "@/app/public/carousel-mobile-4.jpg";
import GridCard from "@/components/GridCard";
import MultiCarousel from "@/components/MultiCarousel";
import { useAppSelector } from "@/lib/hooks";
import ControlledCarousel from "@/components/ControlledCarousel";
import { categories, Product, products } from "@/components/Dummydata";
import FAQSection from "@/components/FAQSection";
import styles from "./Landing.module.css";

const getRandomProducts = (arr: Product[], count: number) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// const randomProducts = getRandomProducts(products, 8);
const highRatedFashion = getRandomProducts(
  products.filter((p) => p.category === "fashion" && p.rated >= 4.0),
  15
);

const cheapKitchen = getRandomProducts(
  products.filter((p) => p.category === "kitchen" && p.price < 30000),
  15
);

// const getCategoryProductsSlice = (
//   arr: Product[],
//   category: string,
//   count: number
// ) => {
//   return arr.filter((p) => p.category === category).slice(0, count);
// };

const homeCategory = categories.find((c) => c.name === "home");

const electronicsCategory = categories.find((c) => c.name === "electronics");

const fashionCategory = categories.find((c) => c.name === "fashion");

const kitchenCategory = categories.find((c) => c.name === "kitchen");

const phonesCategory = categories.find((c) => c.name === "phone & tablets");

const gamingCategory = categories.find((c) => c.name === "gaming");

const automobileCategory = categories.find((c) => c.name === "automobiles");

const animalCategory = categories.find((c) => c.name === "animals & pets");
const fitnessCategory = categories.find((c) => c.name === "fitness");
const babyCategory = categories.find((c) => c.name === "baby products");

export default function HomePage() {
  const navHeight = useAppSelector((state: any) => state.navHeight.value);
  const desktopCarouselImages = [
    desktopCarousel1,
    desktopCarousel2,
    desktopCarousel4,
  ];

  const mobileCarouselImages = [
    mobileCarousel1,
    mobileCarousel2,
    mobileCarousel3,
    mobileCarousel4,
  ];
  // const [flashSales, setFlashSales] = useState<Product[]>([]);

  // useEffect(() => {
  //   axios
  //     .get<Product[]>("/api/flash-sales")
  //     .then((r) => setFlashSales(r.data))
  //     .catch(() => {});
  // }, []);

  return (
    <main
      className={`bg-white lg:bg-gray-100`}
      style={{ marginTop: `${navHeight}px` }}
    >
      <div className="hidden lg:flex items-center justify-center relative w-full">
        <ControlledCarousel images={desktopCarouselImages} />
      </div>

      <div className="flex lg:hidden items-center justify-center relative w-full">
        <ControlledCarousel images={mobileCarouselImages} />
      </div>

      <div className="relative hidden lg:block">
        <section
          className={`items-start justify-start grid grid-cols-4 px-4 mx-auto gap-4 absolute -top-55`}
          style={{ zIndex: 150000 }}
        >
          <GridCard
            heading="Shop for your home essentials"
            category="home"
            items={homeCategory?.subCategories.slice(0, 4) ?? []}
          />

          <GridCard
            heading="Get electronics and more"
            category="electronics"
            items={electronicsCategory?.subCategories.slice(0, 4) ?? []}
          />

          <GridCard
            heading="Trendy Fashion Finds"
            category="fashion"
            items={fashionCategory?.subCategories.slice(0, 4) ?? []}
          />

          <GridCard
            heading="Top finds for your kitchen"
            category="kitched"
            items={kitchenCategory?.subCategories.slice(0, 4) ?? []}
          />
        </section>
      </div>

      <div className="relative lg:hidden">
        <section
          className={`items-start justify-start grid grid-cols-1mx-auto gap-8`}
        >
          <GridCard
            heading="Shop for your home essentials"
            category="home"
            items={homeCategory?.subCategories.slice(0, 4) ?? []}
          />

          <GridCard
            heading="Get electronics and more"
            category="electronics"
            items={electronicsCategory?.subCategories.slice(0, 4) ?? []}
          />

          <GridCard
            heading="Trendy Fashion Finds"
            category="fashion"
            items={fashionCategory?.subCategories.slice(0, 4) ?? []}
          />

          <GridCard
            heading="Top finds for your kitchen"
            category="kitched"
            items={kitchenCategory?.subCategories.slice(0, 4) ?? []}
          />
        </section>
      </div>

      <div className="mt-5 lg:mt-75">
        <section
          className={`items-start justify-start grid grid-cols-1mx-auto gap-8 lg:grid-cols-4 lg:px-4 lg:mx-auto lg:gap-4`}
        >
          <GridCard
            heading="New Gadgets!"
            category="phone & tablets"
            items={phonesCategory?.subCategories.slice(0, 4) ?? []}
          />

          <GridCard
            heading="Relax and Game!"
            category="gaming"
            items={gamingCategory?.subCategories.slice(0, 4) ?? []}
          />

          <GridCard
            heading="Everything Automobile"
            category="automobiles"
            items={automobileCategory?.subCategories.slice(0, 4) ?? []}
          />

          <GridCard
            heading="For your pets"
            category="animals & pets"
            items={animalCategory?.subCategories.slice(0, 4) ?? []}
          />
        </section>
      </div>

      <div className="mt-3 lg:mt-5 bg-white lg:mx-4  py-4 px-5">
        <h2 className="text-lg font-semibold mb-3">
          Best sellers in fashion items
        </h2>
        <MultiCarousel content={highRatedFashion} />
      </div>

      <div className="mt-3 lg:mt-5 bg-white lg:mx-4  py-4 px-5">
        <h2 className="text-lg font-semibold mb-3">
          Kitchen finds under ₦30,000
        </h2>
        <MultiCarousel content={cheapKitchen} />
      </div>

      <div className="mt-5 lg:mt-10">
        <section
          className={`items-start justify-start grid grid-cols-1mx-auto gap-8 lg:grid-cols-4 lg:px-4 lg:mx-auto lg:gap-4`}
        >
          <GridCard
            heading="Get sturdy & fit!"
            category="fitness"
            items={fitnessCategory?.subCategories.slice(0, 4) ?? []}
          />

          <GridCard
            heading="For the young ones"
            category="baby products"
            items={babyCategory?.subCategories.slice(0, 4) ?? []}
          />
        </section>
      </div>

      <div className="">
        <FAQSection />
      </div>

      {/* Newsletter Subscription Section */}

      <section
        className={`container flex items-center justify-center lg:items-start lg:justify-start lg:grid py-8 px-4 lg:px-8 mx-auto ${styles.moreThanHalf}`}
      >
        <div className="text-center lg:text-left">
          <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mb-4">
            Subscribe to Our News Letter
          </h2>
          <p className="text-gray-600 mb-4">
            Subscribe to our newsletter and receive updates on sales, discounts,
            valuable content and more.
          </p>
          <div className="flex items-center gap-2 w-full">
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="border p-2 rounded w-full"
            />
            <button className="bg-black text-fuchsia-50 px-4 py-2 rounded">
              Subscribe
            </button>
          </div>
        </div>
        <div className=""></div>
      </section>
    </main>
  );
}
