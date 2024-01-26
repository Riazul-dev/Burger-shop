import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavMenu from "../COMPONENTS/NavMenu";
import Cart from "./Cart";
import { IoHome, IoMail } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { LuClipboardList } from "react-icons/lu";
import { MdRestaurantMenu } from "react-icons/md";
import MobileMenu from "../COMPONENTS/MobileMenu";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";

const navMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
    icon: <IoHome />,
  },
  {
    id: 2,
    title: "Menu",
    link: "/menu",
    icon: <LuClipboardList />,
  },
  {
    id: 4,
    title: "Contact",
    link: "/contact",
    icon: <IoMail />,
  },
];

function Header() {
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  
  const [menuToggle, setMenuToggle] = useState(false);
  const [cartToggle, setCartToggle] = useState(false);
  return (
    <div className="flex justify-between items-center py-1 px-8 fixed top-0 w-full bg-pink-100 z-50">
      <div className="text-2xl text-orange-500 font-bold">
        <NavLink to="/">
          <img className=" rounded-full" src="./logo.png" width={60} alt="" />
        </NavLink>
      </div>
      {/* Mobile Menu */}
      <div
        className="md:hidden cursor-pointer text-2xl text-slate-900"
        onClick={() => setMenuToggle(!menuToggle)}
      >
         <IoMdMenu />
        {menuToggle && (
          <div className="md:hidden fixed left-0 top-0 bg-[#F9F1F0] w-screen h-screen flex flex-col justify-center items-center gap-12 z-50">
            <MdRestaurantMenu className='text-3xl text-slate-800' />
            {navMenu.map((menu) => (
              <MobileMenu key={menu.id} {...menu} />
            ))}
          </div>
        )}
      </div>
      {/* Large Device Menu */}
      <div className="md:flex gap-4 hidden">
        {navMenu.map((menu) => (
          <NavMenu key={menu.id} {...menu} />
        ))}
      </div>
      {/* Cart Section */}
      <div>
        <div className="flex relative text-2xl text-slate-800" onClick={() => setCartToggle(!cartToggle)}>
          <FaCartArrowDown />
          <span className="absolute text-base text-white bg-red-500/40 ml-5 -mt-3 rounded-full w-6 h-6 flex justify-center items-center">
            {totalQty}
          </span>
        </div>

        <div className="fixed top-0 right-0">
          {cartToggle && <Cart cartToggle={cartToggle} setCartToggle={setCartToggle} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
