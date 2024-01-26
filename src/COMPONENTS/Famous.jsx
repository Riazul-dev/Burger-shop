import React from "react";

const Famous = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRhYmxlfGVufDB8fDB8fHww')] bg-no-repeat bg-cover bg-center md:bg-bottom">
      <div className="w-screen min-h-[70vh] grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b md:bg-gradient-to-r from-black to-black/30">
        <div className=" py-4 px-8 flex flex-col justify-center items-start gap-8 bg-gradient-to-b md:bg-gradient-to-r from-black via-slate-950 ">
          <div className="text-4xl md:text-5xl font-bold text-pink-400">
            <p>World Famous</p>
            <p>Burger</p>
          </div>
          <div className="text-xl text-pink-100">
            <p>100% Grass-fed beef patty, cheddar cheese, special sauce, tomato, lettuce, sesame seed bun</p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <img className="w-[90%] md:w-[100%]" src="offerProduct.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Famous;
