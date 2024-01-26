import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeCart,
  incrementQty,
  decrementQty,
} from "../REDUX/Slices/CartSlice";

const CartItem = (item) => {
  const Dispatch = useDispatch();
  const { id, title, img, price, qty } = item;

  return (
    <div className="flex flex-col justify-between ">
      <div className="flex flex-col md:flex-row justify-center gap-2 md:justify-between items-center px-4 text-slate-900 bg-white my-1 py-3">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <img className="w-16" src={img} alt={title} />
          <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-4">
            <p className="text-xl">{title}</p>
            <div className="flex gap-2 border">
              <button
                onClick={() => qty > 1 && Dispatch(decrementQty({ id }))}
                className="bg-green-300 px-2"
              >
                -
              </button>
              <p>{qty}</p>
              <button
                onClick={() => qty < 10 && Dispatch(incrementQty({ id }))}
                className="bg-green-300 px-2"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <p className="text-orange-800 text-xl">${(price * qty).toFixed(2)}</p>
          <button
            onClick={() => {
              Dispatch(removeCart({ id, title, img, price, qty: 1 }));
            }}
            className="text-2xl text-red-500 rounded-full p-1 bg-slate-300"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
