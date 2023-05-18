import React from "react";
import  PropTypes  from "prop-types";

const Product = ({ category, name, price }) => {
    return (
      <div className="product">
        <h3>{category}</h3>
        <h4>{name}</h4>
        <p>{price} €</p>
      </div>
    );
  }
  
Product.prototype = {
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};

  export default Product;