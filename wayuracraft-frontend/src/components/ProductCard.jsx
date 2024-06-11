import React from 'react';
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imagen} alt={product.nombre} className="product-image" />
      <h3 className="product-name">{product.nombre}</h3>
      <p className="product-description">{product.descripcion}</p>
      <p className="product-price">${product.precio}</p>
    </div>
  );
};

export default ProductCard;
