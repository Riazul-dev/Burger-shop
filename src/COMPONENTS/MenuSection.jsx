import React from "react";
import { Products } from "../DATA/ProductData";
import Product from "./Product";

function MenuSection() {
  return (
    <div className="w-screen overflow-scroll snap-x bg-gradient-to-b from-pink-300/60 to-black">
      <div className=" flex w-max snap-center">
        {Products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default MenuSection;
