import React from "react";
import { MdRestaurantMenu } from "react-icons/md";
import { useSelector } from "react-redux";
import CartItem from "../COMPONENTS/CartItem";
import { Link } from "react-router-dom";

function Cart({ cartToggle, setCartToggle }) {
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const total = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  return (
    <>
      <div className="bg-slate-400 h-screen w-screen md:w-[500px] lg:w-[520px] p-4 z-50">
        <div
          className="flex justify-between text-2xl text-white cursor-pointer"
          onClick={() => setCartToggle(!cartToggle)}
        >
          <h1>My Order</h1>
          <MdRestaurantMenu />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="overflow-scroll">
            {cartItems.length > 0 ? (
              cartItems.map((item) => <CartItem key={item.id} {...item} />)
            ) : (
              <h1 className="flex justify-center text-3xl text-white">
                Your Cart is empty!
              </h1>
            )}
          </div>

          <div className="py-6 flex flex-col gap-3">
            <div className="flex gap-2 text-xl">
              <p>Total Items:</p>
              <p>( {totalQty} )</p>
            </div>
            <div className="flex justify-between text-2xl">
              <p>Total Amount:</p>
              <p className="text-orange-800 font-semibold">
                ${total.toFixed(2)}
              </p>
            </div>
            <div className="text-xl text-slate-900 font-semibold flex justify-between">
              <Link to={totalQty !== 0 && "/menu"}>
                <button
                  onClick={() => totalQty !== 0 && setCartToggle(!cartToggle)}
                  className="bg-[#ff634e] text-xl font-semibold text-white px-4 py-2 rounded hover:bg-[#F8AFA6] duration-300 hover:text-slate-800 hover:ring-2 ring-[#ff634e] tracking-wider"
                >
                  Continu to Shop
                </button>
              </Link>
              <button
                className="bg-[#ff634e] text-xl font-semibold text-white px-4 py-2 rounded hover:bg-[#F8AFA6] duration-300 hover:text-slate-800 hover:ring-2 ring-[#ff634e] tracking-wider"
              >
                CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
