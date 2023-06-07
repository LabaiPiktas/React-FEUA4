import React from "react";
import { NavLink } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar">
      <NavLink exact to="/" activeClassName="active">
        Main
      </NavLink>
      <NavLink to="/users" activeClassName="active">
        Users
      </NavLink>
    </div>
  );
};

export default Topbar;
