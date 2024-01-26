import React from "react";
import Button from "./Button";

function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-20 pt-[10vh] bg-[url('https://images.unsplash.com/photo-1517190544799-be272fbd2aac?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-bottom">
      <div className="flex flex-col justify-center items-center gap-6 tracking-wider font-roboto text-pink-400 lg:text-red-800 font-bold">
        <p className="text-5xl text-center lg:text-6xl">ALWAYS FRESH,</p>
        <p className="flex flex-col lg:flex-row gap-4 text-5xl text-center px-2 md:px-0"><span>CRISPY</span> <span>&</span> <span className="text-red-600">HOT</span></p>
        <div className="md:mt-20 shadow-md shadow-yellow-600 lg:shadow-red-400">
          <Button text='Order Now' path='/menu' />
        </div>
      </div>
      <div className="w-[70%] md:w-[50%]">
        <img src="p2.png" alt="Burger" />
      </div>
    </div>
  );
}

export default HeroSection;
