import React, { useState } from "react";
import { FaTrash, FaHeart } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import type { ProductProps } from "../interfaces";
import { useAppDispatch } from "../store/store";
import { addItem, removeItem, minItem } from "../store/cart/cartSlice";

interface Props {
  product: ProductProps;
  quantity: number;
}

const Product = ({ product, quantity }: Props) => {
  const [qty, setQty] = useState(quantity);
  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(addItem({ product, quantity: 1 }));
    setQty(quantity + 1);
  };

  const reduceItem = () => {
    if (qty > 1) {
      dispatch(minItem(product.title));
      setQty(quantity - 1);
    }
  };

  const removeFromCart = () => {
    dispatch(removeItem(product.title));
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 py-4">
        <div className="col-span-2 lg:col-span-1 h-32 w-32 xl:h-40 xl:w-40 mx-auto lg:mx-0 rounded-md overflow-hidden">
          <img src={product.image} alt="item" />
        </div>
        <div className="col-span-2 space-y-2 flex flex-col items-center lg:items-start">
          <h3 className="text-xl font-semibold">{product.title}</h3>
          <p>SHIRT - {product.color}</p>
          <p>COLOR - {product.color}</p>
          <p>SIZE - {product.size}</p>
          <div className="flex space-x-4">
            <button
              onClick={removeFromCart}
              className="text-gray-600 flex items-center hover:underline px-1 md:px-0 rounded"
            >
              <FaTrash className="mr-2" />
              Remove Item
            </button>
            <button className="text-gray-600 flex items-center hover:underline px-1 md:px-0 rounded">
              <FaHeart className="mr-2" />
              Move To Wishlist
            </button>
          </div>
        </div>
        <div className="text-center flex flex-col justify-between col-span-2 lg:col-span-1">
          <div>
            <div className="flex justify-center">
              <button
                onClick={reduceItem}
                className="border rounded px-3 py-1 text-lg font-bold hover:bg-gray-100"
              >
                <AiOutlineMinus />
              </button>
              <input
                type="text"
                className="w-10 border text-center"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
              />
              <button
                onClick={addToCart}
                className="border rounded px-3 py-1 text-lg font-bold hover:bg-gray-100"
              >
                <AiOutlinePlus />
              </button>
            </div>
            <p className="mt-1 text-gray-500">(Note 1 piece)</p>
          </div>
          <p className="font-semibold text-xl pb-1">
            Rp. {product.price * quantity}
          </p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Product;
