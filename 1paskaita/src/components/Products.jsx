import React from "react";
import Product from "./Product";
import "./Products.css";

const Products = () => {
  return (
    <div className="container">
      <div><h1>Best Sellers</h1></div>
      <h2>Products</h2>
      <div className="product-list">
      <Product category="Canvases" name="SOFF-WHITE AIR JORDAN 1 CANVAS" price="32.00-120.00" />
      <Product category="Posters" name="YEEZY BOOST 350 V2 FROZEN YELLLOW POSTER" price="16.00-32.00" />
      <Product category="Stickers" name="YEEZY 350 V2 ZEBRA STICKER" price="5.00" />
      <Product category="Adidas" name="ADIDAS YEEZY POWERPHASE CALABASAS POSTER" price="16.00-32.00" />
    </div>
    </div>
  );
}



export default Products;
