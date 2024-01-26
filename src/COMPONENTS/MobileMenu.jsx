import React from "react";
import { NavLink } from "react-router-dom";


const MobileMenu = ({ id, title, link, icon }) => {
  return (
    <div>
      <NavLink to={link}>
        <p className="text-2xl text-slate-800 flex items-center gap-2">
          <span className="text-[#ff748b]">{icon}</span>
          {title}
        </p>
      </NavLink>
    </div>
  );
};

export default MobileMenu;
