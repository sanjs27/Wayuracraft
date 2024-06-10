import React from 'react';
const Productos = () => {
  return (
    <div>
     
      <h2>Productos</h2>
      {/* Aquí puedes agregar una lista de productos */}
      <div className="products-list">
        {/* Ejemplo de producto */}
        <div className="product">
          <img src="/path-to-product-image.jpg" alt="Producto" />
          <h3>Nombre del Producto</h3>
          <p>Descripción del Producto</p>
          <p>Precio</p>
        </div>
      </div>
    </div>
  );
};

export default Productos;
