import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="topbar">
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/users" activeClassName="active">
        Users
      </NavLink>
      
    </div>
  );
};

export default Topbar;
