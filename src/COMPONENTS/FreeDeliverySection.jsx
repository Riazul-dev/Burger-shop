import React from "react";
import { GiHamburger } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { GiEating } from "react-icons/gi";
import Button from "./Button";

function FreeDeliverySection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-content-center p-2 bg-gradient-to-b md:bg-gradient-to-r from-pink-300">
      <div className="flex justify-center items-center">
        <img className="w-[70%]" src="p9.png" alt="burger" />
      </div>
      <div className="py-6 flex flex-col justify-center gap-4">
        <h2 className="text-3xl lg:text-4xl text-red-500 text-center font-bold py-4">Free delivery 7 days a week</h2>
        <div className="flex justify-center items-center px-4 md:px-0 gap-6">
          <div className="bg-white p-2 rounded-full text-6xl text-red-500">
            {/* icon */}
            <GiHamburger />
          </div>
          <div>
            <p className="text-2xl font-semibold">Choose Burger</p>
            <p>
              Sesame snaps tootsie roll dessert candy canes apple pie marzipan
              topping toffee croissant.
            </p>
          </div>
        </div>
        <div className="px-12 md:px-9 flex flex-col gap-2">
          {/* Dots */}
          <div className="bg-pink-400 w-2 h-2 rounded-full"></div>
          <div className="bg-pink-400 w-2 h-2 rounded-full"></div>
          <div className="bg-pink-400 w-2 h-2 rounded-full"></div>
          <div className="bg-pink-400 w-2 h-2 rounded-full"></div>
          <div className="bg-pink-400 w-2 h-2 rounded-full"></div>
        </div>
        <div className="flex justify-center items-center px-4
        md:px-0 gap-6">
          <div className="bg-white p-2 rounded-full text-6xl text-red-500">
            {/* icon */}
            <MdDeliveryDining />
          </div>
          <div>
            <p className="text-2xl font-semibold">Delivery or Takeaway</p>
            <p>
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test.
            </p>
          </div>
        </div>
        <div className="px-12 md:px-9 flex flex-col gap-2">
          {/* Dots */}
          <div className="bg-pink-400 w-2 h-2 rounded-full"></div>
          <div className="bg-pink-400 w-2 h-2 rounded-full"></div>
          <div className="bg-pink-400 w-2 h-2 rounded-full"></div>
          <div className="bg-pink-400 w-2 h-2 rounded-full"></div>
          <div className="bg-pink-400 w-2 h-2 rounded-full"></div>
        </div>
        <div className="flex justify-center items-center px-4
        md:px-0 gap-6">
          <div className="bg-white p-2 rounded-full text-6xl text-red-500">
            {/* icon */}
            <GiEating />
          </div>
          <div>
            <p className="text-2xl font-semibold">Enjoy Burger</p>
            <p>
              Praesent interdum mollis neque purus sed diam integer, in egestas
              nulla eget pede.
            </p>
          </div>
        </div>
        <div className="pt-6 px-4">
          <Button text='Order Now' path='/menu' />
        </div>
      </div>
    </div>
  );
}

export default FreeDeliverySection;
