import React from "react";
import Button from "../COMPONENTS/Button";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="flex flex-col justify-center items-center gap-4 min-h-[calc(100vh-5rem)]">
      <h1 className="text-4xl md:text-6xl text-slate-800 font-bold">Get in touch</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4 w-[90vw] md:w-[70vw] lg:w-[60vw]">
        <input
          className="px-4 py-2 text-xl text-slate-800 outline-none bg-pink-100 rounded w-full"
          type="text"
          placeholder="Name..."
          required
        />
        <input
          className="px-4 py-2 text-xl text-slate-800 outline-none bg-pink-100 rounded w-full"
          type="email"
          placeholder="E-mail..."
          required
        />
        <textarea
          className="px-4 py-2 text-xl text-slate-800 outline-none bg-pink-100 rounded w-full"
          rows="6"
          placeholder="Message..."
        />
        <div>
          <button className='bg-[#ff634e] text-xl font-semibold text-white px-4 py-2 rounded hover:bg-[#F8AFA6] duration-300 hover:text-slate-800 hover:ring-2 ring-[#ff634e]'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
