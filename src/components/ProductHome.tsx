import React from "react";
import { useAppDispatch } from "../store/store";
import { addItem } from "../store/cart/cartSlice";

interface ProductHomeProps {
  image: string;
  price: number;
  title: string;
  color: string;
  size: string;
}

const ProductHome = ({
  image,
  price,
  title,
  color,
  size,
}: ProductHomeProps) => {
  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(
      addItem({ product: { image, price, title, color, size }, quantity: 1 })
    );
  };

  return (
    <div className="shadow flex flex-col h-[400px] max-w-[500px]">
      <div className="bg-gray-300 rounded-t h-4/6 w-full overflow-hidden">
        <img src={image} alt="shirt" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p>Rp. {price}</p>
        <button
          onClick={addToCart}
          className="bg-blue-500 text-white py-2 w-full mt-3 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductHome;
