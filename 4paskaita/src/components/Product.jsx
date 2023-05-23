import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "./Product.css"

const Product = ({
  image,
  title,
  price,
  description,
  availability,
  category,
}) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-container">
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="info-container">
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{description}</p>
        <p>{availability}</p>
        <div className="quantity-container">
          <button onClick={decreaseQuantity}>-</button>
          <p>Quantity: {quantity}</p>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <Button title="Add to Cart" variant="contained" />
        <p>{category}</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  availability: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Product;
