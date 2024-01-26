import React from "react";
import { Products } from "../DATA/ProductData";
// import Product from "./Product";
import ProductMenu from "./ProductMenu";

function Menu() {
  return (
    <div className="bg-gradient-to-r md:bg-gradient-to-b from-pink-300/60 to-black">
      <div className="h-[60vh] bg-[url('https://images.unsplash.com/photo-1683702831004-97203ddc564e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D')] bg-cover bg-no-repeat bg-center">
        <div className="bg-black/50 h-full flex flex-col justify-center items-center text-center text-white gap-4 px-2">
          <h1 className="text-4xl md:text-6xl font-mono font-bold tracking-wider">Order and Enjoy</h1>
          <p className="text-xl tracking-wider">Start your order and enjoy the tastiest burgers</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Products.map((product) => (
          <ProductMenu {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
