import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "../PAGES/Home";

const UserDetails = () => {
  const [userInfo, setUserInfo] = useState({
    user: "",
    email: "",
    address: "",
  });

  const { user, email, address } = userInfo;

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const placeOrder = (e) => {
    e.preventDefault();
    setUserInfo({ ...userInfo, user: "", email: "", address: "" });
    alert('Success')
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] grid place-content-center">
      <h1 className="text-4xl text-slate-800 font-mono font-semibold my-4 border-b-2 border-b-slate-400">
        Your Details
      </h1>
      <form onSubmit={placeOrder} className="w-[80vw] flex flex-col gap-4">
        <input
          className="px-4 py-2 text-xl text-slate-800 outline-none bg-pink-100 rounded w-full"
          type="text"
          name="user"
          placeholder="Name..."
          onChange={handleChange}
          value={user}
          required
        />
        <input
          className="px-4 py-2 text-xl text-slate-800 outline-none bg-pink-100 rounded w-full"
          type="email"
          name="email"
          placeholder="E-mail..."
          onChange={handleChange}
          value={email}
          required
        />
        <textarea
          className="px-4 py-2 text-xl text-slate-800 outline-none bg-pink-100 rounded w-full"
          rows="6"
          name="address"
          placeholder="Address..."
          onChange={handleChange}
          value={address}
        />
        <div>
          <button
            className="bg-[#ff634e] text-xl font-semibold text-white px-4 py-2 rounded hover:bg-[#F8AFA6] duration-300 hover:text-slate-800 hover:ring-2 ring-[#ff634e]"
            type="submit"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
