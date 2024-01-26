import React from "react";
import { NavLink } from "react-router-dom";

function NavMenu({ id, title, link, icon }) {
  // const {id, title, link, icon} =menu;
  return (
    <div>
      <NavLink to={link}>
        <p className="text-xl flex items-center gap-2">
          {icon}
          {title}
        </p>
      </NavLink>
    </div>
  );
}

export default NavMenu;
