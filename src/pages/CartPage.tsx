import Container from "../components/Container";
import ContainerItem from "../components/ContainerItem";
import Product from "../components/Product";
import Total from "../components/Total";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/store";

const CartPage = () => {
  const products = useAppSelector((state) => state.cart.products);

  const totalPrice =
    products.length &&
    products
      .map((item) => item.quantity * item.product.price)
      .reduce((a, b) => a + b);

  return (
    <div className="bg-gray-100 h-screen">
      <h1 className="text-xl text-gray-800 font-semibold text-center py-8">
        Shopping Cart
      </h1>
      <main className="bg-white h-[90vh]">
        <div className="container pt-4">
          <Link
            to="/"
            className="text-xl bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md"
          >
            Go Back
          </Link>
        </div>
        <Container>
          <ContainerItem colSpanLg={4}>
            <div className="shadow-md p-4 rounded-md border">
              {products.length < 1 ? (
                <h2 className="text-xl text-center font-semibold">
                  No Products Yet
                </h2>
              ) : (
                <>
                  <h3 className="font-semibold text-lg">
                    Cart ({products.length} items)
                  </h3>
                  {products.map(({ product, quantity }) => (
                    <Product
                      key={product.title}
                      product={product}
                      quantity={quantity}
                    />
                  ))}
                </>
              )}
            </div>
          </ContainerItem>
          <ContainerItem colSpanLg={2}>
            <Total
              disabled={totalPrice === 0}
              totalPrice={totalPrice}
              shippingCost={0}
            />
            <div className="shadow-md p-4 rounded-md flex justify-between items-center border">
              <h3 className="text-md">Add a discount code (optional)</h3>
              <BsChevronDown className="font-bold" />
            </div>
          </ContainerItem>
        </Container>
      </main>
    </div>
  );
};

export default CartPage;
