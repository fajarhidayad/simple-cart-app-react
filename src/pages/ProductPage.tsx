import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import ProductHome from "../components/ProductHome";
import { useAppSelector } from "../store/store";

const ProductPage = () => {
  const quantity = useAppSelector((state) => state.cart.products.length);
  return (
    <>
      <nav className="border-b shadow text-gray-600">
        <div className="container flex justify-between items-center py-6">
          <Link to={"/"} className="font-semibold text-xl">
            Shopping Cart App
          </Link>
          <Link
            to="/cart"
            className="flex space-x-1 items-center hover:underline text-lg relative"
          >
            {quantity > 0 && (
              <span className="absolute top-0 -left-3 bg-red-400 rounded-full px-1 text-sm text-white">
                {quantity}
              </span>
            )}
            <FaShoppingCart />
            <p>Cart</p>
          </Link>
        </div>
      </nav>

      <main className="container mt-6">
        <section className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <ProductHome
            title="Nirvana Shirt"
            price={120000}
            color="White"
            size="M"
            image="https://images.pexels.com/photos/1933589/pexels-photo-1933589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <ProductHome
            title="White Shirt"
            price={150000}
            color="White"
            size="M"
            image="https://images.pexels.com/photos/2451200/pexels-photo-2451200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <ProductHome
            title="Cool White Shirt"
            price={270000}
            color="White"
            size="M"
            image="https://images.pexels.com/photos/1561011/pexels-photo-1561011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </section>
      </main>
    </>
  );
};

export default ProductPage;
