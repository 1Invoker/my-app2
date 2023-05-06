import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  const { name, image, description, price } = product;

  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">{price} руб.</p>
        <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default Product;
