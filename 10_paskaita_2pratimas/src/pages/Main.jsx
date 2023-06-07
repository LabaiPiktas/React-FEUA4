import React from "react";
import "./Main.css";
import HeroImage from "./img/rhondak.jpg";

const Main = () => {
  return (
    <div>
      <div className="hero">
        <img src={HeroImage} alt="Hero" />
        <h1 className="hero-text">Main Page</h1>
      </div>
    </div>
  );
};

export default Main;
