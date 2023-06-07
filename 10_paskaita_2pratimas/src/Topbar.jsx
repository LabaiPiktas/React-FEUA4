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
      <Link to="/page1">Page 1</Link>
      <Link to="/page2">Page 2</Link>
      <Link to="/page3">Page 3</Link>
    </div>
  );
};

export default Topbar;
