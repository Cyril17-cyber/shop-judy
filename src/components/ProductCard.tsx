// /components/ProductCard.tsx
import style from "@/app/Landing.module.css";
import { Rating } from "@mui/material";
import Button from "@mui/material/Button";
import { Product } from "./Dummydata";

interface Props {
  item: Product;
}

export default function ProductCard({ item }: Props) {
  return (
    <div className="shadow-md bg-white rounded-lg p-4 flex flex-col items-start">
      <img
        src={item.gallery[0]}
        alt={item.name}
        className="h-90 w-full object-cover mb-2 rounded-lg"
      />
      <h3 className="font-medium">{`${item.name.substring(0, 50)}...`}</h3>
      <button className="text-sm text-gray-500 underline mt-3">
        {item.seller}
      </button>
      <p className="mt-3 font-bold">₦{item.price.toLocaleString()}</p>
      <div className="flex items-center my-3!">
        <Rating size="small" value={item.rated} precision={0.5} readOnly />
        <button
          className={`${style.redColor} text-sm text-gray-500 ml-3 underline`}
        >
          Reviews
        </button>
      </div>
      <Button
        variant="contained"
        className={`${style.addToCartButton} text-fuchsia-50!`}
      >
        Add to Cart
      </Button>
    </div>
  );
}
