import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../REDUX/Slices/CartSlice";

function ProductMenu(product) {
  const Dispatch = useDispatch();
  const { id, title, desc, img, price, options } = product;

  return (
    <div className="flex flex-col justify-between p-4 bg-pink-100 m-2 rounded">
      <div className="flex justify-center">
        <img className="w-56 md:w-60 pb-4" src={img} alt={title} />
      </div>
      <div>
        <div className="md:flex justify-between">
          <p className="text-2xl text-slate-800 font-semibold pb-2 md:pb-0">{title}</p>

          <p className="bg-orange-500 text-white px-2 py-1 rounded inline-block md:flex justify-center items-center">
            ${price.toFixed(2)}
          </p>
        </div>

          <p className="text-slate-800 py-2">{desc}</p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            Dispatch(addToCart({ id, title, img, price, qty: 1 }));
          }}
          className="bg-[#ff634e] text-white px-4 py-2 rounded  text-xl font-semibold hover:bg-[#F8AFA6] duration-300 hover:text-slate-500 hover:ring-2 ring-[#ff634e]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductMenu;
