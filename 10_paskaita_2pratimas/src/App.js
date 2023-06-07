import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Main from "./pages/Main";
import Users from "./pages/Users";
import User from "./pages/User";
import { UserContext } from "./UserContext";

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

const Footer = () => {
  return <div className="footer">Footer</div>;
};

const App = () => {
  const userContextValue = "Some value";

  return (
    <UserContext.Provider value={userContextValue}>
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
};

export default App;
