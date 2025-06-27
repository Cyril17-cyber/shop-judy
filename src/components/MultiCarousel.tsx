import Link from "next/link";
import Carousel from "react-multi-carousel";
import { Product } from "./Dummydata";
import ProductCard from "./ProductCard";

export default function MultiCarousel({ content }: { content: Product[] }) {

  //   "https://m.media-amazon.com/images/I/71cvjYANouL._AC_SY879_.jpg",
  //   "https://m.media-amazon.com/images/I/71Iyq3a5s9L._AC_SY879_.jpg",
  //   "https://m.media-amazon.com/images/I/81t-J0VcjFL._AC_SY879_.jpg",
  //   "https://m.media-amazon.com/images/I/71U23Upk8wL._AC_SY879_.jpg",
  //   "https://m.media-amazon.com/images/I/71cvNkssE3L._AC_SY879_.jpg",
  //   "https://m.media-amazon.com/images/I/61EufpA8npL._AC_SY879_.jpg",
  //   "https://m.media-amazon.com/images/I/61I36UQBSHL._AC_SY879_.jpg",
  //   "https://m.media-amazon.com/images/I/61-zyxZPewL._AC_SY879_.jpg",
  //   "https://m.media-amazon.com/images/I/61yKQgr3yyL._AC_SY879_.jpg",
  //   "https://m.media-amazon.com/images/I/619c0XNoteL._AC_SY879_.jpg",
  // ];
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {content.map((product, id) => (
          <Link
            href={`/product/${product.id}`}
            className="mr-2 flex items-center justify-center"
            key={id}
          >
            <ProductCard item={product} />
            {/* <img
              alt="w3js.com - web front-end studio"
              src={`${product.gallery[0]}?w=286&h=570&fit=crop`}
              key={id}
              className="lg:w-auto w-4/5 max-h-90 object-cover"
            /> */}
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
