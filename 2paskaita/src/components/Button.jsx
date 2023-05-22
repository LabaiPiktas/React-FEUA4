import React from "react";
import "./Button.css"; 

const Button = ({ title, variant }) => {
  const getButtonClassName = () => {
    switch (variant) {
      case "text":
        return "button-text";
      case "contained":
        return "button-contained";
      case "outlined":
        return "button-outlined";
      default:
        return "";
    }
  };

  return (
    <div className="getButton">
    <button className={`button ${getButtonClassName()}`}>
      {title}
    </button>
    </div>
  );
};

export default Button;
