import React from "react";
import "./Hero.css";

const Hero = ({ title, subtitle }) => {
    
  return (
    <div className="hero">
      {title && <h1>{title}</h1>}
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};

export default Hero;
