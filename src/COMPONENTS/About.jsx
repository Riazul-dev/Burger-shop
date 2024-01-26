import React from "react";
import Button from "./Button";

function About() {
  return (
    <div>
      <div className='bg-[url("https://images.unsplash.com/photo-1530554764233-e79e16c91d08?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] lg:bg-[url("https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-fixed bg-no-repeat bg-center w-screen h-[400px]'></div>
      <div className="bg-pink-100 ring-2 ring-pink-300 -translate-y-[50%] w-[90vw] md:w-[70vw] m-auto rounded-md p-4 md:px-6">
        <h2 className="text-2xl font-semibold text-slate-900">Delicious Food</h2>
        <p className="md:text-xl text-slate-800 py-2">
          Order lunch or fuel for work-from-home, late nights in the office,
          corporate events, client meetings, and much more.
        </p>
        <div className="inline-block py-4">
            <Button text='Get started' path='/menu' />
        </div>
      </div>
    </div>
  );
}

export default About;
