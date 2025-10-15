import React, { useEffect, useState } from "react";

const Cart = ({ myCart, setMyCart }) => {
  const [cartAmount, setCartAmount] = useState(0);

  // ✅ Increase Quantity
  const handleIncreaseQuantity = (itemId) => {
    const updatedCart = myCart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setMyCart(updatedCart);
  };

  // ✅ Decrease Quantity
  const handleDecreaseQuantity = (itemId) => {
    const updatedCart = myCart
      .map((item) => {
        if (item.id === itemId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null; // remove item if quantity is 1
          }
        }
        return item;
      })
      .filter(Boolean); // remove nulls
    setMyCart(updatedCart);
  };

  // ✅ Recalculate total when cart changes
  useEffect(() => {
    let amount = 0;
    myCart.forEach((item) => {
      amount += item.amount * item.quantity;
    });
    setCartAmount(amount.toFixed(2));
  }, [myCart]);

  return (
    <>
      <div className="lg:max-w-5xl max-lg:max-w-2xl mx-auto bg-white p-4">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* CART SECTION */}
          <div className="lg:col-span-2 bg-gray-100 p-6 rounded-md">
            <h3 className="text-lg font-semibold text-slate-900">
              Your Cart
            </h3>
            <hr className="border-gray-300 mt-4 mb-8" />

            {myCart.length > 0 ? (
              myCart.map((item) => (
                <div key={item.id} className="flex flex-wrap gap-4 mb-8">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1 min-w-[200px]">
                    <h4 className="text-md font-semibold text-slate-900">
                      {item.name}
                    </h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Price: ${item.amount}
                    </p>

                    {/* ✅ Quantity Controller */}
                    <div className="flex items-center w-fit px-3 py-1.5 mt-3 border border-gray-300 text-slate-900 text-xs rounded-md">
                      {/* Decrease */}
                      <span
                        className="cursor-pointer"
                        onClick={() => handleDecreaseQuantity(item.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 fill-current"
                          viewBox="0 0 124 124"
                        >
                          <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
                        </svg>
                      </span>

                      <span className="mx-4 text-sm">{item.quantity}</span>

                      {/* Increase */}
                      <span
                        className="cursor-pointer"
                        onClick={() => handleIncreaseQuantity(item.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 fill-current"
                          viewBox="0 0 42 42"
                        >
                          <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
                        </svg>
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-slate-700">
                      Total: ${(item.amount * item.quantity).toFixed(2)}
                    </p>

                    <button
                      onClick={() => handleDecreaseQuantity(item.id)}
                      className="mt-2 text-sm text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 py-6">
                🛒 Your cart is empty.
              </p>
            )}
          </div>

          {/* ORDER SUMMARY */}
          <div className="bg-gray-100 rounded-md p-6 md:sticky top-0 h-max">
            <h3 className="text-lg font-semibold text-slate-900">
              Order details
            </h3>
            <hr className="border-gray-300 mt-4 mb-8" />

            <ul className="text-slate-500 font-medium mt-8 space-y-4">
              <li className="flex flex-wrap gap-4 text-sm">
                Discount{" "}
                <span className="ml-auto text-slate-900 font-semibold">
                  $0.00
                </span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Shipping{" "}
                <span className="ml-auto text-slate-900 font-semibold">
                  $2.00
                </span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Tax{" "}
                <span className="ml-auto text-slate-900 font-semibold">
                  $0.00
                </span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm text-slate-900">
                Total{" "}
                <span className="ml-auto font-semibold">${cartAmount}</span>
              </li>
            </ul>

            <div className="mt-8 space-y-3">
              <button
                type="button"
                className="text-sm px-4 py-2.5 w-full font-medium tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md cursor-pointer"
              >
                Checkout
              </button>
              <button
                type="button"
                className="text-sm px-4 py-2.5 w-full font-medium tracking-wide bg-transparent text-slate-900 border border-gray-300 rounded-md cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
