interface TotalProps {
  totalPrice: number;
  shippingCost: number;
  disabled?: boolean;
}

const Total = ({ totalPrice, shippingCost, disabled }: TotalProps) => {
  return (
    <div className="shadow-md p-4 rounded-md mb-5 border">
      <h3 className="font-semibold text-lg mb-5">The Total Amount of</h3>
      <div className="flex justify-between mb-2">
        <p>Temporary amount</p>
        <p>Rp. {totalPrice}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>Shipping</p>
        <p>{shippingCost ? shippingCost : "Free"}</p>
      </div>
      <hr />
      <div className="flex justify-between font-semibold mt-2 mb-5">
        <p className="w-1/2">The total amount of (including VAT)</p>
        <p>Rp. {totalPrice + shippingCost}</p>
      </div>
      {!disabled ? (
        <button className="bg-blue-500 text-white w-full rounded-md py-3 shadow-md shadow-blue-300 focus:shadow-none hover:bg-blue-600">
          GO TO CHECKOUT
        </button>
      ) : (
        <button
          disabled={disabled}
          className="bg-gray-400 text-white w-full rounded-md py-3 shadow-md"
        >
          Cart is Empty
        </button>
      )}
    </div>
  );
};

export default Total;
