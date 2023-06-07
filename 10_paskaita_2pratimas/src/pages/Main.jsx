import React from "react";
import "./Main.css";
import HeroImage from "./img/logo.jpg";

const Main = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <div className="hero">
        <img src={HeroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default Main;
