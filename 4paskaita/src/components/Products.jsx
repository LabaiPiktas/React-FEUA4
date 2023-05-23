import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const Products = ({ products }) => {
  return (
    <div>
      <h1>Best Sellers</h1>
      <h2>Products</h2>
      {products.map((product, index) => (
        <Product
          key={index}
          image={product.image}
          title={product.title}
          price={product.price}
          description={product.description}
          availability={product.availability}
          category={product.category}
        />
      ))}
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      availability: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Products;
