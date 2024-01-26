import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../REDUX/Slices/CartSlice";

function Product(product) {
  const Dispatch = useDispatch();
  const { id, title, desc, img, price, options } = product;

  return (
    <div className="bg-[url('https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRhYmxlfGVufDB8fDB8fHww')] bg-no-repeat bg-cover bg-center md:bg-bottom">
      <div className="flex flex-col justify-between p-4 bg-gradient-to-t from-black via-black m-1 rounded w-[80vw] md:w-[70vw] lg:w-[60vw] snap-center h-full">
        <div className="flex justify-center">
          <img className="w-56 md:w-60 lg:w-56 pb-4" src={img} alt={title} />
        </div>
        <div>
          <div className="md:flex justify-between">
            <h2 className="text-2xl text-white font-semibold pb-2 md:pb-0">
              {title}
            </h2>

            <p className="bg-orange-500 text-white px-2 py-1 rounded inline-block">
              ${price.toFixed(2)}
            </p>
          </div>

          <p className="text-white py-2">{desc}</p>
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
    </div>
  );
}

export default Product;
